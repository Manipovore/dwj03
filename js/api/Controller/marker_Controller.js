/**** CONTROLLER *****/


var Data_Controller = function(){
    var data = Api.dataJSON(); //data = données fournir par l'api
    var numberData = data.records.length;
    var arrayData = [];
    for(var i=0; i< numberData; i++){
        //stock dans le tableau arrayData avec structure de la class Marker_Controller
        if(data.records[i].fields.available_bikes > 0){
            arrayData.push( 
                new Marker_Controller(
                    i,
                    data.records[i].fields.name,
                    data.records[i].fields.address,
                    data.records[i].fields.position[0],
                    data.records[i].fields.position[1],
                    data.records[i].fields.available_bikes,
                    data.records[i].recordid,
                    data.records[i].fields.available_bike_stands,
                )
            );
        }
    }
    return arrayData;
}

class Marker_Controller {
    constructor(id, name, address, lat, lng, bike_available, recordid, available_bike_stands){
        this.id = id;
        this.name = name;
        this.address = address;
        this.lat = lat;
        this.lng = lng;
        this.position = {lat, lng};
        this.bike_available = bike_available; //vélos dispo
        this.recordid = recordid;
        this.available_bike_stands = available_bike_stands;//supports de vélo dispo
    }
}

