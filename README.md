# RL Focus Web Application

A modern web application for RL Focus, featuring a React frontend and Node.js backend.

Demo gh-pages: https://ronaldomaiacorrea.github.io/rlfocus-webapp/

## Project Structure

```
.
├── client/             # Frontend React application
│   ├── src/
│   │   ├── components/ # React components
│   │   ├── assets/     # Static assets
│   │   ├── data/       # Data files
│   │   ├── lib/        # Utility functions
│   │   ├── pages/      # Page components
│   │   └── types/      # TypeScript type definitions
│   └── public/         # Public assets
└── server/             # Backend Node.js server
```

## Tech Stack

### Frontend

- React with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- Shadcn UI components
- React Router for navigation

### Backend

- Node.js
- Express.js

## Prerequisites

- Node.js (v18 or higher recommended)
- Yarn package manager

## Installation

1. Clone the repository:

```bash
git clone [repository-url]
```

2. Install root dependencies:

```bash
yarn install
```

3. Install client dependencies:

```bash
cd client && yarn install
```

4. Install server dependencies:

```bash
cd server && yarn install
```

## Development

### Frontend Development

```bash
cd client
yarn dev
```

This will start the development server at `http://localhost:5173`

### Backend Development

```bash
cd server
yarn start
```

This will start the server at `http://localhost:3000`

## Building for Production

### Frontend Build

```bash
cd client
yarn build
```

### Backend Build

```bash
cd server
yarn build
```

## Features

- Responsive navigation
- About us section
- Services overview
- Team member profiles
- Contact form
- Modern UI with Tailwind CSS

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
