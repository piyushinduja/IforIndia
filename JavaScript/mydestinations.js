var pname = '';
let destCount = 0;
var array = [];
var lowerName = '';

function addDestination(pname) {
    console.log(pname);
    localStorage.setItem(`${pname}`, pname);
    alert(`${pname} added successfully to your Destinations!!`);
}
function removePlace(placename) {
    var sure = confirm(`Are you sure you want to remove ${placename} from your Destinations?`);
    if (sure == true) {
        localStorage.removeItem(placename);
    }
}

function loadPage() {
    var places = ['Andaman and Nicobar', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chandigarh', 'Chhattisgarh', 'Daman and Diu', 'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Ladakh', 'Lakshadweep', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Puducherry', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttarakhand', 'Uttar Pradesh', 'West Bengal'];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (places.includes(key)) {
            let lowerName = key.toLowerCase();
            console.log(`${key} : ${localStorage.getItem(key)}`);
            let main1 = document.getElementById("main1");
            let newPlace = document.createElement("div");
            newPlace.className = 'place';
            // newPlace.id = `${key}`;
            newPlace.innerHTML = `<div class="place" id="${key}">
            <img class="placeimg" src="Photos/${lowerName} cover.jpg" alt="${key}">
            <span class="placename">${key}</span>
            <a class="placebtn" href="${lowerName}.html">See Details</a>
            <a class="placebtn" href="" onclick="removePlace('${key}')">Remove</a>
        </div>`;
            main1.appendChild(newPlace);
        }
    }
}
