/*********MODEL************/

// Connexion aux données de l'API en XHR
var Api = {

    xhr: {},

    connectApi: function(){
        this.xhr = new XMLHttpRequest();
        this.xhr.open("GET", "https://opendata.paris.fr/api/records/1.0/search/?dataset=stations-velib-disponibilites-en-temps-reel&rows=-1&sort=available_bikes&facet=status&refine.status=OPEN", false);
        this.xhr.send();
    },

    // Conversion des données en format JSON
    dataJSON: function(){
        Api.connectApi();
        console.log(this.xhr);
        console.log(JSON.parse(this.xhr.response));
        return JSON.parse(this.xhr.response);
    }
}

