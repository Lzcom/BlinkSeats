import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup; // declare the registerForm property
  //crear mensajes de validacion
  //mensaje respuesta de registro
  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private storage: Storage
  ) { 
    this.registerForm = this.formBuilder.group({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern(
            "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
          )
        ])
      )
      //Crear validaciones para el password, confirmation_password, name y last_name
      , 
      password: new FormControl(
        "",
        Validators.compose([
        ])
      ),
      confirmation_password: new FormControl(
        "",
        Validators.compose([
        ])
      ),
      name: new FormControl(
        "",
        Validators.compose([
        ])
      ),
      last_name: new FormControl(
        "",
        Validators.compose([
        ])
      )
    })
    }

  ngOnInit() {
  }

  register(regiser_data: any){
    console.log(regiser_data);
    //crear el servicio de registro
  }

}