# React Router Demo Project

A modern React application demonstrating client-side routing using React Router DOM. This project showcases various routing features including nested routes, dynamic parameters, and data loading with loaders.

## Features

- **Client-Side Routing**: Implemented using React Router DOM v7
- **Nested Routes**: Layout component with header, footer, and dynamic content
- **Dynamic Routing**: User page with URL parameters (`/user/:userid`)
- **Data Loading**: GitHub page fetches user data using React Router loaders
- **Responsive Design**: Styled with Tailwind CSS for mobile and desktop
- **Fast Development**: Built with Vite for quick hot module replacement (HMR)

## Tech Stack

- **React 19**: Latest version of React with modern hooks and features
- **React Router DOM 7**: For declarative routing and navigation
- **Vite**: Fast build tool and development server
- **Tailwind CSS 4**: Utility-first CSS framework for styling
- **ESLint**: Code linting and formatting

## Project Structure

```
my-project/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── About/
│   │   │   └── About.jsx
│   │   ├── Contact/
│   │   │   └── Contact.jsx
│   │   ├── Footer/
│   │   │   └── Footer.jsx
│   │   ├── Github/
│   │   │   └── Github.jsx
│   │   ├── Header/
│   │   │   └── Header.jsx
│   │   ├── Home/
│   │   │   └── Home.jsx
│   │   └── User/
│   │       └── User.jsx
│   ├── App.jsx
│   ├── Layout.jsx
│   ├── main.jsx
│   ├── index.css
│   └── App.css
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## Installation

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd my-project
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173`

## Usage

The application includes the following routes:

- **Home (`/`)**: Landing page with hero section
- **About (`/about`)**: About page
- **Contact (`/contact`)**: Contact information page
- **User (`/user/:userid`)**: Dynamic user page (replace `:userid` with any ID)
- **GitHub (`/github`)**: Displays GitHub user information fetched from the API

Navigate between pages using the header navigation or by directly entering URLs in the browser.

## API Integration

The GitHub page demonstrates React Router's loader functionality by fetching user data from the GitHub API:

- **Endpoint**: `https://api.github.com/users/tambeparth`
- **Data Displayed**: User avatar, follower count
- **Loading**: Data is pre-fetched before component renders

## Build and Deployment

To build the project for production:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Development

- **Linting**: Run `npm run lint` to check code quality
- **Hot Module Replacement**: Changes are reflected instantly during development
- **ESLint Rules**: Configured for React best practices

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- React Router DOM documentation
- Tailwind CSS for styling
- Vite for the build tooling
- GitHub API for demo data
