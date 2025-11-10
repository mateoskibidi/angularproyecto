import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tarjeta } from '../../models/tarjeta';



@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Product {
  /**
   * propiedad PUBLICA: libere acceso a su contenido / 
   * PRIVADA: contenido restringido
   */
  public infoTarjeta: Tarjeta[];

  /*declaramos coleccion de tarjetas en base a modelo de interfaz "tarjeta
  -se tiene que respetar el usode todas las propiedades y su tipo
  -tipo alfanumérico (string) inicializa en ""
  -tipo numérico(number) inicializa en 0
  Q 1|°   ° */
  constructor() {
    this.infoTarjeta = [
      {
        id: "1T",
        img: "../../../assets/italia.png",
        alt: "pelota d futbol",
        titulo: "gaaa bolaa",
        descripcion: "bolaesferica de fuchibol",
        anualpublicacion: 2025
      },
      {
        id: "2T",
        img: "../../../assets/bola2010.png",
        alt: "pelotaaaa",
        titulo: "futbolde bola",
        descripcion: "pelota del mundial 2010",
        anualpublicacion: 2025
      },
      {
        id: "3T",
        img: "../../../assets/brazil.png",
        alt: "futbol",
        titulo: "bola",
        descripcion: "pelota del mundial 2014",
        anualpublicacion: 2025
      },
      {
        id: "4sT",
        alt: "bola",
        titulo: "futbol",        img: "../../../assets/bolamundialclub.avif",

        descripcion: "pelota del mundial 2018",
        anualpublicacion: 2025
      },
{

id: "3T",
        img: "../../../assets/clasico.png",
        alt: "futbol",
        titulo: "bola",
        descripcion: "pelota del mundial 2014",
        anualpublicacion: 2025

},

{



id: "5T",
        img: "../../../assets/adidas.png",
        alt: "futbol",
        titulo: "bola",
        descripcion: "pelota del mundial 2014",
        anualpublicacion: 2025


},
{

id: "7T",
        img: "../../../assets/fea.png",
        alt: "futbol",
        titulo: "bola",
        descripcion: "pelota del mundial 2014",
        anualpublicacion: 2025



},
{
  id: "8T",
        img: "../../../assets/azul.png",
        alt: "futbol",
        titulo: "bola",
        descripcion: "pelota del mundial 2014",
        anualpublicacion: 2025
}



    ]
  }

  /*variable para tomar una tarjeta seleccionada */
  tarjetaSeleccionada: any = null;

  /*recibir elemento seleccionado por parametro y lo asignaa "tarjetaSeleccionada" */
  verMas(tarjeta: any) {
    this.tarjetaSeleccionada = tarjeta;
  }
}
