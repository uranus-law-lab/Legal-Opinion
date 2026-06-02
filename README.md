# Legal Opinion - Marketplace de Services Juridiques

Un projet Next.js pour présenter le legal opinion du Cabinet HAAS Avocats concernant les marketplaces de services juridiques.

## 🚀 Déploiement sur Vercel

Ce projet est entièrement configuré pour être déployé sur Vercel.

### Étapes de déploiement:

1. **Connecter votre repository GitHub à Vercel**
   - Allez sur https://vercel.com
   - Cliquez sur "New Project"
   - Importez ce repository

2. **Configuration automatique**
   - Framework: Next.js (détecté automatiquement)
   - Build Command: `next build`
   - Output Directory: `.next`

3. **Déployer**
   - Cliquez sur "Deploy"
   - Vercel s'occupera du reste automatiquement

## 📦 Installation locale

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Ouvrir http://localhost:3000 dans votre navigateur
```

## 🛠️ Build pour production

```bash
npm run build
npm start
```

## 📁 Structure du projet

```
.
├── app/                          # App Router Next.js 13+
│   ├── layout.tsx               # Layout principal
│   ├── page.tsx                 # Page d'accueil
│   └── globals.css              # Styles globaux
├── components/
│   ├─��� LegalOpinion.tsx         # Composant principal
│   └── LegalOpinion.module.css  # Styles CSS Modules
├── public/                       # Fichiers statiques
├── next.config.js               # Configuration Next.js
├── tsconfig.json                # Configuration TypeScript
├── package.json                 # Dépendances npm
└── vercel.json                  # Configuration Vercel
```

## 🌐 Environnement

Copier `.env.local.example` en `.env.local` pour configurer les variables d'environnement si nécessaire.

## 📝 Licence

Cabinet HAAS Avocats - Tous droits réservés
