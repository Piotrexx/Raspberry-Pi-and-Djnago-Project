import http.server
import socketserver
from readTemp import readTemp
PORT = 8000
Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print("PORT: ", PORT)
    readTemp()
    httpd.serve_forever()