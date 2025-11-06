import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Producto } from '../../models/producto';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  public infohome: Producto[];

  constructor() {

    this.infohome = [
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
        id: "4T",
        img: "../../../assets/https://w7.pngwing.com/pngs/51/734/png-transparent-2010-fifa-world-cup-2014-fifa-world-cup-2018-world-cup-adidas-jabulani-ball-ball-sports-equipment-adidas-sports.png",
        alt: "bola",
        titulo: "futbol",
        descripcion: "esferico",
        anualpublicacion: 2025
      }

    ]
  }

  homeseleccionado: any = null;


  verMas(Home: any) {
    this.homeseleccionado = Home;
  }
}