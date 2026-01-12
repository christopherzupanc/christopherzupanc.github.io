import { useRef } from 'react';

interface VideoPlayerProps {
  src: string;
  poster?: string;
}

export function VideoPlayer({ src, poster }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        controls
        preload="metadata"
        className="w-full h-full"
        controlsList="nodownload"
      />
    </div>
  );
} 