import "./styles.css";
import { buscarHeroe as buscarHeroeCallBacks } from "./js/callbacks";
import { buscarHeroe } from "./js/promises";

const heroeId1 = 'capi';
const heroeId2 = 'spider';



/*buscarHeroeCallBacks( heroeId1, (err, heroe1) => {


   if ( err ){ console.error( err ); }
    
   buscarHeroe( heroeId2 , ( err, heroe2 )  => {
  
     if ( err ){ console.error( err ); }

     console.log(`Enviando a ${ heroe1.nombre }y ${heroe2.nombre} a la misión`);

   });
})
*/

buscarHeroe( heroeId1 ). then(heroe => {
  console.log(`Enviando a ${ heroe.nombre } a la mision`)
})

//PRIMERO SE EJECUTA TODO EL CODIGO MIENTRAS SE ENVIAN PROMESAS A LA COLA
console.log('Fin del programa')
