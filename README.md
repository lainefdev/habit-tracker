# 🔥 Streaks — Habit Tracker

Aplicativo de rastreamento de hábitos com sistema de streaks diários.

## 🖥️ Demo

> [habit-tracker-iota-green.vercel.app](https://habit-tracker-iota-green.vercel.app/)

## ✨ Funcionalidades

- Adicionar hábitos com ícone e cor personalizados
- Marcar hábito como concluído no dia atual
- Visualizar os últimos 7 dias de cada hábito
- Streak automático de dias consecutivos
- Dados salvos localmente no navegador

## 🛠️ Tecnologias

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- localStorage para persistência de dados

## 🚀 Como rodar localmente

```bash
git clone https://github.com/lainefdev/habit-tracker.git
cd habit-tracker
npm install
npm run dev
```

Acesse `http://localhost:5173` no browser.

## 📁 Estrutura do projeto

```
src/
  components/
    HabitCard.tsx       # Card individual de cada hábito
    AddHabitModal.tsx   # Modal de criação de hábito
  hooks/
    useHabits.ts        # Lógica de hábitos e streaks
  types/
    index.ts            # Tipos TypeScript
  App.tsx               # Componente principal
```

## 👩‍💻 Autora

Feito por [Laíne Ferreira](https://linkedin.com/in/laineferreira)