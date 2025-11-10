"use client"

import type { TopicGameContent } from "@/components/topic-game"

export type SupportedLanguage = "ru" | "uz"

export interface LessonMeta {
  slug: string
  title: string
  summary: string
  date: string
  languages: Partial<Record<SupportedLanguage, boolean>>
  tags?: string[]
}

export const cssSnippets = {
  link: `.link {
  color: #3b82f6;
  text-decoration: underline;
  font-weight: bold;
  padding: 10px 20px;
  display: inline-block;
  border-radius: 4px;
  background: #f0f9ff;
  transition: all 0.3s;
}

.link:hover {
  background: #e0f2fe;
}`,
  containerCard: `.container {
  border: 2px solid #3b82f6;
  padding: 20px;
  background: #f0f9ff;
  border-radius: 8px;
}

h1 {
  color: #1e40af;
  margin: 0 0 10px;
  font-size: 24px;
}

p {
  color: #1e3a8a;
  margin: 0;
}`,
  flexLayout: `.container {
  display: flex;
  justify-content: center;
  gap: 10px;
  background: #f0f9ff;
  padding: 20px;
  border-radius: 8px;
}

.item {
  background: #3b82f6;
  color: #ffffff;
  padding: 15px 20px;
  border-radius: 6px;
  font-weight: bold;
  min-width: 80px;
  text-align: center;
}`,
  zIndexDemo: `.container {
  position: relative;
  height: 150px;
  background: #f3f4f6;
  border-radius: 8px;
}

.item {
  position: absolute;
  padding: 15px;
  border-radius: 6px;
  font-weight: bold;
  color: #ffffff;
}

.item1 {
  background: #ef4444;
  top: 10px;
  left: 10px;
  z-index: 1;
}

.item2 {
  background: #f59e0b;
  top: 30px;
  left: 40px;
  z-index: 2;
}

.item3 {
  background: #10b981;
  top: 50px;
  left: 70px;
  z-index: 3;
}`,
  positionDemo: `.container {
  position: relative;
  height: 120px;
  background: #f3f4f6;
  border-radius: 8px;
  padding: 10px;
}

.fixed {
  position: fixed;
  top: 10px;
  left: 10px;
  background: #3b82f6;
  color: #ffffff;
  padding: 10px 15px;
  border-radius: 6px;
  font-weight: bold;
}

.static {
  background: #10b981;
  color: #ffffff;
  padding: 10px 15px;
  border-radius: 6px;
}`,
  spacingDemo: `.container {
  background: #e5e7eb;
  padding: 20px;
  border-radius: 8px;
}

.item {
  background: #3b82f6;
  color: #ffffff;
  padding: 20px;
  margin: 10px 0;
  border-radius: 6px;
  text-align: center;
  font-weight: bold;
}`,
} as const

export const lessons: LessonMeta[] = [
  {
    slug: "html-css-intro",
    title: "HTML и CSS для начинающих",
    summary: "Основы ссылок, контейнеров и ключевых CSS-свойств.",
    date: "2025-11-10",
    languages: {
      ru: true,
    },
    tags: ["html", "css", "base"],
  },
]

export const scheduleSections = [
  {
    title: "Ноябрь 2025",
    lessons: lessons.filter((lesson) => lesson.date.startsWith("2025-11")),
  },
] as const

export const courseContent = {
  ru: {
    title: "HTML и CSS для начинающих",
    subtitle: "Изучите основные концепции веб-разработки",
    topics: [
      {
        id: "link",
        title: "HTML: Ссылки (<a href>)",
        explanation:
          "Элемент <a> используется для создания гиперссылок на другие страницы или ресурсы. Атрибут href указывает адрес целевой страницы.",
        correct: `<a href="https://example.com" class="link">Перейти на сайт</a>`,
        incorrect: `<a>Перейти на сайт</a>`,
        bestPractice: "Всегда используйте атрибут href. Добавляйте описательный текст ссылки.",
        preview: "combined" as const,
        htmlCode: `<a href="https://example.com" class="link">Перейти на сайт</a>`,
        cssCode: cssSnippets.link,
      },
      {
        id: "div",
        title: "HTML: Контейнер (<div>)",
        explanation:
          "<div> — это универсальный контейнер для группировки содержимого. Это блочный элемент, который занимает всю доступную ширину.",
        correct: `<div class="container">
  <h1>Заголовок</h1>
  <p>Содержимое</p>
</div>`,
        incorrect: `<div>
<h1>Заголовок</h1>
<p>Содержимое</p>`,
        bestPractice: "Используйте классы и ID для легкой стилизации. Структурируйте контент логично.",
        preview: "combined" as const,
        htmlCode: `<div class="container">
  <h1>Заголовок</h1>
  <p>Содержимое контейнера</p>
</div>`,
        cssCode: cssSnippets.containerCard,
      },
      {
        id: "display",
        title: "CSS: Display - Flexbox",
        explanation:
          "Свойство display: flex создает гибкий контейнер. Элементы располагаются в ряд с помощью justify-content: center.",
        correct: `.container { display: flex; justify-content: center; gap: 10px; }`,
        incorrect: `.container { display: block; }`,
        bestPractice: "Используйте flexbox для современных макетов и выравнивания.",
        preview: "css" as const,
        htmlCode: `<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>`,
        cssCode: cssSnippets.flexLayout,
      },
      {
        id: "zindex",
        title: "CSS: Z-index - Наложение слоёв",
        explanation:
          "Z-index контролирует порядок наложения элементов. Работает только с позиционированными элементами (position: relative, absolute, fixed).",
        correct: `.modal { position: fixed; z-index: 1000; background: white; }`,
        incorrect: `.modal { z-index: 1000; }`,
        bestPractice: "Используйте логичную систему значений z-index (например, 100, 200, 300).",
        preview: "css" as const,
        htmlCode: `<div class="container">
  <div class="item item1">Слой 1</div>
  <div class="item item2">Слой 2</div>
  <div class="item item3">Слой 3</div>
</div>`,
        cssCode: cssSnippets.zIndexDemo,
      },
      {
        id: "position",
        title: "CSS: Position - Позиционирование",
        explanation: "Position определяет способ позиционирования элемента: static, relative, absolute, fixed, sticky.",
        correct: `.fixed-header { position: fixed; top: 0; width: 100%; }`,
        incorrect: `.header { position: absolute; }`,
        bestPractice: "Используйте fixed для заголовков, absolute для наложения на контекст.",
        preview: "css" as const,
        htmlCode: `<div class="container">
  <div class="fixed">Fixed</div>
  <div class="static">Static</div>
</div>`,
        cssCode: cssSnippets.positionDemo,
      },
      {
        id: "margin-padding",
        title: "CSS: Margin и Padding - Отступы",
        explanation:
          "Padding — внутреннее пространство внутри элемента. Margin — внешнее пространство вокруг элемента.",
        correct: `.box { padding: 20px; margin: 10px 0; background: #dbeafe; }`,
        incorrect: `.box { padding: 20px; padding: 10px; }`,
        bestPractice: "Используйте сокращенную форму: margin: top right bottom left;",
        preview: "css" as const,
        htmlCode: `<div class="container">
  <div class="item">Элемент 1</div>
  <div class="item">Элемент 2</div>
  <div class="item">Элемент 3</div>
</div>`,
        cssCode: cssSnippets.spacingDemo,
      },
    ],
  },
  uz: {
    title: "Boshlang'ichlar uchun HTML va CSS",
    subtitle: "Veb-development asosiy tushunchalarini o'rganing",
    topics: [
      {
        id: "link",
        title: "HTML: Havolalar (<a href>)",
        explanation:
          "<a> elementi boshqa sahifalar yoki manbalar uchun giper-havolalarni yaratish uchun ishlatiladi. href atributi maqsad sahifasining manzilini ko'rsatadi.",
        correct: `<a href="https://example.com" class="link">Saytga o'ting</a>`,
        incorrect: `<a>Saytga o'ting</a>`,
        bestPractice: "Har doim href atributini ishlating. Havolaning matn tavsiflari bo'lsin.",
        preview: "combined" as const,
        htmlCode: `<a href="https://example.com" class="link">Saytga o'ting</a>`,
        cssCode: cssSnippets.link,
      },
      {
        id: "div",
        title: "HTML: Konteyner (<div>)",
        explanation:
          "<div> — bu muhimning guruhlashtirilishi uchun universal konteyner. Bu blok element bo'lib, barcha mavjud kenglikni egallaydi.",
        correct: `<div class="container">
  <h1>Sarlavha</h1>
  <p>Mazmun</p>
</div>`,
        incorrect: `<div>
<h1>Sarlavha</h1>
<p>Mazmun</p>`,
        bestPractice:
          "Osonlikcha stilizatsiya qilish uchun sinflardan foydalaning. Kontent tarkibini mantiqiy saralang.",
        preview: "combined" as const,
        htmlCode: `<div class="container">
  <h1>Sarlavha</h1>
  <p>Mazmun konteynerida</p>
</div>`,
        cssCode: cssSnippets.containerCard,
      },
      {
        id: "display",
        title: "CSS: Display - Flexbox",
        explanation:
          "Display xossasi elementning qanday ko'rsatilishini nazorat qiladi. Flexbox usuli elementlarni qator qilib joylashtiradi.",
        correct: `.container { display: flex; justify-content: center; gap: 10px; }`,
        incorrect: `.container { display: block; }`,
        bestPractice: "Zamonaviy tartiblar uchun flexbox yoki grid-dan foydalaning.",
        preview: "css" as const,
        htmlCode: `<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>`,
        cssCode: cssSnippets.flexLayout,
      },
      {
        id: "zindex",
        title: "CSS: Z-index - Qat'i tartib",
        explanation:
          "Z-index elementlarning qat'i tartibini nazorat qiladi. Faqat pozitsionlangan elementlar bilan ishlaydi.",
        correct: `.modal { position: fixed; z-index: 1000; background: white; }`,
        incorrect: `.modal { z-index: 1000; }`,
        bestPractice: "Mantiqiy z-index qiymatlar sistemasidan foydalaning (masalan, 100, 200, 300).",
        preview: "css" as const,
        htmlCode: `<div class="container">
  <div class="item item1">Qat 1</div>
  <div class="item item2">Qat 2</div>
  <div class="item item3">Qat 3</div>
</div>`,
        cssCode: cssSnippets.zIndexDemo,
      },
      {
        id: "position",
        title: "CSS: Position - Pozitsionlanish",
        explanation:
          "Position elementning pozitsionlanish usulini aniqlaydi: static, relative, absolute, fixed, sticky.",
        correct: `.fixed-header { position: fixed; top: 0; width: 100%; }`,
        incorrect: `.header { position: absolute; }`,
        bestPractice: "Sarlavhalar uchun fixed, nisbiy pozitsionlanish uchun absolute-ni ishlating.",
        preview: "css" as const,
        htmlCode: `<div class="container">
  <div class="fixed">Fixed</div>
  <div class="static">Static</div>
</div>`,
        cssCode: cssSnippets.positionDemo,
      },
      {
        id: "margin-padding",
        title: "CSS: Margin va Padding - Bo'shliqlar",
        explanation: "Padding — elementning ichidagi ichki bo'shliq. Margin — element atrofidagi tashqi bo'shliq.",
        correct: `.box { padding: 20px; margin: 10px 0; background: #dbeafe; }`,
        incorrect: `.box { padding: 20px; padding: 10px; }`,
        bestPractice: "Qisqartirilgan shakldan foydalaning: margin: yuqori o'ng pastki chap;",
        preview: "css" as const,
        htmlCode: `<div class="container">
  <div class="item">Element 1</div>
  <div class="item">Element 2</div>
  <div class="item">Element 3</div>
</div>`,
        cssCode: cssSnippets.spacingDemo,
      },
    ],
  },
}

export const courseHomework = {
  ru: {
    title: "Домашнее задание",
    description: "Практикуйте полученные навыки с этими упражнениями:",
    tasks: [
      {
        title: "Задача 1: Создать навигацию",
        description:
          "Создайте навигационное меню с тремя ссылками (главная, о нас, контакты) с использованием HTML и CSS. Используйте flexbox для расположения элементов в ряд.",
      },
      {
        title: "Задача 2: Позиционированная модальное окно",
        description:
          "Создайте модальное окно с использованием position: fixed и z-index. Добавьте кнопку для закрытия и полупрозрачный фон.",
      },
      {
        title: "Задача 3: Карточка товара",
        description:
          'Создайте карточку товара с изображением, названием, ценой и ссылкой "Купить". Используйте padding, margin и display для оформления.',
      },
    ],
  },
  uz: {
    title: "Uyga vazifa",
    description: "Bu mashqlar orqali o'rganilgan ko'nikmalarni amaliyot qiling:",
    tasks: [
      {
        title: "Vazifa 1: Navigatsiyani yaratish",
        description:
          "Uchta havola (bosh sahifa, haqida, kontaktlar) uchun navigatsion menyu tuzing. Elementlarni qator qilib joylashtirish uchun flexbox-dan foydalaning.",
      },
      {
        title: "Vazifa 2: Pozitsionlangan modal oyna",
        description:
          "position: fixed va z-index-dan foydalanib modal oyna yarating. Yopish tugmasi va yarim shaffof fon qo'shing.",
      },
      {
        title: "Vazifa 3: Tovar kartochkasi",
        description:
          '"Sotib olish" havolasini o‘z ichiga olgan mahsulot kartasini yarating. Padding, margin va display xossalarini ishlating.',
      },
    ],
  },
}

export const topicGamesData: Record<SupportedLanguage, Record<string, TopicGameContent>> = {
  ru: {
    link: {
      title: "Мини-игра: Что делает ссылку правильной?",
      prompt: "Выберите HTML-вариант, который создаёт доступную и понятную ссылку на внешний сайт.",
      status: {
        idle: "Нажмите на один из вариантов кода.",
        correct: "Отлично! Ссылка с href ведёт на нужный адрес и имеет класс для стилизации.",
        incorrect: "Попробуйте ещё: подумайте, без какого атрибута ссылка бесполезна.",
      },
      options: [
        {
          id: "link-correct",
          label: `<a href="https://example.com" class="link">
  Перейти на сайт
</a>`,
          isCorrect: true,
          feedback: "Ссылка содержит href: посетитель действительно перейдёт на https://example.com.",
        },
        {
          id: "link-missing-href",
          label: `<a class="link">
  Перейти на сайт
</a>`,
          feedback: "Без href ссылка не активна — браузер не понимает, куда вести пользователя.",
        },
        {
          id: "link-button",
          label: `<button type="button">
  Перейти на сайт
</button>`,
          feedback: "Элемент button предназначен для действий внутри формы, а не для переходов по внешним ссылкам.",
        },
      ],
      visual: {
        type: "link",
        initialOptionId: "link-correct",
        variants: {
          "link-correct": { hasHref: true },
          "link-missing-href": { hasHref: false },
          "link-button": { hasHref: false, isButton: true },
        },
      },
    },
    div: {
      title: "Мини-игра: Каркас страницы",
      prompt: "Какой код создаёт аккуратную карточку с заголовком и текстом?",
      status: {
        idle: "Выберите лучший вариант разметки.",
        correct: "Верно! Открытие и закрытие тегов соблюдены, структура читаема.",
        incorrect: "Ещё раз: обращайте внимание на вложенность и закрывающие теги.",
      },
      options: [
        {
          id: "div-correct",
          label: `<div class="container">
  <h1>Заголовок</h1>
  <p>Содержимое контейнера</p>
</div>`,
          isCorrect: true,
          feedback: "Каркас закрыт корректно: контейнер оборачивает содержимое, теги закрыты.",
        },
        {
          id: "div-messy",
          label: `<div class="container">
<h1>Заголовок</h1>
<p>Содержимое контейнера`,
          feedback: "Нет закрывающего </div> — структура нарушается и стили могут сломаться.",
        },
        {
          id: "div-missing-class",
          label: `<section>
  <h1>Заголовок</h1>
  <p>Содержимое контейнера</p>
</section>`,
          feedback: "Тег section без класса container: стили из CSS не применятся.",
        },
      ],
      visual: {
        type: "container",
        initialOptionId: "div-correct",
        variants: {
          "div-correct": { variant: "card" },
          "div-messy": { variant: "broken" },
          "div-missing-class": { variant: "section" },
        },
      },
    },
    display: {
      title: "Мини-игра: Flexbox-подбор",
      prompt: "Выберите набор свойств, который выстроит элементы в ряд по центру и сделает зазоры одинаковыми.",
      status: {
        idle: "Нажмите на подходящий набор CSS.",
        correct: "Точно! Flex и центрирование дадут аккуратный ряд.",
        incorrect: "Не то. Подумайте, каким свойством выравнивают flex-элементы по горизонтали.",
      },
      options: [
        {
          id: "flex-base",
          label: `.container {
  display: flex;
  justify-content: center;
  gap: 10px;
}`,
          isCorrect: true,
          feedback: "display:flex и justify-content:center выравнивают блоки по центру с аккуратным промежутком.",
        },
        {
          id: "flex-block",
          label: `.container {
  display: block;
  margin: 0 auto;
}`,
          feedback: "display:block выстроит элементы столбцом — они не будут стоять в одном ряду.",
        },
        {
          id: "flex-space",
          label: `.container {
  display: flex;
  justify-content: space-between;
  gap: 40px;
}`,
          feedback: "space-between раздвинет элементы к краям, а gap 40px сделает слишком большие промежутки.",
        },
      ],
      visual: {
        type: "flex",
        initialOptionId: "flex-base",
        variants: {
          "flex-base": { justifyContent: "center", gap: 10 },
          "flex-block": { justifyContent: "flex-start", gap: 0 },
          "flex-space": { justifyContent: "space-between", gap: 40 },
        },
      },
    },
    zindex: {
      title: "Мини-игра: Башня из слоёв",
      prompt: "Расставьте z-index так, чтобы зелёный блок оказался наверху, жёлтый — в середине, красный — внизу.",
      status: {
        idle: "Выберите блочную раскраску z-index.",
        correct: "Да! Чем больше значение, тем выше элемент.",
        incorrect: "Неверно. Подумайте о порядке визуального наложения.",
      },
      options: [
        {
          id: "z-correct",
          label: `.item1 { z-index: 1; }
.item2 { z-index: 2; }
.item3 { z-index: 3; }`,
          isCorrect: true,
          feedback: "Чем больше z-index, тем выше слой: зелёный блок окажется поверх остальных.",
        },
        {
          id: "z-reverse",
          label: `.item1 { z-index: 3; }
.item2 { z-index: 2; }
.item3 { z-index: 1; }`,
          feedback: "Красный блок получает наибольший z-index и перекрывает остальные элементы.",
        },
        {
          id: "z-same",
          label: `.item1 { z-index: 10; }
.item2 { z-index: 10; }
.item3 { z-index: 10; }`,
          feedback: "Одинаковые z-index не задают порядок: браузер возьмёт последовательность в DOM.",
        },
      ],
      visual: {
        type: "zindex",
        initialOptionId: "z-correct",
        variants: {
          "z-correct": { order: [2, 1, 0], highlight: 2 },
          "z-reverse": { order: [0, 1, 2], highlight: 0 },
          "z-same": { order: [1, 1, 1], highlight: 1 },
        },
      },
    },
    position: {
      title: "Мини-игра: Фиксируем шапку",
      prompt: "Какой фрагмент CSS закрепит меню сверху на всех страницах?",
      status: {
        idle: "Выберите наиболее подходящий CSS.",
        correct: "Да! position: fixed и отсуп сверху держат элемент на виду.",
        incorrect: "Не то. Вспомните, какая позиция позволяет оставаться на экране при скролле.",
      },
      options: [
        {
          id: "pos-fixed",
          label: `.fixed-header {
  position: fixed;
  top: 0;
  width: 100%;
}`,
          isCorrect: true,
          feedback: "position: fixed фиксирует шапку — она остаётся на месте при прокрутке.",
        },
        {
          id: "pos-abs",
          label: `.fixed-header {
  position: absolute;
  top: 0;
  width: 100%;
}`,
          feedback: "position: absolute вынимает шапку из потока: при скролле она исчезнет.",
        },
        {
          id: "pos-rel",
          label: `.fixed-header {
  position: relative;
  margin-top: 0;
}`,
          feedback: "position: relative ведёт себя как обычный блок и прокручивается вместе со страницей.",
        },
      ],
      visual: {
        type: "position",
        initialOptionId: "pos-fixed",
        variants: {
          "pos-fixed": { mode: "fixed" },
          "pos-abs": { mode: "absolute" },
          "pos-rel": { mode: "relative" },
        },
      },
    },
    "margin-padding": {
      title: "Мини-игра: Внутри или снаружи?",
      prompt: "Найдите запись, которая создаёт внутренний отступ 20px и внешний отступ 10px.",
      status: {
        idle: "Выберите CSS-запись.",
        correct: "Верно! padding отвечает за внутренние отступы, margin — за внешние.",
        incorrect: "Не то. Проверьте, где отступ добавляется: внутри или снаружи элемента.",
      },
      options: [
        {
          id: "spacing-correct",
          label: `.box {
  padding: 20px;
  margin: 10px 0;
}`,
          isCorrect: true,
          feedback: "padding создаёт внутренний воздух, margin — внешний зазор между блоками.",
        },
        {
          id: "spacing-wrong",
          label: `.box {
  padding: 10px 0;
  margin: 20px;
}`,
          feedback: "margin: 20px добавит большой внешний отступ со всех сторон — структура поплывёт.",
        },
        {
          id: "spacing-double",
          label: `.box {
  padding: 20px;
  padding: 10px;
}`,
          feedback: "Последняя запись padding: 10px перезапишет первую — внутренний отступ будет 10px, а margin не задан.",
        },
      ],
      visual: {
        type: "spacing",
        initialOptionId: "spacing-correct",
        variants: {
          "spacing-correct": { padding: 20, margin: 10 },
          "spacing-wrong": { padding: 10, margin: 20 },
          "spacing-double": { padding: 10, margin: 0 },
        },
      },
    },
  },
  uz: {
    link: {
      title: "Mini o‘yin: Havola qanday to‘g‘ri bo‘ladi?",
      prompt: "Tashqi saytga aniq va qulay havola beruvchi HTML variantini tanlang.",
      status: {
        idle: "Kod variantlaridan birini bosing.",
        correct: "Zo‘r! href atributi havolani faol qiladi va sinf bezatishga yordam beradi.",
        incorrect: "Yana urinib ko‘ring: qaysi atributsiz havola foydasiz bo‘lib qoladi?",
      },
      options: [
        {
          id: "link-correct",
          label: `<a href="https://example.com" class="link">
  Saytga o‘tish
</a>`,
          isCorrect: true,
          feedback: "Havolada href bor va foydalanuvchini https://example.com sahifasiga olib boradi.",
        },
        {
          id: "link-missing-href",
          label: `<a class="link">
  Saytga o‘tish
</a>`,
          feedback: "href yo‘q — havola bosilganda hech qayerga olib bormaydi.",
        },
        {
          id: "link-button",
          label: `<button type="button">
  Saytga o‘tish
</button>`,
          feedback: "button tugmasi tashqi sahifalarga o‘tish uchun mo‘ljallanmagan.",
        },
      ],
      visual: {
        type: "link",
        initialOptionId: "link-correct",
        variants: {
          "link-correct": { hasHref: true },
          "link-missing-href": { hasHref: false },
          "link-button": { hasHref: false, isButton: true },
        },
      },
    },
    div: {
      title: "Mini o‘yin: Tuzilgan konteyner",
      prompt: "Qaysi kod sarlavha va matni bilan tartibli blok hosil qiladi?",
      status: {
        idle: "Eng maqbul variantni tanlang.",
        correct: "To‘g‘ri! Teglar yopilgan, tuzilma oson o‘qiladi.",
        incorrect: "Xato. Teglarning ochilishi va yopilishiga e’tibor bering.",
      },
      options: [
        {
          id: "div-correct",
          label: `<div class="container">
  <h1>Sarlavha</h1>
  <p>Mazmun konteynerida</p>
</div>`,
          isCorrect: true,
          feedback: "Kontent konteynerga joylangan va barcha teglar yopilgan.",
        },
        {
          id: "div-messy",
          label: `<div class="container">
<h1>Sarlavha</h1>
<p>Mazmun konteyнерida`,
          feedback: "Yopuvchi </div> yo‘q — tuzilma buziladi va stillar ishlamaydi.",
        },
        {
          id: "div-missing-class",
          label: `<section>
  <h1>Sarlavha</h1>
  <p>Mazmun konteyнерida</p>
</section>`,
          feedback: "section tegi container klassiz: CSS dagi stillar qo‘llanmaydi.",
        },
      ],
      visual: {
        type: "container",
        initialOptionId: "div-correct",
        variants: {
          "div-correct": { variant: "card" },
          "div-messy": { variant: "broken" },
          "div-missing-class": { variant: "section" },
        },
      },
    },
    display: {
      title: "Mini o‘yin: Flex joylashuvi",
      prompt: "Elementlarni markazga tekislash va teng bo‘shliqlar yaratish uchun to‘g‘ri CSS yozuvini tanlang.",
      status: {
        idle: "Mos CSS yozuvini tanlang.",
        correct: "Ajoyib! Flex va markaziy tekislash tartibli qator beradi.",
        incorrect: "Hali emas. Qaysi xossa elementlarni gorizontal bo‘yicha tekislaydi?",
      },
      options: [
        {
          id: "flex-base",
          label: `.container {
  display: flex;
  justify-content: center;
  gap: 10px;
}`,
          isCorrect: true,
          feedback: "display:flex va justify-content:center elementlarni markazga joylashtiradi.",
        },
        {
          id: "flex-block",
          label: `.container {
  display: block;
  margin: 0 auto;
}`,
          feedback: "display:block elementlarni ustma-ust joylashtiradi, bir qatorda bo‘lmaydi.",
        },
        {
          id: "flex-space",
          label: `.container {
  display: flex;
  justify-content: space-between;
  gap: 40px;
}`,
          feedback: "space-between va katta gap bloklarni chetlarga tortib yuboradi.",
        },
      ],
      visual: {
        type: "flex",
        initialOptionId: "flex-base",
        variants: {
          "flex-base": { justifyContent: "center", gap: 10 },
          "flex-block": { justifyContent: "flex-start", gap: 0 },
          "flex-space": { justifyContent: "space-between", gap: 40 },
        },
      },
    },
    zindex: {
      title: "Mini o‘yin: Qatlam tartibi",
      prompt: "Yashil blok eng yuqorida, sariq o‘rtada, qizil pastda bo‘lishi uchun z-index qiymatlarini tanlang.",
      status: {
        idle: "z-index yozuvini tanlang.",
        correct: "To‘g‘ri! Qanchalik katta bo‘lsa, qatlam shuncha yuqoriga chiqadi.",
        incorrect: "Hali emas. Qaysi qatlam eng ko‘rinadigan bo‘lishi kerak?",
      },
      options: [
        {
          id: "z-correct",
          label: `.item1 { z-index: 1; }
.item2 { z-index: 2; }
.item3 { z-index: 3; }`,
          isCorrect: true,
          feedback: "z-index katta bo‘lsa, qatlam yuqorida turadi: yashil blok ustida bo‘ladi.",
        },
        {
          id: "z-reverse",
          label: `.item1 { z-index: 3; }
.item2 { z-index: 2; }
.item3 { z-index: 1; }`,
          feedback: "Qizil blok eng katta z-index ga ega bo‘lib, hammasini yopib qo‘yadi.",
        },
        {
          id: "z-same",
          label: `.item1 { z-index: 10; }
.item2 { z-index: 10; }
.item3 { z-index: 10; }`,
          feedback: "Bir xil z-index qiymatlari tartibni o‘zgartirmaydi — DOM tartibi saqlanadi.",
        },
      ],
      visual: {
        type: "zindex",
        initialOptionId: "z-correct",
        variants: {
          "z-correct": { order: [2, 1, 0], highlight: 2 },
          "z-reverse": { order: [0, 1, 2], highlight: 0 },
          "z-same": { order: [1, 1, 1], highlight: 1 },
        },
      },
    },
    position: {
      title: "Mini o‘yin: Fiksatsiya",
      prompt: "Menyuni ekran yuqorisiga mahkamlab turuvchi CSS yozuvini toping.",
      status: {
        idle: "Kerakli yozuvni tanlang.",
        correct: "To‘g‘ri! position: fixed elementi doimiy ko‘rsatadi.",
        incorrect: "Xato. Qaysi position skroll vaqtida ham ko‘rinib turadi?",
      },
      options: [
        {
          id: "pos-fixed",
          label: `.fixed-header {
  position: fixed;
  top: 0;
  width: 100%;
}`,
          isCorrect: true,
          feedback: "position:fixed menyuni ekran yuqorisiga mahkamlaydi.",
        },
        {
          id: "pos-abs",
          label: `.fixed-header {
  position: absolute;
  top: 0;
  width: 100%;
}`,
          feedback: "position:absolute elementni oqimdan chiqaradi va skrollda ko‘rinmay qoladi.",
        },
        {
          id: "pos-rel",
          label: `.fixed-header {
  position: relative;
  margin-top: 0;
}`,
          feedback: "position:relative oddiy blok kabi sahifa bilan birga ko‘chadi.",
        },
      ],
      visual: {
        type: "position",
        initialOptionId: "pos-fixed",
        variants: {
          "pos-fixed": { mode: "fixed" },
          "pos-abs": { mode: "absolute" },
          "pos-rel": { mode: "relative" },
        },
      },
    },
    "margin-padding": {
      title: "Mini o‘yin: Ichki va tashqi bo‘shliq",
      prompt: "Ichki bo‘shliq 20px, tashqi bo‘shliq 10px bo‘lishi uchun CSSni tanlang.",
      status: {
        idle: "CSS variantini tanlang.",
        correct: "Zo‘r! padding ichkariga, margin tashqariga qo‘llaniladi.",
        incorrect: "Yana bir bor: qaysi yozuv ichkariga, qaysi tashqariga ta’sir qiladi?",
      },
      options: [
        {
          id: "spacing-correct",
          label: `.box {
  padding: 20px;
  margin: 10px 0;
}`,
          isCorrect: true,
          feedback: "padding ichki bo‘shliqni, margin tashqi bo‘shliqni belgilaydi — aynan keraklisi.",
        },
        {
          id: "spacing-wrong",
          label: `.box {
  padding: 10px 0;
  margin: 20px;
}`,
          feedback: "margin: 20px tashqi bo‘shliqni juda katta qiladi.",
        },
        {
          id: "spacing-double",
          label: `.box {
  padding: 20px;
  padding: 10px;
}`,
          feedback: "Ikkinchi padding: 10px birinchisini almashtiradi — ichki bo‘shliq kichik, margin esa yo‘q.",
        },
      ],
      visual: {
        type: "spacing",
        initialOptionId: "spacing-correct",
        variants: {
          "spacing-correct": { padding: 20, margin: 10 },
          "spacing-wrong": { padding: 10, margin: 20 },
          "spacing-double": { padding: 10, margin: 0 },
        },
      },
    },
  },
}

