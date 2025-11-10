"use client"

import { useAnimeReveal } from "@/hooks/use-anime-reveal"
import styles from "./CombinedExample.module.css"

interface CombinedExampleProps {
  language: "ru" | "uz"
}

export default function CombinedExample({ language }: CombinedExampleProps) {
  const isRussian = language === "ru"
  const sectionRef = useAnimeReveal<HTMLElement>({
    animation: {
      opacity: [0, 1],
      translateY: [60, 0],
      duration: 820,
      easing: "easeOutExpo",
    },
  })

  const htmlCardRef = useAnimeReveal<HTMLDivElement>({
    animation: {
      opacity: [0, 1],
      translateY: [36, 0],
      duration: 720,
      delay: 100,
      easing: "easeOutExpo",
    },
  })

  const cssCardRef = useAnimeReveal<HTMLDivElement>({
    animation: {
      opacity: [0, 1],
      translateY: [36, 0],
      duration: 720,
      delay: 200,
      easing: "easeOutExpo",
    },
  })

  const previewRef = useAnimeReveal<HTMLDivElement>({
    animation: {
      scale: [0.95, 1],
      opacity: [0, 1],
      duration: 760,
      delay: 260,
      easing: "easeOutBack",
    },
  })

  return (
    <section className={styles.section} ref={sectionRef}>
      <h2 className={styles.heading}>{isRussian ? "🎯 Полный пример" : "🎯 To'liq misol"}</h2>

      <div className={styles.grid}>
        <div className={styles.codeCard} ref={htmlCardRef}>
          <h3>HTML</h3>
          <pre>{`<div class="card">
  <h2>Профиль</h2>
  <p>Добро пожаловать!</p>
  <a href="#profile">
    Подробнее
  </a>
</div>`}</pre>
        </div>

        <div className={styles.codeCard} ref={cssCardRef}>
          <h3>CSS</h3>
          <pre>{`.card {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 28px;
  border-radius: 24px;
  background: #ffffff;
  border: 1px solid rgba(148, 163, 184, 0.25);
  box-shadow: 0 30px 60px -40px rgba(15, 23, 42, 0.55);
}

.card a {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #2563eb;
  font-weight: 600;
  text-decoration: none;
}

.card a:hover {
  color: #1e3a8a;
}`}</pre>
        </div>
      </div>

      <div className={styles.preview} ref={previewRef}>
        <h3>{isRussian ? "📺 Результат" : "📺 Natija"}</h3>
        <div className={styles.card}>
          <h2>{isRussian ? "Профиль" : "Profil"}</h2>
          <p>{isRussian ? "Добро пожаловать!" : "Xush kelibsiz!"}</p>
          <a href="#profile">{isRussian ? "Подробнее" : "Batafsil"}</a>
        </div>
      </div>
    </section>
  )
}
