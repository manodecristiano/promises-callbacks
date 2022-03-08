const heroes = {

    capi:{
        nombre: 'Capitan América',
        poder:  'Sabe usar el boomerang'
    },
    iron:{
        nombre: 'Ironman',
        poder:  'Absurda cantidad de dinero'
    },
    spider:{
        nombre: 'Spiderman',
        poder:  'Pegajoso por las paredes'
    },
}


//el callback retorna el heroe
/*export const buscarHeroe = ( id, callback ) => {

    const heroe = heroes[id];

if ( heroe ){
    //ponemos null par que no envie 'err' a index.js
    callback( null, heroe );
} else {
    //un error
    callback( `No existe un héroe con el id ${ id }` );
}


    //callback( heroe );
  
}*/
