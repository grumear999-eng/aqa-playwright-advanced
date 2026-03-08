<h1 align="center">AQA Playwright Advanced 🚀</h1>

<p align="center">
  <b>Advanced Automated Quality Assurance Project based on Playwright & TypeScript</b><br>
  <i>Modern architecture, POM, API Testing, GraphQL, and Allure Reporting</i>
</p>

---
## 📖 О проекте (About)
Этот проект представляет собой автоматизированный набор тестов для веб-приложений и API. Он использует фреймворк **Playwright** на **TypeScript** для взаимодействия с веб-страницами и сетевыми запросами. 
В проекте реализованы лучшие практики (Page Object Model), а также используются инструменты для красивой отчетности, такие как **Allure**.

This project is an automated testing suite for Web UIs and APIs. It utilizes the powerful **Playwright** framework over **TypeScript**. It implements best practices like the Page Object Model (POM) and uses **Allure** for beautiful test reporting.

## 🏗 Структура проекта (Project Structure)

- `pages/` — Классы страниц веб-приложения (Page Object Model).
- `tests/ui/` — E2E и UI тесты (например, взаимодействие с кнопками, формами).
- `tests/api/` — API тесты (REST и GraphQL).
- `playwright.config.ts` — Конфигурационный файл фреймворка.

## 🛠 Зависимости (Tech Stack)

Проект использует современный стек:
- [Playwright](https://playwright.dev/) - Фреймворк для написания E2E и API тестов.
- [TypeScript](https://www.typescriptlang.org/) - Строгая типизация для JavaScript.
- [Allure Report](https://allurereport.org/) - Инструмент для построения отчетов.

## 🚀 Как запустить проект (How to run)

### 1. Установка зависимостей (Install dependencies)
Убедитесь, что у вас установлен **Node.js**. В корневой папке проекта выполните:
```bash
npm install
```

### 2. Запуск тестов (Run tests)
Для запуска всех тестов в headless-режиме:
```bash
npx playwright test
```
*(Для запуска с открытым браузером добавьте флаг `--headed`)*

### 3. Просмотр отчета Allure (View Allure Report)
После прохождения тестов сгенерируйте и откройте отчет:
```bash
npx allure generate ./allure-results --clean
npx allure open ./allure-report
```

## 🎯 Заключение (Conclusion)
Этот проект демонстрирует применение современных инструментов для автоматизированного тестирования. Он включает в себя как UI-проверки сложных элементов (Double Click, Right Click), так и тестирование современных API (REST / GraphQL), что полностью покрывает требования к актуальным QA/AQA инженерам.
