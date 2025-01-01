export function toCapital(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}
//Toma cualquier palabra y pone la primera letra en mayyuscula y las demas en minusculas 

    //Ejemplos:
    // toCapital('hola') ==> 'Hola'
    // toCapital('mundo') ==> 'Mundo'
    // toCapital('esto es un ejemplo') ==> 'Esto Es Un Ejemplo'