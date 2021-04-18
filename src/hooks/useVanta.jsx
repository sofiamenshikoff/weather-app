import { useRef, useEffect, useState } from 'react'
import Clouds from 'vanta/dist/vanta.clouds.min'
import * as THREE from 'three'

const useVanta = () => {
    const myRefDiv = useRef(null)//Valor inicial
    const[vanta, setVanta] = useState(0)

    //La primera renderizacion de "myRefDiv.current" es igual
    //a nulo, el valor inicial
    console.log("myRefDiv.current", myRefDiv.current)// x2

    //La funcion useEffect se va a "invocar" ante
    //la segunda renderizacion, en este punto ya va a 
    //contener un valor "myRefDiv.current"
    useEffect(() => {
        console.log("myRefDiv.current (en useEffect)", myRefDiv.current)
        //Solo pasa una vez por dentro del if
        //vanta === 0, es igual a "vanta == false"
        //que es igual al "!vanta"
        if(!vanta) {
            //SOLO PASA UNA VEZ
            //Aca vamos a hacer la inicializacion de "vanta"
            //Activa el efecto de "cloud"
            setVanta(Clouds({
                THREE,
                el: myRefDiv.current,
                speed: 0.70
            }))
            
            
            console.log("Establezco vanta a un valor diferente de 0")
        }
        //Al salir de la pantalla debemos detener el efecto
        //y des asociar todos los recursos (div y vanta effect)
        return () => {
            //Dentro de esta funcion se va a realizar la tarea 
            //de destruir los recursos tomados por "vanta"
            if(vanta) {
                vanta.destroy()
                console.log("Libero los recursos")
            }
        }
    },[vanta])//Con esto me aseguro que siga funcionando bien
    //si tuviera mas variables "use"    
    return myRefDiv
}


export default useVanta