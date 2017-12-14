

$(document).keydown(function(e) {
  //console.log(e);
});

//key = ArrowRight keycode = 39
//key = ArrowLeft keycode = 37



$('document').ready(function(){
  var Diapo = {

      numberImg: 0,
      eltCenter: 0,
      pair: false,
      select: 0,

      init : function() {
          var number;
          $( "#slide img" ).each(function( index ) {
            return number = index ;
          });
          this.numberImg = number;

          if((number+1)%2 == 0){
            this.pair = true;
            this.eltCenter = Math.round(this.numberImg/2);
          }else{
            this.pair = false;
            this.eltCenter = Math.round(this.numberImg/2 + 1);
          }



          this.start();
          this.createSelectSlide();
          this.update();
          this.move();
      },

      start : function() {
          var slide = $('#slide');
          var number = this.numberImg;

          $(document).on('keydown', function (e) {
            var elt = $( ".img_active" );

            if(e.keyCode == 39 && Diapo.select < number){
              $(elt).next().addClass('img_active');
              Diapo.select += 1;
              $( elt).removeClass('img_active');
            }else if(e.keyCode == 37 && Diapo.select > 0){
              $(elt).prev().addClass('img_active');
              Diapo.select -= 1;
              $( elt).removeClass('img_active');
            }

            Diapo.update(Diapo.select);

            //console.log(select, number);

            
            //this.move($(this).next($('section')));
          });

          $("#next_slide").on('click', function () {
              var target = $(".img_active");
              Diapo.nextImg(target);
          });

          $("#prev_slide").on('click', function () {
            var target = $(".img_active");
            Diapo.prevImg(target);
        });
      },

      createSelectSlide: function(){
        var bulle = $("<span class='bulle'></span>");
        for(var i = 0; i <= Diapo.numberImg; i++){
          console.log("boucle");
          //$( ".bulle" ).clone().add(bulle).appendTo( "#select_slide" );
          $( "#select_slide" ).append("<span class='bulle'></span>");
        }
      },

      update : function(select){

        $( "#slide img" ).css( "backgroundColor", "white" );

        for(var i = select; i<=this.numberImg; i++){
          $( "#slide img" ).eq( i ).css( "backgroundColor", "yellow" );
          $( "#slide img" ).eq( i ).css( "transform", "rotateY("+ -(i*10)  +"deg)" );
        }

        var temp = this.numberImg;
        for(var i = 0; i<=(select + this.numberImg) - this.numberImg; i++){
          var j = temp * 10;
          $( "#slide img" ).eq( i ).css( "backgroundColor", "red" );
          $( "#slide img" ).eq( i ).css( "transform", "rotateY("+ j +"deg)" );
          temp -=1 ;
        }

        $(".img_active").css( "backgroundColor", "green" );
        $(".img_active").css( "transform", "rotateY(0deg)" );

      },

      nextImg: function(cible){
        if(!$("#slide img:last-child").hasClass('img_active')){
          cible.next().addClass("img_active");
          cible.removeClass('img_active');
          Diapo.select += 1;
          Diapo.update(Diapo.select);
        }
      },

      prevImg: function(cible){
        if(!$("#slide img:first-child").hasClass('img_active')){
          cible.prev().addClass("img_active");
          cible.removeClass('img_active');
          Diapo.select -= 1;
          Diapo.update(Diapo.select);
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
        $(document).on('click keydown', function () {
          clearTimeout(t);
        });
      },

      reset: function(){
        $("#slide img:last-child").removeClass("img_active");
        $("#slide img:first-child").addClass("img_active");
        $("#slide img:first-child").css("transform", "rotateY(0deg)" )
        Diapo.select = 0;
        Diapo.move();
      },

      log: function(){
        setInterval( function(){
          //console.log();
          //console.log(Diapo.select);
        }, 1000);
      }

  };

  Diapo.init();
  Diapo.log();
});