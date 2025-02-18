import { Observable } from "rxjs";

export const getNumbers = new Observable(subscriber => {
    //emitimos valores
    
    subscriber.next(1); // emite 1
    subscriber.next(2); // emite 2 etc
    subscriber.next(3);
    setTimeout(() => {
    subscriber.next(4);
    subscriber.complete(); // y al final el oservable se completa y termina
    }, 11000); // espera 1 segundo despues

})

// luego fui a observable example y importe esto