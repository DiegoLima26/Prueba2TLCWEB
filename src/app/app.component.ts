import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  public selSubProd: string;
  constructor(private rutas:Router) 
  { 
    this.selSubProd="fibraMonoModo";
  }
  title = 'TLC SRL';
  btnCategoria = document.querySelectorAll('.menuRapido .menuRapido1 .menuPrincipal .linkMenu li a');
  btnServicios = document.querySelector('.menuRapido .menuRapido1 .menuPrincipal .linkMenu li .menuBtnServicios');      // Variable que despliega los productos 
  mostrarPagina(url:string)
  {
    this.rutas.navigate([url]);
  }
  mostrarPagina1(url:string, catSubProd: string)
  {
    this.rutas.navigate([url]);
    this.selSubProd = catSubProd;
    console.log(this.selSubProd);
    
  }
  pantallaMovil()                           // funcion para saber si estamos en pantallas moviles
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


  mostrarServicios()
  {
    if(!this.pantallaMovil())
    {
      console.log('hola');
      this.btnCategoria.forEach((catSelect)=>{
        catSelect.classList.remove('onResaltado');
      });
      this.btnServicios?.classList.add('onResaltado');
    }
  }
 
  ngOnInit(): void{
    $(function(){
      // ------ Variables generales que controlan Menu, Productos, Banner y Footer

      // ------ Variables para el Menu rapido informativo (LogIn)

      // ------ Variables para mostrar y ocultar el banner
      var showBanner = $('.banerOpcional');
      var selSubProdFunc: any;
      // ------ Variables para el manejo de los botones de categorias 

      var btnCategorias = document.querySelectorAll('.menuRapido .menuRapido1 .menuPrincipal .linkMenu li a'),     // Variable maneja todos los links de categorias
      btnHome = $('.menuBtnHome'),                // Variable que despliega los productos 
      btnServicios = $('.menuBtnServicios'),      // Variable que despliega los productos 
      btnComprar = $('.menuBtnCompra'),           // Variable que despliega los productos 
      btnAcercaDe = $('.menuBtnAcerca');          // Variable que despliega los productos 

      // ------ Variables para el manejo de el boton Productos

      var btnProd = $('.menuBtnProductos'),              // Variable que despliega los productos 
      cuadroProductos = $('.subMenuProductos');          // Div que contiene a las cat de los productos

      // ------ Variables para el manejo de la herramienta Busqueda

      var busquedaProd = $('.busquedaP i'),              // Variable que controla el icono de lupa
      cuadroBusqueda = $('.busquedaProd');               // Variable que contiene el cuadro busqueda

      // ------ Variables para el manejo del Banner y botones del banner

      var btnIzqBanner = $('.navBtnIz'),                 // Variable que controla el boton Izquierda del Banner
      btnDerBanner = $('.navBtnDer'),                    // Variable que controla el boton Derecha del Banner
      slider = $('.banerLateralListaU'),                 // Variable que maneja el contenedor de imagenes del baner
      numCirculo = 1;                                    // Variable que maneja el circulo a encender
      var contTiempo = setInterval(function(){ MovDer(); }, 5000);
      var botonBannerCont = $('.banerOpcional .slideBaner .banerLateralListaU .styleLista .centraT .mensajeIzquierda .btnBanerContacto');  // Variable que maneja los botones del banner

      // ------- Variables que maneja a los productos 

      var catPrincipalesProd = document.querySelectorAll('.subMenuProductos .subProductoGrid .subProductoCat a'),     // variable con los enlaces de las categorias Principales
      subCatProductos = document.querySelectorAll('.subMenuProductos .subProductoGrid .subCatProd .subCatProdItem'),
      flechaDeCategoria = document.querySelectorAll('.subMenuProductos .subProductoGrid .subProductoCat .linkCatProd i'),
      selecSubProducto = $('.subCatProd .subCatProdItem .linkSubCatProducto a');                                             // Variable que colapsara el menu de productos
      
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
      function onProdSubProd()                          // funcion para habilitar el Menu y SubMenu de Fibra Optica
      {
        $('.subMenuProductos .subProductoGrid .subCatProd .subCatProdItem[catProdTienda="fibraOptica"]').addClass('subItemOn'); 
        $('.subMenuProductos .subProductoGrid .subProductoCat .linkCatProd[catProdTienda="fibraOptica"] i').addClass('flechaOn'); 
      }
      // ------ Funciones para resaltar la categoria servicio seleccionada y colapsar banner ------
      btnHome.on('click',function(){                  // al hacer click en el boton de menuHome
        if(!pantallaMovil())
        {
          btnCategorias.forEach((catSelect)=>{
            catSelect.classList.remove('onResaltado');
          });
          btnHome.addClass('onResaltado');
          showBanner.removeClass('showBannerOff');
        }
      });
      // btnServicios.on('click',function(){                  // al hacer click en el boton de menuServicios
      //   if(!pantallaMovil())
      //   {
      //     btnCategorias.forEach((catSelect)=>{
      //       catSelect.classList.remove('onResaltado');
      //     });
      //     btnServicios.addClass('onResaltado');
      //     showBanner.addClass('showBannerOff');
      //   }
      // });
      btnComprar.on('click',function(){                  // al hacer click en el boton de menuComoComprar
        if(!pantallaMovil())
        {
          btnCategorias.forEach((catSelect)=>{
            catSelect.classList.remove('onResaltado');
          });
          btnComprar.addClass('onResaltado');
          showBanner.addClass('showBannerOff');
        }
      });
      btnAcercaDe.on('click',function(){                  // al hacer click en el boton de menuAcercaDe
        if(!pantallaMovil())
        {
          btnCategorias.forEach((catSelect)=>{
            catSelect.classList.remove('onResaltado');
          });
          btnAcercaDe.addClass('onResaltado');
          showBanner.addClass('showBannerOff');
        }
      });

      // ------ Funciones para el manejo de el boton de productos ------
      btnProd.on('click',function(){                      // al hacer click en el boton de menuProd
        if(!pantallaMovil())
        {
          btnCategorias.forEach((catSelect)=>{
            catSelect.classList.remove('onResaltado');
          });
          btnProd.addClass('onResaltado');
          if(cuadroProductos.hasClass('mostrarMenuProd'))
          {
            subCatProductos.forEach((catProdTienda) =>{ 
              catProdTienda.classList.remove('subItemOn');
            });
            flechaDeCategoria.forEach((elemento) =>{
              elemento.classList.remove('flechaOn');
            });
            onProdSubProd();
            cuadroProductos.removeClass('mostrarMenuProd');
          }
          else
          {
            onProdSubProd();
            cuadroProductos.addClass('mostrarMenuProd');
          }
        }
      });
      // ------ Funciones que manejan la herramienta busqueda ------ 
      busquedaProd.on('click',function(){            // al hacer click en el boton de busqueda
        if(!pantallaMovil())
        {
          if(cuadroBusqueda.hasClass('busquedaProdOn'))
          {
            cuadroBusqueda.removeClass('busquedaProdOn');
          }
          else
          {
            cuadroBusqueda.addClass('busquedaProdOn');
          }
        }
      });
      // ------ Funciones que manejan el Banner Lateral y circulo informativo
      $('.banerLateralListaU li:last').insertBefore('.banerLateralListaU li:first');
      slider.css('margin-left', '-'+100+'%');
      $('.barraCirculos .circulo'+numCirculo+'').css('background-color', 'rgba('+245+','+124+','+0+','+0.6+')');
      function MovDer()
      {
        slider.animate(
          {marginLeft:'-'+200+'%'},
          650,
          function()
          {
            $('.banerLateralListaU li:first').insertAfter('.banerLateralListaU li:last');
            slider.css('margin-left', '-'+100+'%');
            $('.barraCirculos .circulo'+numCirculo+'').css('background-color', 'rgb('+22+','+11+','+0+')');
            numCirculo=numCirculo +1;
            $('.barraCirculos .circulo'+numCirculo+'').css('background-color', 'rgba('+245+','+124+','+0+','+0.6+')');
            if(numCirculo >= 5)
            {
              numCirculo = 1;
              $('.barraCirculos .circulo'+numCirculo+'').css('background-color', 'rgba('+245+','+124+','+0+','+0.6+')'); 
            }
          });
      }
      function MovIzq()
      {
        slider.animate(
          {marginLeft:0+'%'},
          650,
          function()
          {
            $('.banerLateralListaU li:last').insertBefore('.banerLateralListaU li:first');
            slider.css('margin-left', '-'+100+'%');
            $('.barraCirculos .circulo'+numCirculo+'').css('background-color', 'rgb('+22+','+11+','+0+')');
            numCirculo=numCirculo -1;
            if(numCirculo == 0)
            {
              numCirculo = 4;
              $('.barraCirculos .circulo'+numCirculo+'').css('background-color', 'rgba('+245+','+124+','+0+','+0.6+')'); 
            }
            $('.barraCirculos .circulo'+numCirculo+'').css('background-color', 'rgba('+245+','+124+','+0+','+0.6+')');
          }
        );
      }
      btnDerBanner.on('click',function(){               // Mover banner a la derecha
        MovDer();
        clearInterval(contTiempo);
        contTiempo = setInterval(function(){            
          MovDer();
        }, 5000);
      });
      btnIzqBanner.on('click',function(){               // Mover banner a la Izquierda
        MovIzq();
        clearInterval(contTiempo);
        contTiempo = setInterval(function(){
          MovDer();
        }, 5000);
      });
      botonBannerCont.on('click',function(){             // Preciona el boton del banner y oculta el banner
        if(!pantallaMovil())
        {
          btnCategorias.forEach((catSelect)=>{
            catSelect.classList.remove('onResaltado');
          });
          btnComprar.addClass('onResaltado');
          showBanner.addClass('showBannerOff');
        }
      });
      // ------ Funciones que manejan los productos y subProductos

      catPrincipalesProd.forEach((elemento) => {
        if(!pantallaMovil())
        {
          elemento.addEventListener('mouseenter', (e) => {
            var tipoProducto = $(elemento).attr('catProdTienda');
            subCatProductos.forEach((catProdTienda) =>{
              var tiposubProducto = $(catProdTienda).attr('catProdTienda'); 
              $('.subMenuProductos .subProductoGrid .subProductoCat .linkCatProd[catProdTienda="'+tiposubProducto+'"] i').removeClass('flechaOn');
              catProdTienda.classList.remove('subItemOn');
              if(tipoProducto == tiposubProducto)
              {
                catProdTienda.classList.add('subItemOn');
                $('.subMenuProductos .subProductoGrid .subProductoCat .linkCatProd[catProdTienda="'+tipoProducto+'"] i').addClass('flechaOn'); 
              }
            }); 
          });
        }
      });

      selecSubProducto.on('click',function(){                       // Colapsar el menu al seleccionar un producto
        var tipoSubPro = $(this).attr('subSubProd');
        selSubProdFunc = tipoSubPro;
        cuadroProductos.removeClass('mostrarMenuProd');
        showBanner.addClass('showBannerOff');
      });
    });
  }
}
