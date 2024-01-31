import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  showPassword = false;

  validation_messages = {
    name: [
      { type: "required", message: "Nombre es requerido" },
      { type: "minLength", message: "Debe tener min de 3 caracteres" }
    ],
    last_name: [
      { type: "required", message: "Apellido es requerido" },
      { type: "minLength", message: "Debe tener min de 3 caracteres" }
    ],
    email: [
      { type: "required", message: "Email es requerido" },
      { type: "pattern", message: "Email no es valido" }
    ],
    password: [
      { type: "required", message: "Contraseña es requerida" },
      { type: "minLength", message: "Debe tener min de 6 caracteres" }
      //{type: "pattern", message: "Contraseña no es valida"}
    ],
    confirmation_password: [
      { type: "required", message: "Confirmación requerida" },
      { type: "minLength", message: "Debe tener min de 6 caracteres" },
      { type: "passwordMismatch", message: "Las contraseñas no coinciden" }
    ]
  };

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
      ),
      password: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(6)
        ])
      ),
      confirmation_password: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(6)
        ])
      ),
      name: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(3)
        ])
      ),
      last_name: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(3)
        ])
      )
    }, {
      validators: this.passwordMatchValidator
    });
  }

  ngOnInit() {}

  register(register_data: any) {
    console.log(register_data);
    // crear el servicio de registro
  }

  passwordMatchValidator(group: FormGroup): { [key: string]: any } | null {
    const passwordControl = group.get('password');
    const confirmPasswordControl = group.get('confirmation_password');

    if (!passwordControl || !confirmPasswordControl) {
      return null;
    }

    if (passwordControl.value !== confirmPasswordControl.value) {
      confirmPasswordControl.setErrors({ 'passwordMismatch': true });
      return { 'passwordMismatch': true };
    } else {
      confirmPasswordControl.setErrors(null);
      return null;
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  navigateToLogin() {
    this.navCtrl.navigateBack('/login');
  }
}
