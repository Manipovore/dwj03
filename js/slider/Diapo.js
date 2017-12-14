/**
 * 
 * SLIDER.JS
 * v 1.0
 * Dev:  Benjamin Oliveira
 * 
 * Class: Diapo
 * 
 * Propriétés:
 * - numberImg -> nombre d'image dans le slider
 * - select -> index de sélection d'image (IMPORTANT: impact sur plusieurs fonctions)
 * 
 * Méthodes:
 * - init -> initialisation de la classe "Diapo", stocke le nombre img, init les fonctions clés.
 * - start -> init des events "keydown","click" et "touch" (smartphone)
 * - createBulleSlide -> création des bulles "span" sous le slider
 * - eventBulleSlide -> event click sur la bulle renvoi l'image correspondante à l'index
 * - activeBulleSlide -> restitue la bulle active avec l'image correspondante
 * - updateRotate -> mise à jour des éléments avec rotation
 * - nextImg -> image suivante dans le slider, addClass active
 * - findImg -> selectionne l'image avec l'index, addClass
 * - prevImg -> image précédente dans le slider, addClass active
 * - move -> Utilisation de nextImg() ttes les 3s, function reset() si slider en bout de chaine. Stop function sur event click-keydown-touch
 * - reset -> re-init la fonction move, var select index à 0, img first addClass active ...
 * - touchEvent -> function drag pour smartphone pour faire glisser les images dans le slider
 * - log -> function de débogage, intervalle 1s update.
 * 
*/

$('document').ready(function(){
  var Diapo = {

      numberImg: 0,
      select: 0,

      init: function() {
          //Nbre image dans le slider stocké dans la propriété "numberImge"
          $( "#slide img" ).each(function( index ) {
            return Diapo.numberImg = index ;
          });

          this.start();
          this.createBulleSlide();
          this.updateRotate();
          this.move();
      },

      start: function() {
          this.keydownEvent();
          this.clickEvent();
          this.touchEvent();
      },

      createBulleSlide: function(){
        for(var i = 0; i <= Diapo.numberImg; i++){
          if(i == 0){
            $( "#select_slide" ).append("<span id='"+i+"bulle' class='bulle bulleActive'></span>");
          }else{
            $( "#select_slide" ).append("<span id='"+i+"bulle' class='bulle'></span>");
          }
        }
        Diapo.eventBulleSlide();
      },

      eventBulleSlide: function(){
        $(".bulle").on("click", function(){
          var id = $(this).attr("id").substring(0, 1);
          Diapo.findImg(id);
          Diapo.activeBulleSlide(id);
        });
      },

      activeBulleSlide: function(number){
        if(number != undefined){
          $( "#select_slide span" ).removeClass("bulleActive");
          $( ".bulle" ).eq( number ).addClass("bulleActive");
        } 
      },

      updateRotate : function(select){

        for(var i = select; i<=this.numberImg; i++){
          $( "#slide img" ).eq( i ).css( "transform", "rotateY("+ -(i*10)  +"deg)" );
        }

        var temp = this.numberImg;
        for(var i = 0; i<=(select + this.numberImg) - this.numberImg; i++){
          var j = temp * 10;
          $( "#slide img" ).eq( i ).css( "transform", "rotateY("+ j +"deg)" );
          temp -=1 ;
        }

        $(".img_active").css( "transform", "rotateY(0deg)" );
        Diapo.activeBulleSlide(select);
      },

      nextImg: function(cible){
        if(!$("#slide img:last-child").hasClass('img_active')){
          cible.next().addClass("img_active");
          cible.removeClass('img_active');
          Diapo.select += 1;
          Diapo.updateRotate(Diapo.select);
        }
      },

      findImg: function(cible){
        $("#slide img").removeClass('img_active');
        $("#slide img").eq(cible).addClass("img_active");
        Diapo.select = parseInt(cible);
        Diapo.updateRotate(cible);
      },

      prevImg: function(cible){
        if(!$("#slide img:first-child").hasClass('img_active')){
          cible.prev().addClass("img_active");
          cible.removeClass('img_active');
          Diapo.select -= 1;
          Diapo.updateRotate(Diapo.select);
        }
      },

      move : function() {
        var t = setTimeout(function(){
            if($("#slide img:last-child").hasClass('img_active')){
              clearTimeout(t);
              Diapo.reset();
            }else{
              Diapo.nextImg($(".img_active"));
              Diapo.move();
            }
        }, 3000);
        $(document).on('click keydown touchstart', function () {
          clearTimeout(t);
        });
      },

      reset: function(){
        $("#slide img:last-child").removeClass("img_active");
        $("#slide img:first-child").addClass("img_active");
        $("#slide img:first-child").css("transform", "rotateY(0deg)" )
        Diapo.select = 0;
        Diapo.activeBulleSlide(0);
        Diapo.move();
      },

      touchEvent: function() {
        
        var el =  $("#slide");
        var start;
        var move;
      
        el.on('touchstart', function(e) {
          this.start = e.touches[0].clientX;
        });
        el.on('touchmove', function(e) {
          this.move = e.touches[0].clientX;
        });
        el.on('touchend', function(e) {
            if(this.start > this.move){
              Diapo.nextImg($(".img_active"));
            }else{
              Diapo.prevImg($(".img_active"));
            }
        });
      },

      keydownEvent: function(){
        var slide = $('#slide');

          $(document).on('keydown', function (e) {
            var elt = $( ".img_active" );

            if(e.keyCode == 39 && Diapo.select < Diapo.numberImg){
              $(elt).next().addClass('img_active');
              Diapo.select += 1;
              $( elt).removeClass('img_active');
            }else if(e.keyCode == 37 && Diapo.select > 0){
              $(elt).prev().addClass('img_active');
              Diapo.select -= 1;
              $( elt).removeClass('img_active');
            }

            Diapo.updateRotate(Diapo.select);
          });
      },

      clickEvent: function(){
        $("#next_slide").on('click', function () {
              var target = $(".img_active");
              Diapo.nextImg(target);
          });

          $("#prev_slide").on('click', function () {
            var target = $(".img_active");
            Diapo.prevImg(target);
        });
      },

      log: function(){
        setInterval( function(){
          //console.log();
          //console.log(Diapo.select);
        }, 1000);
      }

  };

  Diapo.init();
  //Diapo.log();
});