"use client"

interface Task {
  title: string
  description: string
}

interface HomeworkSectionProps {
  homework: {
    title: string
    description: string
    tasks: Task[]
  }
}

export default function HomeworkSection({ homework }: HomeworkSectionProps) {
  return (
    <section className="mt-16 pt-12 border-t-2 border-gray-200">
      <h2 className="text-3xl font-bold text-black mb-4">{homework.title}</h2>
      <p className="text-gray-600 mb-8">{homework.description}</p>

      <div className="space-y-4">
        {homework.tasks.map((task, index) => (
          <div key={index} className="border-l-4 border-blue-500 bg-blue-50 p-6 rounded-r-lg">
            <h3 className="text-lg font-semibold text-black mb-2">{task.title}</h3>
            <p className="text-gray-700">{task.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
