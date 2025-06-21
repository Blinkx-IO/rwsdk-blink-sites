# Blink X Sites

A modern web application platform built with RedwoodJS SDK and React, deployed to Cloudflare Workers.

## Overview

Blink X Sites is a high-performance web application framework that leverages the power of RedwoodJS SDK and React to create fast, server-driven web applications. The platform is designed to be deployed on Cloudflare Workers, providing global distribution, low latency, and high availability.

## Technologies

- **RedwoodJS SDK**: Core framework for building server-driven applications
- **React**: UI library for building component-based interfaces
- **Cloudflare Workers**: Serverless execution environment
- **Tailwind CSS**: Utility-first CSS framework for styling
- **TypeScript**: Type-safe JavaScript for better developer experience
- **Vite**: Fast, modern frontend build tool

## Features

- Server-Side Rendering (SSR)
- React Server Components (RSC)
- Realtime capabilities
- TypeScript support
- Tailwind CSS integration

## Getting Started

### Prerequisites

- Node.js (latest LTS version recommended)
- Cloudflare account
- Wrangler CLI (`npm install -g wrangler`)

### Installation

```bash
# Clone the repository
git clone [repository-url]
cd rw-sites

# Install dependencies
npm install

# Initialize development environment
npm run dev:init
```

### Development

```bash
# Start development server
npm run dev

# Type checking
npm run types

# Generate Wrangler types
npm run generate
```

### Database Migrations

```bash
# Create a new migration
npm run migrate:new

# Apply migrations in development
npm run migrate:dev

# Apply migrations in production
npm run migrate:prd
```

### Deployment

```bash
# Build and deploy to Cloudflare Workers
npm run release
```

## Cloudflare Worker Configuration

The application requires the following Cloudflare Worker bindings to be set up:

### D1 Database

A D1 database binding named `blink_d1_db` needs to be configured in your Cloudflare account.

### Durable Objects

The application uses Durable Objects for session management:
- `SESSION_DURABLE_OBJECT`: Manages user sessions

### Assets

Static assets are served through the `ASSETS` binding.

## Configuration

Update the `wrangler.jsonc` file with your specific configuration:

1. Replace `__change_me__` with your application name
2. Configure your D1 database:
   - `database_name`: Your D1 database name
   - `database_id`: Your D1 database ID

## License

MIT

