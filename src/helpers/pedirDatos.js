import Mock_Data from "../Data/Mock_Data.json";

export const pedirDatos = () =>{
    return new Promise((resolve, reject) => {
    // cuerpo de la promesa
    setTimeout (() => {
            resolve(Mock_Data)
        }, 2000)        
    })
}