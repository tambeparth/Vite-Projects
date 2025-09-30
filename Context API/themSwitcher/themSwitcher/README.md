# Theme Switcher App

## Overview

The **Theme Switcher App** is a modern React application that demonstrates the implementation of a light/dark theme toggle functionality. This project addresses the growing need for customizable user interfaces that allow users to switch between light and dark modes based on their preferences, improving accessibility, reducing eye strain, and enhancing overall user experience.

### Problem Solved

In today's web applications, users increasingly expect the ability to customize their viewing experience. Many users prefer dark modes for:

- **Reduced eye strain**: Especially in low-light environments or during nighttime usage
- **Battery savings**: On OLED screens, dark themes can significantly reduce power consumption
- **Accessibility**: Better contrast ratios for users with visual impairments
- **Personal preference**: Some users simply find dark themes more aesthetically pleasing

However, implementing theme switching can be challenging due to:

- **State management**: Maintaining theme state across the application
- **CSS complexity**: Managing different styles for light and dark variants
- **Persistence**: Remembering user preferences across sessions
- **Performance**: Efficiently applying theme changes without re-rendering the entire app

This project provides a clean, efficient solution using React Context API and Tailwind CSS's built-in dark mode support.

## Features

- ✅ **Seamless Theme Switching**: Toggle between light and dark themes with a single click
- ✅ **Persistent State**: Theme state is maintained throughout the app lifecycle
- ✅ **Responsive Design**: Works across different screen sizes
- ✅ **Accessible UI**: Proper contrast ratios and semantic HTML
- ✅ **Modern Stack**: Built with React 19, Vite, and Tailwind CSS 4
- ✅ **Context-Based Architecture**: Clean separation of concerns using React Context

## Technology Stack

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.7
- **Styling**: Tailwind CSS 4.1.13
- **State Management**: React Context API
- **Language**: JavaScript (ES6+)
- **Development Tools**: ESLint, Vite plugins

## Project Structure

```
themSwitcher/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Card.jsx          # Sample component demonstrating theme effects
│   │   └── ThemeBtn.jsx      # Theme toggle button component
│   ├── contexts/
│   │   └── them.js           # Theme context and provider
│   ├── App.jsx               # Main application component
│   ├── App.css               # Application-specific styles
│   ├── index.css             # Global styles and Tailwind imports
│   └── main.jsx              # Application entry point
├── package.json              # Project dependencies and scripts
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind CSS configuration
└── README.md                 # This file
```

## Installation and Setup

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone or navigate to the project directory**:

   ```bash
   cd themSwitcher/themSwitcher
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173` (or the port shown in the terminal)

### Available Scripts

- `npm run dev` - Start the development server with hot reload
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code issues

## How It Works

### Architecture Overview

The theme switching functionality is implemented using a combination of React Context API for state management and Tailwind CSS's class-based dark mode strategy.

#### 1. Theme Context (`src/contexts/them.js`)

The theme context provides a centralized way to manage theme state across the application:

```javascript
import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
  return useContext(ThemeContext);
}
```

- **ThemeContext**: Defines the shape of the theme context with default values
- **ThemeProvider**: Provides the context to child components
- **useTheme**: Custom hook for consuming the theme context

#### 2. Main Application (`src/App.jsx`)

The App component manages the theme state and applies the theme class to the HTML document:

```javascript
import { useState, useEffect } from "react";
import { ThemeProvider } from "./contexts/them";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };

  // Apply theme class to HTML element
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
```

**Key Points**:

- `themeMode` state tracks current theme ("light" or "dark")
- `lightTheme` and `darkTheme` functions update the state
- `useEffect` applies the theme class to the `<html>` element when theme changes
- `ThemeProvider` wraps the app to provide theme context to all components

#### 3. Theme Toggle Button (`src/components/ThemeBtn.jsx`)

The ThemeBtn component renders a toggle switch that allows users to change themes:

```javascript
import React from "react";
import useTheme from "../contexts/them";

export default function ThemeBtn() {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked;
    if (darkModeStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        onChange={onChangeBtn}
        checked={themeMode === "dark"}
      />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      <span className="ml-3 text-sm font-medium text-gray-900">
        Toggle Theme
      </span>
    </label>
  );
}
```

**Key Points**:

- Uses `useTheme` hook to access theme context
- Checkbox input is visually hidden (`sr-only`)
- Styled div creates the toggle switch appearance using Tailwind classes
- `checked` attribute syncs with `themeMode` state
- `onChange` handler calls appropriate theme function

#### 4. Sample Component (`src/components/Card.jsx`)

The Card component demonstrates how themes affect UI elements:

```javascript
import React from "react";

export default function Card() {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {/* Card content with theme-aware classes */}
    </div>
  );
}
```

**Key Points**:

- Uses Tailwind's `dark:` prefix for dark mode styles
- Background, borders, and text colors change based on theme
- No JavaScript logic needed - purely CSS-based theming

#### 5. Tailwind Configuration (`tailwind.config.js`)

```javascript
export default {
  darkMode: "class",
};
```

- Configures Tailwind to use class-based dark mode detection
- Matches the class applied to `<html>` element

#### 6. Global Styles (`src/index.css`)

```css
@import "tailwindcss";

:root {
  /* Base styles */
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
}

@media (prefers-color-scheme: dark) {
  :root {
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;
  }
}
```

- Imports Tailwind CSS
- Provides fallback styles based on system preference
- Ensures proper color schemes for different themes

## Usage Guide

### Basic Usage

1. **Start the application** using `npm run dev`
2. **Locate the toggle switch** in the top-right corner of the page
3. **Click the toggle** to switch between light and dark themes
4. **Observe the changes** in the card component below

### Extending the Theme System

#### Adding New Theme Variants

To add more themes (e.g., "blue", "green"):

1. **Update the context** (`src/contexts/them.js`):

   ```javascript
   export const ThemeContext = createContext({
     themeMode: "light",
     darkTheme: () => {},
     lightTheme: () => {},
     blueTheme: () => {},
     // ... other themes
   });
   ```

2. **Add state and functions** in `App.jsx`:

   ```javascript
   const [themeMode, setThemeMode] = useState("light");

   const blueTheme = () => setThemeMode("blue");
   ```

3. **Update Tailwind config** for additional themes if needed.

#### Customizing Existing Themes

Modify the Tailwind classes in components to change theme appearance:

```jsx
// Before
<div className="bg-white dark:bg-gray-800">

// After
<div className="bg-white dark:bg-black">
```

### Integrating with Other Components

To use the theme in your own components:

```jsx
import useTheme from "../contexts/them";

function MyComponent() {
  const { themeMode } = useTheme();

  return (
    <div className={themeMode === "dark" ? "dark-styles" : "light-styles"}>
      {/* Component content */}
    </div>
  );
}
```

## Advanced Features and Considerations

### Performance Optimization

- **Context Optimization**: The theme context is lightweight and doesn't cause unnecessary re-renders
- **CSS-in-JS**: Tailwind's utility classes ensure minimal CSS bundle size
- **Selective Updates**: Only components using `useTheme` re-render on theme changes

### Accessibility

- **Semantic HTML**: Proper use of `<label>` and `<input>` for screen readers
- **Keyboard Navigation**: Toggle is keyboard accessible
- **Color Contrast**: Tailwind's default color palette ensures WCAG compliance
- **System Preference**: Respects user's system dark mode preference

### Browser Support

- **Modern Browsers**: Full support for ES6+ features
- **CSS Custom Properties**: Not used, ensuring broad compatibility
- **Class Manipulation**: Uses standard DOM APIs

### Potential Improvements

1. **Persistence**: Save theme preference to localStorage

   ```javascript
   useEffect(() => {
     const savedTheme = localStorage.getItem("theme") || "light";
     setThemeMode(savedTheme);
   }, []);

   useEffect(() => {
     localStorage.setItem("theme", themeMode);
   }, [themeMode]);
   ```

2. **System Theme Detection**: Auto-detect user's system preference

   ```javascript
   useEffect(() => {
     const prefersDark = window.matchMedia(
       "(prefers-color-scheme: dark)"
     ).matches;
     setThemeMode(prefersDark ? "dark" : "light");
   }, []);
   ```

3. **Smooth Transitions**: Add CSS transitions for theme changes

   ```css
   * {
     transition: background-color 0.3s ease, color 0.3s ease;
   }
   ```

4. **Theme Variants**: Support for multiple color schemes beyond light/dark

5. **Component Library**: Create reusable themed components

## Troubleshooting

### Common Issues

1. **Theme not applying**: Ensure `darkMode: 'class'` in `tailwind.config.js`
2. **Styles not updating**: Check that `<html>` element has the correct class
3. **Context not working**: Verify `ThemeProvider` wraps the component tree

### Development Tips

- Use browser dev tools to inspect the `<html>` class
- Check console for any React context errors
- Test with different Tailwind classes to customize themes

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Conclusion

The Theme Switcher App demonstrates a robust, scalable approach to implementing theme switching in React applications. By leveraging React Context API and Tailwind CSS's dark mode features, it provides a clean architecture that separates concerns and promotes reusability.

The implementation is:

- **Performant**: Minimal re-renders and efficient state management
- **Accessible**: Proper semantic HTML and keyboard navigation
- **Maintainable**: Clean code structure with clear separation of concerns
- **Extensible**: Easy to add new themes or customize existing ones

This pattern can be easily integrated into larger applications and serves as a solid foundation for more complex theming systems.
