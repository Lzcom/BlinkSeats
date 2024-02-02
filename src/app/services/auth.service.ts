import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  loginUser(credential:any){ //Se agregan correos y contraseñas de forma fija. 
    return new Promise ((accept,reject) => {
      if(credential.email == "laurac@gmail.com" 
      && credential.password == "1234569"
      ){
        accept("Logueado");
      }else{
        reject ("Login incorrecto");
      }
    });
  }
}
