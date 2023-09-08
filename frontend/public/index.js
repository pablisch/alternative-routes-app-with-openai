import { allLinesArrays, customStationsArrays, customStationThemes } from "./stations.js";
import { emptyOriginalListDiv, emptyNewListDiv, removeOriginalClasses, removeNewClasses, AddOriginalNotInServiceClass, AddNewNotInServiceClass } from "./helpers.js";

// get the radio buttons
const radioButtons = document.querySelectorAll('input[type=radio]');
// get the form
const trackForm = document.querySelector('.track-form');
// get the div that will display the original station list
const originalListDiv = document.querySelector('.original-stations-list');
// get the div that will display the replacement station list
const newListDiv = document.querySelector('.new-stations-list');
// get the h2 that will head the original station list
const originalListHeading = document.querySelector(
  '.original-stations-panel h3'
);
// get the h2 that will head the replacement station list
const newListHeading = document.querySelector('.new-stations-panel h3');
// set the initial selected radio button value to null
let selectedValue = null;
let lineSelection = 'No line selected';
let stations = [];
let generatedStationNamesArray = [];

// fetch all custom stations from the database
const fetchCustomStations = async () => {
  try {
    const res = await fetch('http://localhost:4000/lines');
    const data = await res.json();
    console.log('data is', data);
    if (data.trainlines) {
      data.trainlines.forEach((trainline) => {  
        customStationsArrays[`${trainline.lineName}Custom`] = trainline.stations;
        if (trainline.theme !== '') {
          customStationThemes[`${trainline.lineName}Theme`] = trainline.theme;
          const span = document.querySelector(`label[for=${trainline.lineName}] span`);
          span.textContent = ` (${trainline.theme})`;
        }
      });
    }
    console.log('customStationsArrays is', customStationsArrays);
    console.log('customStationThemes is', customStationThemes)
  } catch (error) {
    console.log('error is', error);
  }
};

fetchCustomStations();

const renderOriginalList = (lineSelection, stations) => {
  emptyOriginalListDiv();

  if (lineSelection === 'No line selected') {
    AddOriginalNotInServiceClass();
    originalListHeading.textContent = 'No line selected';
    return;
  } else {
    removeOriginalClasses();
    originalListHeading.textContent = `${lineSelection} original station names`;
    stations.forEach((station) => {
      const p = document.createElement('p');
      p.textContent = station;
      originalListDiv.appendChild(p);
    });

    emptyNewListDiv();

    if (customStationsArrays[`${selectedValue}Custom`].length > 0) {
      removeNewClasses();
      newListHeading.textContent = `${lineSelection} custom station names`;
      customStationsArrays[`${selectedValue}Custom`].forEach((station) => {
        const p = document.createElement('p');
        p.textContent = station;
        newListDiv.appendChild(p);
      });
    } else {
      AddNewNotInServiceClass();
      newListHeading.textContent =
        'Train replacement not currently in service for this line';
    }
  }
};

const renderNewList = (lineSelection, stations) => {
  console.log('running renderNewList() with', lineSelection);
  console.log('stations are', stations);
  // emptyNewListDiv();

  if (lineSelection === 'No line selected') {
    AddNewNotInServiceClass();
    newListHeading.textContent = 'No line selected';
    return;
  } else {
    removeNewClasses();
    newListHeading.textContent = `${lineSelection} custom station names`;
    stations.forEach((station) => {
      const p = document.createElement('p');
      p.textContent = station;
      newListDiv.appendChild(p);
    });

    customStationsArrays[`${selectedValue}Custom`] = stations;
    console.log('customStationsArrays is', customStationsArrays);

    // get span element in the selected line's label
    const span = document.querySelector(`label[for=${selectedValue}] span`);
    // set the text content of the span element to the userTheme
    span.textContent = ` (${trackForm.userTheme.value})`;
  }
};

// add event listeners to the radio buttons
radioButtons.forEach((radioButton) => {
  radioButton.addEventListener('change', () => {
    // enable the submit button
    selectedValue = radioButton.value;
    console.log('selected station value:', selectedValue);
    switch (selectedValue) {
      case 'bakerloo':
        lineSelection = 'Bakerloo Line';
        stations = allLinesArrays.bakerloo;
        break;
      case 'central':
        lineSelection = 'Central Line';
        stations = allLinesArrays.central;
        break;
      case 'circle':
        lineSelection = 'Circle Line';
        stations = allLinesArrays.circle;
        break;
      case 'district':
        lineSelection = 'District Line';
        stations = allLinesArrays.district;
        break;
      case 'hammersmithCity':
        lineSelection = 'Hammersmith & City Line';
        stations = allLinesArrays.hammersmithCity;
        break;
      case 'jubilee':
        lineSelection = 'Jubilee Line';
        stations = allLinesArrays.jubilee;
        break;
      case 'metropolitan':
        lineSelection = 'Metropolitan Line';
        stations = allLinesArrays.metropolitan;
        break;
      case 'northern':
        lineSelection = 'Northern Line';
        stations = allLinesArrays.northern;
        break;
      case 'piccadilly':
        lineSelection = 'Piccadilly Line';
        stations = allLinesArrays.piccadilly;
        break;
      case 'victoria':
        lineSelection = 'Victoria Line';
        stations = allLinesArrays.victoria;
        break;
      case 'waterlooCity':
        lineSelection = 'Waterloo & City Line';
        stations = allLinesArrays.waterlooCity;
        break;
      case 'none':
        lineSelection = 'No line selected';
        stations = [];
        break;
      default:
        lineSelection = 'No line selected';
        stations = [];
    }
    renderOriginalList(lineSelection, stations);
  });
});

// add event listener to the form
trackForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  console.log('theme is', trackForm.userTheme.value);
  console.log('lineSelection is', lineSelection);
  console.log('stations are', stations);

  // set heading of new station list to 'Generating Custom Names'
  removeNewClasses();
  emptyNewListDiv();
  newListHeading.classList.add('loading');
  newListHeading.textContent = 'Generating Custom Names...';

  const res = await fetch('http://localhost:4000/openai/tracks/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      userTheme: trackForm.userTheme.value,
      quantity: stations.length,
    }),
  });

  const data = await res.json();
  console.log('data is', data);

  if (data.generatedStationNames === 'NA') {
    AddNewNotInServiceClass();
    newListHeading.textContent =
      'That theme could not be accepted. Please try another theme.';
    return;
  }

  if (data.generatedStationNames.includes("I'm sorry")) {
    AddNewNotInServiceClass();
    newListHeading.textContent =
      'That theme may be offensive or inappropriate.';
    return;
  }

  if (typeof data.generatedStationNames === 'string') {
    generatedStationNamesArray = JSON.parse(data.generatedStationNames);

    console.log('generatedStationNamesArray is', generatedStationNamesArray);
  }

  // check if generatedStationNamesArray is an array
  if (!Array.isArray(generatedStationNamesArray)) {
    AddNewNotInServiceClass();
    newListHeading.textContent =
      'Apparently OpenAI was not able to return an array as it is still unable to follow basic commands.\nKnow need to worry about the end of the world just yet!';
    // render generatedStationNamesArray
    const p = document.createElement('p');
    p.textContent = `OpenAI returned: ${generatedStationNamesArray}`;
    newListDiv.appendChild(p);
    return;
  }

  generatedStationNamesArray.forEach((station, index) => {
    console.log(`station ${index + 1} is ${station}`);
  });

  renderNewList(lineSelection, generatedStationNamesArray);
});
