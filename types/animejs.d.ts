declare module "animejs" {
  type AnimeTarget = string | Element | Element[] | NodeListOf<Element>

  interface StaggerOptions {
    start?: number
    direction?: "normal" | "reverse"
    easing?: string
    grid?: [number, number]
    axis?: "x" | "y"
  }

  export interface AnimeParams {
    targets?: AnimeTarget | AnimeTarget[]
    duration?: number
    delay?:
      | number
      | ((element: Element, index: number, length: number) => number)
      | ReturnType<typeof anime.stagger>
    easing?: string
    opacity?: number | number[] | string[]
    translateX?: number | number[] | string[]
    translateY?: number | number[] | string[]
    translateZ?: number | number[] | string[]
    scale?: number | number[]
    rotate?: number | number[]
    [property: string]:
      | undefined
      | number
      | number[]
      | string
      | string[]
      | AnimeTarget
      | AnimeTarget[]
      | ((element: Element, index: number, length: number) => number | string)
  }

  export interface AnimeInstance {
    pause(): void
    play(): void
    restart(): void
    finished: Promise<void>
  }

  interface AnimeStatic {
    (params: AnimeParams): AnimeInstance
    remove(targets: AnimeTarget | AnimeTarget[]): void
    stagger(value: number, options?: StaggerOptions): (
      element: Element,
      index: number,
      length: number,
    ) => number
  }

  const anime: AnimeStatic
  export default anime
}

