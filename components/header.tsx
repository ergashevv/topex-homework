"use client"

interface HeaderProps {
  language: "ru" | "uz"
  setLanguage: (lang: "ru" | "uz") => void
}

export default function Header({ language, setLanguage }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 py-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-black">📚 Веб-Урок</h1>

        <div className="flex gap-4">
          <button
            onClick={() => setLanguage("ru")}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              language === "ru" ? "bg-blue-500 text-white" : "bg-gray-100 text-black hover:bg-gray-200"
            }`}
          >
            Русский
          </button>
          <button
            onClick={() => setLanguage("uz")}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              language === "uz" ? "bg-blue-500 text-white" : "bg-gray-100 text-black hover:bg-gray-200"
            }`}
          >
            O'zbekcha
          </button>
        </div>
      </div>
    </header>
  )
}
