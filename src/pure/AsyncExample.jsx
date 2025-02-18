import React from 'react';

const AsyncExample = () => {
    
    async function generateNumber() {
        return 1;
    }

    function obtainNumber() {
        generateNumber().then((response) => alert(`Response: ${response}`))
        .catch((error) => alert(`algo a ido mal: ${error}`)) // e; then espera la respuetsa pero es una buena practica usar catch por si algo falla tirar ese mensaje de error
    } // con el then si ponga response mellamara lo que venga de esa aquella funcin asincrona y la repsuesta simplemente la puse en un alert luego

    function obtainNumberPromise() { // estas funciones que no son asincronas se usan para usar las asincronas
        generatePromiseNumber().then((response) => alert(`Response: ${response}`))
        .catch((error) => alert(`algo a ido mal: ${error}`)) 

    } // 

    
    async function generatePromiseNumber() { // ejemplo de funcion asuncrona con promesas: es una de las maneras de gestionar de manera mas rapida de representar un objeto que puede aparecer o fallar
        return Promise.resolve(2)
    }


    async function SaveSessionStorage(key,value) {
    sessionStorage.setItem(key,value); // el key es como la clave que tendra y el valor sera lo que le ponga en este caso iverson
    return Promise.resolve(sessionStorage.getItem(key)) // lo que hice aqui es una funcion que arriba guardara lo de el sesion storage y en el return esperara la promisa que se resuleva y cuando pase eso me dara el getitem con su clave
    }


    function showStorage() { // esta funcion llama a su otra sincrona de ahi arriba
        SaveSessionStorage('name', 'iverson') // el key es name y el valor es iverson
        .then((response)=> {
            let value = response;
            alert(`Save name: ${value}`)
        }).catch((error)=> {
            alert(`sometin went wrong: ${error}`)
        }).finally(()=> alert('succes: name saved and retreived')); // el finally es si todo bien
    }

    async function obtainMenssage() {
        let promise = new Promise((resolve,reject)=> { // primero cree mi variable que le dije que sera una nueva promesa que tendra resolve y reject
            setTimeout (()=> resolve('Hello world'),2000)// puse el tiempo que la respuesta hello world me la dara en2 segunfos
        })
    // aca si estamos usando el proceso asyncrono
        let message = await promise; // luego cree otra variable que guardara y esperara lo qu etraiga la promisa
        await alert(`message received: ${message}`) // y aca la alert
    }


    const returnError = async() => {
        await Promise.reject(new Error(`ooops!`))
    }
    // aca probe el reject en caso de que una promesa de error se hace aso
    const consumeError = () => {
        returnError() // llame aqui esa constante asincrona y le puse sus then etc
        .then((response) => alert(`everything is ok: ${response}`))
        .catch((error) => alert(`algo a ido mal: ${error}`))
        .finally(() => alert(`finally executed`) )
    }

    const urlNotFound = async () => {
        try {
            let response = await fetch('https://invalidurl')
            alert(`response ${JSON.stringify(response)}`)
        } catch (error) {
        alert(`algo a ido mal: ${error} (check your console )`)
        

        }
    }

    const multiplePromise = async () => {   // esta funcion asincrona es para gestionar multiples promise se pone .all 
        let results = await Promise.all(
        [
            fetch('https://regres.in/api/users'),
            fetch('https://regres.in/api/users?page=2')

        ]  // puse 2 url con el fetch si no las encuentra tirara el catch
        ).catch((error) => alert(`algo a ido mal con las url ${error} (check your console)`))
    }
    
    
    return (
        <div>
        <h1>Async, Promise examples</h1>
            <button onClick={obtainNumber}>Obtener Numbero</button>
            <button onClick={obtainNumberPromise}>obtener numeor de promesa</button>
            <button onClick={showStorage}>Save name and show</button>
        <button onClick={obtainMenssage}>send message in 2 seconds</button>
        <button onClick={consumeError}>Obtener error</button>
        <button onClick={urlNotFound}>request to unknow url</button>
        <button onClick={multiplePromise}>Multiple Promises</button>
        </div>
    );
}

export default AsyncExample;
