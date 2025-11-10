"use client"

import { useState } from "react"
import Header from "@/components/header"
import TopicSection from "@/components/topic-section"
import CombinedExample from "@/components/combined-example"
import HomeworkSection from "@/components/homework-section"

const content = {
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
        preview: "combined",
        htmlCode: `<a href="https://example.com" class="link">Перейти на сайт</a>`,
        cssCode: `.link { color: #3b82f6; text-decoration: underline; font-weight: bold; padding: 10px 20px; display: inline-block; border-radius: 4px; background: #f0f9ff; transition: all 0.3s; } .link:hover { background: #e0f2fe; }`,
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
        preview: "combined",
        htmlCode: `<div class="container">
  <h1>Заголовок</h1>
  <p>Содержимое контейнера</p>
</div>`,
        cssCode: `.container { border: 2px solid #3b82f6; padding: 20px; background: #f0f9ff; border-radius: 8px; } h1 { color: #1e40af; margin: 0 0 10px 0; font-size: 24px; } p { color: #1e3a8a; margin: 0; }`,
      },
      {
        id: "display",
        title: "CSS: Display - Flexbox",
        explanation:
          "Свойство display: flex создает гибкий контейнер. Элементы располагаются в ряд с помощью justify-content: center.",
        correct: `.container { display: flex; justify-content: center; gap: 10px; }`,
        incorrect: `.container { display: block; }`,
        bestPractice: "Используйте flexbox для современных макетов и выравнивания.",
        preview: "css",
        htmlCode: `<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>`,
        cssCode: `.container { display: flex; justify-content: center; gap: 10px; background: #f0f9ff; padding: 20px; border-radius: 8px; } .item { background: #3b82f6; color: white; padding: 15px 20px; border-radius: 6px; font-weight: bold; min-width: 80px; text-align: center; }`,
      },
      {
        id: "zindex",
        title: "CSS: Z-index - Наложение слоёв",
        explanation:
          "Z-index контролирует порядок наложения элементов. Работает только с позиционированными элементами (position: relative, absolute, fixed).",
        correct: `.modal { position: fixed; z-index: 1000; background: white; }`,
        incorrect: `.modal { z-index: 1000; }`,
        bestPractice: "Используйте логичную систему значений z-index (например, 100, 200, 300).",
        preview: "css",
        htmlCode: `<div class="container">
  <div class="item item1">Слой 1</div>
  <div class="item item2">Слой 2</div>
  <div class="item item3">Слой 3</div>
</div>`,
        cssCode: `.container { position: relative; height: 150px; background: #f3f4f6; border-radius: 8px; } .item { position: absolute; padding: 15px; border-radius: 6px; font-weight: bold; color: white; } .item1 { background: #ef4444; top: 10px; left: 10px; z-index: 1; } .item2 { background: #f59e0b; top: 30px; left: 40px; z-index: 2; } .item3 { background: #10b981; top: 50px; left: 70px; z-index: 3; }`,
      },
      {
        id: "position",
        title: "CSS: Position - Позиционирование",
        explanation: "Position определяет способ позиционирования элемента: static, relative, absolute, fixed, sticky.",
        correct: `.fixed-header { position: fixed; top: 0; width: 100%; }`,
        incorrect: `.header { position: absolute; }`,
        bestPractice: "Используйте fixed для заголовков, absolute для наложения на контекст.",
        preview: "css",
        htmlCode: `<div class="container">
  <div class="fixed">Fixed</div>
  <div class="static">Static</div>
</div>`,
        cssCode: `.container { position: relative; height: 120px; background: #f3f4f6; border-radius: 8px; padding: 10px; } .fixed { position: fixed; top: 10px; left: 10px; background: #3b82f6; color: white; padding: 10px 15px; border-radius: 6px; font-weight: bold; } .static { background: #10b981; color: white; padding: 10px 15px; border-radius: 6px; }`,
      },
      {
        id: "margin-padding",
        title: "CSS: Margin и Padding - Отступы",
        explanation:
          "Padding — внутреннее пространство внутри элемента. Margin — внешнее пространство вокруг элемента.",
        correct: `.box { padding: 20px; margin: 10px 0; background: #dbeafe; }`,
        incorrect: `.box { padding: 20px; padding: 10px; }`,
        bestPractice: "Используйте сокращенную форму: margin: top right bottom left;",
        preview: "css",
        htmlCode: `<div class="container">
  <div class="item">Элемент 1</div>
  <div class="item">Элемент 2</div>
  <div class="item">Элемент 3</div>
</div>`,
        cssCode: `.container { background: #e5e7eb; padding: 20px; border-radius: 8px; } .item { background: #3b82f6; color: white; padding: 20px; margin: 10px 0; border-radius: 6px; text-align: center; font-weight: bold; }`,
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
        preview: "combined",
        htmlCode: `<a href="https://example.com" class="link">Saytga o'ting</a>`,
        cssCode: `.link { color: #3b82f6; text-decoration: underline; font-weight: bold; padding: 10px 20px; display: inline-block; border-radius: 4px; background: #f0f9ff; }`,
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
        preview: "combined",
        htmlCode: `<div class="container">
  <h1>Sarlavha</h1>
  <p>Mazmun konteynerida</p>
</div>`,
        cssCode: `.container { border: 2px solid #3b82f6; padding: 20px; background: #f0f9ff; border-radius: 8px; } h1 { color: #1e40af; margin: 0 0 10px 0; } p { color: #1e3a8a; margin: 0; }`,
      },
      {
        id: "display",
        title: "CSS: Display - Flexbox",
        explanation:
          "Display xossasi elementning qanday ko'rsatilishini nazorat qiladi. Flexbox usuli elementlarni qator qilib joylashtiradi.",
        correct: `.container { display: flex; justify-content: center; gap: 10px; }`,
        incorrect: `.container { display: block; }`,
        bestPractice: "Zamonaviy tartiblar uchun flexbox yoki grid-dan foydalaning.",
        preview: "css",
        htmlCode: `<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>`,
        cssCode: `.container { display: flex; justify-content: center; gap: 10px; background: #f0f9ff; padding: 20px; border-radius: 8px; } .item { background: #3b82f6; color: white; padding: 15px 20px; border-radius: 6px; font-weight: bold; min-width: 80px; text-align: center; }`,
      },
      {
        id: "zindex",
        title: "CSS: Z-index - Qat'i tartib",
        explanation:
          "Z-index elementlarning qat'i tartibini nazorat qiladi. Faqat pozitsionlangan elementlar bilan ishlaydi.",
        correct: `.modal { position: fixed; z-index: 1000; background: white; }`,
        incorrect: `.modal { z-index: 1000; }`,
        bestPractice: "Mantiqiy z-index qiymatlar sistemasidan foydalaning (masalan, 100, 200, 300).",
        preview: "css",
        htmlCode: `<div class="container">
  <div class="item item1">Qat 1</div>
  <div class="item item2">Qat 2</div>
  <div class="item item3">Qat 3</div>
</div>`,
        cssCode: `.container { position: relative; height: 150px; background: #f3f4f6; border-radius: 8px; } .item { position: absolute; padding: 15px; border-radius: 6px; font-weight: bold; color: white; } .item1 { background: #ef4444; top: 10px; left: 10px; z-index: 1; } .item2 { background: #f59e0b; top: 30px; left: 40px; z-index: 2; } .item3 { background: #10b981; top: 50px; left: 70px; z-index: 3; }`,
      },
      {
        id: "position",
        title: "CSS: Position - Pozitsionlanish",
        explanation:
          "Position elementning pozitsionlanish usulini aniqlaydi: static, relative, absolute, fixed, sticky.",
        correct: `.fixed-header { position: fixed; top: 0; width: 100%; }`,
        incorrect: `.header { position: absolute; }`,
        bestPractice: "Sarlavhalar uchun fixed, nisbiy pozitsionlanish uchun absolute-ni ishlating.",
        preview: "css",
        htmlCode: `<div class="container">
  <div class="fixed">Fixed</div>
  <div class="static">Static</div>
</div>`,
        cssCode: `.container { position: relative; height: 120px; background: #f3f4f6; border-radius: 8px; padding: 10px; } .fixed { position: fixed; top: 10px; left: 10px; background: #3b82f6; color: white; padding: 10px 15px; border-radius: 6px; font-weight: bold; } .static { background: #10b981; color: white; padding: 10px 15px; border-radius: 6px; }`,
      },
      {
        id: "margin-padding",
        title: "CSS: Margin va Padding - Bo'shliqlar",
        explanation: "Padding — elementning ichidagi ichki bo'shliq. Margin — element atrofidagi tashqi bo'shliq.",
        correct: `.box { padding: 20px; margin: 10px 0; background: #dbeafe; }`,
        incorrect: `.box { padding: 20px; padding: 10px; }`,
        bestPractice: "Qisqartirilgan shakldan foydalaning: margin: yuqori o'ng pastki chap;",
        preview: "css",
        htmlCode: `<div class="container">
  <div class="item">Element 1</div>
  <div class="item">Element 2</div>
  <div class="item">Element 3</div>
</div>`,
        cssCode: `.container { background: #e5e7eb; padding: 20px; border-radius: 8px; } .item { background: #3b82f6; color: white; padding: 20px; margin: 10px 0; border-radius: 6px; text-align: center; font-weight: bold; }`,
      },
    ],
  },
}

const homework = {
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
          "Uchta havoladagi (bosh sahifa, haqida, kontaktlar) navigatsion menyu yarating. HTML va CSS-dan foydalaning. Elementlarni qator qilib joylashtirish uchun flexbox-dan foydalaning.",
      },
      {
        title: "Vazifa 2: Pozitsionlangan modal oyna",
        description:
          "position: fixed va z-index-dan foydalanib, modal oyna yarating. Yopish tugmasi va yarim shaffof fon qo'shing.",
      },
      {
        title: "Vazifa 3: Tovar karochkasi",
        description:
          'Tovarning rasmini, nomini, narxini va "Sotib olish" havolasini o\'z ichiga olgan tovar karochkasi yarating. Oformlash uchun padding, margin va display-dan foydalaning.',
      },
    ],
  },
}

export default function Home() {
  const [language, setLanguage] = useState<"ru" | "uz">("ru")
  const currentContent = content[language]
  const currentHomework = homework[language]

  return (
    <main className="min-h-screen bg-white">
      <Header language={language} setLanguage={setLanguage} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 text-balance">{currentContent.title}</h1>
          <p className="text-lg text-gray-600">{currentContent.subtitle}</p>
        </div>

        <div className="space-y-12">
          {currentContent.topics.map((topic, index) => (
            <TopicSection key={topic.id} topic={topic} index={index} />
          ))}
        </div>

        <CombinedExample language={language} />
        <HomeworkSection homework={currentHomework} />
      </div>
    </main>
  )
}
