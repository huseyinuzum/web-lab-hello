# Portfolio UI Kit

Welcome to the Portfolio UI Kit project! This project is designed to create a modern, accessible portfolio website and a UI component library using React, Vite, and Tailwind CSS.

## Project Structure

The project is organized as follows:

```
portfolio-ui-kit
├── public
│   └── favicon.svg          # Favicon for the portfolio website
├── src
│   ├── assets
│   │   └── index.ts         # Entry point for assets
│   ├── components
│   │   ├── ui
│   │   │   ├── Button.tsx   # Button component with variants and sizes
│   │   │   ├── Card.tsx     # Card component with hover effects
│   │   │   └── index.ts     # Exports for UI components
│   │   ├── layout
│   │   │   ├── Header.tsx    # Header component with sticky navigation
│   │   │   ├── Footer.tsx    # Footer component
│   │   │   └── index.ts      # Exports for layout components
│   │   └── index.ts         # Exports all components
│   ├── pages
│   │   ├── Home.tsx         # Main Home component
│   │   ├── About.tsx        # About component with profile and tech tags
│   │   ├── Projects.tsx      # Projects component with a grid of Cards
│   │   ├── Contact.tsx       # Contact component with a form
│   │   └── index.ts         # Exports all page components
│   ├── styles
│   │   └── tailwind.css     # Tailwind CSS styles and custom theme
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Entry point of the application
│   └── types
│       └── index.ts         # TypeScript types used in the project
├── .gitignore               # Files and directories to ignore by Git
├── index.html               # Main HTML file for the application
├── package.json             # Project metadata and dependencies
├── postcss.config.js        # PostCSS configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # Project documentation
```

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   cd portfolio-ui-kit
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to see your portfolio in action.

## Components

This project includes a variety of reusable components:

- **Button**: A customizable button component with different variants and sizes.
- **Card**: A card component that displays content with hover effects.
- **Header**: A sticky header for navigation.
- **Footer**: A footer for additional information.

## Pages

The portfolio includes several pages:

- **Home**: The main landing page.
- **About**: A page to showcase personal information and skills.
- **Projects**: A page to display projects in a grid layout.
- **Contact**: A page with a contact form.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.