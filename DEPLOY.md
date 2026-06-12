# Guida deploy, Essere Zen su Vercel

Tempo stimato: **15-20 minuti**. Costo: **0 €**, gratis a vita per progetti hobby/personali.

Il deploy si fa in 4 fasi: (1) test locale, (2) crei repository GitHub, (3) colleghi GitHub a Vercel, (4) Vercel fa il deploy automatico ogni volta che modifichi un file.

URL finale: `https://essere-zen.vercel.app` (o un nome simile, lo decidi tu).

---

## FASE 1, Test locale (5 minuti)

Apri il **Prompt dei comandi** (Windows) o **Terminale** (Mac). Vai nella cartella del sito:

```bash
cd "C:\Users\fabio\Documents\Claude\Projects\progetto essere zen\sito_web"
```

Installa le dipendenze (una volta sola):

```bash
npm install
```

Tempo stimato: 2-3 minuti. Vedrai scorrere righe di installazione, poi un "added ~350 packages".

Avvia il server di sviluppo:

```bash
npm run dev
```

Apre il sito su `http://localhost:4321`. Aprilo in Chrome o Firefox e controlla:
- Homepage con copertina del libro
- Pagina Libro (clicca "Il libro" in alto)
- Pagina Blog con i 3 articoli
- Click su un articolo, deve aprirsi
- Pagina Chi sono
- Link Amazon funzionante (apre la pagina del libro su Amazon)

Quando hai finito di testare, premi `Ctrl+C` nel terminale per fermare il server.

---

## FASE 2, Repository GitHub (5 minuti)

GitHub è un servizio gratuito dove conservi il codice del sito online. Vercel lo legge da lì per fare il deploy automatico.

### Step 2.1, Crea account GitHub (se non ce l'hai)

Vai su https://github.com/signup, crea un account con la tua email.

### Step 2.2, Crea un nuovo repository

Una volta loggata:

1. Clicca il **+** in alto a destra → **New repository**
2. Compila:
   - **Repository name**: `essere-zen-sito`
   - **Description**: `Sito di Lucia S., autrice di Zen ai tempi dell'AI`
   - **Visibility**: scegli **Public** (gratis senza limiti)
   - **NON spuntare** "Add a README" (ne abbiamo già uno)
3. Clicca **Create repository**

GitHub ti mostrerà una pagina con dei comandi. Tieni questa pagina aperta, ti serviranno.

### Step 2.3, Carica il codice su GitHub

Torna nel terminale, dentro la cartella `sito_web`. Esegui questi comandi uno alla volta:

```bash
git init
git add .
git commit -m "Primo deploy sito Essere Zen"
git branch -M main
git remote add origin https://github.com/TUOUSERNAME/essere-zen-sito.git
git push -u origin main
```

⚠️ **Sostituisci `TUOUSERNAME`** con il tuo nome utente GitHub vero.

Al primo `git push` ti chiederà la password. **NON usare la password normale**: GitHub vuole un *Personal Access Token*.

- Vai su https://github.com/settings/tokens/new
- Note: `essere-zen-deploy`
- Expiration: `90 days`
- Spunta `repo` (la prima opzione)
- Clicca **Generate token** in fondo
- **COPIA il token** che ti mostra (è una stringa lunga tipo `ghp_xxxxxxx`)
- Tornata nel terminale, quando chiede password, **incolla il token**

Al termine vedrai "Branch 'main' set up to track 'origin/main'". Il codice è online.

---

## FASE 3, Collegare Vercel (5 minuti)

### Step 3.1, Crea account Vercel

Vai su https://vercel.com/signup

**Scegli "Continue with GitHub"**. È la via più rapida: Vercel si collega automaticamente al tuo GitHub appena creato. Autorizza l'accesso quando te lo chiede.

Al primo login Vercel ti chiede:
- **What's your name?** → Lucia S.
- **Your hobby project?** → spunta "Personal" (è gratis)
- Salta la parte sui team

### Step 3.2, Importa il repository

Una volta loggata:

1. Dalla dashboard Vercel, clicca **Add New...** → **Project**
2. Vedrai la lista dei tuoi repository GitHub. Trova `essere-zen-sito` e clicca **Import**

Se non vedi il repository:
- Clicca **Adjust GitHub App Permissions**
- Aggiungi `essere-zen-sito` ai repository autorizzati
- Torna su Vercel e ricarica

### Step 3.3, Configurazione build

Vercel **rileva automaticamente che è un progetto Astro** e pre-compila i campi. Verifica solo che sia così:

| Campo | Valore |
|---|---|
| Project name | `essere-zen` |
| Framework Preset | `Astro` (auto-rilevato) |
| Build Command | `npm run build` (auto) |
| Output Directory | `dist` (auto) |
| Install Command | `npm install` (auto) |
| Root Directory | `.` (lascia così) |

Sotto **Environment Variables** lascia vuoto.

Clicca **Deploy**.

Vercel avvia il primo build. Tempo: 1-3 minuti. Vedrai scorrere i log:
1. Cloning repository
2. Installing dependencies (npm install)
3. Running build command (astro build)
4. Uploading build outputs
5. **Build Completed in [tempo]**

### Step 3.4, Il tuo sito è online!

Vercel ti mostra una schermata di **congratulazioni con anteprima del sito**. L'URL è:

**https://essere-zen.vercel.app**

(Oppure `essere-zen-xxxxx.vercel.app` se `essere-zen` è già preso, in tal caso Vercel aggiunge un suffisso random.)

**Clicca sull'URL nell'anteprima**. Il sito è live, accessibile da tutto il mondo, con HTTPS gratuito automatico.

### Step 3.5, Cambia il nome del dominio (opzionale)

Se l'URL che Vercel ti ha dato non ti piace (es. `essere-zen-abc123.vercel.app`):

1. Vai sulla dashboard del progetto Vercel
2. Tab **Settings** → **Domains**
3. Vedi `essere-zen-abc123.vercel.app` (è il default)
4. Clicca **Edit** accanto al nome
5. Cambialo in qualcosa che ti piace, es. `essere-zen`, `lucia-s`, `zen-tempi-ai`, ecc.
6. Vercel verifica che sia libero e te lo assegna

Il nuovo URL sarà tipo `https://lucia-s.vercel.app`.

⚠️ **Se cambi nome dopo aver dato in giro l'URL vecchio**, Vercel mantiene il vecchio attivo per un po', ma ricordati di comunicare il nuovo dove serve.

---

## FASE 4, Modifiche e aggiornamenti

Da ora in poi, ogni volta che vuoi modificare qualcosa (aggiungere un articolo, cambiare un testo):

1. Modifica i file nella tua cartella locale `sito_web`
2. Apri il terminale, vai dentro `sito_web`
3. Esegui:

```bash
git add .
git commit -m "Descrizione modifica"
git push
```

4. Vercel rileva la modifica e ricostruisce il sito automaticamente in 1-2 minuti.

Niente FTP, niente deploy manuali. Tutto automatico.

**Bonus Vercel**: ogni volta che fai push, Vercel crea anche un **preview URL** unico per quella modifica. Puoi vedere il sito col cambio prima che vada in produzione. Molto comodo per testare un nuovo articolo prima di pubblicarlo.

---

## Bonus, dominio personalizzato (€10/anno)

Quando vorrai un dominio tipo `esserezen.it` invece di `essere-zen.vercel.app`:

1. Compra il dominio su https://www.namecheap.com o https://www.aruba.it (~€10-15/anno)
2. Su Vercel → progetto `essere-zen` → tab **Settings** → **Domains** → **Add**
3. Inserisci `esserezen.it`
4. Vercel ti mostra i DNS record da inserire nel pannello del registrar (di solito 2 record: A e CNAME)
5. Vai sul pannello del registrar, sezione DNS, aggiungi i record indicati
6. In 5-30 minuti il dominio inizia a puntare al sito

Aggiorna anche `astro.config.mjs` con il nuovo URL:

```js
site: 'https://esserezen.it',
```

E poi:
```bash
git add .
git commit -m "Aggiornato dominio"
git push
```

---

## SEO, dopo il deploy fai queste 3 cose (obbligatorie per essere trovata su Google)

### 1. Google Search Console

1. Vai su https://search.google.com/search-console
2. Clicca **Add property** → **URL prefix** → inserisci `https://essere-zen.vercel.app`
3. Per verificare la proprietà, scegli il metodo **HTML tag**: Google ti dà un meta tag da inserire nel sito
4. Aggiungilo in `src/layouts/Layout.astro` dentro la sezione `<head>`, prima di `<slot name="head" />`:

```html
<meta name="google-site-verification" content="IL_TUO_CODICE" />
```

5. Salva, push, aspetta 2 minuti il rebuild Vercel
6. Torna su Search Console e clicca **Verify**
7. Submit la sitemap: nella sezione **Sitemaps** inserisci `sitemap-index.xml`

Google inizia a indicizzare il sito entro 3-7 giorni.

### 2. Bing Webmaster Tools (10% del traffico ricerca italiano)

1. Vai su https://www.bing.com/webmasters
2. Stessa procedura: aggiungi sito, verifica con meta tag, submit sitemap

### 3. Google Analytics (opzionale, per vedere quanti visitatori)

1. Vai su https://analytics.google.com
2. Crea proprietà GA4 per `essere-zen.vercel.app`
3. Copia il Measurement ID (formato `G-XXXXXXXXXX`)
4. Aggiungi al `Layout.astro` nel `<head>` lo script GA4 (te lo aggiungo io quando vuoi, basta che mi mandi il tuo ID)

---

## Vercel vs Cloudflare Pages, perché ho scelto Vercel

Hai chiesto qualcosa "tipo Vercel" e ottima scelta:
- **Vercel** è il provider creato dai creatori di Next.js, ha la migliore integrazione possibile con framework moderni come Astro
- **Build più veloce** (1-2 min vs 2-4 min)
- **Preview URL automatici** per ogni modifica (mostri al cliente la modifica prima che vada online)
- **Edge network globale** (tuoi visitatori da New York o Sydney vedono il sito veloce come gli italiani)
- **Analytics base inclusi gratis** (visitatori, pagine viste, paesi, senza bisogno di Google Analytics)
- **Speed Insights gratis** (vedi le performance Lighthouse del tuo sito in tempo reale)

L'unico limite del piano gratuito Vercel è 100 GB di banda/mese, che per un blog zen italiano significa circa **150.000 visitatori al mese**. Quando arrivi a quei numeri (improbabile prima di 1-2 anni), si valuta un upgrade.

---

## Vercel Analytics, attivalo subito gratis

Una cosa che ti consiglio di fare subito dopo il primo deploy:

1. Sulla dashboard del progetto Vercel
2. Tab **Analytics** → **Enable Web Analytics**
3. Vercel ti chiede di aggiungere un piccolo script al sito
4. Aggiungilo in `src/layouts/Layout.astro` dentro `<head>`:

```html
<script defer src="/_vercel/insights/script.js"></script>
```

5. Push, in 2 ore vedrai i primi visitatori sulla dashboard Vercel

**Vantaggio rispetto a Google Analytics**: rispetta GDPR di default, niente banner cookie obbligatori, ti dà i dati essenziali (visitatori, pagine, paesi, dispositivi) in un'unica interfaccia bella.

---

## Problemi comuni e soluzioni

**"npm install" fallisce con errore di permessi**
→ Su Windows, esegui il prompt dei comandi come amministratore (cerca "cmd" nel menu Start, click destro → "Esegui come amministratore"). Su Mac/Linux, prefissa con `sudo npm install`.

**"git push" dice "remote: Repository not found"**
→ Hai sbagliato a digitare il nome utente nell'URL del remote. Esegui `git remote set-url origin https://github.com/USERNAMECORRETTO/essere-zen-sito.git`

**Vercel build fallisce con errore "Module not found"**
→ Verifica che il `package.json` sia stato pushato su GitHub. Esegui `git status` dentro `sito_web` per controllare. Se manca, esegui `git add package.json && git commit -m "fix" && git push`.

**Il sito è online ma la copertina del libro non si vede**
→ Verifica che il file `public/images/copertina-libro.jpg` sia stato pushato su GitHub. Esegui `git status` dentro `sito_web` per controllare.

**Voglio cambiare un articolo del blog**
→ Apri il file `.mdx` corrispondente in `src/content/blog/`, modifica, salva, fai push. Vercel rebuild automatico.

**Voglio aggiungere un nuovo articolo del blog**
→ Crea un nuovo file `src/content/blog/nome-nuovo-articolo.mdx` con la stessa struttura degli articoli esistenti (intestazione `title`, `description`, `pubDate`, `tags`). Push, in 2 minuti è online.

**Vercel mi mostra "Custom Domains Limit Reached"**
→ Sul piano hobby gratuito hai 50 domini custom. Improbabile li superi mai.

---

*Guida creata il 12 giugno 2026. Astro 5 + Tailwind 4 + Vercel.*
