# Liv Wandmalerei Website

Eine professionelle Website für Liv's Wandmalerei-Service, die individuelle Kunstwerke für private Haushalte und Geschäfte anbietet.

## 🎨 Über das Projekt

Diese Website wurde mit Next.js und TypeScript entwickelt und bietet eine moderne, monochrome Benutzeroberfläche, die Liv's farbenfrohe Wandmalereien in den Mittelpunkt stellt. Das Design ist bewusst schlicht gehalten, um die Kunstwerke optimal zur Geltung zu bringen.

### ✨ Features

- **Responsive Design**: Optimiert für alle Geräte (Desktop, Tablet, Mobile)
- **Monochrome Ästhetik**: Schlichtes Design betont die farbenfrohen Kunstwerke
- **Galerie mit Filterung**: Interaktive Galerie mit Kategorien und Suchfunktion
- **Kontaktformular**: Integrierte Kontaktmöglichkeit mit Firebase-Backend
- **SEO-optimiert**: Vollständige Meta-Tags und strukturierte Daten
- **DSGVO-konform**: Impressum und Datenschutzerklärung inkludiert

### 📱 Seiten

1. **Startseite**: Hero-Section mit Galerie-Slider und Service-Übersicht
2. **Über Mich**: Persönliche Geschichte und Arbeitsphilosophie
3. **Galerie**: Vollständige Sammlung aller Wandmalereien mit Filteroptionen
4. **Preise & Ablauf**: Transparente Preisgestaltung und Projektablauf
5. **Kontakt**: Kontaktformular und Kontaktinformationen
6. **Impressum & Datenschutz**: Rechtlich erforderliche Seiten

## 🚀 Installation & Setup

### Voraussetzungen

- Node.js (Version 18 oder höher)
- npm oder yarn
- Git

### Lokale Entwicklung

1. **Repository klonen**
   ```bash
   git clone https://github.com/Dolcruz/liv-wall-painting-website.git
   cd liv-wall-painting-website
   ```

2. **Dependencies installieren**
   ```bash
   npm install
   # oder
   yarn install
   ```

3. **Entwicklungsserver starten**
   ```bash
   npm run dev
   # oder
   yarn dev
   ```

4. **Website aufrufen**
   
   Öffnen Sie [http://localhost:3000](http://localhost:3000) in Ihrem Browser.

### 🔧 Konfiguration

#### Firebase Setup (optional)

Für das Kontaktformular kann Firebase konfiguriert werden:

1. Firebase-Projekt erstellen auf [console.firebase.google.com](https://console.firebase.google.com)
2. Firestore Database einrichten
3. Umgebungsvariablen erstellen (`.env.local`):
   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   ```

#### Bilder hinzufügen

Platzieren Sie Liv's Wandmalerei-Bilder in den folgenden Verzeichnissen:

- `public/images/fish.jpg` - Bereits vorhanden (Fisch-Wandmalerei)
- `public/images/whale.jpg` - Bereits vorhanden (Wal-Wandmalerei)
- Weitere Bilder können im `public/images/` Verzeichnis hinzugefügt werden

**Empfohlene Bildspezifikationen:**
- Format: JPG oder PNG
- Auflösung: Mindestens 1200x800px
- Dateigröße: Unter 2MB für optimale Ladezeiten

### 📂 Projektstruktur

```
liv-wall-painting-website/
├── public/
│   ├── images/           # Galerie-Bilder
│   └── favicon.ico
├── src/
│   ├── components/       # Wiederverwendbare Komponenten
│   │   └── Layout.tsx    # Haupt-Layout mit Navigation
│   ├── pages/           # Next.js Seiten
│   │   ├── _app.tsx     # App-Konfiguration
│   │   ├── index.tsx    # Startseite
│   │   ├── uber-mich.tsx
│   │   ├── galerie.tsx
│   │   ├── preise-ablauf.tsx
│   │   ├── kontakt.tsx
│   │   ├── impressum.tsx
│   │   └── datenschutz.tsx
│   └── styles/
│       └── globals.css   # Globale Styles
├── package.json
├── next.config.js
├── tsconfig.json
└── README.md
```

## 🎨 Design-Prinzipien

### Farbschema
- **Primärfarbe**: #2c2c2c (Dunkelgrau)
- **Hintergrund**: #fafafa (Hellgrau)
- **Text**: #666666 (Mittelgrau)
- **Akzente**: Die Farben kommen durch die Kunstwerke

### Typografie
- **Überschriften**: Playfair Display (Serif)
- **Fließtext**: Inter (Sans-Serif)
- **Gewichte**: 300, 400, 500, 600

### Layout
- **Maximalbreite**: 1200px
- **Spacing**: 8px Grid-System
- **Breakpoints**: 768px (Mobile/Desktop)

## 🚢 Deployment

### Vercel (Empfohlen)

1. **Vercel-Account erstellen** auf [vercel.com](https://vercel.com)
2. **Repository verbinden**
3. **Automatisches Deployment** bei jedem Push auf `main`

### Andere Hosting-Optionen

**Netlify:**
```bash
npm run build
npm run export
```

**GitHub Pages:**
- Konfiguration bereits in `next.config.js` vorhanden
- Aktivieren Sie GitHub Pages in den Repository-Einstellungen

## 🔧 Customization

### Inhalte anpassen

1. **Kontaktdaten** in `src/components/Layout.tsx` und `src/pages/kontakt.tsx`
2. **Galerie-Bilder** in `src/pages/galerie.tsx` und `src/pages/index.tsx`
3. **Über Mich-Text** in `src/pages/uber-mich.tsx`
4. **Preise** in `src/pages/preise-ablauf.tsx`

### Styling anpassen

- **Globale Styles**: `src/styles/globals.css`
- **Komponenten-Styles**: Styled JSX in den jeweiligen Komponenten
- **Farben**: CSS Custom Properties in `globals.css`

## 📱 Browser-Support

- Chrome 70+
- Firefox 70+
- Safari 12+
- Edge 18+

## 🛠️ Technologien

- **Framework**: Next.js 14
- **Sprache**: TypeScript
- **Styling**: CSS-in-JS (Styled JSX)
- **Icons**: React Icons
- **Bilder**: Next.js Image Optimization
- **Deployment**: Vercel-ready

## 📄 Lizenz

Dieses Projekt wurde speziell für Liv's Wandmalerei-Service entwickelt. Alle Rechte vorbehalten.

## 🤝 Support

Bei Fragen oder Problemen:
- **Email**: entwickler@beispiel.de
- **Issues**: GitHub Issues in diesem Repository

---

**Version**: 1.0.0  
**Letztes Update**: Januar 2024