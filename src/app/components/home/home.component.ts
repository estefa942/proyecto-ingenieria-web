import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  content = [
    {
      image: '../../../assets/images/autentication.png',
      title: 'Autenticación',
      description: 'Controla los accesos a tu información'
    },
    {
      image: '../../../assets/images/inventario.png',
      title: 'Inventario',
      description: 'Gestiona tus ventas día a día'
    },
    {
      image: '../../../assets/images/usuarios.png',
      title: 'Recursos humanos',
      description: 'Gestiona a tus empleados'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
