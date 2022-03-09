import { buscarHeroeAsync,buscarHeroe } from "./promises.js";

const heroesIds = ['capi', 'iron', 'spider'];


export const obtenerHeroesArr = async () => {
   
//1 2 3//  const heroesArr = [];

//1 2 3// for (const id of heroesIds){
   
//1// buscarHeroeAsync(id).then(heroe => heroesArr.push( heroe )); 
    
//2// const heroe = await buscarHeroe( id );
//2// heroesArr.push( heroe );

//3//    heroesArr.push( buscarHeroe ( id ) );

//1 2 3// }

//1// return  heroesArr;
//2// return  await Promise.all( heroesArr) ;
//3// return await Promise.all( heroesArr );

   return await Promise.all( heroesIds.map( buscarHeroe ));

}


export const obtenerHeroeAwait = async ( id ) =>{


    try {

        const heroe =  await buscarHeroeAsync( id );
        return heroe;

    } catch (err) {
        console.log('CATCH!!!')
        //console.warn(err);
       // throw err;
       return {
           nombre : 'Sin nombre',
           poder : 'Sin poder'
       };
    }
    
}