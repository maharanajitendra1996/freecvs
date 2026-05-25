# ResumeForge — Free Resume Template Website

50 free resume templates, unlimited PDF & DOC downloads. **No sign-up required.**

## Open in VS Code

1. Open VS Code → **File → Open Folder** → select the `resume` folder
2. Install recommended extensions when prompted (or see `.vscode/extensions.json`)
3. Open terminal (**Ctrl + `**) and run:

```bash
npm install
npm run dev
```

4. Open **http://localhost:3000** in your browser

## VS Code shortcuts

| Action | How |
|--------|-----|
| Run dev server | Terminal → `npm run dev` or **F5** (debug launch) |
| Build for production | `npm run build` |
| Open site | **Ctrl+Click** the `http://localhost:3000` link in terminal |

## Project structure

```
resume/
├── .vscode/              # VS Code settings (extensions, launch, tasks)
├── src/
│   ├── app/              # Pages (home, templates, editor, legal)
│   ├── components/       # UI, resume preview, ads
│   ├── data/templates.ts # 50 template definitions
│   ├── lib/export.ts     # PDF & DOC download
│   ├── store/            # Resume draft (saved in browser)
│   └── types/
├── public/
├── package.json
└── README.md
```

## Features

- 50 templates in 9 categories
- Live editor with instant preview
- Unlimited PDF and Word (.docx) downloads
- Draft auto-saved in browser (localStorage)
- AdSense-ready (optional — set env var)

## Optional: Google AdSense

Copy `.env.example` to `.env.local` and add your publisher ID:

```env
NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-xxxxxxxxxxxxxxxx
```

## Deploy

```bash
npm run build
npm start
```

Deploy to [Vercel](https://vercel.com) or any Node.js host.

## Edit templates

All 50 templates are defined in `src/data/templates.ts`. Each has colors, layout, and category.

## License

MIT
