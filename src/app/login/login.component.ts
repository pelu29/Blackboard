import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  constructor(private route:Router){}

  correo:string= "";
  alumno : string[] = ["pepito@gmail.com"];
  profesores: string[] = ["profe@gmail.com"];

  validacion(){

    if(this.alumno.includes(this.correo)){
      return this.route.navigate([`/alumnos`])
    }else if(this.profesores.includes(this.correo)){
      return this.route.navigate([`/profesores`])
    }

    return alert("Error, no estas registrado en el sistema")
    
  }
}
