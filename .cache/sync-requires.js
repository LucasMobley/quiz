
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/lucasmobley/Desktop/Code/codesmith/takehomes/myquizz/quiz/.cache/dev-404-page.js")),
  "component---src-pages-404-tsx": preferDefault(require("/Users/lucasmobley/Desktop/Code/codesmith/takehomes/myquizz/quiz/src/pages/404.tsx")),
  "component---src-pages-home-tsx": preferDefault(require("/Users/lucasmobley/Desktop/Code/codesmith/takehomes/myquizz/quiz/src/pages/Home.tsx")),
  "component---src-pages-index-tsx": preferDefault(require("/Users/lucasmobley/Desktop/Code/codesmith/takehomes/myquizz/quiz/src/pages/index.tsx"))
}

