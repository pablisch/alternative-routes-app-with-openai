import { baseUrl } from './baseUrl.js';

import {
  allLinesArrays,
  customStationsArrays,
  customStationThemes,
} from './stations.js';
import {
  emptyOriginalListDiv,
  emptyNewListDiv,
  removeOriginalClasses,
  removeNewClasses,
  AddOriginalNotInServiceClass,
  AddNewNotInServiceClass,
  getLineTitleAndStationsList,
} from './helpers.js';
import { bannedWords } from './bannedWords.js';

console.log('baseUrl is', baseUrl);

const radioButtons = document.querySelectorAll('input[type=radio]');
const trackForm = document.querySelector('.track-form');
const userThemeInput = document.querySelector('#user-theme');
const originalListDiv = document.querySelector('.original-stations-list');
const newListDiv = document.querySelector('.new-stations-list');
const originalListHeading = document.querySelector('.original-stations-panel h3');
const newListHeading = document.querySelector('.new-stations-panel h3');

let selectedTubeLine = null;
let currentTheme = '';
let fullLineTitle = 'No line selected';
let stations = [];
let generatedStationNamesArray = [];
let containsBannedWord = false;
let themeWord;

// dynamically format nav buttons
const navButtons = document.querySelectorAll('.nav-links li a');
navButtons.forEach((navButton) => {
  if (navButton.innerHTML === 'Home') {
    navButton.classList.add('inactive');
  } else {
    navButton.classList.remove('inactive');
  }
});

// fetch all custom stations from the database - ONLY WHEN PAGE LOADS
const fetchCustomStations = async () => {
  try {
    newListHeading.classList.add('initial-data-fetch');
    newListHeading.textContent = ''; // initial message while backend server is spinning up
    setTimeout(() => {
      if (newListHeading.classList.contains('initial-data-fetch')) {
        newListHeading.textContent =
          'Please be patient while the backend server spins up. After periods of inactivity, it may take up to a minute to spin up. This page will refresh automatically when the server is ready.';
      }
    }, 1500);
    const res = await fetch(`${baseUrl}/lines`);
    const data = await res.json();
    console.log('data is', data);
    if (data.trainlines) {
      data.trainlines.forEach((trainline) => {
        customStationsArrays[`${trainline.lineName}Custom`] =
          trainline.stations;
        if (trainline.theme !== '') {
          customStationThemes[`${trainline.lineName}Theme`] = trainline.theme;
          const span = document.querySelector(
            `label[for=${trainline.lineName}] span`
          );
          span.textContent = ` (${trainline.theme})`;
        }
      });
    }
    newListHeading.classList.remove('initial-data-fetch');
    newListHeading.textContent =
      'Train replacement not currently in service for this line';
    console.log('customStationsArrays is', customStationsArrays);
    console.log('customStationThemes is', customStationThemes);
  } catch (error) {
    console.log('error is', error);
  }
};

fetchCustomStations();

const writeNewStationsToDatabase = async (lineName, stations, theme) => {
  try {
    const res = await fetch(`${baseUrl}/lines/${lineName}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        stations,
        theme,
      }),
    });
    const data = await res.json();
    console.log('data is', data);
  } catch (error) {
    console.log('error is', error);
  }
};

const containsBanndedWords = (theme) => {
  themeWord = theme.toLowerCase();
  containsBannedWord = false;
  bannedWords.forEach((bannedWord) => {
    if (themeWord.includes(bannedWord)) {
      containsBannedWord = true;
    }
  });
  return containsBannedWord;
};

const renderOriginalList = (fullLineTitle, stations) => {
  emptyOriginalListDiv();

  if (fullLineTitle === 'No line selected') {
    AddOriginalNotInServiceClass();
    originalListHeading.textContent = 'No line selected';
    return;
  } else {
    removeOriginalClasses();
    originalListHeading.textContent = `${fullLineTitle} original station names`;
    stations.forEach((station) => {
      const p = document.createElement('p');
      p.textContent = station;
      originalListDiv.appendChild(p);
    });

    emptyNewListDiv();

    if (customStationsArrays[`${selectedTubeLine}Custom`].length > 0) {
      removeNewClasses();
      newListHeading.textContent = `${fullLineTitle} custom station names`;
      customStationsArrays[`${selectedTubeLine}Custom`].forEach((station) => {
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

const renderNewList = (fullLineTitle, stations) => {
  console.log('running renderNewList() with', fullLineTitle);
  console.log('stations are', stations);
  // emptyNewListDiv();

  if (fullLineTitle === 'No line selected') {
    AddNewNotInServiceClass();
    newListHeading.textContent = 'No line selected';
    return;
  } else {
    removeNewClasses();
    newListHeading.textContent = `${fullLineTitle} custom station names`;
    stations.forEach((station) => {
      const p = document.createElement('p');
      p.textContent = station;
      newListDiv.appendChild(p);
    });

    customStationsArrays[`${selectedTubeLine}Custom`] = stations;
    console.log('customStationsArrays is', customStationsArrays);

    // get span element in the selected line's label
    const span = document.querySelector(`label[for=${selectedTubeLine}] span`);
    // set the text content of the span element to the userTheme
    span.textContent = ` (${trackForm.userTheme.value})`;
  }

  // reset userTheme input
  trackForm.userTheme.value = '';
};

// add event listeners to the radio buttons
radioButtons.forEach((radioButton) => {
  radioButton.addEventListener('change', () => {
    // enable the submit button
    selectedTubeLine = radioButton.value;
    console.log('selected station value:', selectedTubeLine);

    // Capture the values returned from the function
    const { fullLineTitle: newFullLineTitle, stations: newStations } = getLineTitleAndStationsList(selectedTubeLine);

    // Update the global variables
    fullLineTitle = newFullLineTitle;
    stations = newStations;
    
    console.log('fullLineTitle is', fullLineTitle);
    console.log('stations are', stations);
    renderOriginalList(fullLineTitle, stations);
  });
});

// add event listener to the form
trackForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  currentTheme = trackForm.userTheme.value;

  if (selectedTubeLine === null || selectedTubeLine === 'none') {
    AddNewNotInServiceClass();
    newListHeading.textContent = 'Please select a line to generate names for';
    return;
  }

  if (containsBanndedWords(currentTheme)) {
    AddNewNotInServiceClass();
    emptyNewListDiv();
    newListHeading.textContent =
      'That theme cannot be accepted at this time. It may be offensive or inappropriate.';
    return;
  }

  console.log('theme is', currentTheme);
  console.log('fullLineTitle is', fullLineTitle);
  console.log('stations are', stations);

  // set heading of new station list to 'Generating Custom Names'
  removeNewClasses();
  emptyNewListDiv();
  newListHeading.classList.add('loading');
  newListHeading.textContent = 'Generating Custom Names...';

  const res = await fetch(`${baseUrl}/openai/tracks/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      userTheme: trackForm.userTheme.value,
      quantity: stations.length,
    }),
  });

  const data = await res.json();
  console.log('data is', data);
  // write data to local storage
  localStorage.setItem('generatedStationNames', data.generatedStationNames);

  if (
    data.error &&
    data.error ===
      'Too many or too frequent requests from your device, please try again later'
  ) {
    newListHeading.classList.add('rate-limit');
    newListHeading.textContent =
      'Too many or too frequent requests from your device, please try again later';
    return;
  }

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

  console.log(
    'selectedTubeLine is',
    selectedTubeLine,
    'currentTheme is',
    currentTheme
  );

  while (generatedStationNamesArray.length > stations.length) {
    console.log('number of results is', generatedStationNamesArray.length);
    generatedStationNamesArray.pop();
  }

  writeNewStationsToDatabase(
    selectedTubeLine,
    generatedStationNamesArray,
    currentTheme
  );
  renderNewList(fullLineTitle, generatedStationNamesArray);
});
