"use client"

import clsx from "clsx"
import { useAnimeReveal } from "@/hooks/use-anime-reveal"
import styles from "./Header.module.css"

interface HeaderProps {
  language: "ru" | "uz"
  setLanguage: (lang: "ru" | "uz") => void
}

export default function Header({ language, setLanguage }: HeaderProps) {
  const headerRef = useAnimeReveal<HTMLElement>({
    trigger: "immediate",
    animation: {
      translateY: [-24, 0],
      opacity: [0, 1],
      duration: 720,
      easing: "easeOutExpo",
    },
  })

  const brandRef = useAnimeReveal<HTMLDivElement>({
    trigger: "immediate",
    animation: {
      translateX: [-32, 0],
      opacity: [0, 1],
      duration: 680,
      delay: 120,
      easing: "easeOutExpo",
    },
  })

  const switcherRef = useAnimeReveal<HTMLDivElement>({
    trigger: "immediate",
    animation: {
      translateX: [32, 0],
      opacity: [0, 1],
      duration: 680,
      delay: 220,
      easing: "easeOutExpo",
    },
  })

  return (
    <header className={styles.header} ref={headerRef}>
      <div className={styles.inner}>
        <div className={styles.brand} ref={brandRef}>
          <span className={styles.brandIcon}>📚</span>
          <span className={styles.brandTitle}>Веб-Урок</span>
        </div>

        <div
          className={styles.languageSwitch}
          ref={switcherRef}
          role="group"
          aria-label="Language switcher"
        >
          <button
            onClick={() => setLanguage("ru")}
            className={clsx(styles.languageButton, language === "ru" && styles.languageButtonActive)}
            type="button"
          >
            Русский
          </button>
          <button
            onClick={() => setLanguage("uz")}
            className={clsx(styles.languageButton, language === "uz" && styles.languageButtonActive)}
            type="button"
          >
            O&apos;zbekcha
          </button>
        </div>
      </div>
    </header>
  )
}
