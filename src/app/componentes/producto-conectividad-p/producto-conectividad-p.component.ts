import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'productoConectividadP',
  templateUrl: './producto-conectividad-p.component.html',
  styleUrls: ['./producto-conectividad-p.component.css']
})
export class ProductoConectividadPComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(function(){

      // ------ Variables para mostrar y ocultar los SubProductos

      var showSubProductos = $('.cuerpoPrincipalProductos .contenedorProductos .claseProductosFibra1 .tituloFibra h1 i'),
      contSubProductos = $('.cuerpoPrincipalProductos .contenedorProductos .claseProductosFibra1 .cuerpoCategoria'),
      selectProdFibra = $('.claseSubCategoriaConectividad .claseProductosConector .tituloConector .flechasSubProd');     // Desde aqui empieza lo nuevo
      
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
      selectProdFibra.on('click',function(){                  // al hacer click en la flecha despliega o oculta los SubProductos
        if(!pantallaMovil())
        {
          var tipoCatSelec = $(this).attr('catCuerpoSubPF');
          var tipoCuerpoCatSelec = $('.claseSubCategoriaConectividad .claseProductosConector .cuerpoCategoria[catCuerpoSubPF="'+tipoCatSelec+'"]');
          var flechaMostrarP = $('.claseProductosConector .tituloConector .flechasSubProd[catCuerpoSubPF="'+tipoCatSelec+'"] .mostrarProdF');
          var flechaOcultaP = $('.claseProductosConector .tituloConector .flechasSubProd[catCuerpoSubPF="'+tipoCatSelec+'"] .ocultarProdF');
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
