import data from "../data/data.json";

export default function pedirDatos() {
    //se usa Promise para poder usar metoodos es una clase de java 
    return new Promise((resolve, reject) => {
        //si no se pone el setTimeout no se ven reflejados 
        setTimeout(() => {
            resolve(data)
        },500)
        
    })
}

export const pedirItemPorId = (id) => {
    return new Promise((resolve, reject) => {
        //Dismintivo de element el 
        //busca el item con el id en la data y lo devuelve
        //si no lo encuentra devuelve un error con el mensaje "Item no encontrado"
        //Busqie la info del elemento solo el id si es completamente igual al id que se llega 
        const item = data.find((el) => el.id === id);
        if (item) {
            resolve(item)
        }else{
            reject({
                error: "Item no encontrado"
            })
        }
    })
}