import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'productofibraP',
  templateUrl: './producto-fibra-p.component.html',
  styleUrls: ['./producto-fibra-p.component.css']
})
export class ProductoFibraPComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(function(){

      // ------ Variables para mostrar y ocultar los SubProductos

      var showSubProductos = $('.cuerpoPrincipalProductos .contenedorProductos .claseProductosFibra1 .tituloFibra h1 i'),
      contSubProductos = $('.cuerpoPrincipalProductos .contenedorProductos .claseProductosFibra1 .cuerpoCategoria'),
      selectProdFibra = $('.claseSubCategoriaFibra .claseProductosFibra .tituloFibra .flechasSubProd');     // Desde aqui empieza lo nuevo
      
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
          var tipoCuerpoCatSelec = $('.claseSubCategoriaFibra .claseProductosFibra .cuerpoCategoria[catCuerpoSubPF="'+tipoCatSelec+'"]');
          var flechaMostrarP = $('.claseProductosFibra .tituloFibra .flechasSubProd[catCuerpoSubPF="'+tipoCatSelec+'"] .mostrarProdF');
          var flechaOcultaP = $('.claseProductosFibra .tituloFibra .flechasSubProd[catCuerpoSubPF="'+tipoCatSelec+'"] .ocultarProdF');
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
