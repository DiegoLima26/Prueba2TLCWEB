import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'productoLimpiezaP',
  templateUrl: './producto-limpieza-p.component.html',
  styleUrls: ['./producto-limpieza-p.component.css']
})
export class ProductoLimpiezaPComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(function(){
      // ------ Variables para mostrar y ocultar los SubProductos
      var selectProdLimpieza = $('.claseSubCategoriaLimpieza .claseProductosLimpieza .tituloLimpieza .flechasSubProd');     // Seleccion div de los productos
      
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
      selectProdLimpieza.on('click',function(){                  // al hacer click en la flecha despliega o oculta los SubProductos
        if(!pantallaMovil())
        {
          var tipoCatSelec = $(this).attr('catCuerpoSubPF');
          var tipoCuerpoCatSelec = $('.claseSubCategoriaLimpieza .claseProductosLimpieza .cuerpoCategoria[catCuerpoSubPF="'+tipoCatSelec+'"]');
          var flechaMostrarP = $('.claseProductosLimpieza .tituloLimpieza .flechasSubProd[catCuerpoSubPF="'+tipoCatSelec+'"] .mostrarProdF');
          var flechaOcultaP = $('.claseProductosLimpieza .tituloLimpieza .flechasSubProd[catCuerpoSubPF="'+tipoCatSelec+'"] .ocultarProdF');
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
