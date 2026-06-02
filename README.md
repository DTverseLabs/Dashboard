# Learning Dashboard

A responsive student dashboard built with Next.js, Tailwind CSS, Supabase, Framer motion, and lucide icons

## Features

-Dark bento-style dashboard layout
-Course cards loaded from Supabase
-Responsive desktop, tablet, and mobile layouts
-Activity and streak overview cards
-Animated card interactions and progress indicators
-Loading and error states

## Stack

-Next.js App Router
-TypeScript
-Tailwind CSS
-Supabase
-Framer Motion
-Lucide React

## Setup

Install dependencies:
npm install


.env.local:
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key


Set up the database by running 'supabase-courses.sql' in the Supabase SQL editor

Start the development server:
npm run dev


Build for production:
npm run build


## Notes

Course data is fetched in the app router flow and passed into the dashboard grid
UI-only interactions are kept in client components where needed
