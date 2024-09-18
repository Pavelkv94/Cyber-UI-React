const typescript = require("@rollup/plugin-typescript"); // Плагин для поддержки TypeScript в Rollup.
const postcss = require("rollup-plugin-postcss"); // Плагин для работы с CSS и SCSS, позволяющий импортировать и обрабатывать стили.
const url = require("@rollup/plugin-url"); // Плагин для обработки файлов (например, изображений), позволяющий импортировать их как URL.
const svgr = require("@svgr/rollup"); // Плагин для преобразования SVG в React-компоненты.
const terser = require("@rollup/plugin-terser"); // Плагин для минимизации JavaScript-кода, улучшая производительность.
const dts = require("rollup-plugin-dts"); // Плагин для генерации файлов деклараций TypeScript (.d.ts) для вашей библиотеки.
const packageJson = require("./package.json"); // Импорт файла package.json для доступа к метаданным проекта.

module.exports = [
  {
    input: "src/index.ts", // Основной входной файл библиотеки на TypeScript.
    output: [
      {
        file: packageJson.module, // Указание файла для сборки в формате CommonJS.
        format: "cjs", // Формат вывода: CommonJS.
      },
      {
        file: packageJson.main, // Указание файла для сборки в формате ES Module.
        format: "esm", // Формат вывода: ES Module.
      },
    ],
    external: ["react"], // 'react' не включается в сборку, так как библиотека будет использоваться в React проектах.
    plugins: [
      typescript({
        tsconfig: "./tsconfig.json", // Путь к файлу конфигурации TypeScript.
        exclude: ["**/*.stories.tsx"], // Исключение файлов с историями из компиляции.
      }),
      postcss({
        extract: "index.css", // Извлечение CSS в отдельный файл.
        modules: true, // Включение поддержки CSS-модулей.
        use: ["sass"], // Использование SASS для обработки стилей.
        minimize: true, // Минимизация CSS для уменьшения размера.
      }),
      url(), // Обработка файлов (например, изображений) и преобразование их в URL.
      svgr({ icon: true }), // Преобразование SVG в React-компоненты с поддержкой иконок.
      terser(), // Минимизация JavaScript-кода для улучшения производительности.
    ],
  },
  {
    input: "dist/esm/types/index.d.ts", // Входной файл для генерации файлов деклараций TypeScript.
    output: [{ file: packageJson.types, format: "esm" }], // Указание файла для деклараций в формате ES Module.
    external: [/\.(css|scss)$/], // Исключение файлов CSS и SCSS из сборки.
    plugins: [dts.default()], // Плагин для генерации файлов деклараций TypeScript (.d.ts).
  },
];
