# FROD Stack, Fullstack React Router + oRPC + Drizzle

A modern, full-stack JavaScript application starter built with Turborepo, React Router, oRPC, and Drizzle ORM. This monorepo provides a complete setup for building scalable web applications with a well-structured frontend and backend.

## Features

- **Monorepo Structure**: Managed with Turborepo for efficient build system and dependency management
- **Frontend**: React application with React Router v7
- **Mobile**: React Native application with Expo Router
- **Backend**: API with oRPC for type-safe API calls
- **Database**: PostgreSQL with Drizzle ORM for database operations
- **Authentication**: Built-in auth system with better-auth
- **TypeScript**: Full TypeScript support throughout the codebase

## Prerequisites

- Node.js >= 20
- npm >= 10.9.2
- PostgreSQL database

## Project Structure

```
├── apps/
│   ├── web/                # React Router frontend application
│   └── mobile/             # React Native mobile application with Expo
├── packages/
│   ├── api/                # API layer with oRPC
│   ├── auth/               # Authentication package
│   ├── database/           # Database schema and client
│   └── typescript-config/  # Shared TypeScript configurations
```

## Setup Instructions

### 1. Clone the repository

```bash
git clone <repository-url>
cd ultimate-starter-fullstack-js
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

You'll need to set up environment variables for the web application, mobile application, and the database package.

#### Web Application (.env in apps/web/)
```
POSTGRES_URL=postgres://postgres:postgres@localhost:5432/
APP_URL=http://localhost:5173
```

#### Mobile Application (.env in apps/mobile/)
```
EXPO_PUBLIC_API_URL=http://localhost:5173
```

#### Database Package (.env in packages/database/)
```
POSTGRES_URL=postgres://postgres:postgres@localhost:5432/
```

Make sure to:
1. Create `.env` files in all three directories
2. Replace the values with your actual PostgreSQL connection details
3. Adjust the APP_URL and EXPO_PUBLIC_API_URL if you're using different ports for development

### 4. Set up the database

Run the following commands to set up your database schema:

```bash
npm run database:generate  # Generate migration files
npm run database:push      # Push schema changes to the database
```

### 5. Generate auth schema

```bash
npm run auth:generate
```

## Development

Start the development server:

```bash
npm run dev
```

This will start both the frontend and backend in development mode.

## Available Scripts

- `npm run dev` - Start all applications in development mode
- `npm run build` - Build all applications
- `npm run lint` - Run linting across the codebase
- `npm run check-types` - Check TypeScript types
- `npm run database:generate` - Generate database migration files
- `npm run database:push` - Push schema changes to the database
- `npm run database:migrate` - Run database migrations
- `npm run auth:generate` - Generate authentication schema

## Building for Production

Build the application for production:

```bash
npm run build
```

You can then start the production server:

```bash
cd apps/web
npm run start
```

## Docker Support

The web application includes a Dockerfile for containerization. To build and run the Docker container:

```bash
cd apps/web
docker build -t ultimate-starter-web .
docker run -p 3000:3000 -e POSTGRES_URL=your_postgres_url ultimate-starter-web
```

## Tech Stack

- **Frontend**: React, React Router
- **Backend**: Node.js, oRPC
- **Database**: PostgreSQL, Drizzle ORM
- **Build System**: Turborepo
- **Styling**: TailwindCSS
- **Package Manager**: npm
- **Language**: TypeScript

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turborepo.com/docs/crafting-your-repository/running-tasks)
- [Caching](https://turborepo.com/docs/crafting-your-repository/caching)
- [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching)
- [Filtering](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters)
- [Configuration Options](https://turborepo.com/docs/reference/configuration)
- [CLI Usage](https://turborepo.com/docs/reference/command-line-reference)

## License

MIT
