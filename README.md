# Waitlist Landing Page

A simple landing page for collecting user emails through a waitlist signup form.

## Overview

This project provides a landing page with an integrated waitlist form. Users can sign up to join a waitlist, with their information stored in a Supabase database.

## Technology Stack

- Next.js - React framework for server-side rendering and API routes
- TypeScript - Type-safe JavaScript
- Tailwind CSS - Utility-first CSS framework
- Supabase - Backend database and authentication
- pnpm - Package manager

## Getting Started

1. Install dependencies:
   ```
   pnpm install
   ```
   
2. Set up environment variables:
   - Create a `.env.local` file with your Supabase credentials

3. Run the development server:
   ```
   pnpm dev
   ```
   
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `app/` - Next.js app directory with layout, pages, and API routes
- `components/` - Reusable React components
- `lib/` - Utility functions and Supabase configuration
- `scripts/` - Database migration scripts
