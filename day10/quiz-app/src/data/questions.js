// ============================================================
// QUESTIONS DATA FILE
// This is where all quiz questions are stored.
// In a real app, this might come from an API (server).
// For now, we store it locally as a plain JavaScript array.
//
// Each question object has:
//   - id: unique number to identify the question
//   - question: the question text shown to the user
//   - options: array of 4 possible answers
//   - answer: the EXACT string of the correct option
//   - explanation: shown in results so user can learn
// ============================================================

export const questions = [
  {
    id: 1,
    question: "What does JSX stand for in React?",
    options: [
      "JavaScript XML",
      "Java Syntax Extension",
      "JSON XML",
      "JavaScript Extra",
    ],
    answer: "JavaScript XML",
    explanation:
      "JSX stands for JavaScript XML. It lets you write HTML-like syntax inside JavaScript files.",
  },
  {
    id: 2,
    question:
      "Which hook is used to manage state in a functional React component?",
    options: ["useEffect", "useContext", "useState", "useReducer"],
    answer: "useState",
    explanation:
      "useState is the primary hook for adding state variables to functional components.",
  },
  {
    id: 3,
    question: "What does the virtual DOM do in React?",
    options: [
      "Directly updates the browser DOM",
      "Creates a server-side copy of the DOM",
      "Compares changes and updates only what's necessary",
      "Replaces the real DOM entirely",
    ],
    answer: "Compares changes and updates only what's necessary",
    explanation:
      "The virtual DOM is a lightweight copy of the real DOM. React compares it to find minimal changes — this makes updates very fast.",
  },
  {
    id: 4,
    question: "What is a React component?",
    options: [
      "A CSS class",
      "A reusable piece of UI",
      "A JavaScript variable",
      "An HTML file",
    ],
    answer: "A reusable piece of UI",
    explanation:
      "Components are the building blocks of React apps — reusable functions that return JSX (UI).",
  },
  {
    id: 5,
    question:
      "Which method is used to pass data from a parent component to a child component?",
    options: ["State", "Context", "Props", "Refs"],
    answer: "Props",
    explanation:
      "Props (properties) flow from parent to child. They are read-only — the child cannot modify them.",
  },
  {
    id: 6,
    question: "What does useEffect do?",
    options: [
      "Manages form inputs",
      "Runs side effects after render",
      "Creates a new component",
      "Styles the component",
    ],
    answer: "Runs side effects after render",
    explanation:
      "useEffect runs code AFTER the component renders — perfect for API calls, subscriptions, or DOM manipulation.",
  },
  {
    id: 7,
    question: "In React, what triggers a re-render?",
    options: [
      "Changing a let variable",
      "Calling console.log()",
      "Updating state with useState",
      "Adding a CSS class",
    ],
    answer: "Updating state with useState",
    explanation:
      "React watches state variables. When state changes via setState, React re-renders the component to show the new UI.",
  },
  {
    id: 8,
    question: "What does 'key' prop do in a list rendered with .map()?",
    options: [
      "It styles each list item",
      "It helps React identify which items changed",
      "It adds a click event",
      "It numbers the items",
    ],
    answer: "It helps React identify which items changed",
    explanation:
      "The key prop gives each list item a unique identity so React can efficiently update only the changed items.",
  },
  {
    id: 9,
    question: "What is Vite in the context of React development?",
    options: [
      "A CSS framework",
      "A React component library",
      "A fast build tool and dev server",
      "A state management library",
    ],
    answer: "A fast build tool and dev server",
    explanation:
      "Vite is a modern build tool that starts up instantly and provides a fast dev server — much faster than older tools like Create React App.",
  },
  {
    id: 10,
    question: "Which file is the entry point for a Vite + React application?",
    options: ["App.jsx", "index.html", "main.jsx", "index.jsx"],
    answer: "main.jsx",
    explanation:
      "main.jsx is the JavaScript entry point. It mounts the <App /> component into the index.html file using ReactDOM.createRoot().",
  },
];
