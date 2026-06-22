# Portfolio

A modern, responsive portfolio website built with React and TypeScript.

## Technologies

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Getting Started

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd portfolio

# Step 3: Install the necessary dependencies
npm i

# Step 4: Start the development server
npm run dev
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Contact Form Setup

The contact form submits to `/api/send-contact` so visitors stay on the site and no email app opens.

1. In Supabase, open the SQL Editor and run the SQL from `supabase/migrations`.
2. In your hosting provider, add these server environment variables:

```env
SUPABASE_URL=https://your-project-ref.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key
RESEND_API_KEY=your-resend-api-key
CONTACT_EMAIL_FROM=Portfolio Contact <contact@your-verified-domain.com>
```

Keep `SUPABASE_SERVICE_ROLE_KEY` and `RESEND_API_KEY` private. Do not use `VITE_` for these values.
