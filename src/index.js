import "./styles.css";
//import {promesaLenta,promesaMedia,promesaRapida} from "./js/promises";
//import {buscarHeroe,buscarHeroeAsync} from "./js/promises.js";
import { obtenerHeroesArr,obtenerHeroeAwait, heroesCiclo,heroeIfAwait } from "./js/await.js";

/* 1
promesaLenta.then( console.log );
promesaMedia.then( console.log );
promesaRapida.then( console.log );
*/

/* 1
Promise.race([promesaLenta,promesaMedia,promesaRapida])
.then( console.log )
.catch( console.warn );
*/


/* 2
buscarHeroe( 'capi' )
.then( console.log )
.catch( console.warn);

/*3
buscarHeroeAsync( 'iron2')
.then( console.log )
.catch( console.warn);
*/


/*4
console.time('await');

obtenerHeroesArr().then( heroes  => {

    console.table(heroes);
    console.timeEnd('await');

});

*/



/*console.time('await');

obtenerHeroeAwait('capi2')
.then( heroe  => {

    console.table(heroe);
    console.timeEnd('await');

}).catch(console.warn);*/

heroesCiclo();
heroeIfAwait('iron');