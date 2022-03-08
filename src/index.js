import "./styles.css";
import { buscarHeroe } from "./js/callbacks";

const heroeId1 = 'capi';


buscarHeroe( heroeId1, (err, heroe) => {


if ( err ){
    console.error( err );
}else{
    console.info( heroe );
}


})