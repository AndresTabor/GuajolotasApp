import axios from "axios";

export const getData = async( url ) =>{
    const response = await fetch( url );
    const data = await response.json();
    return data;
}


export const postData = ( url, data ) => {
    axios.post( url , data )
    .then(response => console.log(response.data))
    .catch(error => console.log(error))
} 

export const putData = ( url, data ) => {
    axios.put( url, data )
    .then(response => console.log(response))
    .catch(error => console.log(error))

}