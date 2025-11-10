"use client"

import { useState } from "react"
import CodeBlock from "./code-block"

interface Topic {
  id: string
  title: string
  explanation: string
  correct: string
  incorrect: string
  bestPractice: string
  preview?: "html" | "css" | "combined"
  htmlCode?: string
  cssCode?: string
}

interface TopicSectionProps {
  topic: Topic
  index: number
}

export default function TopicSection({ topic, index }: TopicSectionProps) {
  const [expanded, setExpanded] = useState(index === 0)

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 flex items-center justify-between transition-colors"
      >
        <h2 className="text-xl font-bold text-black text-left">{topic.title}</h2>
        <span className={`text-2xl transition-transform ${expanded ? "rotate-180" : ""}`}>▼</span>
      </button>

      {expanded && (
        <div className="px-6 py-6 space-y-6 bg-white">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">📖 Объяснение</h3>
            <p className="text-gray-700 leading-relaxed">{topic.explanation}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-green-700 mb-3">✅ Правильно</h3>
              <CodeBlock
                code={topic.correct}
                isCorrect
                htmlCode={topic.htmlCode}
                cssCode={topic.cssCode}
                preview={topic.preview}
              />
            </div>
            <div>
              <h3 className="font-semibold text-red-700 mb-3">❌ Неправильно</h3>
              <CodeBlock code={topic.incorrect} isCorrect={false} />
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-semibold text-blue-900 mb-2">💡 Лучшие практики</h3>
            <p className="text-blue-800">{topic.bestPractice}</p>
          </div>
        </div>
      )}
    </div>
  )
}
