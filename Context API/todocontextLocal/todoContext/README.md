# TodoContext Application

## Overview

This is a simple Todo application built using React and the Context API for state management. The app allows users to add, update, delete, and toggle the completion status of todo items. The state of the todos is managed globally using a React Context, making it easy to share and manipulate todo data across components without prop drilling.

## Folder Structure

- `src/Contexts/`: Contains the context definition and provider for managing todo state.
- `src/Componenets/`: Contains React components for the Todo form and individual Todo items.

## Features

- Add new todos.
- Edit existing todos.
- Delete todos.
- Mark todos as completed or incomplete.
- Todos are managed globally using React Context API.

## How to Use

1. Use the `TodoProvider` to wrap your application or component tree where you want to access todo state.
2. Use the `useTodo` hook to access todo state and functions (`addTodo`, `updatedTodo`, `deleteTodo`, `toggleComplete`) in your components.
3. Use the `TodoForm` component to add new todos.
4. Use the `TodoItem` component to display and interact with individual todos.

## Example

```jsx
import React from "react";
import { TodoProvider } from "./Contexts/TodoContext";
import { TodoForm, TodoItem } from "./Componenets";

function App() {
  return (
    <TodoProvider>
      <TodoForm />
      {/* Render TodoItem components for each todo */}
    </TodoProvider>
  );
}

export default App;
```
