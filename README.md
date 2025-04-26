# 📦 React Slot Components

[![Storybook](https://img.shields.io/badge/Storybook-Live-purple?logo=storybook&logoColor=white)](https://isilin.github.io/react-slot/)
[![Build Status](https://github.com/Isilin/react-slot/actions/workflows/deploy-storybook.yml/badge.svg)](https://github.com/Isilin/react-slot/actions/workflows/deploy-storybook.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Créez des composants React réutilisables avec des slots simples, typés et puissants.**

---

## 🗺️ Table des matières

- [📦 React Slot Components](#-react-slot-components)
  - [🗺️ Table des matières](#️-table-des-matières)
  - [🧪 Tester le projet](#-tester-le-projet)
    - [🛠️ Prérequis](#️-prérequis)
    - [📚 Installer et lancer Storybook](#-installer-et-lancer-storybook)
  - [🧩 Le Pattern "Slot" en React](#-le-pattern-slot-en-react)
    - [📘 Pourquoi utiliser des slots ?](#-pourquoi-utiliser-des-slots-)
    - [📦 Exemple : Composant `Card` avec slots](#-exemple--composant-card-avec-slots)
    - [🧪 Utilisation](#-utilisation)
  - [📚 Ressources complémentaires](#-ressources-complémentaires)
  - [☕ Soutenir ce projet](#-soutenir-ce-projet)
  - [🪪 Licence](#-licence)
  - [🤝 Contribuer](#-contribuer)

---

## 🧪 Tester le projet

### 🛠️ Prérequis

- Node.js (version recommandée : >=18.x)
- Yarn ou npm

### 📚 Installer et lancer Storybook

```bash
npm install
npm run dev
# ou
yarn install
yarn dev
```

Cela ouvrira Storybook sur [http://localhost:6006](http://localhost:6006).

## 🧩 Le Pattern "Slot" en React

Le pattern de slot est une approche inspirée des bibliothèques avancées comme [Radix UI](https://www.radix-ui.com/) et [Headless UI](https://headlessui.dev/). Il permet d’insérer dynamiquement du contenu dans un composant, tout en conservant une structure et une logique encapsulée.

### 📘 Pourquoi utiliser des slots ?

- D'avoir une API claire et déclarative
- D'offrir une flexibilité totale aux utilisateurs du composant
- D'ajouter ou retirer des parties optionnelles sans casser le composant
- Séparer structure et contenu
- Créer des composants réutilisables et composables
- Fournir des points d'injection explicites pour le contenu

### 📦 Exemple : Composant `Card` avec slots

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

### 🧪 Utilisation

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

Sous le capot, chaque slot (`Header`, `Footer`, `Content`, etc.) est automatiquement détecté et positionné au bon endroit.

## 📚 Ressources complémentaires

- [React Composition Patterns – Kent C. Dodds](https://kentcdodds.com/blog/compound-components-with-react-hooks)
- [What is the React Slots pattern ? - Neetigya Chahar](https://dev.to/neetigyachahar/what-is-the-react-slots-pattern-2ld9)
- [Concevoir vos composants React avec des slots multiples - Maxime Steinhausser](https://www.elao.com/blog/dev/react-component-slots)
- [Building Component Slots in React - Sandro Roth](https://sandroroth.com/blog/react-slots/)
- [Storybook Docs](https://storybook.js.org/docs/react/get-started/introduction)

N’hésite pas à tester le composant dans Storybook pour mieux comprendre comment les slots sont utilisés !

## ☕ Soutenir ce projet

Si vous aimez ce projet, vous pouvez me soutenir sur Ko-fi ❤️

[![Soutenir sur Ko-fi](https://img.shields.io/badge/Soutenir_sur_Ko--fi-F96400?logo=kofi&logoColor=white)](https://ko-fi.com/isilin)

## 🪪 Licence

Ce projet est sous licence [MIT](https://opensource.org/licenses/MIT).

## 🤝 Contribuer

Les contributions sont les bienvenues !  
N'hésitez pas à ouvrir une issue ou soumettre une pull request.
