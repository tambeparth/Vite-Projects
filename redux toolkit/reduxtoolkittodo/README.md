# Redux Toolkit Todo App

A simple and intuitive Todo application built with React, Vite, Redux Toolkit, and Tailwind CSS. This project demonstrates the fundamentals of state management using Redux Toolkit in a React application.

## Features

- **Add Todos**: Easily add new todo items with a clean input form.
- **Remove Todos**: Delete individual todos with a single click.
- **Responsive Design**: Styled with Tailwind CSS for a modern and responsive user interface.
- **Redux Toolkit Integration**: Leverages Redux Toolkit for efficient state management, including actions and reducers.

## Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool and development server.
- **Redux Toolkit**: The official, opinionated, batteries-included toolset for efficient Redux development.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **ESLint**: A tool for identifying and reporting on patterns in ECMAScript/JavaScript code.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/redux-toolkit-todo.git
   cd redux-toolkit-todo
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173` (or the port specified by Vite).

## Usage

1. Open the application in your browser.
2. Enter a todo item in the input field.
3. Click the "Add Todo" button to add it to the list.
4. To remove a todo, click the delete (trash) icon next to the item.

The app starts with a default todo: "Hello world".

## Project Structure

```
reduxtoolkittodo/
├── public/
│   └── vite.svg
├── src/
│   ├── app/
│   │   └── store.js              # Redux store configuration
│   ├── components/
│   │   ├── AddTodo.jsx           # Component for adding new todos
│   │   └── Todos.jsx             # Component for displaying and managing todos
│   ├── feature/
│   │   └── todo/
│   │       └── todoSlice.js      # Redux slice for todo state management
│   ├── App.jsx                   # Main application component
│   ├── main.jsx                  # Entry point, wraps app with Redux Provider
│   ├── index.css                 # Global styles
│   └── App.css                   # App-specific styles
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── tailwind.config.js
└── vite.config.js
```

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run lint`: Runs ESLint to check for code issues.
- `npm run preview`: Previews the production build locally.

## Redux Toolkit Overview

This project uses Redux Toolkit to manage the application state:

- **Store**: Configured in `src/app/store.js` using `configureStore`.
- **Slice**: The `todoSlice` in `src/feature/todo/todoSlice.js` defines the state, actions, and reducers for todos.
- **Actions**: `addTodo` and `removeTodo` are used to modify the state.
- **Provider**: The app is wrapped with `Provider` in `main.jsx` to make the store available throughout the component tree.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and test them.
4. Submit a pull request with a clear description of your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/)

---

Built with ❤️ using React and Redux Toolkit.
