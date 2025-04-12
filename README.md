# 📦 Librairie de Composants React (Pattern Slot)

Bienvenue dans cette librairie de composants React ! Ce projet utilise le **pattern de slot** pour une composition flexible et puissante des interfaces utilisateur.

---

## 🧪 Tester le projet

### 🛠️ Prérequis

- Node.js (version recommandée : >=18.x)
- Yarn ou npm

### 📥 Installation

```bash
npm install
# ou
yarn install
```

### ✅ Vérifier le formatage

```bash
npm run format
# ou
yarn format
```

Pour corriger automatiquement les erreurs de formatage :

```bash
npm run format:fix
# ou
yarn format:fix
```

### 🧹 Linter (ESLint)

```bash
npm run lint
# ou
yarn lint
```

### 📚 Lancer Storybook

```bash
npm run storybook
# ou
yarn storybook
```

Cela ouvrira Storybook sur [http://localhost:6006](http://localhost:6006), avec tous les composants de la librairie.

---

## 🧩 Le Pattern "Slot" en React

Le **pattern de slot** est une approche inspirée du système de "slots" de Web Components ou de frameworks comme Vue ou Svelte. Il permet d’insérer dynamiquement du contenu dans un composant, tout en conservant une structure et une logique encapsulée.

### 📘 Pourquoi utiliser des slots ?

- Séparer **structure** et **contenu**
- Créer des **composants réutilisables** et **composables**
- Fournir des **points d'injection explicites** pour le contenu

### 📦 Exemple : Composant `Card` avec slots

```tsx
// Card.tsx
import { findSlotOfType } from '../../utils/slot';
import { ReactNode } from 'react';

export const Card = ({ children }: { children: React.ReactNode }) => {
  const header = findSlotOfType(children, Card.Header);
  const body = findSlotOfType(children, Card.Body);
  const footer = findSlotOfType(children, Card.Footer);

  return (
    <div className={cx('card')}>
      {header && <div>{header}</div>}
      {body && <div>{body}</div>}
      {footer && <div>{footer}</div>}
    </div>
  );
};

Card.Header = ({ children }: { children: React.ReactNode }) => <>{children}</>;
Card.Body = ({ children }: { children: React.ReactNode }) => <>{children}</>;
Card.Footer = ({ children }: { children: React.ReactNode }) => <>{children}</>;
```

### 🧪 Utilisation

```tsx
// App.tsx
export const App = () => {
  return (
    <Card>
      <Card.Header>
        <h2 className="text-lg font-bold">Titre</h2>
      </Card.Header>
      <Card.Body>
        <p>Contenu principal de la carte</p>
      </Card.Body>
      <Card.Footer>
        <p className="italic">Pied de carte</p>
      </Card.Footer>
    </Card>
  );
};
```

---

## 📚 Ressources complémentaires

- [React Composition Patterns – Kent C. Dodds](https://kentcdodds.com/blog/compound-components-with-react-hooks)
- [What is the React Slots pattern ? - Neetigya Chahar](https://dev.to/neetigyachahar/what-is-the-react-slots-pattern-2ld9)
- [Concevoir vos composants React avec des slots multiples - Maxime Steinhausser](https://www.elao.com/blog/dev/react-component-slots)
- [Building Component Slots in React - Sandro Roth](https://sandroroth.com/blog/react-slots/)
- [Storybook Docs](https://storybook.js.org/docs/react/get-started/introduction)

---

N’hésite pas à tester le composant dans Storybook pour mieux comprendre comment les slots sont utilisés !
