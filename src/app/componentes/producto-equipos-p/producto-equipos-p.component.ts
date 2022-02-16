import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'productoEquiposP',
  templateUrl: './producto-equipos-p.component.html',
  styleUrls: ['./producto-equipos-p.component.css']
})
export class ProductoEquiposPComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(function(){
      // ------ Variables para mostrar y ocultar los SubProductos
      var selectProdEquipos = $('.claseSubCategoriaEquipos .claseProductosEquipos .tituloEquipos .flechasSubProd');     // Seleccion div de los productos
      
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
      selectProdEquipos.on('click',function(){                  // al hacer click en la flecha despliega o oculta los SubProductos
        if(!pantallaMovil())
        {
          var tipoCatSelec = $(this).attr('catCuerpoSubPF');
          var tipoCuerpoCatSelec = $('.claseSubCategoriaEquipos .claseProductosEquipos .cuerpoCategoria[catCuerpoSubPF="'+tipoCatSelec+'"]');
          var flechaMostrarP = $('.claseProductosEquipos .tituloEquipos .flechasSubProd[catCuerpoSubPF="'+tipoCatSelec+'"] .mostrarProdF');
          var flechaOcultaP = $('.claseProductosEquipos .tituloEquipos .flechasSubProd[catCuerpoSubPF="'+tipoCatSelec+'"] .ocultarProdF');
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
