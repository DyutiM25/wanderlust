// const lon = 77.209;
// const lat = 28.6139;

console.log(coordinates);

document.addEventListener("DOMContentLoaded", () => {
  const map = new maplibregl.Map({
    container: "map",
    style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${mapToken}`,
    center: listing.geometry.coordinates,
    zoom: 12,
  });

  const popup = new maplibregl.Popup({ offset: 25 }).setHTML(
    `<h4>${listing.location}, ${listing.country}</h4><p>Exact location will be provided after booking</p>`
  );

  // Add marker with attached popup
  new maplibregl.Marker({ color: "red" })
    .setLngLat(listing.geometry.coordinates)
    .setPopup(popup)
    .addTo(map);

});
