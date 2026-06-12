# Essere Zen, sito ufficiale

Sito statico per Lucia S., autrice di *Zen ai tempi dell'AI*.

**Stack:** Astro 5 + Tailwind CSS 4 + MDX
**Deploy:** Vercel (gratis)
**URL:** https://essere-zen.vercel.app

## Sviluppo locale

```bash
npm install
npm run dev
```

Apri http://localhost:4321

## Build di produzione

```bash
npm run build
npm run preview
```

I file statici finali stanno in `dist/`.

## Struttura

```
src/
  layouts/Layout.astro           # Layout principale con SEO completo
  components/
    Hero.astro                   # Sezione hero homepage
    SocialChannels.astro         # Bottoni canali social
  pages/
    index.astro                  # Homepage
    libro.astro                  # Pagina del libro
    chi-sono.astro               # Bio autrice
    blog/
      index.astro                # Lista articoli
      [...id].astro              # Pagina singolo articolo
    rss.xml.js                   # Feed RSS
  content/blog/
    *.mdx                        # Articoli del blog (modificabili)
public/
  images/
    copertina-libro.jpg          # Copertina KDP per anteprime
  favicon.svg
  robots.txt
vercel.json                      # Config Vercel (headers, cache)
```

## Aggiungere un nuovo articolo

Crea un file `src/content/blog/nome-articolo.mdx` con questa intestazione:

```yaml
---
title: "Titolo articolo"
description: "Descrizione SEO 150-160 caratteri"
pubDate: 2026-MM-DD
tags: ["zen", "altri", "tag"]
---

Contenuto in markdown...
```

Salva, fai `git push`. Vercel rebuilda automaticamente in 1-2 minuti.

## Deploy su Vercel

Vedi il file `DEPLOY.md` per le istruzioni complete passo-passo (15-20 minuti).
