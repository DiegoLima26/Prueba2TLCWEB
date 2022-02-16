import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'productoHerramientasP',
  templateUrl: './producto-herramientas-p.component.html',
  styleUrls: ['./producto-herramientas-p.component.css']
})
export class ProductoHerramientasPComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(function(){
      // ------ Variables para mostrar y ocultar los SubProductos
      var selectProdHerramientas = $('.claseSubCategoriaHerramientas .claseProductosHerramientas .tituloHerramientas .flechasSubProd');     // Seleccion div de los productos
      
      // ------ Funciones Generales
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

      // Funciones para mostrar y ocultar los SubProductos
      selectProdHerramientas.on('click',function(){                  // al hacer click en la flecha despliega o oculta los SubProductos
        if(!pantallaMovil())
        {
          var tipoCatSelec = $(this).attr('catCuerpoSubPF');
          var tipoCuerpoCatSelec = $('.claseSubCategoriaHerramientas .claseProductosHerramientas .cuerpoCategoria[catCuerpoSubPF="'+tipoCatSelec+'"]');
          var flechaMostrarP = $('.claseProductosHerramientas .tituloHerramientas .flechasSubProd[catCuerpoSubPF="'+tipoCatSelec+'"] .mostrarProdF');
          var flechaOcultaP = $('.claseProductosHerramientas .tituloHerramientas .flechasSubProd[catCuerpoSubPF="'+tipoCatSelec+'"] .ocultarProdF');
          if(tipoCuerpoCatSelec.hasClass('ocultarSubProd'))
          {
            tipoCuerpoCatSelec.removeClass('ocultarSubProd');
            flechaMostrarP.removeClass('mostrarPFOn');
            flechaOcultaP.removeClass('mostrarOFOn');
          }
          else
          {
            tipoCuerpoCatSelec.addClass('ocultarSubProd');
            flechaMostrarP.addClass('mostrarPFOn');
            flechaOcultaP.addClass('mostrarOFOn');
          }
        }
      });
    });
  }

}
