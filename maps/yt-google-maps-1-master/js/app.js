// Nuestro código irá aquí
var arregloPines = [];

// Funcion para agregar pines
function agregarMarcador(location){
    var pin = new google.maps.Marker({
        position: location,
        map: map,
        // animation: google.maps.Animation
    });

    console.log("Latitud : ", location.lat());
    console.log("Longitud : ", location.lng());

    for(var i in arregloPines){
        arregloPines[i].setMap(null);
    }

    arregloPines.push(pin);

}


function cargar_mapa(){

    var mapOptions = {
        zoom: 15,
        center: new google.maps.LatLng( 9.9757858,-84.0078423),
        mapTypeId: 'satellite'
        // mapTypeId: google.maps.mapTypeId.ROADMAP
    };

    map = new google.maps.Map( document.getElementById('gmap_canvas'), mapOptions )

    // Agregar listener click
    map.addListener('click', function(event){
        // console.log("evento es : ", event);
        agregarMarcador(event.latLng);
    });

    var pin = new google.maps.Marker({
        position: new google.maps.LatLng(),
        map: map,
        title: "Hola Mundo"
    });

    arregloPines.push(pin);
}