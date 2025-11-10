"use client"

import { useEffect, useRef } from "react"
import anime, { AnimeParams } from "animejs"

type TriggerMode = "immediate" | "viewport"

interface UseAnimeRevealOptions {
  /**
   * Animation params passed directly to anime.js
   */
  animation: AnimeParams | ((element: HTMLElement) => AnimeParams)
  /**
   * Choose when to run the animation.
   * - immediate: fire right after mount
   * - viewport: wait until the element becomes visible
   */
  trigger?: TriggerMode
  /**
   * IntersectionObserver threshold when trigger="viewport"
   */
  threshold?: number
  /**
   * IntersectionObserver root margin when trigger="viewport"
   */
  rootMargin?: string
  /**
   * If true, the animation will only run once even if the element leaves and re-enters the viewport.
   */
  once?: boolean
}

export function useAnimeReveal<T extends HTMLElement>({
  animation,
  trigger = "viewport",
  threshold = 0.25,
  rootMargin = "0px",
  once = true,
}: UseAnimeRevealOptions) {
  const elementRef = useRef<T | null>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    let hasPlayed = false
    const playAnimation = () => {
      if (once && hasPlayed) return
      const params = typeof animation === "function" ? animation(element) : animation
      if (!params) return
      anime.remove(element)
      const mergedParams: AnimeParams = {
        opacity: [0, 1],
        easing: "easeOutQuad",
        duration: 600,
        translateY: [16, 0],
        ...params,
      }

      if (!mergedParams.targets) {
        mergedParams.targets = element
      }

      anime(mergedParams)
      hasPlayed = true
    }

    if (trigger === "immediate") {
      playAnimation()
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            playAnimation()
            if (once) observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin },
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
      anime.remove(element)
    }
  }, [animation, trigger, threshold, rootMargin, once])

  return elementRef
}

