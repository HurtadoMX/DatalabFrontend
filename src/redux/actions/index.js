
//Aqui es donde me ayuda el redux thunk porque me ayuda a trabajar de forma asincrona

//importamos axios para la asincronia
import axios from 'axios'

//creo mi funcion para mandar a mi php
export function enviarEmail(payload){
    console.log(payload)
    return async function(dispatch){
        const params = new URLSearchParams();
        params.append('name', payload.name)
        params.append('email', payload.email)
        params.append('message', payload.message)
        const json = await axios.post(`./php/contact_me.php`, params)
        console.log(json)
        return json
    }
}
