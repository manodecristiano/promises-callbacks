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
export const buscarHeroe = (id ) => {
 
    const heroe = heroes[id];

    return new Promise( ( resolve, reject ) => {
      
       if ( heroe ){

           resolve( heroe );
       }else {
           reject(`No existe un héroe con el id ${ id }`);
       }


    })



}