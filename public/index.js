import allStations from '../src/stations.js';

// get the radio buttons
const radioButtons = document.querySelectorAll('input[type=radio]');
// get the submit button
const submitButton = document.querySelector('input[type=submit]');
// get the form
const form = document.querySelector('form');
// get the div that will display the original station list
const originalListDiv = document.querySelector('.original-stations-list');
// get the div that will display the replacement station list
const newListDiv = document.querySelector('.new-stations-list');
// get the h2 that will head the original station list
const originalListHeading = document.querySelector('.original-stations-panel h3');
// set the initial selected radio button value to null
let selectedValue = null;
let lineSelection = "No line selected"
let stations = []

console.log(allStations);

const renderOriginalList = (lineSelection, stations) => {
  console.log('running renderOriginalList() with', lineSelection);
  if (originalListDiv.hasChildNodes()) {
    while (originalListDiv.firstChild) {
      originalListDiv.removeChild(originalListDiv.firstChild);
    }
  }

  if (lineSelection === 'No line selected') {
    originalListHeading.classList.add('not-in-service');
    originalListHeading.textContent = 'No line selected';
    return;
  } else {
    originalListHeading.classList.remove('not-in-service');
    originalListHeading.textContent = `${lineSelection} original station names`;
    stations.forEach(station => {
      const p = document.createElement('p');
      p.textContent = station;
      originalListDiv.appendChild(p);
    });
  }
}

// add event listeners to the radio buttons
radioButtons.forEach(radioButton => {
  radioButton.addEventListener('change', () => {
    // enable the submit button
    selectedValue = radioButton.value;
    console.log('selected station value:', selectedValue);
    switch (selectedValue) {
      case 'bakerloo': 
        lineSelection = 'Bakerloo Line';
        stations = allStations.bakerloo;
        break;
      case 'central':
        lineSelection = 'Central Line';
        stations = allStations.central;
        break;
      case 'circle':
        lineSelection = 'Circle Line';
        stations = allStations.circle;
        break;
      case 'district':
        lineSelection = 'District Line';
        stations = allStations.district;
        break;
      case 'hammersmithCity':
        lineSelection = 'Hammersmith & City Line';
        stations = allStations.hammersmithCity;
        break;
      case 'jubilee':
        lineSelection = 'Jubilee Line';
        stations = allStations.jubilee;
        break;
      case 'metropolitan':
        lineSelection = 'Metropolitan Line';
        stations = allStations.metropolitan;
        break;
      case 'northern':
        lineSelection = 'Northern Line';
        stations = allStations.northern;
        break;
      case 'piccadilly':
        lineSelection = 'Piccadilly Line';
        stations = allStations.piccadilly;
        break;
      case 'victoria':
        lineSelection = 'Victoria Line';
        stations = allStations.victoria;
        break;
      case 'waterlooCity':
        lineSelection = 'Waterloo & City Line';
        stations = allStations.waterlooCity;
        break;
      case 'none':
        lineSelection = 'No line selected';
        stations = [];
        break;
      default:
        lineSelection = "No line selected";
        stations = [];
    };
    renderOriginalList(lineSelection, stations);
    // console.log('lineSelection:', lineSelection);
    // console.log('stations:', stations);
  });
});





