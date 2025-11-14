"use client"

import clsx from "clsx"
import anime from "animejs"
import { useEffect, useMemo, useState } from "react"
import Header from "@/components/header"
import TopicSection from "@/components/topic-section"
import CombinedExample from "@/components/combined-example"
import HomeworkSection from "@/components/homework-section"
import GameSection from "@/components/game-section"
import {
  courseContent,
  courseHomework,
  lessons,
  scheduleSections,
  topicGamesData,
  type LessonMeta,
  type SupportedLanguage,
} from "@/lib/course-data"
import type { TopicGameContent } from "@/components/topic-game"
import { useAnimeReveal } from "@/hooks/use-anime-reveal"
import styles from "./page.module.css"

export default function Home() {
  const [language, setLanguage] = useState<"ru" | "uz">("ru")
  const [selectedLessonSlug, setSelectedLessonSlug] = useState<string | null>(null)
  const todayISO = new Date().toISOString().slice(0, 10)

  const scheduleGroups = useMemo(() => {
    return scheduleSections
      .map((section) => {
        const localizedLessons = section.lessons
          .filter((lesson) => lesson.languages[language as keyof typeof lesson.languages])
          .slice()
          .sort((a, b) => a.date.localeCompare(b.date))
        if (!localizedLessons.length) {
          return null
        }
        const formatter = new Intl.DateTimeFormat(language === "ru" ? "ru-RU" : "uz-UZ", {
          month: "long",
          year: "numeric",
        })
        const localizedTitle =
          language === "ru"
            ? section.title
            : formatter.format(new Date(localizedLessons[0].date)).replace(/^\p{Ll}/u, (char) =>
                char.toUpperCase(),
              )

        return { title: localizedTitle, lessons: localizedLessons }
      })
      .filter((group): group is { title: string; lessons: LessonMeta[] } => Boolean(group))
  }, [language])

  const availableLessons = useMemo(
    () => scheduleGroups.flatMap((group: { title: string; lessons: LessonMeta[] }) => group.lessons),
    [scheduleGroups],
  )

  useEffect(() => {
    if (!availableLessons.length) {
      if (selectedLessonSlug !== null) {
        setSelectedLessonSlug(null)
      }
      return
    }

    if (!selectedLessonSlug || !availableLessons.some((lesson: LessonMeta) => lesson.slug === selectedLessonSlug)) {
      setSelectedLessonSlug(availableLessons[0].slug)
    }
  }, [availableLessons, selectedLessonSlug])

  const selectedLessonMeta = selectedLessonSlug
    ? availableLessons.find((lesson: LessonMeta) => lesson.slug === selectedLessonSlug) ?? null
    : null
  const selectedLessonIsToday = selectedLessonMeta?.date === todayISO
  const selectedLessonDateLabel = selectedLessonMeta
    ? new Intl.DateTimeFormat(language === "ru" ? "ru-RU" : "uz-UZ", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(new Date(selectedLessonMeta.date))
    : null

  const currentContent = selectedLessonSlug && selectedLessonSlug in courseContent 
    ? (courseContent as Record<string, Record<SupportedLanguage, { title: string; subtitle: string; topics: Array<{ id: string; title: string; explanation: string; correct: string; incorrect: string; bestPractice: string; preview?: "html" | "css" | "combined"; htmlCode?: string; cssCode?: string }> }>>)[selectedLessonSlug]?.[language as SupportedLanguage] 
    : null
  const currentHomework = selectedLessonSlug && selectedLessonSlug in courseHomework
    ? (courseHomework as Record<string, Record<SupportedLanguage, { title: string; description: string; tasks: Array<{ title: string; description: string }> }>>)[selectedLessonSlug]?.[language as SupportedLanguage]
    : null
  const gamesForLanguage = (topicGamesData as Record<SupportedLanguage, Record<string, TopicGameContent>>)[language as SupportedLanguage] ?? {}
  const hasLessonDetail = Boolean(selectedLessonSlug && selectedLessonMeta)

  const heroRef = useAnimeReveal<HTMLElement>({
    trigger: "immediate",
    animation: {
      opacity: [0, 1],
      translateY: [50, 0],
      duration: 820,
      easing: "easeOutExpo",
    },
  })

  const statsRef = useAnimeReveal<HTMLDivElement>({
    animation: (element: HTMLElement) => ({
      targets: element.querySelectorAll("[data-stat]"),
      opacity: [0, 1],
      translateY: [24, 0],
      delay: anime.stagger(160, { start: 200 }),
      duration: 640,
      easing: "easeOutBack",
    }),
  })

  const stats = useMemo(() => {
    if (language === "ru") {
      return [
        { value: "12+", label: "Мини-уроков по HTML/CSS" },
        { value: "30 мин", label: "Время до первых результатов" },
        { value: "Практика", label: "Живые примеры и задачи" },
      ]
    }
    return [
      { value: "12+", label: "HTML/CSS bo‘yicha mini darslar" },
      { value: "30 daq", label: "Natijani sezish vaqti" },
      { value: "Amaliyot", label: "Jonli misollar va vazifalar" },
    ]
  }, [language])

  const heroHtmlSample =
    language === "ru"
      ? `<button class="primary">Учиться сейчас</button>`
      : `<button class="primary">Hozir o'rganing</button>`

  const heroCssSample = `.primary {
  background: linear-gradient(135deg, #4f46e5, #7c3aed);
  color: #ffffff;
  padding: 12px 24px;
  border-radius: 999px;
  border: none;
}`

  return (
    <main className={styles.main}>
      <Header language={language} setLanguage={setLanguage} />

      <section className={styles.hero} ref={heroRef}>
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <span className={styles.heroBadge}>
              {language === "ru" ? "✨ Пошаговое обучение с нуля" : "✨ Boshlang‘ich bosqichdan qadamma-qadam"}
            </span>
            <h1>{currentContent?.title ?? ""}</h1>
            <p>{currentContent?.subtitle ?? ""}</p>

            <div className={styles.groupSwitch} role="radiogroup" aria-label="Выбор учебной группы">
              <button
                type="button"
                onClick={() => setLanguage("ru")}
                className={clsx(styles.groupButton, language === "ru" && styles.groupButtonActive)}
                aria-pressed={language === "ru"}
              >
                <span className={styles.groupLabel}>Русский поток</span>
                <span className={styles.groupDescription}>Темы и дз для русскоязычных студентов</span>
              </button>
              <button
                type="button"
                onClick={() => setLanguage("uz")}
                className={clsx(styles.groupButton, language === "uz" && styles.groupButtonActive)}
                aria-pressed={language === "uz"}
              >
                <span className={styles.groupLabel}>O‘zbek guruhi</span>
                <span className={styles.groupDescription}>Mavzular va uyga vazifalar o‘zbek talabalari uchun</span>
              </button>
            </div>

            <div className={styles.heroActions}>
              <a href="#schedule" className={styles.heroButton}>
                {language === "ru" ? "К расписанию" : "Jadvalni ko'rish"}
              </a>
              <a href="#lesson-detail" className={styles.heroGhostButton}>
                {language === "ru" ? "Материалы урока" : "Dars materiallari"}
              </a>
            </div>

            <div className={styles.groupIndicator}>
              <span>{language === "ru" ? "Выбранная группа:" : "Tanlangan guruh:"}</span>
              <strong>{language === "ru" ? "Русский поток" : "O'zbek guruh"}</strong>
            </div>

            <div className={styles.heroSubLinks}>
              <a href="#schedule">{language === "ru" ? "Ближайшие занятия" : "Yaquin darslar"}</a>
              <a href="#lesson-detail">{language === "ru" ? "Темы и примеры" : "Mavzular va misollar"}</a>
              <a href="#homework">{language === "ru" ? "Домашние задания" : "Uyga vazifa"}</a>
            </div>

            <div className={styles.heroStats} ref={statsRef}>
              {stats.map((stat: { value: string; label: string }) => (
                <div key={stat.label} className={styles.heroStat} data-stat>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.heroVisual} aria-hidden="true">
            <div className={styles.heroPreview}>
              <div className={styles.heroPreviewHeader}>
                <span className={`${styles.heroDot} ${styles.heroDotRed}`} />
                <span className={`${styles.heroDot} ${styles.heroDotAmber}`} />
                <span className={`${styles.heroDot} ${styles.heroDotGreen}`} />
              </div>
              <code className={styles.heroCode}>{heroHtmlSample}</code>
            </div>
            <div className={styles.heroSnippetCard}>
              <span>{language === "ru" ? "CSS отрывок" : "CSS parcha"}</span>
              <code>{heroCssSample}</code>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.content}>
        <section className={styles.schedule} id="schedule">
          <header className={styles.scheduleHeader}>
            <h2>{language === "ru" ? "Расписание занятий" : "Darslar jadvali"}</h2>
            <p>
              {language === "ru"
                ? "Выберите урок, чтобы открыть темы, анимационные тренажёры и домашние задания."
                : "Mavzular, animatsion treninglar va uyga vazifalarni ko‘rish uchun darsni tanlang."}
            </p>
          </header>

          {scheduleGroups.length === 0 ? (
            <div className={styles.scheduleEmpty}>
              <h3>{language === "ru" ? "Материалы в разработке" : "Materiallar tayyorlanmoqda"}</h3>
              <p>
                {language === "ru"
                  ? "Для этой группы расписание появится совсем скоро. Следите за обновлениями."
                  : "Bu guruh uchun jadval tez orada paydo bo‘ladi. Yangilanishlarni kuzatib boring."}
              </p>
            </div>
          ) : (
            <div className={styles.scheduleTimeline}>
              {scheduleGroups.map((group: { title: string; lessons: LessonMeta[] }) => (
                <div key={group.title} className={styles.scheduleSection}>
                  <div className={styles.scheduleSectionHeader}>
                    <h3 className={styles.scheduleSectionTitle}>{group.title}</h3>
                    <span className={styles.scheduleSectionSubtitle}>
                      {language === "ru"
                        ? `${group.lessons.length} урок`
                        : `${group.lessons.length} dars`}
                    </span>
                  </div>

                  <div className={styles.lessonList}>
                    {group.lessons.map((lesson: LessonMeta) => {
                      const isSelected = lesson.slug === selectedLessonSlug
                      const isToday = lesson.date === todayISO
                      const formattedDate = new Intl.DateTimeFormat(language === "ru" ? "ru-RU" : "uz-UZ", {
                        day: "numeric",
                        month: "long",
                      })
                        .format(new Date(lesson.date))
                        .replace(/^\p{Ll}/u, (char) => char.toUpperCase())

                      return (
                        <button
                          key={lesson.slug}
                          type="button"
                          onClick={() => setSelectedLessonSlug(lesson.slug)}
                          className={clsx(styles.lessonCard, isSelected && styles.lessonCardSelected)}
                        >
                          <div className={styles.lessonMain}>
                            <div className={styles.lessonMetaRow}>
                              <span className={styles.lessonDate}>{formattedDate}</span>
                              {isToday && (
                                <span className={styles.lessonPill}>
                                  {language === "ru" ? "Сегодня" : "Bugun"}
                                </span>
                              )}
                            </div>
                            <h4 className={styles.lessonName}>{lesson.title}</h4>
                            <p className={styles.lessonSummary}>{lesson.summary}</p>
                            {lesson.tags && (
                              <div className={styles.lessonTags}>
                                {lesson.tags.map((tag: string) => (
                                  <span key={tag} className={styles.lessonTag}>
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                          <div className={styles.lessonStatus}>
                            {language === "ru"
                              ? isSelected
                                ? "Открыто"
                                : "Открыть"
                              : isSelected
                                ? "Faol"
                                : "Ochish"}
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className={styles.lessonDetail} id="lesson-detail">
          {hasLessonDetail && selectedLessonMeta ? (
            <>
              <header className={styles.lessonDetailHeader}>
                <div>
                  <span className={styles.lessonDetailLabel}>
                    {language === "ru" ? "Текущее занятие" : "Joriy dars"}
                  </span>
                  <h2 className={styles.lessonDetailTitle}>{selectedLessonMeta.title}</h2>
                  <p className={styles.lessonDetailSummary}>{selectedLessonMeta.summary}</p>
                </div>
                <div className={styles.lessonDetailMeta}>
                  {selectedLessonDateLabel && (
                    <span className={styles.lessonDetailDate}>{selectedLessonDateLabel}</span>
                  )}
                  {selectedLessonIsToday && (
                    <span className={styles.lessonPill}>
                      {language === "ru" ? "Сегодня" : "Bugun"}
                    </span>
                  )}
                </div>
              </header>

              <div className={styles.lessonDetailBody}>
                <div className={styles.topics} id="topics">
          {currentContent?.topics.map((topic: { id: string; title: string; explanation: string; correct: string; incorrect: string; bestPractice: string; preview?: "html" | "css" | "combined"; htmlCode?: string; cssCode?: string }, index: number) => {
                    const game = topic.id in gamesForLanguage ? gamesForLanguage[topic.id as keyof typeof gamesForLanguage] : undefined
                    return (
                      <TopicSection 
                        key={topic.id} 
                        topic={topic} 
                        index={index} 
                        game={game} 
                      />
                    )
          }) ?? null}
        </div>

                <section id="games" className={styles.lessonExtras}>
                  <GameSection language={language} />
                </section>

        <CombinedExample language={language} />
                <div id="homework">
        {currentHomework && <HomeworkSection homework={currentHomework} />}
                </div>
              </div>
            </>
          ) : (
            <div className={styles.lessonComingSoon}>
              <h3>{language === "ru" ? "Материалы появятся позже" : "Materiallar tez orada"}</h3>
              <p>
                {language === "ru"
                  ? "Как только первые занятия этой группы будут доступны, здесь появятся темы, тренажёры и домашние задания."
                  : "Bu guruh uchun darslar tayyor bo‘lgach, bu yerda mavzular, treninglar va uyga vazifalar paydo bo‘ladi."}
              </p>
            </div>
          )}
        </section>
      </div>
    </main>
  )
}

