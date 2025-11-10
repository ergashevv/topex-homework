"use client"

interface CombinedExampleProps {
  language: "ru" | "uz"
}

export default function CombinedExample({ language }: CombinedExampleProps) {
  const isRussian = language === "ru"

  return (
    <section className="mt-16 pt-12 border-t-2 border-gray-200">
      <h2 className="text-3xl font-bold text-black mb-8">{isRussian ? "🎯 Полный пример" : "🎯 To'liq misol"}</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-black mb-4">HTML</h3>
          <pre className="bg-gray-900 text-green-400 rounded-lg p-4 overflow-x-auto font-mono text-sm">
            {`<div class="card">
  <h2>Профиль</h2>
  <p>Добро пожаловать!</p>
  <a href="#profile">
    Подробнее
  </a>
</div>`}
          </pre>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-black mb-4">CSS</h3>
          <pre className="bg-gray-900 text-green-400 rounded-lg p-4 overflow-x-auto font-mono text-sm">
            {`.card {
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.card a {
  margin-top: 10px;
}`}
          </pre>
        </div>
      </div>

      <div className="mt-8 p-8 border-2 border-blue-300 bg-blue-50 rounded-lg">
        <h3 className="text-lg font-semibold text-blue-900 mb-4">{isRussian ? "📺 Результат" : "📺 Natija"}</h3>
        <div className="card bg-white border border-gray-300 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold text-black mb-2">Профиль</h2>
          <p className="text-gray-700 mb-4">Добро пожаловать!</p>
          <a href="#profile" className="text-blue-500 hover:text-blue-700 font-medium">
            {isRussian ? "Подробнее" : "Batafsil"}
          </a>
        </div>
      </div>
    </section>
  )
}
