var bookId;

function bookCanvas(id){
    openCanevas(id);
}

function bookValid(id){
    arrayData.map( function(arrayData){
        if( arrayData.id == id ){
            bookId = id;
            arrayData.bike_available -= 1;
            sessionStorage.setItem(id, arrayData.bike_available);
            view_station.initMarker(arrayData.id, arrayData.name, arrayData.address, arrayData.bike_available);
            view_station.validMarker();
            initTime();
            sessionStorage.setItem(id, [arrayData.id, arrayData.name, arrayData.address, arrayData.bike_available]);
            
        }
    });
}

function resetValid(){
    arrayData.map( function(arrayData){
        if( arrayData.id == bookId ){
            arrayData.bike_available += 1;
            sessionStorage.clear();
        }
    });
}