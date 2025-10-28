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
        img: "../../../assets/",
        alt: "pelota d futbol",
        titulo: "gaaa bolaa",
        descripcion: "bolaesferica de fuchibol",
        anualpublicacion: 2025
      },
      {
        id: "2T",
        img: "../../../assets/https://w7.pngwing.com/pngs/51/734/png-transparent-2010-fifa-world-cup-2014-fifa-world-cup-2018-world-cup-adidas-jabulani-ball-ball-sports-equipment-adidas-sports.png",
        alt: "pelotaaaa",
        titulo: "futbolde bola",
        descripcion: "bolas para casa",
        anualpublicacion: 2025
      },
      {
        id: "3T",
        img: "../../../assets/https://w7.pngwing.com/pngs/946/198/png-transparent-2014-fifa-world-cup-final-adidas-brazuca-ball-adidas-sport-football-boot-sports-equipment.png",
        alt: "futbol",
        titulo: "bola",
        descripcion: "bola de futbol",
        anualpublicacion: 2025
      },
      {
        id: "4sT",
        img: "../../../assets/https://w7.pngwing.com/pngs/51/734/png-transparent-2010-fifa-world-cup-2014-fifa-world-cup-2018-world-cup-adidas-jabulani-ball-ball-sports-equipment-adidas-sports.png",
        alt: "bola",
        titulo: "futbol",
        descripcion: "esferico",
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
