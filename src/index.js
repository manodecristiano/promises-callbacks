import "./styles.css";
import { buscarHeroe } from "./js/callbacks";

const heroeId1 = 'capi';
const heroeId2 = 'spider';

buscarHeroe( heroeId1, (err, heroe1) => {


   if ( err ){ console.error( err ); }
    
   buscarHeroe( heroeId2 , ( err, heroe2 )  => {
  
     if ( err ){ console.error( err ); }

     console.log(`Enviando a ${ heroe1.nombre }y ${heroe2.nombre} a la misión`);

   });


})