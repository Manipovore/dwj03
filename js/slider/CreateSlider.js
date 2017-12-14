/**
 * 
 * CREATESLIDER.JS
 * v 1.0
 * Dev:  Benjamin Oliveira
 * 
 * Class: CreateSlider
 * 
 * Propriétés:
 * - nameImg -> Array qui contient les noms des images "JPG" - "name".jpg
 * - imgLength -> taille du tableau pour la boucle for dans la function de création des images
 * - container -> selecteur du containeur du slider
 * - ctrl_slide -> selecteur de controle du slider
 * - select_slide -> selecteur des bulles sous le slider
 * - div_close -> balise div fermante
 * 
 * Méthodes:
 * - init -> initialisation de la classe, paramètre Array[name des images] - ["img1", "img2", "img3", ...]
 * - createImg -> creation des images nécessaire dans la fonction suivante.
 * - createSlide -> crée le slider avec les sélecteurs en propriétés et les images de la fonction createImg()
*/

$('document').ready(function(){
    var CreateSlider = {

        nameImg: [],
        imgLength: 0,
        container: $( "#containeur_slide" ), 
        slide: $( "<div id='slide'>" ),
        ctrl_slide: $( "<div id='ctrl_slide'>" ),
        select_slide: $( "<div id='select_slide'>" ),
        div_close: $( "</div>" ),
  
        init: function(name){
            this.nameImg = name;
            this.imgLength = name.length;
            this.createSlide();
        },

        createImg: function(imgLength, nameImg){
            for(var i = 0; i< imgLength; i++){
                if( i == 0 ){
                    $(this.slide).append('<img class="img_slide img_active" src="images/'+this.nameImg[i]+'.png" alt="">');
                }else{
                    $(this.slide).append('<img class="img_slide" src="images/'+this.nameImg[i]+'.png" alt="">');
                }
            }
        },

        createSlide: function(){
            $(this.container).append(this.slide);
                this.createImg(this.imgLength, this.nameImg);
                $(this.container).append(this.ctrl_slide);
                    $(this.ctrl_slide).append('<div id="prev_slide"><span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span></div>');
                    $(this.ctrl_slide).append('<div id="next_slide"><span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span></div>');
                $(this.container).append(this.select_slide);
                $(this.container).append(this.div_close);
                $(this.container).append(this.div_close);
            $(this.container).append(this.div_close);
        }
    }

    CreateSlider.init(["01", "02", "03", "04", "05"]);
});    