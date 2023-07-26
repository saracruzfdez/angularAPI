// Un service est une classe TS composée d'attributs et de méthodes, dont l'instanciation est gérée par Angular.

// Un service est, sauf cas spécifique, un singleton (design pattern) : une seule instance de l’objet est utilisée à travers toute l’application.

// Une fois instancié, il est injectable dans n'importe lequel de vos composants ou dans un autre service.

// Ils permettent de :

// réutiliser du code entre différents composants
// faciliter l'échange des données
// centraliser les appels de service
// séparer les responsabilités visuelles (component) et fonctionnelles/techniques (service)

import { Injectable } from '@angular/core';
import { Observable, firstValueFrom, isObservable } from 'rxjs';
declare let Zone:any

@Injectable({
  providedIn: 'root'
})
export class AsyncService {

  constructor() { }

  // on va créer une table recevant un objet de type promise ou observable :
  // on va creer une fonction qui ecoute l'état de nos requettes en API :

  // CEST QUOI UNE ZONE ? :


  async waitForResponse<T>(prom: Promise<T> | Observable<T>): Promise<T>
  // <T> sert a typer 
  {
    // SI LA PROMESE ENVOYE EST OBSERVABLE ALORS CONVERTIR EN FIRSVALUEFROM :
    if (isObservable(prom)) {

      prom = firstValueFrom(prom);}

      //GRACE A CETTE OBJET L'ASYNC SE METTRA EN PLACE :
      const macroTask = Zone.current.scheduleMacroTask(

        // NOUS LUI DEMANDONS DE FAIRE UNE PAUSE :
        `WAIT FOR-${Math.random()}`,
        () => { },
        {},
        () => { }
      );

      return prom.then((p: T) => {

        // objet json sur sa methode invoke qui genere l'async, il bloque jusq'à ce qu'il a la reponse :
        macroTask.invoke();
        return p

      });
    }
  }

  // cette methode on pourra l'appeler sur une promese un peu de partout des quil y a un bocage