"use client"

interface CodeBlockProps {
  code: string
  isCorrect: boolean
  htmlCode?: string
  cssCode?: string
  preview?: "html" | "css" | "combined"
}

export default function CodeBlock({ code, isCorrect, htmlCode, cssCode, preview }: CodeBlockProps) {
  const borderColor = isCorrect ? "border-green-300" : "border-red-300"
  const bgColor = isCorrect ? "bg-green-50" : "bg-red-50"

  const getPreviewHTML = () => {
    if (preview === "css" && cssCode) {
      return `
        <html>
          <head>
            <style>${cssCode}</style>
          </head>
          <body style="margin: 0; padding: 0;">
            <div class="container">
              <div class="item">Item 1</div>
              <div class="item">Item 2</div>
              <div class="item">Item 3</div>
            </div>
          </body>
        </html>
      `
    }
    if (preview === "combined" && htmlCode && cssCode) {
      return `
        <html>
          <head>
            <style>${cssCode}</style>
          </head>
          <body style="margin: 0; padding: 0;">${htmlCode}</body>
        </html>
      `
    }
    return null
  }

  const previewHTML = getPreviewHTML()

  return (
    <div className="space-y-3">
      {htmlCode && preview && (
        <div>
          <div className="text-xs font-semibold text-gray-600 mb-2">HTML:</div>
          <div className="bg-orange-50 border border-orange-300 rounded-lg p-4">
            <pre className="whitespace-pre-wrap break-words text-sm font-mono text-gray-800">
              <code>{htmlCode}</code>
            </pre>
          </div>
        </div>
      )}

      {cssCode && preview && (
        <div>
          <div className="text-xs font-semibold text-gray-600 mb-2">CSS:</div>
          <div className="bg-purple-50 border border-purple-300 rounded-lg p-4">
            <pre className="whitespace-pre-wrap break-words text-sm font-mono text-gray-800">
              <code>{cssCode}</code>
            </pre>
          </div>
        </div>
      )}

      {!preview && (
        <div className={`${bgColor} border ${borderColor} rounded-lg p-4`}>
          <pre className="whitespace-pre-wrap break-words text-sm font-mono text-gray-800">
            <code>{code}</code>
          </pre>
        </div>
      )}

      {previewHTML && (
        <div className="border border-gray-300 rounded-lg overflow-hidden bg-white">
          <div className="bg-gray-100 px-3 py-2 text-xs font-semibold text-gray-700">Результат / Natija:</div>
          <iframe
            srcDoc={previewHTML}
            className="w-full h-96 border-none"
            sandbox="allow-same-origin"
            title="Code preview"
          />
        </div>
      )}
    </div>
  )
}
