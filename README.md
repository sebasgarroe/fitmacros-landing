# FitMacros — Landing (Vite + React + Tailwind)

## Desarrollo local
```bash
npm install
npm run dev
```
Luego abre `http://localhost:5173`.

## Build
```bash
npm run build
```
La salida queda en `dist/` (lo que usa Vercel para publicar).

## Deploy en Vercel
1. Sube esta carpeta a un repositorio en GitHub.
2. En Vercel: New Project → Importa el repo.
3. Framework: **Vite + React** (Build `npm run build`, Output `dist`).
4. Deploy. Listo.
