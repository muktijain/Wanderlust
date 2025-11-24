mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12', 
    center: listing.geometry.coordinates,
    zoom: 9,
});

document.addEventListener("DOMContentLoaded", function () {
    
    map.addControl(new mapboxgl.NavigationControl());

    const marker = new mapboxgl.Marker({ color: "red" })
        .setLngLat(listing.geometry.coordinates) 
        .setPopup(
            new mapboxgl.Popup({ offset: 25 })
            .setHTML(
                `<h6>${listing.location}</h6> 
                <p> Exact location provided after booking </p>`
            ) 
        )
        .addTo(map); 

});
