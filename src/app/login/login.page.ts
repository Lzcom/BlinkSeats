import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
loginForm: FormGroup;
validation_messages={
  email: [
    {type: "required", message: "Email es requerido"},
    {type: "pattern", message: "Email no es valido"}
  ],
  password: [
    {type: "required", message: "Contraseña es requerida"},
    //{type: "pattern", message: "Contraseña no es valida"}
  ]
}
  loginMessage: any;
  constructor(private formBuilder:FormBuilder,
    private authService: AuthService,
    private router: Router,
    private storage: Storage
    ) {
    this.loginForm = this.formBuilder.group({
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
        ])
      )
    })
   }

  ngOnInit() {
  }
login(login_data: any){
  console.log(login_data);
  this.authService.loginUser(login_data).then(res => {
  this.loginMessage = res;
  this.storage.set('userLoggedIn',true);
  this.router.navigateByUrl('/menu/inicio');
  }).catch(err => {
    this.loginMessage = err;
  })
}

}
