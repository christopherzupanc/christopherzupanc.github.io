import { serve } from "bun";
import index from "./index.html";
import { join } from "path";

const server = serve({
  routes: {
    // Serve static assets
    "/assets/*": async (req) => {
      // Extract just the filename from the URL
      const url = new URL(req.url);
      const path = url.pathname.replace(/^\/assets\//, "");
      const filePath = join(process.cwd(), "assets", path);
      
      console.log('Requested URL:', req.url);
      console.log('Extracted path:', path);
      console.log('Full file path:', filePath);
      
      try {
        const file = Bun.file(filePath);
        const exists = await file.exists();
        
        console.log('File exists:', exists);
        
        if (!exists) {
          console.log('File not found:', filePath);
          return new Response("File not found", { status: 404 });
        }

        const headers = new Headers();
        // Set appropriate content type based on file extension
        if (path.endsWith('.jpg') || path.endsWith('.JPG')) {
          headers.set('Content-Type', 'image/jpeg');
        } else if (path.endsWith('.png')) {
          headers.set('Content-Type', 'image/png');
        } else if (path.endsWith('.mp4')) {
          headers.set('Content-Type', 'video/mp4');
        }

        const fileContent = await file.arrayBuffer();
        console.log('File size:', fileContent.byteLength);
        
        return new Response(fileContent, { 
          headers,
          status: 200
        });
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
