/**
 * este es si quiero tenerlos todos aqui directamente
 */



import React, {useEffect} from 'react';




const AllCycles = () => {

    useEffect(() => {
        console.log('Componente actualizado')
        
        const intervalID = setInterval (() => {
            document.title = `${new Date()}` // cada ves que el titulo de la pestana se actualiza a cada rato mientras el componente esta
            console.log('actualizacion del compoenete')

        },1000);  // cada 1 segundo mandara este mensaje cuando el compoente este actualizado

        return () => {
            document.title = 'componente va a desaparecer' // aqui paro lo de los titulos cada accion que hago alla en el useeffect en el return la detongo 
            console.log('componente va a desaparecer')
            clearInterval(intervalID)   // y aqui dentro del return es cuando el componente va a desaparecer le digo que limpie el intervalo y mande este mensaje
        }
    }, [])


    return (
        <div>
            
        </div>
    );
}

export default AllCycles;
