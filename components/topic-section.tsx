"use client"

import clsx from "clsx"
import anime from "animejs"
import { useEffect, useRef, useState } from "react"
import { useAnimeReveal } from "@/hooks/use-anime-reveal"
import CodeBlock from "./code-block"
import TopicGame, { TopicGameContent } from "./topic-game"
import styles from "./TopicSection.module.css"

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
  game?: TopicGameContent
}

export default function TopicSection({ topic, index, game }: TopicSectionProps) {
  const [expanded, setExpanded] = useState(index === 0)
  const sectionRef = useAnimeReveal<HTMLElement>({
    animation: {
      translateY: [40, 0],
      opacity: [0, 1],
      duration: 820,
      easing: "easeOutExpo",
    },
  })

  const contentRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!expanded || !contentRef.current) return

    const container = contentRef.current
    const animatedChildren = container.querySelectorAll<HTMLElement>("[data-anim-child]")

    anime.remove([container, animatedChildren])

    anime({
      targets: container,
      opacity: [0, 1],
      translateY: [12, 0],
      duration: 520,
      easing: "easeOutQuad",
    })

    anime({
      targets: animatedChildren,
      opacity: [0, 1],
      translateY: [24, 0],
      duration: 640,
      delay: anime.stagger(90, { start: 80 }),
      easing: "easeOutCubic",
    })
  }, [expanded])

  return (
    <section className={styles.section} ref={sectionRef}>
      <button
        className={styles.toggle}
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        aria-expanded={expanded}
        aria-controls={`${topic.id}-content`}
      >
        <div className={styles.titleGroup}>
          <h2 className={styles.title}>{topic.title}</h2>
          <p className={styles.subtitle}>Нажмите, чтобы {expanded ? "свернуть" : "раскрыть"} карточку</p>
        </div>
        <span className={clsx(styles.chevron, expanded && styles.chevronOpen)}>▼</span>
      </button>

      {expanded && (
        <div className={styles.content} id={`${topic.id}-content`} ref={contentRef}>
          <div className={styles.explanation} data-anim-child>
            <h3>📖 Объяснение</h3>
            <p>{topic.explanation}</p>
          </div>

          <div className={styles.columns}>
            <div className={clsx(styles.panel, styles.correct)} data-anim-child>
              <h3>✅ Правильно</h3>
              <CodeBlock
                code={topic.correct}
                isCorrect
                htmlCode={topic.htmlCode}
                cssCode={topic.cssCode}
                preview={topic.preview}
              />
            </div>
            <div className={clsx(styles.panel, styles.incorrect)} data-anim-child>
              <h3>❌ Неправильно</h3>
              <CodeBlock code={topic.incorrect} isCorrect={false} />
            </div>
          </div>

          <div className={styles.bestPractice} data-anim-child>
            <h3>💡 Лучшие практики</h3>
            <p>{topic.bestPractice}</p>
          </div>

          {game && <TopicGame game={game} />}
        </div>
      )}
    </section>
  )
}

