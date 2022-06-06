//estodo inicial
const initialState={
    //necesitamos el estado de los pokemones
    pokemons: [],
    allPokemons: [],
    types: [],
    detail: [],
    skeler:[],
    attack:[],
    allAttack:[]
   

}


//le pasamos por parametro el estado inicial antes mencionado
//ademas le pasamos un action
function rootReducer(state = initialState, action){
    //ahora creamos el switch para los casos
    //el action.type es el type que leera de los actions
    //el que sea igual es el que usara
    switch(action.type){
        //ponemos nuestros caso que trae a todo los pokemones
        case 'GET_POKEMONS':
        return{
            //retornamos el estado
            ...state,
            //le pasamos el payload
            //aqui decimos que en el estado pokemons que 
            //en un principio esta vacio
            //Manda todo lo que te pido en la accion GET_POKEMONS
            //es por eso que en el payload en action guardamos la data
            //y eso es lo que va a mostrar el json.data
            pokemons:action.payload,
            allPokemons:action.payload,
            attack:action.payoad,
            allAttack:action.payload
        }            
        default:
        return state;
    }
    
}

export default rootReducer;