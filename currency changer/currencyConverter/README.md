# Currency Converter

A modern, responsive currency converter web application built with React and Vite. This app allows users to convert between different currencies using real-time exchange rates fetched from a reliable API.

## 🚀 Features

- **Real-time Currency Conversion**: Fetches live exchange rates from exchangerate-api.com
- **Currency Swap**: Easily swap between "from" and "to" currencies with a single click
- **Wide Currency Support**: Supports conversion between numerous global currencies
- **Responsive Design**: Built with Tailwind CSS for a clean, mobile-friendly interface
- **Fast Performance**: Powered by Vite for quick development and build times
- **Background Image**: Aesthetic background for an enhanced user experience

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **API**: exchangerate-api.com for currency exchange rates
- **Language**: JavaScript (ES6+)

## 📦 Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/currency-converter.git
   cd currency-converter
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173` (or the port shown in the terminal).

## 🎯 Usage

1. **Enter Amount**: Input the amount you want to convert in the "From" field.
2. **Select Currencies**: Choose the source currency from the dropdown in the "From" section and the target currency in the "To" section.
3. **Convert**: The conversion happens automatically as you type or change selections. You can also click the "Convert" button.
4. **Swap Currencies**: Use the "swap" button between the input fields to quickly switch between currencies.
5. **View Result**: The converted amount will be displayed in the "To" field.

## 🔧 Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the app for production
- `npm run preview` - Previews the production build locally
- `npm run lint` - Runs ESLint to check for code issues

## 📁 Project Structure

```
currencyConverter/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── componenets/
│   │   └── Input.jsx          # Reusable input component for amount and currency selection
│   ├── hooks/
│   │   └── useCurrencyInfo.js # Custom hook for fetching currency data
│   ├── App.jsx                # Main application component
│   ├── App.css
│   ├── index.css
│   └── main.jsx               # Application entry point
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## 🌐 API Information

This application uses the [exchangerate-api.com](https://exchangerate-api.com/) API to fetch real-time currency exchange rates. The API provides:

- Latest exchange rates for all supported currencies
- Free tier with reasonable rate limits
- No API key required for basic usage

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [exchangerate-api.com](https://exchangerate-api.com/) for providing free currency exchange rate data
- [React](https://reactjs.org/) for the awesome frontend framework
- [Vite](https://vitejs.dev/) for the fast build tool
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

## 📞 Contact

If you have any questions or suggestions, feel free to open an issue or contact the maintainers.

---

**Note**: This application requires an internet connection to fetch real-time exchange rates. Make sure you're connected to the internet when using the app.
