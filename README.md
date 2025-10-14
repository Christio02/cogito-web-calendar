## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Project Structure

```bash
└── 📁cogito-web-calendar
    └── 📁public
        └── 📁images              # Event images, logos
    └── 📁src
        └── 📁app
            ├── 📁calendar
            │   ├── page.tsx      # Main calendar view
            │   └── layout.tsx    # Calendar-specific layout
            ├── 📁events
            │   ├── 📁[id]
            │   │   └── page.tsx  # Individual event detail page
            │   ├── page.tsx      # Events list view (optional)
            │   └── loading.tsx   # Loading state
            ├── 📁api
            │   └── 📁events
            │       └── route.ts  # API endpoint for events
            ├── favicon.ico
            ├── globals.css
            ├── layout.tsx        # Root layout
            └── page.tsx          # Homepage (redirect to calendar)
        └── 📁components
            └── 📁calendar
                ├── CalendarView.tsx
                ├── CalendarNavigation.tsx
                ├── CalendarEventItem.tsx
                ├── CalendarDay.tsx
                ├── CalendarLegend.tsx
                └── CalendarSkeleton.tsx
            └── 📁events
                ├── EventCard.tsx
                ├── EventDetailCard.tsx
                ├── EventFilters.tsx
                └── EventRegistrationButton.tsx
            └── 📁ui              # shadcn/ui components
                ├── button.tsx
                ├── card.tsx
                ├── badge.tsx
                ├── hover-card.tsx
                ├── dialog.tsx
                └── ...
        └── 📁lib
            ├── utils.ts          # cn() utility and helpers
            ├── 📁calendar
            │   ├── calendar-helpers.ts
            │   └── event-positioning.ts
            └── 📁api
                └── events.ts
        └── 📁interfaces
            ├── event.ts
            └── calendar.ts
        └── 📁hooks
            ├── use-calendar.ts
            ├── use-events.ts
            └── use-media-query.ts
        └── 📁data
            └── mock-events.ts    # Sample data for development
    ├── .env.local
    ├── .gitignore
    ├── components.json           # shadcn/ui config
    ├── eslint.config.mjs
    ├── next.config.ts
    ├── package.json
    ├── postcss.config.mjs
    ├── README.md
    └── tsconfig.json
```
