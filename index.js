import { config } from './src/config';
import app from './src/server'


(async function() {
    app.listen(config.port)
    console.log(`Se Inicio el servidor en ${config.port}`);
})()