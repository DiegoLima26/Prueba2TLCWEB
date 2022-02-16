import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'productoInstIntP',
  templateUrl: './producto-inst-int-p.component.html',
  styleUrls: ['./producto-inst-int-p.component.css']
})
export class ProductoInstIntPComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(function(){
      // ------ Variables para mostrar y ocultar los SubProductos
      var selectProdInterna = $('.claseSubCategoriaInstInterna .claseProductosInterna .tituloInterna .flechasSubProd');     // Seleccion div de los productos
      
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
      selectProdInterna.on('click',function(){                  // al hacer click en la flecha despliega o oculta los SubProductos
        if(!pantallaMovil())
        {
          var tipoCatSelec = $(this).attr('catCuerpoSubPF');
          var tipoCuerpoCatSelec = $('.claseSubCategoriaInstInterna .claseProductosInterna .cuerpoCategoria[catCuerpoSubPF="'+tipoCatSelec+'"]');
          var flechaMostrarP = $('.claseProductosInterna .tituloInterna .flechasSubProd[catCuerpoSubPF="'+tipoCatSelec+'"] .mostrarProdF');
          var flechaOcultaP = $('.claseProductosInterna .tituloInterna .flechasSubProd[catCuerpoSubPF="'+tipoCatSelec+'"] .ocultarProdF');
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
