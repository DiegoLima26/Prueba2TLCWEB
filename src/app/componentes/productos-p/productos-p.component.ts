import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'productosP',
  templateUrl: './productos-p.component.html',
  styleUrls: ['./productos-p.component.css']
})
export class ProductosPComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
    $(function(){
      // Variables para manejo de enlaces a SubCategorias
      var prodSubCategorias = document.querySelectorAll('.cuerpoPrincipalProductos .lateralMenuProductos .seccionCategoriasProd a'),
      enlaceSubCategoria = $('.cuerpoPrincipalProductos .lateralMenuProductos .seccionCategoriasProd a');                

      function pantallaMovil()                           // funcion para saber si estamos en pantallas moviles
      {
        if(window.innerWidth <= 767)
        {
          return true;
        }
        else
        {
          return false;
        }
      }

      enlaceSubCategoria.on('click',function(){                       
        if(!pantallaMovil())
        {
          var tipoProductoR = $(this).attr('catEnlceProd');
          prodSubCategorias.forEach((enlaces) =>{              
            enlaces.classList.remove('enlaceON');
          });
          $('.cuerpoPrincipalProductos .lateralMenuProductos .seccionCategoriasProd a[catEnlceProd="'+tipoProductoR+'"]').addClass('enlaceON');
        }
      });
    });
  }
}
