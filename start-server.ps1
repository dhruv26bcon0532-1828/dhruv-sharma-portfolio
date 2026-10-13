# ==============================================================================
# Zero-Dependency Local Development HTTP Server for Dhruv Sharma's Portfolio
# Runs instantly in Windows PowerShell without requiring Node.js or Python!
# ==============================================================================

$port = 8080
$prefix = "http://localhost:$port/"
$baseDir = $PSScriptRoot

if (-not $baseDir) {
    $baseDir = (Get-Location).Path
}

Write-Host "===========================================================" -ForegroundColor Cyan
Write-Host "  Dhruv Sharma - Portfolio Local Development Server" -ForegroundColor White
Write-Host "===========================================================" -ForegroundColor Cyan
Write-Host "Serving directory: $baseDir" -ForegroundColor Gray
Write-Host "Listening at:      $prefix" -ForegroundColor Green
Write-Host "Press Ctrl+C in this console window to stop the server." -ForegroundColor Yellow
Write-Host "-----------------------------------------------------------" -ForegroundColor DarkGray

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($prefix)

try {
    $listener.Start()
} catch {
    Write-Warning "Port $port might be in use or requires elevation. Trying port 8081..."
    $port = 8081
    $prefix = "http://localhost:$port/"
    $listener = New-Object System.Net.HttpListener
    $listener.Prefixes.Add($prefix)
    $listener.Start()
}

# Open the default web browser automatically
Start-Process $prefix

$mimeTypes = @{
    ".html" = "text/html; charset=utf-8"
    ".htm"  = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".json" = "application/json; charset=utf-8"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".svg"  = "image/svg+xml"
    ".ico"  = "image/x-icon"
    ".pdf"  = "application/pdf"
    ".txt"  = "text/plain; charset=utf-8"
}

try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $urlPath = $request.Url.LocalPath.TrimStart('/')
        if ([string]::IsNullOrWhiteSpace($urlPath)) {
            $urlPath = "index.html"
        }

        # Normalize path separators for Windows
        $localFile = Join-Path $baseDir ($urlPath -replace '/', '\')

        if (Test-Path $localFile -PathType Leaf) {
            $ext = [System.IO.Path]::GetExtension($localFile).ToLower()
            $contentType = if ($mimeTypes.ContainsKey($ext)) { $mimeTypes[$ext] } else { "application/octet-stream" }

            $bytes = [System.IO.File]::ReadAllBytes($localFile)
            $response.ContentType = $contentType
            $response.ContentLength64 = $bytes.Length
            $response.StatusCode = 200
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $notFoundMsg = [System.Text.Encoding]::UTF8.GetBytes("<h1>404 - File Not Found</h1><p>$urlPath</p>")
            $response.StatusCode = 404
            $response.ContentType = "text/html; charset=utf-8"
            $response.ContentLength64 = $notFoundMsg.Length
            $response.OutputStream.Write($notFoundMsg, 0, $notFoundMsg.Length)
        }

        $response.Close()
    }
} finally {
    $listener.Stop()
    $listener.Close()
}
