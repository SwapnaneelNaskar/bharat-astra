import com.sun.net.httpserver.HttpServer;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpExchange;
import java.io.IOException;
import java.io.OutputStream;
import java.io.File;
import java.nio.file.Files;
import java.net.InetSocketAddress;

/**
 * BharatCart Java Backend Web Service
 * Run with: java BackendServer.java
 */
public class BackendServer {
    public static void main(String[] args) throws IOException {
        int port = 8080;
        HttpServer server = HttpServer.create(new InetSocketAddress(port), 0);
        server.createContext("/", new StaticHandler());
        server.setExecutor(null);

        System.out.println("=================================================================");
        System.out.println("⚡ BharatCart Java Backend Web Service Running on Port " + port);
        System.out.println("➜ Local URL: http://localhost:" + port);
        System.out.println("➜ Customer: Swapnaneel Naskar (Registered Profile)");
        System.out.println("➜ Catalog:  20,480 SKUs Architecture & FitVerse Sizing Engine");
        System.out.println("=================================================================");
        System.out.println("Press Ctrl+C to stop the Java server.\n");

        server.start();
    }

    static class StaticHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            String path = exchange.getRequestURI().getPath();
            if (path == null || path.equals("/") || path.isEmpty()) {
                path = "/index.html";
            }

            File file = new File("." + path);
            if (!file.exists() || file.isDirectory()) {
                file = new File("./index.html");
            }

            byte[] bytes = Files.readAllBytes(file.toPath());
            String mime = "text/html; charset=utf-8";
            if (path.endsWith(".css")) mime = "text/css; charset=utf-8";
            else if (path.endsWith(".js")) mime = "application/javascript; charset=utf-8";
            else if (path.endsWith(".json")) mime = "application/json; charset=utf-8";
            else if (path.endsWith(".png")) mime = "image/png";
            else if (path.endsWith(".jpg") || path.endsWith(".jpeg")) mime = "image/jpeg";
            else if (path.endsWith(".svg")) mime = "image/svg+xml";

            exchange.getResponseHeaders().set("Content-Type", mime);
            exchange.sendResponseHeaders(200, bytes.length);
            OutputStream os = exchange.getResponseBody();
            os.write(bytes);
            os.close();
        }
    }
}
