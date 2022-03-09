import "./styles.css";
//import {promesaLenta,promesaMedia,promesaRapida} from "./js/promises";
//import {buscarHeroe,buscarHeroeAsync} from "./js/promises.js";
import { obtenerHeroesArr } from "./js/await.js";

/*promesaLenta.then( console.log );
promesaMedia.then( console.log );
promesaRapida.then( console.log );
*/

/*Promise.race([promesaLenta,promesaMedia,promesaRapida])
.then( console.log )
.catch( console.warn );*/

/*
buscarHeroe( 'capi' )
.then( console.log )
.catch( console.warn);


buscarHeroeAsync( 'iron2')
.then( console.log )
.catch( console.warn);
*/

const heroes = obtenerHeroesArr().then( console.table );