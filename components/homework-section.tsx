"use client"

import anime from "animejs"
import { useAnimeReveal } from "@/hooks/use-anime-reveal"
import styles from "./HomeworkSection.module.css"

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
  const sectionRef = useAnimeReveal<HTMLElement>({
    animation: {
      translateY: [60, 0],
      opacity: [0, 1],
      duration: 820,
      easing: "easeOutExpo",
    },
  })

  const listRef = useAnimeReveal<HTMLDivElement>({
    animation: (element) => ({
      targets: element.querySelectorAll("article"),
      opacity: [0, 1],
      translateY: [28, 0],
      duration: 680,
      delay: anime.stagger(140, { start: 120 }),
      easing: "easeOutCubic",
    }),
  })

  return (
    <section className={styles.section} ref={sectionRef}>
      <h2>{homework.title}</h2>
      <p>{homework.description}</p>

      <div className={styles.list} ref={listRef}>
        {homework.tasks.map((task, index) => (
          <article key={index} className={styles.task}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
