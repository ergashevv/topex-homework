"use client"

import clsx from "clsx"
import anime from "animejs"
import { useEffect, useMemo, useRef, useState } from "react"
import styles from "./GameSection.module.css"

interface GameSectionProps {
  language: "ru" | "uz"
}

type StatusState = "idle" | "correct" | "incorrect"

const flexOptions = [
  {
    id: "start",
    config: { justifyContent: "flex-start", gap: "0px" },
    label: {
      ru: "justify-content: flex-start; gap: 0px;",
      uz: "justify-content: flex-start; gap: 0px;",
    },
  },
  {
    id: "center",
    config: { justifyContent: "center", gap: "20px" },
    isCorrect: true,
    label: {
      ru: "justify-content: center; gap: 20px;",
      uz: "justify-content: center; gap: 20px;",
    },
  },
  {
    id: "space-between",
    config: { justifyContent: "space-between", gap: "0px" },
    label: {
      ru: "justify-content: space-between; gap: 0px;",
      uz: "justify-content: space-between; gap: 0px;",
    },
  },
] as const

const stackOptions = [
  {
    id: "descending",
    order: { item1: 0, item2: 1, item3: 2 },
    label: {
      ru: ".item1 { z-index: 3; }\n.item2 { z-index: 2; }\n.item3 { z-index: 1; }",
      uz: ".item1 { z-index: 3; }\n.item2 { z-index: 2; }\n.item3 { z-index: 1; }",
    },
  },
  {
    id: "correct",
    order: { item1: 2, item2: 1, item3: 0 },
    isCorrect: true,
    label: {
      ru: ".item1 { z-index: 1; }\n.item2 { z-index: 2; }\n.item3 { z-index: 3; }",
      uz: ".item1 { z-index: 1; }\n.item2 { z-index: 2; }\n.item3 { z-index: 3; }",
    },
  },
  {
    id: "mixed",
    order: { item1: 1, item2: 0, item3: 2 },
    label: {
      ru: ".item1 { z-index: 2; }\n.item2 { z-index: 3; }\n.item3 { z-index: 1; }",
      uz: ".item1 { z-index: 2; }\n.item2 { z-index: 3; }\n.item3 { z-index: 1; }",
    },
  },
] as const

const stackCards = [
  {
    id: "item3",
    colorClass: styles.stackCardGreen,
    title: { ru: "Верхний слой", uz: "Yuqori qatlam" },
    description: {
      ru: "Полупрозрачный фон модального окна.",
      uz: "Modal oynaning yarim shaffof foni.",
    },
  },
  {
    id: "item2",
    colorClass: styles.stackCardOrange,
    title: { ru: "Средний слой", uz: "O‘rta qatlam" },
    description: {
      ru: "Основной блок контента, который должен быть над фоном.",
      uz: "Asosiy kontent bloki fon ustida bo‘lishi kerak.",
    },
  },
  {
    id: "item1",
    colorClass: styles.stackCardPink,
    title: { ru: "Нижний слой", uz: "Pastki qatlam" },
    description: {
      ru: "Основная страница за модальным окном.",
      uz: "Modal ostidagi asosiy sahifa.",
    },
  },
] as const

const translateMap = [-34, -12, 10]
const scaleMap = [1.02, 1, 0.96]

const copy = {
  ru: {
    title: "🎮 Игровая практика",
    subtitle: "Освойте темы на деле: попробуйте мини-игры и закрепите навыки анимацией.",
    flexTitle: "Игра 1. Flexbox-выравнивание",
    flexPrompt: "Выберите набор свойств, который выровняет блоки по центру и сохранит одинаковые промежутки.",
    flexStatus: {
      idle: "Выберите один из вариантов.",
      correct: "Отлично! Именно такой набор даёт аккуратный ряд.",
      incorrect: "Не совсем. Подумайте про выравнивание относительно общей оси.",
    },
    stackTitle: "Игра 2. Z-index башня",
    stackPrompt:
      "Подберите z-index так, чтобы модальное окно оказалось поверх затемнения, а фон остался внизу.",
    stackLegend: "Подсказка: меньший z-index — ниже, больший — выше.",
    stackStatus: {
      idle: "Выберите вариант кода.",
      correct: "Верно! Элементы выстроены по слоям.",
      incorrect: "Попробуйте ещё: представьте, в каком порядке должны появляться слои.",
    },
  },
  uz: {
    title: "🎮 O‘yin orqali mashq",
    subtitle: "Mavzularni amalda sinab ko‘ring: mini o‘yinlar yordamida animatsiya bilan mustahkamlang.",
    flexTitle: "1-o‘yin. Flexbox joylashuvi",
    flexPrompt:
      "Elementlarni markazga tekislab, teng bo‘shliqlar beradigan xossalar to‘plamini tanlang.",
    flexStatus: {
      idle: "Variantlardan birini tanlang.",
      correct: "Zo‘r! Aynan shu yozuv tartibli qator hosil qiladi.",
      incorrect: "Biroz yanglish. Umumiy o‘qdagi tekislashni o‘ylab ko‘ring.",
    },
    stackTitle: "2-o‘yin. Z-index minorasi",
    stackPrompt:
      "Modal oynani eng yuqoriga, yarim shaffof fonni o‘rtaga, asosiy sahifani pastga tushiring.",
    stackLegend: "Eslatma: z-index qancha katta bo‘lsa, qatlam shuncha yuqori turadi.",
    stackStatus: {
      idle: "Kod variantini tanlang.",
      correct: "To‘g‘ri! Qatlamlar kerakli tartibda joylashdi.",
      incorrect: "Yana urinib ko‘ring: qaysi qismlar ko‘rinib turishi kerakligini o‘ylang.",
    },
  },
}

export default function GameSection({ language }: GameSectionProps) {
  const t = copy[language]
  const [flexSelection, setFlexSelection] = useState<string | null>(null)
  const [stackSelection, setStackSelection] = useState<string | null>(null)

  const flexOption = useMemo(
    () => flexOptions.find((option) => option.id === flexSelection),
    [flexSelection],
  )
  const flexStatus: StatusState = !flexSelection
    ? "idle"
    : flexOption?.isCorrect
      ? "correct"
      : "incorrect"

  const stackOption = useMemo(
    () => stackOptions.find((option) => option.id === stackSelection),
    [stackSelection],
  )
  const stackStatus: StatusState = !stackSelection
    ? "idle"
    : stackOption?.isCorrect
      ? "correct"
      : "incorrect"

  const flexItemsRef = useRef<HTMLDivElement | null>(null)
  const stackSceneRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!flexSelection || !flexItemsRef.current) return
    const items = flexItemsRef.current.querySelectorAll<HTMLElement>(`.${styles.flexItem}`)
    anime.remove(items)
    anime({
      targets: items,
      translateY: [-20, 0],
      opacity: [0, 1],
      delay: anime.stagger(120),
      duration: 520,
      easing: "easeOutExpo",
    })

    if (flexStatus === "correct") {
      anime({
        targets: flexItemsRef.current,
        backgroundColor: ["rgba(79,70,229,0.08)", "rgba(16,185,129,0.12)"],
        direction: "alternate",
        duration: 420,
        easing: "easeInOutQuad",
      })
    }
  }, [flexSelection, flexStatus])

  useEffect(() => {
    const scene = stackSceneRef.current
    if (!scene) return
    const nodes = Array.from(scene.querySelectorAll<HTMLElement>(`.${styles.stackCard}`))
    const order = stackOption?.order ?? { item1: 2, item2: 1, item3: 0 }

    nodes.forEach((el) => {
      const id = el.dataset.cardId as keyof typeof order
      const position = order[id] ?? 1
      el.dataset.position = String(position)
      el.style.zIndex = String(100 - position)
    })

    anime.remove(nodes)
    anime({
      targets: nodes,
      translateY: (el) => {
        const position = Number((el as HTMLElement).dataset.position ?? 1)
        return translateMap[position] ?? -12
      },
      scale: (el) => {
        const position = Number((el as HTMLElement).dataset.position ?? 1)
        return scaleMap[position] ?? 1
      },
      easing: "easeOutExpo",
      duration: 620,
      delay: anime.stagger(120),
    })

    if (stackStatus === "correct") {
      anime({
        targets: scene,
        boxShadow: ["0 0 0 rgba(16,185,129,0)", "0 14px 28px -24px rgba(16,185,129,0.55)"],
        direction: "alternate",
        duration: 520,
        easing: "easeInOutSine",
      })
    }
  }, [stackSelection, stackStatus, stackOption])

  const flexStyle = flexOption?.config ?? { justifyContent: "flex-start", gap: "8px" }
  const flexColors = ["#6366f1", "#8b5cf6", "#a855f7"]

  return (
    <section className={styles.section} id="games">
      <div className={styles.header}>
        <h2>{t.title}</h2>
        <p>{t.subtitle}</p>
      </div>

      <div className={styles.gamesGrid}>
        <article className={styles.gameCard}>
          <header className={styles.gameHeader}>
            <span className={clsx(styles.icon, styles.iconFlex)}>⚙️</span>
            <h3>{t.flexTitle}</h3>
          </header>
          <p className={styles.prompt}>{t.flexPrompt}</p>
          <div className={styles.flexStage} style={flexStyle} ref={flexItemsRef}>
            {flexColors.map((color, index) => (
              <div
                key={color}
                className={styles.flexItem}
                style={{ background: color }}
              >
                {language === "ru" ? `Блок ${index + 1}` : `Blok ${index + 1}`}
              </div>
            ))}
          </div>

          <div className={styles.optionList}>
            {flexOptions.map((option) => {
              const isSelected = flexSelection === option.id
              const stateClass =
                flexStatus === "correct" && option.isCorrect
                  ? styles.optionButtonCorrect
                  : flexStatus === "incorrect" && isSelected
                    ? styles.optionButtonIncorrect
                    : isSelected
                      ? styles.optionButtonSelected
                      : undefined

              return (
                <button
                  key={option.id}
                  type="button"
                  className={clsx(styles.optionButton, stateClass)}
                  onClick={() => setFlexSelection(option.id)}
                >
                  <code>{option.label[language]}</code>
                </button>
              )
            })}
          </div>

          <div
            className={clsx(
              styles.status,
              flexStatus === "idle"
                ? styles.statusIdle
                : flexStatus === "correct"
                  ? styles.statusCorrect
                  : styles.statusIncorrect,
            )}
          >
            {flexStatus === "idle"
              ? t.flexStatus.idle
              : flexStatus === "correct"
                ? t.flexStatus.correct
                : t.flexStatus.incorrect}
          </div>
        </article>

        <article className={styles.gameCard}>
          <header className={styles.gameHeader}>
            <span className={clsx(styles.icon, styles.iconStack)}>🗂️</span>
            <h3>{t.stackTitle}</h3>
          </header>
          <p className={styles.prompt}>{t.stackPrompt}</p>
          <div className={styles.stackStage} ref={stackSceneRef}>
            <div className={styles.stackScene}>
              {stackCards.map((card) => (
                <div
                  key={card.id}
                  className={clsx(styles.stackCard, card.colorClass)}
                  data-card-id={card.id}
                >
                  <h4>{card.title[language]}</h4>
                  <p>{card.description[language]}</p>
                </div>
              ))}
            </div>
            <span className={styles.stackLegend}>{t.stackLegend}</span>
          </div>

          <div className={styles.optionList}>
            {stackOptions.map((option) => {
              const isSelected = stackSelection === option.id
              const stateClass =
                stackStatus === "correct" && option.isCorrect
                  ? styles.optionButtonCorrect
                  : stackStatus === "incorrect" && isSelected
                    ? styles.optionButtonIncorrect
                    : isSelected
                      ? styles.optionButtonSelected
                      : undefined

              return (
                <button
                  key={option.id}
                  type="button"
                  className={clsx(styles.optionButton, stateClass)}
                  onClick={() => setStackSelection(option.id)}
                >
                  <code>{option.label[language]}</code>
                </button>
              )
            })}
          </div>

          <div
            className={clsx(
              styles.status,
              stackStatus === "idle"
                ? styles.statusIdle
                : stackStatus === "correct"
                  ? styles.statusCorrect
                  : styles.statusIncorrect,
            )}
          >
            {stackStatus === "idle"
              ? t.stackStatus.idle
              : stackStatus === "correct"
                ? t.stackStatus.correct
                : t.stackStatus.incorrect}
          </div>
        </article>
      </div>
    </section>
  )
}

