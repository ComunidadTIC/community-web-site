## Desarrolladores

### Instalación

Desde la terminal vamos a comenzar clonando el proyecto e instalando las dependencias:

```bash
git clone https://github.com/ComunidadTIC/community-web-site.git
cd community-web-site
npm install
```

### `npm start`

Ejecuta la aplicación en el modo de desarrollo.
Abra [http://localhost:3000](http://localhost:3000) para verlo en el navegador.

**Note:** Por defecto, las aplicaciones React corren en el puerto 3000 en development mode. Si por algún motivo necesitas correr más de una app en React de manera local, una forma de correr una app en otro puerto es indicar el puerto en el que se quiere correr la aplicación de la siguiente manera:
```
PORT=3001 npm run start
```
Otra forma de hacerlo es crear un file **dotenv** en el directorio raiz y agregar allí el puerto en el que se quiere correr la aplicación:
**~/community-web-site/.env**
```
PORT=3001
```

### `npm run build`

Crea la aplicación para la producción en la carpeta `build`. <br>
Agrupa correctamente React en modo de producción y optimiza la construcción para obtener el mejor rendimiento.