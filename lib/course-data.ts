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
  imageCard: `.image-card {
  max-width: 360px;
  background: #ffffff;
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 18px 32px -26px rgba(30, 64, 175, 0.35);
}

.image-card img {
  width: 100%;
  display: block;
  border-radius: 12px;
}

.image-card p {
  margin-top: 12px;
  color: #475569;
}`,
  tableBasic: `.schedule-table {
  width: 100%;
  border-collapse: collapse;
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
}

.schedule-table th,
.schedule-table td {
  border: 1px solid #e2e8f0;
  padding: 12px 16px;
  text-align: left;
}

.schedule-table th {
  background: #f1f5f9;
  color: #1e3a8a;
  font-weight: 700;
}`,
  classIdDemo: `.hero-banner {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: #ffffff;
  padding: 28px;
  border-radius: 20px;
}

#highlight-card {
  border-left: 6px solid #f59e0b;
  padding: 18px 16px;
  background: #fff7ed;
  border-radius: 12px;
}`,
  bgColorDemo: `.hero {
  background-color: #0ea5e9;
  color: #ffffff;
  padding: 24px;
  border-radius: 16px;
  text-align: center;
}`,
  textColorDemo: `.section-title {
  color: #1e3a8a;
  font-weight: 700;
  margin-bottom: 8px;
}

.section-description {
  color: #475569;
  line-height: 1.6;
}`,
  widthDemo: `.card {
  width: 320px;
  max-width: 100%;
  background: #ffffff;
  padding: 18px;
  border-radius: 16px;
  box-shadow: 0 18px 32px -28px rgba(30, 64, 175, 0.35);
}`,
  heightDemo: `.banner {
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #22d3ee, #3b82f6);
  border-radius: 18px;
  color: #ffffff;
  font-weight: 600;
}`,
  borderDemo: `.note {
  border: 2px dashed #6366f1;
  padding: 16px;
  border-radius: 12px;
  background: #eef2ff;
  color: #4338ca;
}`,
  radiusDemo: `.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #a855f7;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}`,
  marginDemo: `.card-list li {
  margin-bottom: 16px;
  background: #f8fafc;
  border-radius: 12px;
  padding: 14px;
  border: 1px solid #e2e8f0;
}

.card-list li:last-child {
  margin-bottom: 0;
}`,
  paddingDemo: `.button {
  display: inline-block;
  padding: 12px 20px;
  border-radius: 999px;
  background: #22c55e;
  color: #ffffff;
  font-weight: 600;
}`,
  transformDemo: `.card {
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-weight: bold;
  transform: rotate(15deg) scale(1.1);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: rotate(0deg) scale(1.2);
}`,
  overflowDemo: `.container {
  width: 300px;
  height: 150px;
  background: #f1f5f9;
  border-radius: 8px;
  padding: 16px;
  overflow: auto;
  border: 2px solid #cbd5e1;
}

.content {
  background: #ffffff;
  padding: 20px;
  border-radius: 6px;
  line-height: 1.8;
}`,
  transitionDemo: `.button {
  background: #3b82f6;
  color: #ffffff;
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.button:hover {
  background: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
}`,
  animationDemo: `.spinner {
  width: 60px;
  height: 60px;
  border: 4px solid #e5e7eb;
  border-top-color: #3b82f6;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
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
      uz: true,
    },
    tags: ["html", "css", "base"],
  },
  {
    slug: "css-advanced",
    title: "CSS: Продвинутые свойства",
    summary: "Z-index, Transform, Overflow, Transition и Animation.",
    date: "2025-11-14",
    languages: {
      ru: true,
      uz: true,
    },
    tags: ["css", "advanced", "animations"],
  },
]

export const scheduleSections = [
  {
    title: "Ноябрь 2025",
    lessons: lessons.filter((lesson) => lesson.date.startsWith("2025-11")),
  },
] as const

export const courseContent = {
  "html-css-intro": {
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
      subtitle: "Ustiga tushadigan mavzular va amaliy mashqlar bir joyda",
      topics: [
      {
        id: "image",
        title: "HTML: Rasm (<img>)",
        explanation:
          "<img> tegi rasmni sahifaga joylash uchun ishlatiladi. Semantik va kirish imkoniyatlari uchun src hamda alt atributlarini to‘ldirish zarur.",
        correct: `<img src="gallery.jpg" alt="Tabiat manzarasi" class="hero-image" />`,
        incorrect: `<img src="gallery.jpg">`,
        bestPractice:
          "Rasm tarkibini qisqacha tasvirlab beruvchi alt matn yozing. Zarur bo‘lsa class orqali stil bering.",
        preview: "combined" as const,
        htmlCode: `<div class="image-card">
  <img src="gallery.jpg" alt="Tabiat manzarasi">
  <p>Bahor faslida suratga olingan tog' manzarasi.</p>
</div>`,
        cssCode: cssSnippets.imageCard,
      },
      {
        id: "href",
        title: "HTML: Havola (<a href=\"\">)",
        explanation:
          "<a> tegi foydalanuvchini boshqa sahifa yoki manbaga olib boradi. href atributi manzilni, matn esa mazmunni ifodalaydi.",
        correct: `<a href="https://example.com" class="link">Saytga o'ting</a>`,
        incorrect: `<a class="link">Saytga o'ting</a>`,
        bestPractice:
          "Havola matni tushunarli bo‘lsin. Tashqi manzillarda target=\"_blank\" va rel atributlarini to‘g‘ri qo‘llang.",
        preview: "combined" as const,
        htmlCode: `<nav>
  <a href="https://example.com" class="link">Asosiy sayt</a>
  <a href="#contact">Kontaktlar</a>
</nav>`,
        cssCode: cssSnippets.link,
      },
      {
        id: "table",
        title: "HTML: Jadval (<table>)",
        explanation:
          "<table> tegi ma'lumotlarni satr va ustunlarga bo‘lib ko‘rsatadi. Jadval bosh qismi uchun <thead>, asosiy qismi uchun <tbody> dan foydalaning.",
        correct: `<table class="schedule-table">
  <thead>
    <tr>
      <th>Dars</th>
      <th>Vaqt</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>HTML asoslari</td>
      <td>14:00</td>
    </tr>
  </tbody>
</table>`,
        incorrect: `<table>
  <tr>
    <td>Dars</td>
    <td>Vaqt</td>
  </tr>
  <td>HTML asoslari</td>
  <td>14:00</td>
</table>`,
        bestPractice:
          "Sarlavha ustunlari uchun <th> ishlating, jadvalga sinf berib stilni CSS orqali boshqaring.",
        preview: "combined" as const,
        htmlCode: `<table class="schedule-table">
  <thead>
    <tr>
      <th>Dars</th>
      <th>Vaqt</th>
      <th>O'qituvchi</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>HTML asoslari</td>
      <td>14:00</td>
      <td>Zarnigor</td>
    </tr>
    <tr>
      <td>CSS amaliyoti</td>
      <td>16:00</td>
      <td>Jamshid</td>
    </tr>
  </tbody>
</table>`,
        cssCode: cssSnippets.tableBasic,
      },
      {
        id: "class-id",
        title: "HTML: class va id atributlari",
        explanation:
          "class bir xil ko‘rinishga ega elementlarni guruhlaydi, id esa sahifada noyob identifikator bo‘lib xizmat qiladi.",
        correct: `<div class="hero-banner">
  <h2>Frontend bootcamp</h2>
</div>
<article id="highlight-card">
  <h3>Dars jadvali</h3>
</article>`,
        incorrect: `<div id="hero-banner">
  <h2>Frontend bootcamp</h2>
</div>
<div id="hero-banner">
  <h3>Dars jadvali</h3>
</div>`,
        bestPractice:
          "Bir nechta elementlar uchun class, faqat bitta element uchun id dan foydalaning. CSS va JavaScript har ikkisini ham tanlashi mumkin.",
        preview: "combined" as const,
        htmlCode: `<section class="hero-banner">
  <h2>Frontend bootcamp</h2>
  <p>HTML va CSS bo'yicha tezkor kurs.</p>
</section>
<aside id="highlight-card">
  <h3>Bugungi vazifa</h3>
  <p>Rasm va jadval qo'shib ko'ring.</p>
</aside>`,
        cssCode: cssSnippets.classIdDemo,
      },
      {
        id: "background-color",
        title: "CSS: background-color",
        explanation:
          "Background-color elementi fon rangini o‘zgartiradi. Matn ko‘rinishi uchun ranglar kontrastiga e'tibor bering.",
        correct: `.hero { background-color: #0ea5e9; color: #ffffff; }`,
        incorrect: `.hero { color: #0ea5e9; }`,
        bestPractice:
          "Rang kodlarini izchil ishlating. Fon rangidagi yozuv oson o‘qiladigan bo‘lsin.",
        preview: "css" as const,
        htmlCode: `<section class="hero">
  <h2>Online konferensiya</h2>
  <p>13-mart kuni jonli efirda uchrashamiz.</p>
</section>`,
        cssCode: cssSnippets.bgColorDemo,
      },
      {
        id: "color",
        title: "CSS: color",
        explanation:
          "color xossasi matn rangini belgilaydi. U sarlavhalar, paragraf va boshqa matnli elementlarga ta'sir qiladi.",
        correct: `.section-title { color: #1e3a8a; }`,
        incorrect: `.section-title { background-color: #1e3a8a; }`,
        bestPractice:
          "Brand ranglaringizni ishlating, lekin kontrast va o‘qiluvchanlikni unutmay.",
        preview: "css" as const,
        htmlCode: `<header>
  <h2 class="section-title">O'quv modullari</h2>
  <p class="section-description">Har bir modul yakunida qisqa test mavjud.</p>
</header>`,
        cssCode: cssSnippets.textColorDemo,
      },
      {
        id: "width",
        title: "CSS: width",
        explanation:
          "width elementi gorizontal o‘lchamini belgilaydi. Foiz, px yoki boshqa birliklarda berilishi mumkin.",
        correct: `.card { width: 320px; }`,
        incorrect: `.card { width: auto auto; }`,
        bestPractice:
          "Responsiv dizayn uchun width ni foiz yoki max-width bilan birga ishlating.",
        preview: "css" as const,
        htmlCode: `<article class="card">
  <h3>Dars rejalari</h3>
  <p>Hafta davomida bajarilishi kerak bo'lgan topshiriqlar.</p>
</article>`,
        cssCode: cssSnippets.widthDemo,
      },
      {
        id: "height",
        title: "CSS: height",
        explanation:
          "height vertikal o‘lchamni belgilaydi. Flex va grid konteynerlarda balandlikni markazlash uchun foydali.",
        correct: `.banner { height: 180px; }`,
        incorrect: `.banner { height: auto 200px; }`,
        bestPractice:
          "Element o‘z balandligini kontentga qarab olishini xohlasangiz min-height dan foydalaning.",
        preview: "css" as const,
        htmlCode: `<div class="banner">
  <span>Bootcamp startiga 3 kun qoldi</span>
</div>`,
        cssCode: cssSnippets.heightDemo,
      },
      {
        id: "border",
        title: "CSS: border",
        explanation:
          "border elementi atrofiga ramka chizadi. Qalinlik, uslub va rangni belgilashingiz mumkin.",
        correct: `.note { border: 2px dashed #6366f1; }`,
        incorrect: `.note { border: dashed; }`,
        bestPractice:
          "Ramka ko‘rinishi dizayn bilan mos bo‘lsin. Fokus holatlarida border orqali ta'kidlang.",
        preview: "css" as const,
        htmlCode: `<div class="note">
  <strong>Eslatma:</strong> Kodni GitHub ga yuklashni unutmang.
</div>`,
        cssCode: cssSnippets.borderDemo,
      },
      {
        id: "border-radius",
        title: "CSS: border-radius",
        explanation:
          "Border-radius burchaklarni yumalatadi. Qiymat katta bo‘lsa, shakl doiraga aylanadi.",
        correct: `.avatar { border-radius: 50%; }`,
        incorrect: `.avatar { border-radius: round; }`,
        bestPractice:
          "Kichik radius kartochka burchaklarini yumshatadi, 50% esa doira hosil qiladi.",
        preview: "css" as const,
        htmlCode: `<div class="avatar">
  <img src="mentor.jpg" alt="Mentor surati">
</div>`,
        cssCode: cssSnippets.radiusDemo,
      },
      {
        id: "margin",
        title: "CSS: margin",
        explanation:
          "Margin elementning tashqi bo‘shligini belgilaydi. Qo‘shni elementlar orasidagi masofani boshqaradi.",
        correct: `.card-list li { margin-bottom: 16px; }`,
        incorrect: `.card-list li { margin: inside 16px; }`,
        bestPractice:
          "Oxirgi element margin-ga muhtoj bo‘lmasa, :last-child selektoridan foydalanib uni olib tashlang.",
        preview: "css" as const,
        htmlCode: `<ul class="card-list">
  <li>HTML rasm tegi</li>
  <li>CSS ranglarni boshqarish</li>
  <li>Display xossalari</li>
</ul>`,
        cssCode: cssSnippets.marginDemo,
      },
      {
        id: "padding",
        title: "CSS: padding",
        explanation:
          "Padding element ichidagi kontent va ramka orasidagi ichki bo‘shliqni belgilaydi.",
        correct: `.button { padding: 12px 20px; }`,
        incorrect: `.button { padding: 12px, 20px; }`,
        bestPractice:
          "Interaktiv elementlarda padding-ni yetarlicha katta qilib, bosish maydonini kengaytiring.",
        preview: "css" as const,
        htmlCode: `<a href="#" class="button">Ro'yxatdan o'tish</a>`,
        cssCode: cssSnippets.paddingDemo,
      },
      {
        id: "display",
        title: "CSS: display",
        explanation:
          "Display elementning sahifada qanday joylashishini belgilaydi. Flex elementlarni qator qilib tartiblaydi, block esa to‘liq kenglikni egallaydi.",
        correct: `.container { display: flex; justify-content: center; gap: 10px; }`,
        incorrect: `.container { display: block; }`,
        bestPractice:
          "Tartibni moslashuvchan qilish uchun flex yoki grid dan foydalaning, media query bilan moslang.",
        preview: "css" as const,
        htmlCode: `<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>`,
        cssCode: cssSnippets.flexLayout,
      },
    ],
  },
  "css-advanced": {
    ru: {
      title: "CSS: Продвинутые свойства",
      subtitle: "Z-index, Transform, Overflow, Transition и Animation",
      topics: [
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
          id: "transform",
          title: "CSS: Transform - Преобразования",
          explanation:
            "Transform позволяет перемещать, поворачивать, масштабировать и наклонять элементы. Не влияет на поток документа.",
          correct: `.card { transform: rotate(15deg) scale(1.1); }`,
          incorrect: `.card { rotate: 15deg; scale: 1.1; }`,
          bestPractice: "Используйте transform для анимаций вместо изменения позиции — это производительнее.",
          preview: "css" as const,
          htmlCode: `<div class="card">Карточка</div>`,
          cssCode: cssSnippets.transformDemo,
        },
        {
          id: "overflow",
          title: "CSS: Overflow - Переполнение",
          explanation:
            "Overflow определяет, что происходит с содержимым, которое выходит за границы элемента: visible, hidden, scroll, auto.",
          correct: `.container { overflow: auto; height: 200px; }`,
          incorrect: `.container { overflow: visible; height: 200px; }`,
          bestPractice: "Используйте overflow: auto для прокрутки только при необходимости, hidden — для скрытия.",
          preview: "css" as const,
          htmlCode: `<div class="container">
  <div class="content">
    Длинный текст, который может выходить за границы контейнера и требует прокрутки для просмотра всего содержимого.
  </div>
</div>`,
          cssCode: cssSnippets.overflowDemo,
        },
        {
          id: "transition",
          title: "CSS: Transition - Плавные переходы",
          explanation:
            "Transition создаёт плавную анимацию изменения свойств. Указывайте свойство, длительность и функцию времени.",
          correct: `.button { transition: all 0.3s ease; }`,
          incorrect: `.button { transition: 0.3s; }`,
          bestPractice: "Используйте transition для интерактивных элементов. Указывайте конкретные свойства вместо 'all' для производительности.",
          preview: "css" as const,
          htmlCode: `<button class="button">Навести курсор</button>`,
          cssCode: cssSnippets.transitionDemo,
        },
        {
          id: "animation",
          title: "CSS: Animation - Анимации",
          explanation:
            "Animation позволяет создавать сложные анимации с помощью @keyframes. Можно задать длительность, задержку, повторение.",
          correct: `.spinner { animation: spin 1s linear infinite; }`,
          incorrect: `.spinner { animation: spin; }`,
          bestPractice: "Используйте animation для повторяющихся эффектов. Определяйте @keyframes с понятными именами.",
          preview: "css" as const,
          htmlCode: `<div class="spinner"></div>`,
          cssCode: cssSnippets.animationDemo,
        },
      ],
    },
    uz: {
      title: "CSS: Ilg'or xossalari",
      subtitle: "Z-index, Transform, Overflow, Transition va Animation",
      topics: [
        {
          id: "zindex",
          title: "CSS: Z-index - Qatlamlar tartibi",
          explanation:
            "Z-index elementlarning ko'rinish tartibini boshqaradi. Faqat position bilan ishlaydi (relative, absolute, fixed).",
          correct: `.modal { position: fixed; z-index: 1000; background: white; }`,
          incorrect: `.modal { z-index: 1000; }`,
          bestPractice: "Z-index qiymatlarini mantiqiy tizimda ishlating (masalan, 100, 200, 300).",
          preview: "css" as const,
          htmlCode: `<div class="container">
  <div class="item item1">Qatlam 1</div>
  <div class="item item2">Qatlam 2</div>
  <div class="item item3">Qatlam 3</div>
</div>`,
          cssCode: cssSnippets.zIndexDemo,
        },
        {
          id: "transform",
          title: "CSS: Transform - O'zgartirishlar",
          explanation:
            "Transform elementlarni ko'chirish, aylantirish, kattalashtirish va egish imkonini beradi. Hujjat oqimiga ta'sir qilmaydi.",
          correct: `.card { transform: rotate(15deg) scale(1.1); }`,
          incorrect: `.card { rotate: 15deg; scale: 1.1; }`,
          bestPractice: "Animatsiyalar uchun transform dan foydalaning, pozitsiyani o'zgartirish o'rniga — bu tezroq.",
          preview: "css" as const,
          htmlCode: `<div class="card">Kartochka</div>`,
          cssCode: cssSnippets.transformDemo,
        },
        {
          id: "overflow",
          title: "CSS: Overflow - Oqib chiqish",
          explanation:
            "Overflow element chegarasidan tashqariga chiqib ketgan kontentga nima bo'lishini belgilaydi: visible, hidden, scroll, auto.",
          correct: `.container { overflow: auto; height: 200px; }`,
          incorrect: `.container { overflow: visible; height: 200px; }`,
          bestPractice: "Kerak bo'lganda scroll uchun overflow: auto, yashirish uchun hidden ishlating.",
          preview: "css" as const,
          htmlCode: `<div class="container">
  <div class="content">
    Uzoq matn, konteyner chegarasidan tashqariga chiqishi mumkin va barcha kontentni ko'rish uchun scroll kerak bo'ladi.
  </div>
</div>`,
          cssCode: cssSnippets.overflowDemo,
        },
        {
          id: "transition",
          title: "CSS: Transition - Silliq o'tishlar",
          explanation:
            "Transition xossalarning o'zgarishini silliq animatsiya qiladi. Xossa, davomiylik va vaqt funksiyasini ko'rsating.",
          correct: `.button { transition: all 0.3s ease; }`,
          incorrect: `.button { transition: 0.3s; }`,
          bestPractice: "Interaktiv elementlar uchun transition ishlating. Samaradorlik uchun 'all' o'rniga aniq xossalarni ko'rsating.",
          preview: "css" as const,
          htmlCode: `<button class="button">Kursorni olib boring</button>`,
          cssCode: cssSnippets.transitionDemo,
        },
        {
          id: "animation",
          title: "CSS: Animation - Animatsiyalar",
          explanation:
            "Animation @keyframes yordamida murakkab animatsiyalar yaratishga imkon beradi. Davomiylik, kechikish va takrorlanishni belgilashingiz mumkin.",
          correct: `.spinner { animation: spin 1s linear infinite; }`,
          incorrect: `.spinner { animation: spin; }`,
          bestPractice: "Takrorlanuvchi effektlar uchun animation ishlating. @keyframes ni tushunarli nomlar bilan belgilang.",
          preview: "css" as const,
          htmlCode: `<div class="spinner"></div>`,
          cssCode: cssSnippets.animationDemo,
        },
      ],
    },
  },
}

export const courseHomework = {
  "html-css-intro": {
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
          title: "Vazifa 1: Profil kartasi",
          description:
            "Profil kartasi yarating: rasm (alt matni bilan), ism va qisqa tavsif. Class va id orqali stil bering.",
        },
        {
          title: "Vazifa 2: Haftalik jadval",
          description:
            "HTML jadval yordamida haftalik o'quv jadvalini tuzing. Thead/tbody ishlating va jadvalni CSS bilan bezang.",
        },
        {
          title: "Vazifa 3: Stil mashqi",
          description:
            "Bir sahifada quyidagi xossalardan foydalaning: background-color, color, width/height, margin/padding va display.",
        },
      ],
    },
  },
  "css-advanced": {
    ru: {
      title: "Домашнее задание",
      description: "Практикуйте полученные навыки с этими упражнениями:",
      tasks: [
        {
          title: "Задача 1: Анимированная кнопка с transform",
          description:
            "Создайте кнопку, которая при наведении поворачивается на 5 градусов и увеличивается в масштабе. Используйте transform и transition для плавной анимации.",
        },
        {
          title: "Задача 2: Контейнер с прокруткой",
          description:
            "Создайте контейнер фиксированной высоты с длинным текстом внутри. Используйте overflow: auto для добавления прокрутки только при необходимости.",
        },
        {
          title: "Задача 3: Плавные переходы",
          description:
            "Создайте карточку с hover-эффектом: при наведении цвет фона и размер должны плавно изменяться. Используйте transition для всех свойств.",
        },
        {
          title: "Задача 4: Вращающийся индикатор загрузки",
          description:
            "Создайте анимированный спиннер загрузки, который бесконечно вращается. Используйте @keyframes и animation для создания эффекта вращения.",
        },
      ],
    },
    uz: {
      title: "Uyga vazifa",
      description: "Bu mashqlar orqali o'rganilgan ko'nikmalarni amaliyot qiling:",
      tasks: [
        {
          title: "Vazifa 1: Transform bilan animatsiyalangan tugma",
          description:
            "Kursor olib borilganda 5 daraja aylanadigan va kattalashadigan tugma yarating. Silliq animatsiya uchun transform va transition ishlating.",
        },
        {
          title: "Vazifa 2: Scroll bilan konteyner",
          description:
            "Belgilangan balandlikdagi konteyner yarating va ichiga uzoq matn qo'shing. Kerak bo'lganda scroll uchun overflow: auto ishlating.",
        },
        {
          title: "Vazifa 3: Silliq o'tishlar",
          description:
            "Hover-effektli kartochka yarating: kursorni olib borilganda fon rangi va o'lcham silliq o'zgarsin. Barcha xossalarni transition bilan boshqaring.",
        },
        {
          title: "Vazifa 4: Aylanuvchi yuklanish ko'rsatkichi",
          description:
            "Cheksiz aylanadigan yuklanish spinner yarating. Aylanish effekti uchun @keyframes va animation ishlating.",
        },
      ],
    },
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
    transform: {
      title: "Мини-игра: Поворот и масштаб",
      prompt: "Выберите правильный синтаксис transform для поворота на 15 градусов и увеличения в 1.1 раза.",
      status: {
        idle: "Выберите правильный вариант transform.",
        correct: "Отлично! Transform объединяет несколько преобразований в одном свойстве.",
        incorrect: "Неверно. Transform — это одно свойство, которое принимает функции преобразования.",
      },
      options: [
        {
          id: "transform-correct",
          label: `.card {
  transform: rotate(15deg) scale(1.1);
}`,
          isCorrect: true,
          feedback: "Transform объединяет rotate и scale в одном свойстве — это правильный синтаксис.",
        },
        {
          id: "transform-separate",
          label: `.card {
  rotate: 15deg;
  scale: 1.1;
}`,
          feedback: "Отдельные свойства rotate и scale не существуют — используйте transform.",
        },
        {
          id: "transform-wrong",
          label: `.card {
  transform: rotate 15deg scale 1.1;
}`,
          feedback: "В transform функции должны быть в скобках: rotate(15deg), а не rotate 15deg.",
        },
      ],
      visual: {
        type: "box",
        initialOptionId: "transform-correct",
        variants: {
          "transform-correct": { width: 120, height: 120, background: "linear-gradient(135deg, #6366f1, #8b5cf6)", borderRadius: 12, label: "Повёрнуто" },
          "transform-separate": { width: 120, height: 120, background: "#fee2e2", borderRadius: 12, label: "Не работает" },
          "transform-wrong": { width: 120, height: 120, background: "#fef3c7", borderRadius: 12, label: "Ошибка" },
        },
      },
    },
    overflow: {
      title: "Мини-игра: Управление переполнением",
      prompt: "Какой overflow создаст прокрутку только при необходимости для контейнера с фиксированной высотой?",
      status: {
        idle: "Выберите правильное значение overflow.",
        correct: "Верно! overflow: auto добавляет прокрутку только когда контент выходит за границы.",
        incorrect: "Подумайте: какое значение создаёт прокрутку только при необходимости?",
      },
      options: [
        {
          id: "overflow-auto",
          label: `.container {
  overflow: auto;
  height: 200px;
}`,
          isCorrect: true,
          feedback: "overflow: auto добавляет прокрутку только когда контент переполняет контейнер.",
        },
        {
          id: "overflow-scroll",
          label: `.container {
  overflow: scroll;
  height: 200px;
}`,
          feedback: "overflow: scroll всегда показывает полосы прокрутки, даже если контент помещается.",
        },
        {
          id: "overflow-visible",
          label: `.container {
  overflow: visible;
  height: 200px;
}`,
          feedback: "overflow: visible позволяет контенту выходить за границы без прокрутки.",
        },
      ],
      visual: {
        type: "box",
        initialOptionId: "overflow-auto",
        variants: {
          "overflow-auto": { width: 300, height: 150, background: "#f1f5f9", label: "Auto scroll" },
          "overflow-scroll": { width: 300, height: 150, background: "#e0e7ff", label: "Always scroll" },
          "overflow-visible": { width: 300, height: 150, background: "#fef3c7", label: "Visible" },
        },
      },
    },
    transition: {
      title: "Мини-игра: Плавный переход",
      prompt: "Выберите правильный синтаксис transition для плавного изменения всех свойств за 0.3 секунды.",
      status: {
        idle: "Выберите правильный вариант transition.",
        correct: "Точно! Transition требует свойство, длительность и функцию времени.",
        incorrect: "Проверьте синтаксис: transition нужны свойство, длительность и функция времени.",
      },
      options: [
        {
          id: "transition-correct",
          label: `.button {
  transition: all 0.3s ease;
}`,
          isCorrect: true,
          feedback: "transition: all 0.3s ease — правильный синтаксис с свойством, длительностью и функцией.",
        },
        {
          id: "transition-short",
          label: `.button {
  transition: 0.3s;
}`,
          feedback: "Не хватает свойства: transition должен знать, какое свойство анимировать.",
        },
        {
          id: "transition-wrong",
          label: `.button {
  transition: all ease 0.3s;
}`,
          feedback: "Порядок важен: свойство, длительность, функция времени. Правильно: all 0.3s ease.",
        },
      ],
      visual: {
        type: "box",
        initialOptionId: "transition-correct",
        variants: {
          "transition-correct": { width: 180, height: 50, background: "#3b82f6", color: "#ffffff", borderRadius: 8, label: "Плавно" },
          "transition-short": { width: 180, height: 50, background: "#fee2e2", borderRadius: 8, label: "Не работает" },
          "transition-wrong": { width: 180, height: 50, background: "#fef3c7", borderRadius: 8, label: "Ошибка" },
        },
      },
    },
    animation: {
      title: "Мини-игра: Вращающийся спиннер",
      prompt: "Выберите правильный синтаксис animation для бесконечного вращения с длительностью 1 секунда.",
      status: {
        idle: "Выберите правильный вариант animation.",
        correct: "Отлично! Animation требует имя, длительность, функцию времени и количество повторений.",
        incorrect: "Animation нужны: имя анимации, длительность, функция времени и количество повторений.",
      },
      options: [
        {
          id: "animation-correct",
          label: `.spinner {
  animation: spin 1s linear infinite;
}`,
          isCorrect: true,
          feedback: "animation: spin 1s linear infinite — правильный синтаксис с именем, длительностью, функцией и повторением.",
        },
        {
          id: "animation-short",
          label: `.spinner {
  animation: spin;
}`,
          feedback: "Не хватает длительности и других параметров — анимация не будет работать правильно.",
        },
        {
          id: "animation-wrong",
          label: `.spinner {
  animation: spin infinite 1s;
}`,
          feedback: "Порядок важен: имя, длительность, функция времени, повторение. Правильно: spin 1s linear infinite.",
        },
      ],
      visual: {
        type: "box",
        initialOptionId: "animation-correct",
        variants: {
          "animation-correct": { width: 60, height: 60, background: "conic-gradient(from 0deg, #3b82f6 0deg 90deg, #e5e7eb 90deg)", borderRadius: 30, label: "Вращается" },
          "animation-short": { width: 60, height: 60, background: "#fee2e2", borderRadius: 30, label: "Не работает" },
          "animation-wrong": { width: 60, height: 60, background: "#fef3c7", borderRadius: 30, label: "Ошибка" },
        },
      },
    },
  },
  uz: {
    image: {
      title: "Mini o‘yin: Rasmga alt qo‘shish",
      prompt: "Qaysi variant rasmni to‘g‘ri ko‘rsatadi va alt matnini beradi?",
      status: {
        idle: "Variantlardan birini tanlang.",
        correct: "Zo‘r! Alt matn ekran o‘quvchilar va qidiruv tizimlari uchun kerak.",
        incorrect: "Yana urinib ko‘ring: alt atributisiz rasmning ma'nosi yo‘qoladi.",
      },
      options: [
        {
          id: "image-alt",
          label: `<img src="sunrise.jpg" alt="Tong sahardagi shahar manzarasi" class="hero-image">`,
          isCorrect: true,
          feedback: "Alt qisqa mazmun beradi va rasm yuklanmasa ham ma'lumot qoladi.",
        },
        {
          id: "image-no-alt",
          label: `<img src="sunrise.jpg" class="hero-image">`,
          feedback: "Alt yo‘q — ekran o‘quvchilar ham, SEO ham zarar ko‘radi.",
        },
        {
          id: "image-div",
          label: `<div class="hero-image" src="sunrise.jpg"></div>`,
          feedback: "Div tegida src ishlamaydi, rasm ko‘rinmaydi.",
        },
      ],
      visual: {
        type: "container",
        initialOptionId: "image-alt",
        variants: {
          "image-alt": { variant: "card" },
          "image-no-alt": { variant: "broken" },
          "image-div": { variant: "broken" },
        },
      },
    },
    href: {
      title: "Mini o‘yin: Havola ishlayaptimi?",
      prompt: "Tashqi saytga olib boradigan to‘g‘ri havolani tanlang.",
      status: {
        idle: "Kod variantlaridan birini bosing.",
        correct: "Zo‘r! href atributi foydalanuvchini manzilga olib boradi.",
        incorrect: "Qaytadan urinib ko‘ring: qaysi yozuvsiz havola foydasiz?",
      },
      options: [
        {
          id: "href-correct",
          label: `<a href="https://docs.dev" class="link">HuJJatlar</a>`,
          isCorrect: true,
          feedback: "href to‘ldirilgan — foydalanuvchi kerakli saytga o‘tadi.",
        },
        {
          id: "href-empty",
          label: `<a class="link">HuJJatlar</a>`,
          feedback: "href yo‘q, bosilganda hech narsa bo‘lmaydi.",
        },
        {
          id: "href-button",
          label: `<button class="link">HuJJatlar</button>`,
          feedback: "Button tashqi saytga olib bormaydi, bu boshqa vazifa uchun.",
        },
      ],
      visual: {
        type: "link",
        initialOptionId: "href-correct",
        variants: {
          "href-correct": { hasHref: true },
          "href-empty": { hasHref: false },
          "href-button": { hasHref: false, isButton: true },
        },
      },
    },
    table: {
      title: "Mini o‘yin: Jadvalni tuzing",
      prompt: "Jadval sarlavhasi va satrlarini to‘g‘ri ko‘rsatgan variantni belgilang.",
      status: {
        idle: "Variantlardan birini tanlang.",
        correct: "Barakalla! Jadval semantikasi to‘g‘ri ishlatilgan.",
        incorrect: "Jadval strukturasini yana bir bor tekshirib chiqing.",
      },
      options: [
        {
          id: "table-correct",
          label: `<table>
  <thead>
    <tr>
      <th>Dars</th>
      <th>Vaqt</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>HTML</td>
      <td>14:00</td>
    </tr>
  </tbody>
</table>`,
          isCorrect: true,
          feedback: "Thead/tbody ishlatilgan va satrlarning strukturasiga rioya qilingan.",
        },
        {
          id: "table-missing-row",
          label: `<table>
  <tr>
    <td>Dars</td>
    <td>Vaqt</td>
  </tr>
  <td>HTML</td>
  <td>14:00</td>
</table>`,
          feedback: "Ikkinchi satr <tr> ichida emas, struktura buzilgan.",
        },
        {
          id: "table-divs",
          label: `<div class="table">
  <div>Dars</div>
  <div>Vaqt</div>
</div>`,
          feedback: "Div bilan jadval semantikasi yo‘qoladi, ekran o‘quvchilar tushunmaydi.",
        },
      ],
      visual: {
        type: "container",
        initialOptionId: "table-correct",
        variants: {
          "table-correct": { variant: "section" },
          "table-missing-row": { variant: "broken" },
          "table-divs": { variant: "broken" },
        },
      },
    },
    "class-id": {
      title: "Mini o‘yin: class yoki id?",
      prompt: "Sahifada stil va tanlash uchun to‘g‘ri class/id qo‘llangan variantni tanlang.",
      status: {
        idle: "Boshlash uchun variant tanlang.",
        correct: "Ajoyib! class va id ni mos holatda qo‘lladingiz.",
        incorrect: "Har bir elementga id berish shart emas, yana urinib ko‘ring.",
      },
      options: [
        {
          id: "classid-correct",
          label: `<section class="hero-banner">
  <h2>Bootcamp</h2>
</section>
<aside id="highlight-card">E'lon</aside>`,
          isCorrect: true,
          feedback: "Bir nechta elementlar class bilan, noyob blok id bilan ajratildi.",
        },
        {
          id: "classid-duplicate-id",
          label: `<div id="card">
  <h3>Yangilik</h3>
</div>
<div id="card">
  <p>Qo'shimcha ma'lumot</p>
</div>`,
          feedback: "Bir nechta elementga bir xil id berish mumkin emas.",
        },
        {
          id: "classid-inline",
          label: `<div style="background: #fef3c7;">
  <h3>Yangilik</h3>
</div>`,
          feedback: "Inline-stil class o‘rnini bosa olmaydi, qayta foydalanish qiyin.",
        },
      ],
      visual: {
        type: "container",
        initialOptionId: "classid-correct",
        variants: {
          "classid-correct": { variant: "card" },
          "classid-duplicate-id": { variant: "broken" },
          "classid-inline": { variant: "broken" },
        },
      },
    },
    "background-color": {
      title: "Mini o‘yin: Fon rangini belgilang",
      prompt: "Fon rangini to‘g‘ri o‘rnatgan CSS yozuvini toping.",
      status: {
        idle: "CSS variantini tanlang.",
        correct: "Zo‘r! Fon rang matn bilan yaxshi kontrastga ega.",
        incorrect: "Yana urinib ko‘ring: qaysi xossa fonni boshqaradi?",
      },
      options: [
        {
          id: "bg-correct",
          label: `.hero {
  background-color: #0ea5e9;
  color: #fff;
}`,
          isCorrect: true,
          feedback: "Background-color fonni o‘zgartirdi va matn oq bo‘ldi.",
        },
        {
          id: "bg-text",
          label: `.hero {
  color: #0ea5e9;
}`,
          feedback: "Color faqat matn rangini o‘zgartiradi, fon o‘zgarmaydi.",
        },
        {
          id: "bg-invalid",
          label: `.hero {
  background: url(hero.png);
}`,
          feedback: "Rasm fon sifatida qo‘shildi, lekin rang haqida gap ketmoqda.",
        },
      ],
      visual: {
        type: "box",
        initialOptionId: "bg-correct",
        variants: {
          "bg-correct": { background: "#0ea5e9", color: "#ffffff", label: "Fon rangli blok" },
          "bg-text": { background: "#f1f5f9", color: "#0ea5e9", label: "Faqat matn rangi" },
          "bg-invalid": { background: "#e2e8f0", color: "#1f2937", label: "Rasm fon, rang emas" },
        },
      },
    },
    color: {
      title: "Mini o‘yin: Matn rangi",
      prompt: "Matn rangini to‘g‘ri o‘zgartirgan yozuvni tanlang.",
      status: {
        idle: "Variantlardan birini tanlang.",
        correct: "Ajoyib! Matn rangi brand bilan mos.",
        incorrect: "Matn rangini belgilash uchun qaysi xossa kerak?",
      },
      options: [
        {
          id: "color-correct",
          label: `.title {
  color: #1e3a8a;
}`,
          isCorrect: true,
          feedback: "Color matnni toʻgʻridan-toʻgʻri bo'yadi.",
        },
        {
          id: "color-background",
          label: `.title {
  background-color: #1e3a8a;
}`,
          feedback: "Background-color fonni bo‘yaydi, matn oq bo‘lib qolmaydi.",
        },
        {
          id: "color-invalid",
          label: `.title {
  color: gradient(#1e3a8a, #7dd3fc);
}`,
          feedback: "gradient matn uchun to‘g‘ridan-toʻgʻri qo‘llanmaydi.",
        },
      ],
      visual: {
        type: "box",
        initialOptionId: "color-correct",
        variants: {
          "color-correct": { background: "#eef2ff", color: "#1e3a8a", label: "Matn ko‘k rangda" },
          "color-background": { background: "#1e3a8a", color: "#e0e7ff", label: "Fon ko‘k, matn emas" },
          "color-invalid": { background: "#f8fafc", color: "#475569", label: "Noto‘g‘ri xossa" },
        },
      },
    },
    width: {
      title: "Mini o‘yin: Element kengligi",
      prompt: "Kartochka kengligini belgilagan to‘g‘ri yozuvni tanlang.",
      status: {
        idle: "Variantni tanlang.",
        correct: "To‘g‘ri kenglik berildi!",
        incorrect: "Kenglikni px yoki foiz ko‘rinishida yozing.",
      },
      options: [
        {
          id: "width-correct",
          label: `.card {
  width: 320px;
}`,
          isCorrect: true,
          feedback: "Aniq px qiymati kartochka kengligini belgilaydi.",
        },
        {
          id: "width-auto",
          label: `.card {
  width: auto auto;
}`,
          feedback: "Sintaksis noto‘g‘ri: qiymatlar bo‘shliq bilan ajratiladi.",
        },
        {
          id: "width-100",
          label: `.card {
  width: 100;
}`,
          feedback: "Birlik ko‘rsatilmagan: px yoki % yozish kerak.",
        },
      ],
      visual: {
        type: "box",
        initialOptionId: "width-correct",
        variants: {
          "width-correct": { width: 320, background: "#ffffff", label: "320px kenglik" },
          "width-auto": { width: 180, background: "#fee2e2", label: "Sintaksis xatosi" },
          "width-100": { width: 140, background: "#fef3c7", label: "Birlik yo‘q" },
        },
      },
    },
    height: {
      title: "Mini o‘yin: Element balandligi",
      prompt: "Element balandligini belgilash uchun to‘g‘ri yozuvni tanlang.",
      status: {
        idle: "Variantni tanlang.",
        correct: "Balandlik belgilandi!",
        incorrect: "Sintaksis yoki birlikni tekshirib ko‘ring.",
      },
      options: [
        {
          id: "height-correct",
          label: `.banner {
  height: 180px;
}`,
          isCorrect: true,
          feedback: "Balandlik px bilan belgilandi.",
        },
        {
          id: "height-mix",
          label: `.banner {
  height: auto 200px;
}`,
          feedback: "Bir nechta qiymat vergulsiz yozilgan — xato.",
        },
        {
          id: "height-no-unit",
          label: `.banner {
  height: 180;
}`,
          feedback: "Birliksiz qiymat ishlamaydi.",
        },
      ],
      visual: {
        type: "box",
        initialOptionId: "height-correct",
        variants: {
          "height-correct": { height: 180, background: "#22d3ee", color: "#ffffff", label: "180px balandlik" },
          "height-mix": { height: 120, background: "#fee2e2", label: "Sintaksis xatosi" },
          "height-no-unit": { height: 100, background: "#fef3c7", label: "Birlik kam" },
        },
      },
    },
    border: {
      title: "Mini o‘yin: Border uslubi",
      prompt: "Ramka xossasini to‘g‘ri belgilagan variantni tanlang.",
      status: {
        idle: "CSS yozuvini tanlang.",
        correct: "Ramka chizildi!",
        incorrect: "Border uchta qiymatdan — qalinlik, uslub, rangdan iborat.",
      },
      options: [
        {
          id: "border-correct",
          label: `.note {
  border: 2px dashed #6366f1;
}`,
          isCorrect: true,
          feedback: "Uchta parametr belgilandi: qalinlik, uslub va rang.",
        },
        {
          id: "border-short",
          label: `.note {
  border: dashed;
}`,
          feedback: "Faqat uslub ko‘rsatilgan — qalinlik va rang yo‘q.",
        },
        {
          id: "border-radius-only",
          label: `.note {
  border-radius: 12px;
}`,
          feedback: "Bu burchaklarni yumalatadi, lekin ramka chizmaydi.",
        },
      ],
      visual: {
        type: "box",
        initialOptionId: "border-correct",
        variants: {
          "border-correct": { border: "2px dashed #6366f1", background: "#eef2ff", label: "Dashed ramka" },
          "border-short": { border: "1px solid rgba(248, 113, 113, 0.6)", background: "#fee2e2", label: "To‘liq emas" },
          "border-radius-only": { border: "none", background: "#fef3c7", label: "Faqat radius" },
        },
      },
    },
    "border-radius": {
      title: "Mini o‘yin: Burchaklarni yumalatish",
      prompt: "Doira hosil qiladigan xossani tanlang.",
      status: {
        idle: "Variantlardan birini tanlang.",
        correct: "Ajoyib! 50% radius elementi doiraga aylanadi.",
        incorrect: "Radius qiymatini ko‘rib chiqing.",
      },
      options: [
        {
          id: "radius-correct",
          label: `.avatar {
  border-radius: 50%;
}`,
          isCorrect: true,
          feedback: "50% radius kvadratni to‘liq doiraga aylantiradi.",
        },
        {
          id: "radius-small",
          label: `.avatar {
  border-radius: 5px;
}`,
          feedback: "5px faqat burchakni biroz yumalatadi, doira emas.",
        },
        {
          id: "radius-invalid",
          label: `.avatar {
  border-radius: circle;
}`,
          feedback: "circle qiymati mavjud emas, % yoki px ishlating.",
        },
      ],
      visual: {
        type: "box",
        initialOptionId: "radius-correct",
        variants: {
          "radius-correct": { width: 90, height: 90, borderRadius: 45, background: "#a855f7", color: "#ffffff", label: "Doira" },
          "radius-small": { width: 90, height: 90, borderRadius: 8, background: "#fde68a", label: "Yumaloq burchak" },
          "radius-invalid": { width: 90, height: 90, borderRadius: 0, background: "#fee2e2", label: "Radius ishlamadi" },
        },
      },
    },
    margin: {
      title: "Mini o‘yin: Margin boshqaruvi",
      prompt: "Tashqi bo‘shliqni to‘g‘ri belgilang.",
      status: {
        idle: "CSS yozuvini tanlang.",
        correct: "Tashqi bo‘shliq to‘g‘ri boshqarildi!",
        incorrect: "Margin sintaksisini yana bir bor tekshiring.",
      },
      options: [
        {
          id: "margin-correct",
          label: `.card {
  margin-bottom: 16px;
}`,
          isCorrect: true,
          feedback: "Faqat pastki qismga bo‘shliq qo‘shildi — bu kerakli holat.",
        },
        {
          id: "margin-all",
          label: `.card {
  margin: 0 0 16px 0;
}`,
          feedback: "Sintaksis to‘g‘ri bo‘lsa ham yozuvni soddalashtirish mumkin.",
        },
        {
          id: "margin-invalid",
          label: `.card {
  margin: inside 16px;
}`,
          feedback: "inside qiymati yo‘q, px yoki % ishlating.",
        },
      ],
      visual: {
        type: "spacing",
        initialOptionId: "margin-correct",
        variants: {
          "margin-correct": { padding: 18, margin: 16 },
          "margin-all": { padding: 18, margin: 16 },
          "margin-invalid": { padding: 18, margin: 0 },
        },
      },
    },
    padding: {
      title: "Mini o‘yin: Padding qo‘llash",
      prompt: "Ichki bo‘shliqni to‘g‘ri beruvchi variantni tanlang.",
      status: {
        idle: "Variantni tanlang.",
        correct: "Ichki bo‘shliq qulay o‘qilishi uchun yetarli!",
        incorrect: "Padding yozilishida xato bor.",
      },
      options: [
        {
          id: "padding-correct",
          label: `.button {
  padding: 12px 20px;
}`,
          isCorrect: true,
          feedback: "Yuqori/pastki va chap/o‘ng bo‘shliq alohida berilgan.",
        },
        {
          id: "padding-invalid",
          label: `.button {
  padding: 12px, 20px;
}`,
          feedback: "Vergul ishlatilmadi, bo‘shliq bilan ajratish kerak.",
        },
        {
          id: "padding-zero",
          label: `.button {
  padding: 0;
}`,
          feedback: "Padding bo‘sh, tugma matni chetlarga yopishib qoladi.",
        },
      ],
      visual: {
        type: "spacing",
        initialOptionId: "padding-correct",
        variants: {
          "padding-correct": { padding: 18, margin: 8 },
          "padding-invalid": { padding: 6, margin: 8 },
          "padding-zero": { padding: 0, margin: 8 },
        },
      },
    },
    display: {
      title: "Mini o‘yin: Display xossasi",
      prompt: "Elementlarni qator qilib joylashtiruvchi CSS yozuvini tanlang.",
      status: {
        idle: "Mos yozuvni tanlang.",
        correct: "To‘g‘ri! Flex elementlarni qatorga dizadi.",
        incorrect: "Block standart bo‘lib, elementlar ustma-ust tushadi.",
      },
      options: [
        {
          id: "display-flex",
          label: `.container {
  display: flex;
  justify-content: center;
  gap: 12px;
}`,
          isCorrect: true,
          feedback: "Flex elementlarni qatorga joylashtiradi va bo‘shliq beradi.",
        },
        {
          id: "display-block",
          label: `.container {
  display: block;
}`,
          feedback: "Block elementlar to‘liq kenglikni egallab, ustma-ust joylashadi.",
        },
        {
          id: "display-none",
          label: `.container {
  display: none;
}`,
          feedback: "display:none elementi umuman ko‘rsatmaydi.",
        },
      ],
      visual: {
        type: "flex",
        initialOptionId: "display-flex",
        variants: {
          "display-flex": { justifyContent: "center", gap: 12 },
          "display-block": { justifyContent: "flex-start", gap: 0 },
          "display-none": { justifyContent: "flex-start", gap: 0 },
        },
      },
    },
    zindex: {
      title: "Mini o'yin: Qatlamlar minorasi",
      prompt: "Z-index ni shunday o'rnatingki, yashil blok yuqorida, sariq o'rtada, qizil pastda bo'lsin.",
      status: {
        idle: "Z-index bloklarini tanlang.",
        correct: "Barakalla! Qiymat katta bo'lsa, element yuqorida turadi.",
        incorrect: "Noto'g'ri. Vizual qatlamlar tartibini o'ylab ko'ring.",
      },
      options: [
        {
          id: "z-correct",
          label: `.item1 { z-index: 1; }
.item2 { z-index: 2; }
.item3 { z-index: 3; }`,
          isCorrect: true,
          feedback: "Z-index katta bo'lsa, qatlam yuqorida: yashil blok qolganlaridan yuqorida turadi.",
        },
        {
          id: "z-reverse",
          label: `.item1 { z-index: 3; }
.item2 { z-index: 2; }
.item3 { z-index: 1; }`,
          feedback: "Qizil blok eng katta z-index ni oladi va qolgan elementlarni qoplaydi.",
        },
        {
          id: "z-same",
          label: `.item1 { z-index: 10; }
.item2 { z-index: 10; }
.item3 { z-index: 10; }`,
          feedback: "Bir xil z-index tartibni belgilamaydi: brauzer DOM ketma-ketligini oladi.",
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
    transform: {
      title: "Mini o'yin: Aylantirish va kattalashtirish",
      prompt: "15 daraja aylantirish va 1.1 marta kattalashtirish uchun to'g'ri transform sintaksisini tanlang.",
      status: {
        idle: "To'g'ri transform variantini tanlang.",
        correct: "Ajoyib! Transform bir nechta o'zgartirishlarni bitta xossada birlashtiradi.",
        incorrect: "Noto'g'ri. Transform — bu o'zgartirish funksiyalarini qabul qiladigan bitta xossa.",
      },
      options: [
        {
          id: "transform-correct",
          label: `.card {
  transform: rotate(15deg) scale(1.1);
}`,
          isCorrect: true,
          feedback: "Transform rotate va scale ni bitta xossada birlashtiradi — bu to'g'ri sintaksis.",
        },
        {
          id: "transform-separate",
          label: `.card {
  rotate: 15deg;
  scale: 1.1;
}`,
          feedback: "Alohida rotate va scale xossalari mavjud emas — transform ishlating.",
        },
        {
          id: "transform-wrong",
          label: `.card {
  transform: rotate 15deg scale 1.1;
}`,
          feedback: "Transform da funksiyalar qavs ichida bo'lishi kerak: rotate(15deg), rotate 15deg emas.",
        },
      ],
      visual: {
        type: "box",
        initialOptionId: "transform-correct",
        variants: {
          "transform-correct": { width: 120, height: 120, background: "linear-gradient(135deg, #6366f1, #8b5cf6)", borderRadius: 12, label: "Aylantirilgan" },
          "transform-separate": { width: 120, height: 120, background: "#fee2e2", borderRadius: 12, label: "Ishlamaydi" },
          "transform-wrong": { width: 120, height: 120, background: "#fef3c7", borderRadius: 12, label: "Xato" },
        },
      },
    },
    overflow: {
      title: "Mini o'yin: Oqib chiqishni boshqarish",
      prompt: "Belgilangan balandlikdagi konteyner uchun kerak bo'lganda scroll yaratadigan overflow qaysi?",
      status: {
        idle: "To'g'ri overflow qiymatini tanlang.",
        correct: "To'g'ri! overflow: auto kontent chegaradan chiqganda scroll qo'shadi.",
        incorrect: "O'ylab ko'ring: qaysi qiymat kerak bo'lganda scroll yaratadi?",
      },
      options: [
        {
          id: "overflow-auto",
          label: `.container {
  overflow: auto;
  height: 200px;
}`,
          isCorrect: true,
          feedback: "overflow: auto kontent konteynerni to'ldirganda scroll qo'shadi.",
        },
        {
          id: "overflow-scroll",
          label: `.container {
  overflow: scroll;
  height: 200px;
}`,
          feedback: "overflow: scroll har doim scroll chiziqlarini ko'rsatadi, hatto kontent sig'sa ham.",
        },
        {
          id: "overflow-visible",
          label: `.container {
  overflow: visible;
  height: 200px;
}`,
          feedback: "overflow: visible kontentga chegaradan chiqishga ruxsat beradi, scroll yo'q.",
        },
      ],
      visual: {
        type: "box",
        initialOptionId: "overflow-auto",
        variants: {
          "overflow-auto": { width: 300, height: 150, background: "#f1f5f9", label: "Auto scroll" },
          "overflow-scroll": { width: 300, height: 150, background: "#e0e7ff", label: "Har doim scroll" },
          "overflow-visible": { width: 300, height: 150, background: "#fef3c7", label: "Visible" },
        },
      },
    },
    transition: {
      title: "Mini o'yin: Silliq o'tish",
      prompt: "Barcha xossalarni 0.3 soniyada silliq o'zgartirish uchun to'g'ri transition sintaksisini tanlang.",
      status: {
        idle: "To'g'ri transition variantini tanlang.",
        correct: "To'g'ri! Transition xossa, davomiylik va vaqt funksiyasini talab qiladi.",
        incorrect: "Sintaksisni tekshiring: transition xossa, davomiylik va vaqt funksiyasini talab qiladi.",
      },
      options: [
        {
          id: "transition-correct",
          label: `.button {
  transition: all 0.3s ease;
}`,
          isCorrect: true,
          feedback: "transition: all 0.3s ease — xossa, davomiylik va funksiya bilan to'g'ri sintaksis.",
        },
        {
          id: "transition-short",
          label: `.button {
  transition: 0.3s;
}`,
          feedback: "Xossa yetishmaydi: transition qaysi xossani animatsiya qilishni bilishi kerak.",
        },
        {
          id: "transition-wrong",
          label: `.button {
  transition: all ease 0.3s;
}`,
          feedback: "Tartib muhim: xossa, davomiylik, vaqt funksiyasi. To'g'ri: all 0.3s ease.",
        },
      ],
      visual: {
        type: "box",
        initialOptionId: "transition-correct",
        variants: {
          "transition-correct": { width: 180, height: 50, background: "#3b82f6", color: "#ffffff", borderRadius: 8, label: "Silliq" },
          "transition-short": { width: 180, height: 50, background: "#fee2e2", borderRadius: 8, label: "Ishlamaydi" },
          "transition-wrong": { width: 180, height: 50, background: "#fef3c7", borderRadius: 8, label: "Xato" },
        },
      },
    },
    animation: {
      title: "Mini o'yin: Aylanuvchi spinner",
      prompt: "1 soniyada cheksiz aylanish uchun to'g'ri animation sintaksisini tanlang.",
      status: {
        idle: "To'g'ri animation variantini tanlang.",
        correct: "Ajoyib! Animation nom, davomiylik, vaqt funksiyasi va takrorlanishni talab qiladi.",
        incorrect: "Animation kerak: animatsiya nomi, davomiylik, vaqt funksiyasi va takrorlanish soni.",
      },
      options: [
        {
          id: "animation-correct",
          label: `.spinner {
  animation: spin 1s linear infinite;
}`,
          isCorrect: true,
          feedback: "animation: spin 1s linear infinite — nom, davomiylik, funksiya va takrorlanish bilan to'g'ri sintaksis.",
        },
        {
          id: "animation-short",
          label: `.spinner {
  animation: spin;
}`,
          feedback: "Davomiylik va boshqa parametrlar yetishmaydi — animatsiya to'g'ri ishlamaydi.",
        },
        {
          id: "animation-wrong",
          label: `.spinner {
  animation: spin infinite 1s;
}`,
          feedback: "Tartib muhim: nom, davomiylik, vaqt funksiyasi, takrorlanish. To'g'ri: spin 1s linear infinite.",
        },
      ],
      visual: {
        type: "box",
        initialOptionId: "animation-correct",
        variants: {
          "animation-correct": { width: 60, height: 60, background: "conic-gradient(from 0deg, #3b82f6 0deg 90deg, #e5e7eb 90deg)", borderRadius: 30, label: "Aylanadi" },
          "animation-short": { width: 60, height: 60, background: "#fee2e2", borderRadius: 30, label: "Ishlamaydi" },
          "animation-wrong": { width: 60, height: 60, background: "#fef3c7", borderRadius: 30, label: "Xato" },
        },
      },
    },
  },
}

