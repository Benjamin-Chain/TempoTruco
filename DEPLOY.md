# Guía de Deploy en GitHub Pages

## Configuración Inicial en GitHub

1. **Habilita GitHub Pages en tu repositorio:**
   - Ve a tu repositorio en GitHub
   - Click en **Settings** (Configuración)
   - En el menú lateral, busca **Pages**
   - En **Source**, selecciona **GitHub Actions** (no "Deploy from a branch")
   - Guarda los cambios

2. **Verifica que el workflow esté activo:**
   - Ve a la pestaña **Actions** en tu repositorio
   - Deberías ver el workflow "Deploy to GitHub Pages"
   - Si haces un push a la rama `main`, el workflow se ejecutará automáticamente

## Deploy Manual (Alternativa)

Si prefieres hacer deploy manualmente:

```bash
npm run deploy
```

Este comando:
1. Ejecuta `npm run build` (gracias a `predeploy`)
2. Publica la carpeta `build` en la rama `gh-pages`

Luego en GitHub Settings > Pages, selecciona la rama `gh-pages` como fuente.

## Notas Importantes

- El proyecto usa `HashRouter` en lugar de `BrowserRouter` para compatibilidad con GitHub Pages
- La URL será: `https://jaben.github.io/TiempoTruco/`
- Si cambias el nombre del repositorio, actualiza el campo `homepage` en `package.json`

