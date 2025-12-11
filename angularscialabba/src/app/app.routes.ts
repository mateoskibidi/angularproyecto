import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Product } from './pages/products/products';
import { Galeria } from './galeria/galeria';
import { Oferta } from './oferta/oferta';
import { Demostracion } from './demostracion/demostracion';
import { Novedades } from './novedades/novedades';

export const routes: Routes = [
    
    {
        path: "", component: Home
    },
    {
        path: "home", component: Home
    },
    {
        path: "about", component: About
    },
    {
        path: "contact", component: Contact
    },
    {
        path: "galeria", component: Product
    },
    {
        path: "product", component: Galeria
    },
    {
        path:"oferta", component: Oferta
    },
    {
        path: "demostracion",component:Demostracion
    },
    {
        path: "novedades",component:Novedades
    }
];
