"use client"

import clsx from "clsx"
import anime from "animejs"
import { useEffect, useMemo, useRef } from "react"
import styles from "./CodeBlock.module.css"

interface CodeBlockProps {
  code: string
  isCorrect: boolean
  htmlCode?: string
  cssCode?: string
  preview?: "html" | "css" | "combined"
}

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")

const highlightCss = (value: string) => {
  let highlighted = escapeHtml(value)

  highlighted = highlighted.replace(/(^|\s)([.#]?[a-zA-Z0-9_-]+)(?=\s*\{)/gm, (_, prefix, selector) => {
    return `${prefix}<span class="token selector">${selector}</span>`
  })

  highlighted = highlighted.replace(/([a-z-]+)(?=\s*:)/g, '<span class="token property">$1</span>')

  highlighted = highlighted.replace(/(:)(\s*)([^;{}]+)/g, (_match, colon, space, val) => {
    return `<span class="token punctuation">${colon}</span>${space}<span class="token value">${val.trim()}</span>`
  })

  highlighted = highlighted.replace(/(#(?:[0-9a-fA-F]{3,8}))/g, '<span class="token hex">$1</span>')
  highlighted = highlighted.replace(
    /(\b\d+(?:\.\d+)?(?:px|rem|em|%|vh|vw|s)\b)/g,
    '<span class="token number">$1</span>',
  )

  highlighted = highlighted.replace(/([{};])/g, '<span class="token punctuation">$1</span>')

  return highlighted
}

const highlightHtml = (value: string) => {
  let highlighted = escapeHtml(value)

  highlighted = highlighted.replace(/(&lt;\/?)([\w-]+)/g, (_, prefix, tag) => {
    return `${prefix}<span class="token tag">${tag}</span>`
  })

  highlighted = highlighted.replace(/([\w-:]+)(=)(&quot;.*?&quot;)/g, (_match, attr, equals, val) => {
    return `<span class="token attr">${attr}</span><span class="token punctuation">${equals}</span><span class="token value">${val}</span>`
  })

  highlighted = highlighted
    .replace(/&lt;\/?/g, (match) =>
      match === "&lt;/" ? '<span class="token punctuation">&lt;</span><span class="token punctuation">/</span>' : '<span class="token punctuation">&lt;</span>',
    )
    .replace(/&gt;/g, '<span class="token punctuation">&gt;</span>')

  return highlighted
}

const highlightGeneric = (value: string) => {
  const trimmed = value.trim()
  if (trimmed.includes("<")) {
    return highlightHtml(value)
  }
  if (trimmed.includes("{") || trimmed.includes(";")) {
    return highlightCss(value)
  }
  return escapeHtml(value)
}

export default function CodeBlock({ code, isCorrect, htmlCode, cssCode, preview }: CodeBlockProps) {
  const getPreviewHTML = () => {
    if (preview === "css" && cssCode) {
      return `
        <html>
          <head>
            <style>${cssCode}</style>
          </head>
          <body style="margin: 0; padding: 16px; background: #f9fafb;">
            <div class="container">
              <div class="item">Item 1</div>
              <div class="item">Item 2</div>
              <div class="item">Item 3</div>
            </div>
          </body>
        </html>
      `
    }
    if (preview === "combined" && htmlCode && cssCode) {
      return `
        <html>
          <head>
            <style>${cssCode}</style>
          </head>
          <body style="margin: 0; padding: 24px; background: #f9fafb;">
            ${htmlCode}
          </body>
        </html>
      `
    }
    return null
  }

  const previewHTML = getPreviewHTML()
  const showSplit = Boolean(preview && (htmlCode || cssCode))
  const highlightedHtml = useMemo(
    () => (htmlCode ? highlightHtml(htmlCode) : undefined),
    [htmlCode],
  )
  const highlightedCss = useMemo(() => (cssCode ? highlightCss(cssCode) : undefined), [cssCode])
  const highlightedSingle = useMemo(() => (!showSplit ? highlightGeneric(code) : undefined), [code, showSplit])
  const resultRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!previewHTML || !resultRef.current) return
    const card = resultRef.current
    anime.remove(card)
    anime({
      targets: card,
      opacity: [0, 1],
      translateY: [22, 0],
      duration: 560,
      easing: "easeOutCubic",
    })
  }, [previewHTML])

  return (
    <div className={styles.wrapper}>
      {showSplit && htmlCode && (
        <div className={styles.snippetGroup}>
          <span className={styles.snippetLabel}>HTML</span>
          <div className={clsx(styles.codeSurface, styles.light)}>
            <pre>
              <code dangerouslySetInnerHTML={{ __html: highlightedHtml ?? "" }} />
            </pre>
          </div>
        </div>
      )}

      {showSplit && cssCode && (
        <div className={styles.snippetGroup}>
          <span className={styles.snippetLabel}>CSS</span>
          <div className={clsx(styles.codeSurface, styles.light)}>
            <pre>
              <code dangerouslySetInnerHTML={{ __html: highlightedCss ?? "" }} />
            </pre>
          </div>
        </div>
      )}

      {!showSplit && (
        <div
          className={clsx(
            styles.codeSurface,
            styles.light,
            isCorrect ? styles.correct : styles.incorrect,
          )}
        >
          <pre>
            <code dangerouslySetInnerHTML={{ __html: highlightedSingle ?? "" }} />
          </pre>
        </div>
      )}

      {previewHTML && (
        <div className={styles.resultCard} ref={resultRef}>
          <div className={styles.resultHeader}>Результат · Natija</div>
          <iframe
            srcDoc={previewHTML}
            className={styles.iframeShell}
            sandbox="allow-same-origin"
            title="Code preview"
          />
        </div>
      )}
    </div>
  )
}
