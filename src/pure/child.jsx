import React, {useInsertionEffect, useRef} from 'react';

const Child = ({name,send, update}) => {

    const messageRef = useRef('')

// este const message ref es un metodo que importe llamado use ref que me va a permitir mandarle metodos al padre mas abajo cree un ref que es el metodo que se usa para esto y le puse = messageref esta constante de aqui

const nameRef = useRef('')
// cree este otro ref para lo de el update




function pressButton(){
    const text = messageRef.current.value;
    alert(`text in input: ${text}`);  // esto hara que el boton 2 cada vez que se presione el boton de send message y escriba algo en el input el boton 2 con este metodo guardara lo que le ponga con este mensaje gracias al useRef
}

function pressButtonParams(text){
    alert(`Text: ${text}`);
}



function submitName (e){
e.preventDefault(); // de parametro una e pata luego usarla y usar este metodo que viene aqui en react que sirve que cuando se recarge la pagina que no aparezca eso de una vez este metodo
update(nameRef.current.value);
}



    return (          // aqui estoy pobrando distintos eventos y poniendole metodos a los botones
        <div style={{background: 'cyan', padding: '30px'}}>
            <p onMouseOver={() => console.log('on mouse over')}>hello,{name}</p>
            <button onClick={()=> console.log('boton 1 pulsado')}>
                boton 1
            </button>
            <button onClick={pressButton}>
                boton 2
            </button>
            <button onClick={ ()=> pressButtonParams('hello')}>
                            {/* este metodo recibe un parametro entonces este es el codigo para hacerlo en este caso recibe tipo texto y puse uno ahi asi que este es el codigo de metodos con parameteos*/}
                boton 3
            </button>
            <input onFocus={() => console.log('input focused')}
            onChange={(e) => console.log('input changed:', e.target.value)}
            onCopy={() => console.log('copied tect from input')}
            placeholder= 'send a text to your father'
            ref = {messageRef}
            ></input>
                                    {/* Este input tiene un evento placeholder que luego tuvo otro onfocus que es cuando tengo el mouse ahi dira tal cosa*/}
                                {/* el on change cuando escribo algo en el input lanzara ese evento y el oncopy si alguien le da  a copiar lo que este en el input por consola me lo mostrara por cierto esa e del evento onchange es evento y se pone al inicio par ainiciarlo y al final */}

        <button onClick={() => send(messageRef.current.value)}> {/*esto basicamente gracias al useRef lo que yo ponga en el input cuando le a send message me guardara lo que ponga y manadra este mensaje*/}
            send message                           {/* este boton con este evento onclick tiene puesto un send que es una palabra clave que puse arriba de parametro tambien ese send basicamente me va a servir para que cuando yo vaya al padre osea father.jsx poder pasarle un metodo que tengo alla en el padre que cuando le den a este boton se ejecute ese evento del padre  */}
                                                {/* esto es una forma de hacer que el padre alla nos mande sus metodos y nosotros usarlos aqui*/}
        </button>
        <div style={{margintop: '20px'}}>
        <form onSubmit={submitName}>
            <input ref={nameRef} placeholder='new name' />
            <button type='submit'>update name</button> {/* para hacer el update lo primero es importar el prop update alla arriba*/}
                            
        
        </form>
        </div>
        </div>
    );
}

export default Child;
