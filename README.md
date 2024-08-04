# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Despliegue Vite en GitHub
- Ejecutar npm run build
- Modificar el nombre de la carpeta dist por docs
- Agregar "." en las rutas de assets:
    '<script type="module" crossorigin src="./assets/index-1___YJqq.js"></script>'
    '<link rel="stylesheet" crossorigin href="./assets/index-CmYPtm48.css">'