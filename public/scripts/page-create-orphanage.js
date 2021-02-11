// Create map
const map = L.map("mapid").setView([-23.5903528, -46.7112789], 15);

// Create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// creat icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [38, 80],
});

let marker;

// Create and add marker
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  // Remove old icon layer
  marker && map.removeLayer(marker);

  // Add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// Add photo field
function addPhotoField() {
  // Photos container (#images)
  const container = document.querySelector("#images");

  // Dupplicating container (.new-upload)
  const fieldsContainer = document.querySelectorAll(".new-upload");

  // Duplicate last added image
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  // Verify if field is empty and clear container field before add to container
  const input = newFieldContainer.children[0];

  if (input.value == "") {
    return;
  }

  input.value = "";

  // Add duplicated image on the container
  container.appendChild(newFieldContainer);
}

function deletePhotoField(event) {
  const span = event.currentTarget;
  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length <= 1) {
    span.parentNode.children[0].value = "";
    return;
  }

  span.parentNode.remove();
}

function toggleSelect(event) {
  // Remove active class from all buttons (.active)
  document
    .querySelectorAll(".button-select button")
    .forEach((button) => button.classList.remove("active"));

  // Add active class on clicked button
  const button = event.currentTarget;
  button.classList.add("active");

  // Update input hidden with selected value
  const input = document.querySelector('[name="open_on_weekends"]')

  input.value = button.dataset.value
}

function validate(event) {
  const lat = document.querySelector("[name=lat]").value
  const lng = document.querySelector("[name=lng]").value

  // Validate if latitude and longitude are filled
  if(lat == '' || lng == '') {
    // Prevent to send the form
    event.preventDefault()
    alert('Selecione um lugar no mapa!')
  }
}