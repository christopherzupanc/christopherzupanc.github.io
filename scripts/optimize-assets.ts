import { exec } from "child_process";
import { promisify } from "util";
import { readdir, stat } from "fs/promises";
import { join } from "path";
import sharp from "sharp";

const execAsync = promisify(exec);

const ASSETS_DIR = "assets";
const OPTIMIZED_DIR = "assets/optimized";

// Maximum dimensions for different types of media
const MAX_DIMENSIONS = {
  image: {
    width: 1200, // Max width for images
    height: 1200, // Max height for images
  },
  video: {
    width: 1280, // Max width for videos (720p)
    height: 720, // Max height for videos (720p)
  },
};

interface MediaFile {
  path: string;
  type: "image" | "video";
  size: number;
}

async function getMediaFiles(): Promise<MediaFile[]> {
  const files = await readdir(ASSETS_DIR);
  const mediaFiles: MediaFile[] = [];

  for (const file of files) {
    const path = join(ASSETS_DIR, file);
    const stats = await stat(path);

    if (stats.isFile()) {
      const ext = file.toLowerCase().split(".").pop();
      if (["jpg", "jpeg", "png", "webp"].includes(ext || "")) {
        mediaFiles.push({ path, type: "image", size: stats.size });
      } else if (["mp4", "mov", "avi"].includes(ext || "")) {
        mediaFiles.push({ path, type: "video", size: stats.size });
      }
    }
  }

  return mediaFiles;
}

async function optimizeImage(
  inputPath: string,
  outputPath: string
): Promise<void> {
  const image = sharp(inputPath);
  const metadata = await image.metadata();

  // Resize image while maintaining aspect ratio
  await image
    .resize({
      width: MAX_DIMENSIONS.image.width,
      height: MAX_DIMENSIONS.image.height,
      fit: "inside", // Maintain aspect ratio
      withoutEnlargement: true, // Don't enlarge if image is smaller
    })
    .webp({
      quality: 80,
      effort: 6,
    })
    .toFile(outputPath);

  console.log(`Optimized image: ${inputPath} -> ${outputPath}`);
}

async function optimizeVideo(
  inputPath: string,
  outputPath: string
): Promise<void> {
  // Use H.264 codec with good compression settings and resize
  const command = `ffmpeg -i "${inputPath}" -vf "scale='min(${MAX_DIMENSIONS.video.width},iw)':'min(${MAX_DIMENSIONS.video.height},ih)':force_original_aspect_ratio=decrease" -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k "${outputPath}"`;

  try {
    await execAsync(command);
    console.log(`Optimized video: ${inputPath} -> ${outputPath}`);
  } catch (error) {
    console.error(`Error optimizing video ${inputPath}:`, error);
  }
}

async function main() {
  try {
    // Create optimized directory if it doesn't exist
    await execAsync(`mkdir -p ${OPTIMIZED_DIR}`);

    const mediaFiles = await getMediaFiles();
    console.log(`Found ${mediaFiles.length} media files to optimize`);

    for (const file of mediaFiles) {
      const fileName = file.path.split("/").pop();
      const outputPath = join(
        OPTIMIZED_DIR,
        fileName?.replace(/\.[^/.]+$/, "") + ".webp"
      );

      if (file.type === "image") {
        await optimizeImage(file.path, outputPath);
      } else if (file.type === "video") {
        const videoOutputPath = outputPath.replace(".webp", ".mp4");
        await optimizeVideo(file.path, videoOutputPath);
      }
    }

    console.log("Optimization complete!");
  } catch (error) {
    console.error("Error during optimization:", error);
  }
}

main();
