// Create options
const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
}

// Get latitude and longitude from HTML
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

// Create map
const map = L.map("mapid", options).setView([lat, lng], 15)

// Create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map)

// Creat icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [38, 80],
  popupAnchor: [170, 2],
})

// Create and add marker
L.marker([lat, lng], { icon }).addTo(map)

/* ORPHANAGE IMAGES */
function selectImage(event) {
  const button = event.currentTarget

  // Remove all active classes (.active)
  const buttons = document.querySelectorAll(".images button")

  buttons.forEach((button) => {
    button.classList.remove('active')
  })

  // Select clicked image
  const image = button.children[0]
  const imageContainer = document.querySelector(".orphanage-details > img")

  // Refresh imageContainer
  imageContainer.src = image.src

  // Add active class (.active) to active button
  button.classList.add('active')
}