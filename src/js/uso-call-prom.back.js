import "./styles.css";
import { buscarHeroe as buscarHeroeCallBacks } from "./js/callbacks";
import { buscarHeroe } from "./js/promises";

const heroeId1 = 'capi';
const heroeId2 = 'spider2';


//CALLBACK HELL
/*buscarHeroeCallBacks( heroeId1, (err, heroe1) => {


   if ( err ){ console.error( err ); }
    
   buscarHeroe( heroeId2 , ( err, heroe2 )  => {
  
     if ( err ){ console.error( err ); }

     console.log(`Enviando a ${ heroe1.nombre }y ${heroe2.nombre} a la misión`);

   });
})
*/


//PROMISE HELL
/*buscarHeroe( heroeId1 ). then(heroe1 => {
  //console.log(`Enviando a ${ heroe1.nombre } a la mision`);
  
    buscarHeroe( heroeId2 ). then(heroe2 => {
      console.log(`Promise-->Enviando a ${ heroe1.nombre } y a ${ heroe2.nombre } a la mision`);
  });
});
*/

Promise.all([ buscarHeroe(heroeId1), buscarHeroe(heroeId2) ])
.then( ([heroe1, heroe2] )  => {
  
    console.log(`Promise.all-->Enviando a ${ heroe1.nombre } y a ${ heroe2.nombre } a la mision`)

}).catch( err => {
  
    alert(err);
}).finally( () => {
   console.log('Se termino el promise.all');

});


//PRIMERO SE EJECUTA TODO EL CODIGO MIENTRAS SE ENVIAN PROMESAS A LA COLA
console.log('Fin del programa')
