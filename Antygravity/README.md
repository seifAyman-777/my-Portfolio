# Seif Ayman — Copywriting Portfolio Website Package

This folder contains all production-ready files for **Seif Ayman's Direct-Response Copywriting Portfolio Website**.

---

## 📁 Package Contents

```
Antygravity/
├── index.html                        # Main HTML structure (12 sections, logo SVGs, modals)
├── styles.css                        # Complete 5-step blue design system & phone responsiveness
├── app.js                            # Spec copy modal viewer, FAQ accordion, Supabase client
├── Seif_Ayman_Portfolio_Website.zip  # Ready-to-upload zip bundle for web hosts
└── README.md                         # Deployment instructions
```

---

## 🚀 Easy Hosting Deployment Options

### Option 1: Netlify Drop (Easiest — Free & Live in 30 Seconds)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag and drop the `Seif_Ayman_Portfolio_Website.zip` file (or the folder containing `index.html`, `styles.css`, and `app.js`).
3. Netlify will instantly generate a live URL for your site!

### Option 2: Traditional Web Host (cPanel, Hostinger, GoDaddy, Bluehost)
1. Log into your hosting account control panel (cPanel / File Manager).
2. Open the `public_html` directory.
3. Upload `index.html`, `styles.css`, and `app.js` (or upload and extract `Seif_Ayman_Portfolio_Website.zip`).

### Option 3: Vercel
1. Install Vercel CLI (`npm i -g vercel`) or connect your GitHub repository to [Vercel](https://vercel.com).
2. Run `vercel` in this directory to deploy instantly.

### Option 4: GitHub Pages
1. Create a repository on GitHub (e.g. `portfolio`).
2. Push `index.html`, `styles.css`, and `app.js` to the `main` branch.
3. Go to **Repository Settings → Pages** and select `main` branch as the source.

---

## ⚡ Supabase Contact Form Table Setup SQL

Your contact form is connected to Supabase (`https://sqtsgibjdlpitpxaywgw.supabase.co`). Ensure your `contacts` table is created by running this in **Supabase Dashboard → SQL Editor**:

```sql
-- Recreate contacts table with matching website fields
create table if not exists public.contacts (
  id uuid default gen_random_uuid() primary key,
  brand_name text,
  email text,
  whatsapp_number text,
  project_description text,
  submitted_at timestamp with time zone default now()
);

-- Enable Row Level Security (RLS)
alter table public.contacts enable row level security;

-- Allow public form submissions
create policy "Allow public insert" 
  on public.contacts 
  for insert 
  to anon, authenticated 
  with check (true);
```
