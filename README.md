# Parcial1Web

### Juanita Gil Arango - j.gila2 - 202111556

## Ejecución

Para ejecutar el proyecto, solo se necesita hacer:

```sh
npm install
npm start
```

## Reporte de decisiones y proceso de desarrollo
#### Mi aplicación tiene la siguiente estructura:
- assets: Aquí se guardan los logos e imágenes estáticas.
- components: Contiene los componentes principales de la aplicación:
    - Home: Componente para la página principal.
    - LogIn: Componente para la página de inicio de sesión.
    - GenericComponent: Componente genérico que se utiliza en App.js para mostrar diferentes páginas basadas en el título que se le pase como prop.
- locales: Contiene los archivos de traducción para internacionalizar la página. Los títulos y otros textos están definidos aquí para soportar múltiples idiomas.
En App.js, se configuran las rutas de la aplicación y se utiliza el componente GenericComponent para mostrar diferentes páginas según el título especificado. La internacionalización se maneja utilizando la biblioteca react-intl y los archivos de traducción en la carpeta locales.