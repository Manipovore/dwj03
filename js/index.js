
function include(fileName){
    document.write("<script src='js/"+fileName+".js'></script>" );
}

// SCRIPT SLIDER
include('slider/CreateSlider');
include('slider/Diapo');

//SCRIPT MARKER MAP
include('api/Model/marker_Model');
include('api/Controller/marker_controller');
include('api/View/marker_view');

//SCRIPT BOOK
include('api/Controller/book_controller');
include('api/View/book_view');

//SCRIPT CANVAS
include('canvas/canvas');

//SCRIPT MAP INIT API
include('api/maps');