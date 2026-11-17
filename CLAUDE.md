# Sito Samsara Riccione: regole per Claude

Sito ufficiale di **Samsara Beach Club Riccione** (samsarariccione.it), gestito da Nirvana S.r.l.
Chiunque in ufficio può chiedere modifiche a Claude: queste regole valgono per tutti.

## Come lavorare
- **Mai modificare direttamente il ramo `main`.** `main` è il sito online. Lavora sempre su un ramo nuovo (es. `modifica/banner-ferragosto`) e apri una pull request.
- Netlify crea un **link di anteprima** per ogni pull request: controllalo su telefono (390 px) e computer (1440 px) prima di chiedere l'approvazione.
- Le pull request le approva solo un amministratore (Mauro o la persona di riserva). Non fare merge da solo.
- Una modifica per pull request, con titolo e descrizione in italiano semplice: cosa cambia e perché.
- Contenuti come eventi, menu, foto, orari e playlist: quando il pannello Sanity sarà attivo vanno cambiati lì, non nel codice.

## Identità del sito (da rispettare)
- **Racconto:** la homepage è una giornata intera. Scorrendo, il cielo va dall'alba al tramonto e l'orologio dalle 08:00 alle 22:00. Non rompere questo meccanismo.
- **Font:** Anybody (titoli, larghezza variabile) e Instrument Sans (testi), ospitati nella cartella `fonts/`. Non usare Google Fonts e non aggiungere altri font.
- **Colori estate:** navy `#10264A`, sole `#FFD23F`, corallo `#FF6B57`, magenta `#E0337A`, viola `#7B2FF7`, ciano `#3FE0E8`.
- **Modalità Natale:** blu notte `#0B1426`, oro `#D8B46A` / `#F3DDA6`, luci sfocate e neve sottile. Stile elegante: niente decorazioni da cartone animato (cappelli, lampadine colorate, palme addobbate).
- **Logo:** solo quello ufficiale vettoriale (`img/logo.svg`), mai ridisegnato o deformato.
- **Tono dei testi:** italiano semplice e diretto, frasi corte, senza maiuscole urlate. Il beach party si fa di giorno e al tramonto, mai "di notte".
- **Animazioni:** devono rispettare `prefers-reduced-motion` e non rallentare il telefono.

## Dati fissi
- Samsara Beach Club, Viale Gabriele D'Annunzio 150, 47838 Riccione (RN)
- Nirvana S.r.l., P.IVA 04851810756, REA RN 403248
- Aperto da Pasqua a metà settembre, tutti i giorni 08:00–22:00; d'inverno solo il Winter Beach Party (31 dicembre e 1 gennaio)
- Prenotazioni: ombrelloni su Spiagge.it, ristorante su TheFork, tavoli ed eventi su Ticketnation

## Da non toccare senza approvazione di Mauro
- Footer con i dati societari
- Privacy e cookie: il sito usa solo cookie tecnici, quindi niente banner. Privacy e cookie policy sono su Iubenda (link nel footer). **Prima di aggiungere Google Analytics, pixel di Meta/TikTok o altri servizi che tracciano**, va rimesso il banner dei cookie di Iubenda: chiedi a Mauro.
- Codici di statistiche e pixel (Google Analytics, Meta, TikTok)

## Struttura attuale
- `index.html`: pagina unica con stile e script inclusi
- `img/`: foto (webp), video (mp4), logo
- `fonts/`: caratteri del sito (woff2) con le relative licenze
- `netlify.toml`: impostazioni di pubblicazione

Prima di consegnare una modifica, controlla che la pagina non dia errori nella console e che su telefono niente esca dallo schermo.
