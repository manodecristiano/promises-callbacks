import { buscarHeroeAsync } from "./promises.js";

const heroesIds = ['capi', 'iron', 'spider'];


export const obtenerHeroesArr = async () => {
   
    const heroesArr = [];

    for (const id of heroesIds){
    //buscarHeroeAsync(id).then(heroe => heroesArr.push( heroe ));
        const heroe = await buscarHeroeAsync( id );
        heroesArr.push( heroe );

   }
   
    return heroesArr;
}