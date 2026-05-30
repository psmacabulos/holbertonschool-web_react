# TypeScript

## Overview

This project focuses on learning the fundamentals and intermediate concepts of TypeScript through practical exercises and real-world development patterns.

The objective is to understand how TypeScript improves JavaScript development by introducing static typing, better tooling, safer code architecture, and improved maintainability.

Throughout this module, the project covers:

- Basic TypeScript types
- Interfaces and object typing
- Functions and classes
- DOM manipulation with TypeScript
- Generic types
- Namespaces
- Declaration merging
- Ambient namespaces
- Basic nominal typing
- TypeScript compiler configuration

---

# Learning Objectives

At the end of this project, I should be able to explain:

- Basic types in TypeScript
- Interfaces, classes, and functions
- How to work with the DOM using TypeScript
- Generic types
- How to use namespaces
- How declaration merging works
- How to use an ambient namespace to import an external library
- Basic nominal typing in TypeScript
- TypeScript compiler configuration basics

---

# Technologies Used

- TypeScript
- JavaScript (ES6)
- Node.js
- Webpack
- Jest
- ESLint

---

# Requirements

- Ubuntu 18.04 LTS
- Node.js
- npm
- TypeScript Compiler (`tsc`)
- All files should end with a new line
- TypeScript files should use the `.ts` extension when possible
- The TypeScript compiler should compile without warnings or errors

---

# Project Structure

```text
TypeScript/
├── task_0/
├── task_1/
├── task_2/
├── task_3/
├── task_4/
├── task_5/
├── package.json
├── tsconfig.json
├── webpack.config.js
└── README.md
```

---

# Installation

Clone the repository:

```bash
git clone <repository_url>
```

Navigate into the project folder:

```bash
cd TypeScript
```

Install dependencies:

```bash
npm install
```

---

# TypeScript Compilation

Compile TypeScript files:

```bash
npx tsc
```

Or using npm scripts:

```bash
npm run build
```

---

# Running the Project

Depending on the task configuration:

```bash
npm start
```

or

```bash
npm run dev
```

---

# Running Tests

Run Jest tests:

```bash
npm test
```

---

# Important TypeScript Concepts Learned

## Static Typing

TypeScript allows errors to be caught during development instead of runtime.

---

## Interfaces

Interfaces define object contracts and improve code maintainability.

---

## Classes

Classes provide object-oriented structure with access modifiers and strong typing.

---

## Generics

Generics create reusable and type-safe components.

---

## DOM Typing

TypeScript improves safety when interacting with browser APIs and the DOM.

---

## Namespaces

Namespaces help organize code and avoid naming collisions.

---

## Declaration Merging

TypeScript can merge interfaces and declarations with the same name.

---

# Senior Engineering Notes

Key practices emphasized throughout this project:

- Prefer strict typing over `any`
- Let TypeScript inference help reduce unnecessary typing
- Use interfaces to define data structures clearly
- Use generics for reusable utilities
- Handle `null` and `undefined` safely
- Keep compiler warnings and errors at zero
- Write maintainable and predictable code

---

# Author

Patrick Macabulos

