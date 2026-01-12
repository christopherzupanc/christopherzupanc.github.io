import { serve } from "bun";
import index from "./index.html";
import { join } from "path";

const server = serve({
  routes: {
    // Serve static assets
    "/assets/*": async (req) => {
      const url = new URL(req.url);
      const path = url.pathname.replace(/^\/assets\//, "");
      const filePath = join(process.cwd(), "assets", path);

      try {
        const file = Bun.file(filePath);
        const exists = await file.exists();

        if (!exists) {
          return new Response("File not found", { status: 404 });
        }

        const fileSize = file.size;
        const headers = new Headers();

        // Set content type
        if (path.endsWith('.jpg') || path.endsWith('.JPG')) {
          headers.set('Content-Type', 'image/jpeg');
        } else if (path.endsWith('.png')) {
          headers.set('Content-Type', 'image/png');
        } else if (path.endsWith('.webp')) {
          headers.set('Content-Type', 'image/webp');
        } else if (path.endsWith('.mp4')) {
          headers.set('Content-Type', 'video/mp4');
        }

        // Handle Range requests for video seeking
        const rangeHeader = req.headers.get('Range');
        if (rangeHeader) {
          const match = rangeHeader.match(/bytes=(\d+)-(\d*)/);
          if (match) {
            const start = parseInt(match[1], 10);
            const end = match[2] ? parseInt(match[2], 10) : fileSize - 1;
            const chunkSize = end - start + 1;

            headers.set('Content-Range', `bytes ${start}-${end}/${fileSize}`);
            headers.set('Accept-Ranges', 'bytes');
            headers.set('Content-Length', String(chunkSize));

            const slice = file.slice(start, end + 1);
            return new Response(slice, { headers, status: 206 });
          }
        }

        // Full file response
        headers.set('Accept-Ranges', 'bytes');
        headers.set('Content-Length', String(fileSize));
        return new Response(file, { headers, status: 200 });
      } catch (error) {
        console.error('Error serving file:', error);
        return new Response("Internal Server Error", { status: 500 });
      }
    },

    // Serve index.html for all unmatched routes.
    "/*": index,

    "/api/hello": {
      async GET(req) {
        return Response.json({
          message: "Hello, world!",
          method: "GET",
        });
      },
      async PUT(req) {
        return Response.json({
          message: "Hello, world!",
          method: "PUT",
        });
      },
    },

    "/api/hello/:name": async (req) => {
      const name = req.params.name;
      return Response.json({
        message: `Hello, ${name}!`,
      });
    },
  },

  development: process.env.NODE_ENV !== "production",
});

console.log(`🚀 Server running at ${server.url}`);
