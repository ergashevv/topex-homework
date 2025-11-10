"use client"

import clsx from "clsx"
import anime from "animejs"
import type { CSSProperties } from "react"
import { useEffect, useMemo, useRef, useState } from "react"
import styles from "./TopicGame.module.css"

type StatusState = "idle" | "correct" | "incorrect"

export interface TopicGameOption {
  id: string
  label: string
  isCorrect?: boolean
  feedback: string
}

type LinkVisualConfig = {
  hasHref: boolean
  isButton?: boolean
}

type ContainerVisualConfig = {
  variant: "card" | "broken" | "section"
}

type FlexVisualConfig = {
  justifyContent: "flex-start" | "center" | "space-between"
  gap: number
}

type ZIndexVisualConfig = {
  order: [number, number, number]
  highlight?: number
}

type PositionVisualConfig = {
  mode: "fixed" | "absolute" | "relative"
}

type SpacingVisualConfig = {
  padding: number
  margin: number
  hasMargin?: boolean
}

type BoxVisualConfig = {
  background?: string
  color?: string
  width?: number
  height?: number
  border?: string
  borderRadius?: number
  label?: string
}

type TopicGameVisual =
  | {
      type: "link"
      initialOptionId?: string
      variants: Record<string, LinkVisualConfig>
    }
  | {
      type: "container"
      initialOptionId?: string
      variants: Record<string, ContainerVisualConfig>
    }
  | {
      type: "flex"
      initialOptionId?: string
      variants: Record<string, FlexVisualConfig>
    }
  | {
      type: "zindex"
      initialOptionId?: string
      variants: Record<string, ZIndexVisualConfig>
    }
  | {
      type: "position"
      initialOptionId?: string
      variants: Record<string, PositionVisualConfig>
    }
  | {
      type: "spacing"
      initialOptionId?: string
      variants: Record<string, SpacingVisualConfig>
    }
  | {
      type: "box"
      initialOptionId?: string
      variants: Record<string, BoxVisualConfig>
    }

export interface TopicGameContent {
  title: string
  prompt: string
  htmlCode?: string
  cssCode?: string
  status: {
    idle: string
    correct: string
    incorrect: string
  }
  options: TopicGameOption[]
  visual?: TopicGameVisual
}

interface TopicGameProps {
  game: TopicGameContent
}

export default function TopicGame({ game }: TopicGameProps) {
  const [selection, setSelection] = useState<string | null>(null)
  const status: StatusState =
    selection == null
      ? "idle"
      : game.options.find((option) => option.id === selection)?.isCorrect
        ? "correct"
        : "incorrect"

  const containerRef = useRef<HTMLDivElement | null>(null)
  const optionsRef = useRef<HTMLDivElement | null>(null)
  const optionRefs = useRef<Record<string, HTMLButtonElement | null>>({})
  const statusRef = useRef<HTMLDivElement | null>(null)
  const previewRef = useRef<HTMLDivElement | null>(null)
  const sparklesRef = useRef<HTMLDivElement | null>(null)
  const cursorRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    optionRefs.current = {}
    setSelection(null)
    if (cursorRef.current) {
      cursorRef.current.style.opacity = "0"
    }
  }, [game])

  useEffect(() => {
    if (!containerRef.current) return
    anime.remove(containerRef.current)
    anime({
      targets: containerRef.current,
      opacity: [0, 1],
      translateY: [24, 0],
      duration: 560,
      easing: "easeOutExpo",
    })
  }, [game])

  useEffect(() => {
    if (!optionsRef.current) return
    const buttons = optionsRef.current.querySelectorAll("button")
    anime.remove(buttons)
    anime({
      targets: buttons,
      opacity: [0, 1],
      translateY: [14, 0],
      delay: anime.stagger(90),
      duration: 520,
      easing: "easeOutQuad",
    })

    if (cursorRef.current && buttons.length > 0) {
      const first = buttons[0] as HTMLElement
      const rect = first.getBoundingClientRect()
      const parentRect = optionsRef.current.getBoundingClientRect()
      cursorRef.current.style.opacity = "0"
      cursorRef.current.style.transform = `translate(${rect.left - parentRect.left - 18}px, ${
        rect.top - parentRect.top + 24
      }px) scale(0.95)`
    }
  }, [game])

  useEffect(() => {
    if (!statusRef.current) return
    anime.remove(statusRef.current)
    anime({
      targets: statusRef.current,
      opacity: [0.4, 1],
      scale: [0.94, 1],
      duration: 420,
      easing: "easeOutBack",
    })

    if (status === "incorrect" && selection) {
      const target = optionRefs.current[selection]
      if (target) {
        anime.remove(target)
        anime({
          targets: target,
          translateX: [0, -6, 6, -4, 4, 0],
          duration: 480,
          easing: "easeInOutQuad",
        })
      }
    }

    if (selection && cursorRef.current && optionsRef.current) {
      const btn = optionRefs.current[selection]
      if (btn) {
        const btnRect = btn.getBoundingClientRect()
        const parentRect = optionsRef.current.getBoundingClientRect()
        anime.remove(cursorRef.current)
        anime({
          targets: cursorRef.current,
          opacity: [0.7, 1, 0.85],
          translateX: btnRect.left - parentRect.left - 18,
          translateY: btnRect.top - parentRect.top + 24,
          scale: status === "correct" ? [0.9, 1.08, 1] : [1.05, 0.95, 1],
          duration: 520,
          easing: "easeOutCubic",
        })
      }
    }

    if (status === "correct" && sparklesRef.current) {
      const sparkles = sparklesRef.current.querySelectorAll(`.${styles.sparkle}`)
      anime.remove(sparkles)
      anime({
        targets: sparkles,
        opacity: [0, 1, 0],
        translateY: [0, -18],
        scale: [0.8, 1.4],
        delay: anime.stagger(80),
        duration: 520,
        easing: "easeOutQuad",
      })
    }
  }, [status, selection])

  useEffect(() => {
    if (!previewRef.current) return
    anime.remove(previewRef.current)
    anime({
      targets: previewRef.current,
      opacity: [0, 1],
      translateY: [16, 0],
      duration: 520,
      easing: "easeOutExpo",
    })

    if (status === "correct") {
      anime({
        targets: previewRef.current,
        scale: [0.98, 1],
        duration: 460,
        easing: "easeOutBack",
      })
    }
  }, [game, status])

  const previewDoc = useMemo(() => {
    if (!game.htmlCode && !game.cssCode) return null
    return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <style>
      *, *::before, *::after { box-sizing: border-box; }
      body {
        margin: 0;
        padding: 28px;
        font-family: "Inter", "Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif;
        background: #f8fafc;
        color: #0f172a;
      }
      ${game.cssCode ?? ""}
    </style>
  </head>
  <body>
    ${game.htmlCode ?? ""}
  </body>
</html>`
  }, [game])

  const statusClass =
    status === "idle"
      ? styles.statusIdle
      : status === "correct"
        ? styles.statusCorrect
        : styles.statusIncorrect

  const selectedOption = selection
    ? game.options.find((option) => option.id === selection) ?? null
    : null

  const statusText =
    status === "idle"
      ? game.status.idle
      : status === "correct"
        ? game.status.correct
        : game.status.incorrect

  const statusIcon = status === "correct" ? "✅" : status === "incorrect" ? "⚠️" : "💡"

  const visualSelection =
    (selection ?? game.visual?.initialOptionId ?? game.options[0]?.id ?? null) ?? null
  const visualConfig =
    visualSelection && game.visual ? game.visual.variants[visualSelection] : undefined

  let visualElement: React.ReactNode = null
  if (game.visual && visualConfig) {
    switch (game.visual.type) {
      case "link":
        visualElement = (
          <LinkVisual config={visualConfig as LinkVisualConfig} status={status} />
        )
        break
      case "container":
        visualElement = (
          <ContainerVisual config={visualConfig as ContainerVisualConfig} status={status} />
        )
        break
      case "flex":
        visualElement = <FlexVisual config={visualConfig as FlexVisualConfig} />
        break
      case "zindex":
        visualElement = <ZIndexVisual config={visualConfig as ZIndexVisualConfig} />
        break
      case "position":
        visualElement = <PositionVisual config={visualConfig as PositionVisualConfig} />
        break
      case "spacing":
        visualElement = <SpacingVisual config={visualConfig as SpacingVisualConfig} />
        break
      case "box":
        visualElement = <BoxVisual config={visualConfig as BoxVisualConfig} />
        break
      default:
        visualElement = null
    }
  }

  return (
    <div className={styles.wrapper} ref={containerRef}>
      <div className={styles.sparkles} ref={sparklesRef}>
        <span className={styles.sparkle} />
        <span className={styles.sparkle} />
        <span className={styles.sparkle} />
      </div>

      <div className={styles.header}>
        <h4>{game.title}</h4>
        <p>{game.prompt}</p>
      </div>

      <div className={styles.content}>
        {visualElement}

        {game.htmlCode && (
          <div className={styles.codeGroup}>
            <span className={styles.codeLabel}>HTML</span>
            <div className={styles.codeBlock}>
              <code>{game.htmlCode}</code>
            </div>
          </div>
        )}

        {game.cssCode && (
          <div className={styles.codeGroup}>
            <span className={styles.codeLabel}>CSS</span>
            <div className={styles.codeBlock}>
              <code>{game.cssCode}</code>
            </div>
          </div>
        )}

        {previewDoc && (
          <div className={styles.preview} ref={previewRef}>
            <div className={styles.previewHeader}>
              <div className={styles.previewDots}>
                <span className={styles.previewDot} />
                <span className={styles.previewDot} />
                <span className={styles.previewDot} />
              </div>
            </div>
            <iframe
              title={`${game.title}-preview`}
              className={styles.previewFrame}
              sandbox="allow-same-origin"
              srcDoc={previewDoc}
            />
          </div>
        )}

        <div className={styles.options} ref={optionsRef}>
          <span className={styles.optionCursor} ref={cursorRef} aria-hidden="true" />
          {game.options.map((option) => {
            const isSelected = selection === option.id
            const stateClass =
              status === "correct" && option.isCorrect
                ? styles.optionCorrect
                : status === "incorrect" && isSelected
                  ? styles.optionIncorrect
                  : isSelected
                    ? styles.optionSelected
                    : undefined

            return (
              <button
                key={option.id}
                type="button"
                className={clsx(styles.option, stateClass)}
                onClick={() => setSelection(option.id)}
                ref={(el) => {
                  optionRefs.current[option.id] = el
                }}
              >
                <code>{option.label}</code>
              </button>
            )
          })}
        </div>

        <div className={clsx(styles.status, statusClass)} ref={statusRef}>
          <span className={styles.statusIcon} aria-hidden="true">
            {statusIcon}
          </span>
          <div>
            <p className={styles.statusLabel}>{statusText}</p>
            {selectedOption && (
              <p className={styles.statusDetails}>{selectedOption.feedback}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function LinkVisual({ config, status }: { config: LinkVisualConfig; status: StatusState }) {
  const itemRef = useRef<HTMLDivElement | null>(null)
  const cursorRef = useRef<HTMLDivElement | null>(null)
  const tooltipRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    if (!itemRef.current) return
    anime.remove(itemRef.current)
    anime({
      targets: itemRef.current,
      scale: status === "correct" ? [0.95, 1.02] : [0.98, 1],
      duration: 420,
      easing: "easeOutBack",
    })

    if (tooltipRef.current) {
      anime.remove(tooltipRef.current)
      anime({
        targets: tooltipRef.current,
        opacity: [0, 1],
        translateY: [-4, 0],
        duration: 360,
        easing: "easeOutQuad",
      })
    }

    if (cursorRef.current) {
      anime.remove(cursorRef.current)
      anime({
        targets: cursorRef.current,
        opacity: [0, 1, 0],
        translateX: [0, 12],
        duration: 420,
        easing: "easeOutSine",
      })
    }
  }, [config, status])

  return (
    <div className={clsx(styles.visual, styles.linkVisual)}>
      <div className={styles.linkDemoWrapper}>
        <div ref={itemRef} className={styles.linkDemoShell}>
          {config.isButton ? (
            <button className={clsx(styles.linkDemo, styles.linkDemoButton)}>Button</button>
          ) : (
            <a
              className={clsx(styles.linkDemo, config.hasHref ? styles.linkDemoActive : styles.linkDemoMuted)}
              href={config.hasHref ? "https://example.com" : undefined}
            >
              example.com
            </a>
          )}
          <span
            className={clsx(
              styles.linkBadge,
              config.hasHref && !config.isButton ? styles.linkBadgeOk : styles.linkBadgeWarn,
            )}
            aria-hidden="true"
          >
            {config.hasHref && !config.isButton ? "✔" : "✕"}
          </span>
          <span ref={cursorRef} className={styles.pointer} aria-hidden="true" />
        </div>
        <span ref={tooltipRef} className={styles.linkHint}>
          {config.hasHref
            ? "Ссылка ведёт на страницу — всё работает."
            : config.isButton
              ? "Это кнопка: не подходит для внешних ссылок."
              : "Нет href: посетитель никуда не попадёт."}
        </span>
      </div>
    </div>
  )
}

function ContainerVisual({
  config,
  status,
}: {
  config: ContainerVisualConfig
  status: StatusState
}) {
  const cardRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    if (!cardRef.current) return
    anime.remove(cardRef.current)
    anime({
      targets: cardRef.current,
      rotateX: status === "correct" ? [6, 0] : [0, 0],
      duration: 420,
      easing: "easeOutCubic",
    })
  }, [config, status])

  return (
    <div className={clsx(styles.visual, styles.containerVisual)}>
      <div
        ref={cardRef}
        className={clsx(
          styles.containerCard,
          config.variant === "card" && styles.containerCardClean,
          config.variant === "broken" && styles.containerCardBroken,
          config.variant === "section" && styles.containerCardSection,
        )}
      >
        <div className={styles.containerHeader}>Заголовок</div>
        <div className={styles.containerBody}>Небольшое описание блока внутри контейнера.</div>
        <div className={styles.containerFooter}>Читать далее</div>
      </div>
    </div>
  )
}

function FlexVisual({ config }: { config: FlexVisualConfig }) {
  const stageRef = useRef<HTMLDivElement | null>(null)
  const rulerRef = useRef<HTMLDivElement | null>(null)
  const cursorRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return
    stage.style.justifyContent = config.justifyContent
    stage.style.gap = `${config.gap}px`
    const boxes = stage.querySelectorAll(`.${styles.flexBox}`)
    anime.remove(boxes)
    anime({
      targets: boxes,
      translateY: [-6, 0],
      opacity: [0.7, 1],
      delay: anime.stagger(80),
      duration: 420,
      easing: "easeOutBack",
    })

    if (rulerRef.current) {
      anime.remove(rulerRef.current)
      anime({
        targets: rulerRef.current,
        opacity: [0, 0.65, 0],
        scaleX: [0.5, 1.05, 1],
        duration: 520,
        easing: "easeOutCubic",
      })
    }

    if (cursorRef.current) {
      anime.remove(cursorRef.current)
      anime({
        targets: cursorRef.current,
        opacity: [0, 1, 0],
        translateX:
          config.justifyContent === "center"
            ? [0, 6, 0]
            : config.justifyContent === "space-between"
              ? [0, 20, 0]
              : [0, -16, 0],
        duration: 420,
        easing: "easeOutSine",
      })
    }
  }, [config])

  return (
    <div className={clsx(styles.visual, styles.flexVisual)}>
      <div className={styles.flexStage} ref={stageRef}>
        <div className={styles.flexBox}>1</div>
        <div className={styles.flexBox}>2</div>
        <div className={styles.flexBox}>3</div>
      </div>
      <div className={styles.flexGuide} ref={rulerRef} />
      <span className={styles.flexCursor} ref={cursorRef} aria-hidden="true" />
    </div>
  )
}

function ZIndexVisual({ config }: { config: ZIndexVisualConfig }) {
  const sceneRef = useRef<HTMLDivElement | null>(null)
  const highlightRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const scene = sceneRef.current
    if (!scene) return
    const items = Array.from(scene.querySelectorAll<HTMLElement>(`.${styles.stackItem}`))
    const depths = items.map((_, index) => config.order[index] ?? index)
    items.forEach((item, index) => {
      const depth = depths[index]
      item.style.zIndex = String(100 - depth)
    })
    const translateValues = depths.map((depth) => depth * 18)
    const scaleValues = depths.map((depth) => 1 - depth * 0.06)
    anime.remove(items)
    anime({
      targets: items,
      translateY: translateValues,
      scale: scaleValues,
      duration: 520,
      delay: anime.stagger(80),
      easing: "easeOutBack",
    })

    if (highlightRef.current) {
      if (typeof config.highlight === "number") {
        const target = items[config.highlight]
        if (target) {
          const rect = target.getBoundingClientRect()
          const sceneRect = scene.getBoundingClientRect()
          highlightRef.current.style.opacity = "0"
          highlightRef.current.style.width = `${rect.width + 12}px`
          highlightRef.current.style.height = `${rect.height + 12}px`
          highlightRef.current.style.transform = `translate(${rect.left - sceneRect.left - 6}px, ${
            rect.top - sceneRect.top - 6
          }px)`
          anime({
            targets: highlightRef.current,
            opacity: [0, 0.6, 0],
            scale: [0.85, 1.05, 1],
            duration: 560,
            easing: "easeOutCubic",
          })
        }
      } else {
        highlightRef.current.style.opacity = "0"
      }
    }
  }, [config])

  return (
    <div className={clsx(styles.visual, styles.stackVisual)}>
      <div className={styles.stackScene} ref={sceneRef}>
        <div className={clsx(styles.stackItem, styles.stackItemRed)}>Фон</div>
        <div className={clsx(styles.stackItem, styles.stackItemAmber)}>Окно</div>
        <div className={clsx(styles.stackItem, styles.stackItemGreen)}>Кнопка</div>
      </div>
      <div className={styles.stackHighlight} ref={highlightRef} aria-hidden="true" />
    </div>
  )
}

function PositionVisual({ config }: { config: PositionVisualConfig }) {
  const headerRef = useRef<HTMLDivElement | null>(null)
  const frameRef = useRef<HTMLDivElement | null>(null)
  const cursorRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const header = headerRef.current
    const frame = frameRef.current
    if (!header || !frame) return
    frame.dataset.mode = config.mode
    anime.remove(header)
    anime({
      targets: header,
      translateY: config.mode === "absolute" ? [0, -8, 0] : [0, 0],
      duration: 420,
      easing: "easeOutQuad",
    })

    if (cursorRef.current) {
      anime.remove(cursorRef.current)
      anime({
        targets: cursorRef.current,
        opacity: [0, 1, 0],
        translateY:
          config.mode === "fixed"
            ? [-4, -10, -4]
            : config.mode === "absolute"
              ? [8, 0, 8]
              : [0, 6, 0],
        duration: 480,
        easing: "easeOutSine",
      })
    }
  }, [config])

  return (
    <div className={clsx(styles.visual, styles.positionVisual)}>
      <div className={styles.positionFrame} ref={frameRef} data-mode={config.mode}>
        <div className={styles.positionHeader} ref={headerRef}>
          Навигация
        </div>
        <div className={styles.positionBody}>
          <p>Содержимое страницы прокручивается под шапкой.</p>
          <p>position: fixed — шапка остаётся на виду.</p>
        </div>
      </div>
      <span className={styles.positionCursor} ref={cursorRef} aria-hidden="true" />
    </div>
  )
}

function SpacingVisual({ config }: { config: SpacingVisualConfig }) {
  const outerRef = useRef<HTMLDivElement | null>(null)
  const innerRef = useRef<HTMLDivElement | null>(null)
  const guideRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    if (!outerRef.current || !innerRef.current) return
    anime.remove([outerRef.current, innerRef.current])
    anime({
      targets: innerRef.current,
      padding: config.padding,
      duration: 480,
      easing: "easeOutCubic",
    })
    anime({
      targets: outerRef.current,
      marginTop: config.margin,
      marginBottom: config.margin,
      duration: 480,
      easing: "easeOutCubic",
    })
    outerRef.current.dataset.margin = config.margin > 0 ? "true" : "false"
    innerRef.current.dataset.padding = config.padding > 0 ? "true" : "false"

    if (guideRef.current) {
      anime.remove(guideRef.current)
      anime({
        targets: guideRef.current,
        opacity: [0, 0.7, 0],
        scaleY: [0.7, 1.08, 1],
        duration: 520,
        easing: "easeOutCubic",
      })
    }
  }, [config])

  return (
    <div className={clsx(styles.visual, styles.spacingVisual)}>
      <div className={styles.spacingOuter} ref={outerRef}>
        <div className={styles.spacingInner} ref={innerRef}>
          <div className={styles.spacingGuide} ref={guideRef} aria-hidden="true" />
          <div className={styles.spacingContent}>Контент</div>
        </div>
      </div>
      <div className={styles.spacingLegend}>
        padding: {config.padding}px · margin: {config.margin}px
      </div>
    </div>
  )
}

function BoxVisual({ config }: { config: BoxVisualConfig }) {
  const boxRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!boxRef.current) return
    anime.remove(boxRef.current)
    anime({
      targets: boxRef.current,
      opacity: [0, 1],
      scale: [0.95, 1],
      duration: 420,
      easing: "easeOutBack",
    })
  }, [config])

  const width = config.width ?? 220
  const height = config.height ?? 140

  const style: CSSProperties = {
    width: `${width}px`,
    height: `${height}px`,
    background: config.background ?? "linear-gradient(135deg, rgba(79, 70, 229, 0.12), rgba(236, 233, 255, 0.85))",
    color: config.color ?? "#1f2937",
    border: config.border ?? "1px solid rgba(148, 163, 184, 0.28)",
    borderRadius: config.borderRadius !== undefined ? `${config.borderRadius}px` : "16px",
  }

  return (
    <div className={clsx(styles.visual, styles.boxVisual)}>
      <div ref={boxRef} className={styles.boxSample} style={style}>
        <span>{config.label ?? "Namuna"}</span>
      </div>
    </div>
  )
}
