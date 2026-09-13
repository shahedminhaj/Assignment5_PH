# Dev Stack Builder
A React app for exploring and building your ideal development stack.

## Technologies Used
- React.js (Vite)
- Tailwind CSS v4
- React-Toastify
- JavaScript (ES6+)
- JSON

## Features
1. Interactive tech cards with ratings and badges
2. Your Stack sidebar with add/remove/clear
3. Toast notifications
4. Deployment-safe asset configuration

## React Questions

1. What is JSX, and why is it used in React?
JSX is HTML-like syntax in JavaScript. It makes components readable and compiles to React.createElement().

2. Difference between props and state?
Props are read-only passed from parent. State is component-owned and can change, triggering re-renders.

3. What does useState do, and where did you use it?
Holds local state. Used it for data, stack, load flag, and mobile menu toggle.

4. What does useEffect do, and why for JSON?
Runs side effects. Used it with [] dependency to fetch data.json once on mount.

5. Why does .map() need a key prop?
Helps React identify which items changed/added/removed for efficient re-rendering.

6. What is conditional rendering? Give one example.
Showing UI based on a condition. Used it in Stack: `{cnt === 0 ? <Empty /> : <List />}`.

7. How does data flow parent → child and back?
Parent passes data via props. Child calls parent's functions (passed as props) to send data back.
