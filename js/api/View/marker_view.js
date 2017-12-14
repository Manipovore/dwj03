/* View: vue du marker selectionné avec button "Réservez" qui ouvre un canvas de signature -> book_controller.js -> canvas.js */

var view_station = {

    selecteurInfo: document.getElementById('info'),
    id: 0,
    name: "",
    address: "", 
    bike_available: 0,
    available_bike_stands: 0,

    initMarker: function(id, name, address, bike_available, available_bike_stands){
        this.id = id;
        this.name = name;
        this.address = address;
        this.bike_available = bike_available;
        this.available_bike_stands = available_bike_stands;
    },

    readMarker: function(){
        this.selecteurInfo.innerHTML = '<div>'
        + "<h4>"  + this.name + "</h4>" +
        '<p>' + this.address + '</p>' +
        '<p>' + this.available_bike_stands + ' place(s)</p>' +
        '<p id="bike">' + this.bike_available +  ' vélo(s) disponible(s)</p>' +
        '<button id="event-btn" class="btn btn-primary" type="submit" onclick="bookCanvas(' + this.id +'); ">Réservez</button>' +
        ' <canvas id="sign" style="display: none;" width="150" height="150"></canvas> ' +
        '</div>';    
    },

    validMarker: function(){
        this.selecteurInfo.innerHTML = '<div>'
        + "<h4>"  + this.name + "</h4>"
        +'<p> Vous avez réservé à ' + this.address + ',</p>' +
        '<p id="bike"> Il reste :' 
        + this.bike_available +  ' vélo(s).</p>' +
        '</div>';    
    },

    resetMarker: function(){
        this.selecteurInfo.innerHTML = '<div>'
        + "<h4>Selectionnez une station pour réserver un vélo !!!</h4>" +
        '</div>';    
    }
}