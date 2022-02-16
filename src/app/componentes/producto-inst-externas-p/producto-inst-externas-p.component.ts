import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'productoInstExternasP',
  templateUrl: './producto-inst-externas-p.component.html',
  styleUrls: ['./producto-inst-externas-p.component.css']
})
export class ProductoInstExternasPComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(function(){

      // ------ Variables para mostrar y ocultar los SubProductos
      var selectProdExterna = $('.claseSubCategoriaInstExterna .claseProductosExterna .tituloExterna .flechasSubProd');     // Seleccion div de los productos
      
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
      selectProdExterna.on('click',function(){                  // al hacer click en la flecha despliega o oculta los SubProductos
        if(!pantallaMovil())
        {
          var tipoCatSelec = $(this).attr('catCuerpoSubPF');
          var tipoCuerpoCatSelec = $('.claseSubCategoriaInstExterna .claseProductosExterna .cuerpoCategoria[catCuerpoSubPF="'+tipoCatSelec+'"]');
          var flechaMostrarP = $('.claseProductosExterna .tituloExterna .flechasSubProd[catCuerpoSubPF="'+tipoCatSelec+'"] .mostrarProdF');
          var flechaOcultaP = $('.claseProductosExterna .tituloExterna .flechasSubProd[catCuerpoSubPF="'+tipoCatSelec+'"] .ocultarProdF');
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
