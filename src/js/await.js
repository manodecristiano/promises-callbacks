import { buscarHeroeAsync,buscarHeroe } from "./promises.js";

const heroesIds = ['capi', 'iron', 'spider'];


export const obtenerHeroesArr = async () => {
   
    const heroesArr = [];

    for (const id of heroesIds){
    //buscarHeroeAsync(id).then(heroe => heroesArr.push( heroe ));

    // const heroe = await buscarHeroe( id );
    // heroesArr.push( heroe );

        heroesArr.push( buscarHeroe ( id ) );

   }
   return await Promise.all( heroesArr );
}