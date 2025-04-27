# 📦 React Slot Components

[![npm version](https://img.shields.io/npm/v/@isilin/react-slot?color=blue)](https://www.npmjs.com/package/@isilin/react-slot)
[![npm downloads](https://img.shields.io/npm/dm/@isilin/react-slot)](https://www.npmjs.com/package/@isilin/react-slot)
[![Storybook](https://img.shields.io/badge/Storybook-Live-purple?logo=storybook&logoColor=white)](https://isilin.github.io/react-slot/)
[![Build Status](https://github.com/Isilin/react-slot/actions/workflows/deploy-storybook.yml/badge.svg)](https://github.com/Isilin/react-slot/actions/workflows/deploy-storybook.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Create reusable React components with simple, typed, and powerful slots.**

---

## 🗺️ Table of Contents

- [📦 React Slot Components](#-react-slot-components)
  - [🗺️ Table of Contents](#️-table-of-contents)
  - [🧪 Try the Project](#-try-the-project)
    - [🛠️ Prerequisites](#️-prerequisites)
    - [📚 Install and Run Storybook](#-install-and-run-storybook)
  - [🧩 The "Slot" Pattern in React](#-the-slot-pattern-in-react)
    - [📘 Why Use Slots?](#-why-use-slots)
    - [📦 Example: `Card` Component with Slots](#-example-card-component-with-slots)
    - [🧪 Usage](#-usage)
  - [📚 Additional Resources](#-additional-resources)
  - [☕ Support this Project](#-support-this-project)
  - [🪪 Licence](#-licence)
  - [🤝 Contributing](#-contributing)

---

## 🧪 Try the Project

### 🛠️ Prerequisites

- Node.js (recommended version: >=18.x)
- Yarn or npm

### 📚 Install and Run Storybook

```bash
npm install
npm run dev
# ou
yarn install
yarn dev
```

This will open Storybook at [http://localhost:6006](http://localhost:6006).

## 🧩 The "Slot" Pattern in React

The slot pattern is an approach inspired by advanced libraries like [Radix UI](https://www.radix-ui.com/) and [Headless UI](https://headlessui.dev/). It allows dynamic content injection into a component while preserving structure and encapsulated logic.

### 📘 Why Use Slots?

- Build a clear and declarative API
- Offer complete flexibility to component users
- Add or remove optional parts without breaking the component
- Separate structure from content
- Create reusable and composable components
- Provide explicit injection points for content

### 📦 Example: `Card` Component with Slots

```tsx
// Card.tsx
import { PropsWithChildren } from 'react';
import { defineSlotComponent, getSlots } from '../../lib';

import classNames from 'classnames/bind';
import styles from './Card.module.css';
const cx = classNames.bind(styles);

export const Card = defineSlotComponent(
  ({ children }: PropsWithChildren) => {
    const { body, footer, header } = getSlots(children, Card);

    return (
      <div className={cx('card')}>
        {header && <div className={cx('card-header')}>{header}</div>}
        {header && (body || footer) && <Card.Separator />}
        {body && <div className={cx('card-body')}>{body}</div>}
        {body && footer && <Card.Separator />}
        {footer && <div className={cx('card-footer')}>{footer}</div>}
      </div>
    );
  },
  {
    slots: {
      header: ({ children }: PropsWithChildren) => <>{children}</>,
      body: ({ children }: PropsWithChildren) => <>{children}</>,
      footer: ({ children }: PropsWithChildren) => <>{children}</>,
    },
    extras: {
      Separator: () => <span className={cx('separator')} />,
    },
  },
);
```

### 🧪 Usage

```tsx
// App.tsx
export const App = () => {
  return (
    <Card>
      <Card.Header>Ma jolie carte</Card.Header>
      <Card.Body>
        Ceci est le contenu principal de la carte. Tu peux y mettre n'importe
        quoi : du texte, des images, ou même d'autres composants.
      </Card.Body>
      <Card.Footer>Dernière mise à jour : aujourd’hui.</Card.Footer>
    </Card>
  );
};
```

Under the hood, each slot (`Header`, `Footer`, `Content`, etc.) is automatically detected and placed in the right structure.

## 📚 Additional Resources

- [React Composition Patterns – Kent C. Dodds](https://kentcdodds.com/blog/compound-components-with-react-hooks)
- [What is the React Slots pattern ? - Neetigya Chahar](https://dev.to/neetigyachahar/what-is-the-react-slots-pattern-2ld9)
- [Concevoir vos composants React avec des slots multiples - Maxime Steinhausser](https://www.elao.com/blog/dev/react-component-slots)
- [Building Component Slots in React - Sandro Roth](https://sandroroth.com/blog/react-slots/)
- [Storybook Docs](https://storybook.js.org/docs/react/get-started/introduction)

Feel free to explore the component live in Storybook to better understand how the slots are used!

## ☕ Support this Project

If you like this project, you can support me on Ko-fi ❤️

[![Soutenir sur Ko-fi](https://img.shields.io/badge/Soutenir_sur_Ko--fi-F96400?logo=kofi&logoColor=white)](https://ko-fi.com/isilin)

## 🪪 Licence

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## 🤝 Contributing

Contributions are welcome!
Feel free to open an issue or submit a pull request.

---

[![Made with Love](https://img.shields.io/badge/Made%20with-%E2%9D%A4-red)](https://github.com/Isilin) by [Isilin](https://github.com/Isilin)
