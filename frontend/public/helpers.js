import { allLinesArrays } from './stations.js';

const originalListDiv = document.querySelector('.original-stations-list');
// get the div that will display the replacement station list
const newListDiv = document.querySelector('.new-stations-list');
// get the h2 that will head the original station list
const originalListHeading = document.querySelector(
  '.original-stations-panel h3'
);
// get the h2 that will head the replacement station list
const newListHeading = document.querySelector('.new-stations-panel h3');

let fullLineTitle = 'No line selected';
let stations = [];

const newListClasses = ["not-in-service", "loading", "rate-limit", "initial-data-fetch", "error"]

export const removeOriginalClasses = () =>
  originalListHeading.classList.remove('not-in-service');

// export const removeNewClasses = () => {
//   newListHeading.classList = [];
// };

export const removeNewClasses = () => {
  newListClasses.forEach((className) => {
    console.log('removing', className)
    newListHeading.classList.remove(className)
  })
};

export const AddNewListClass = (className) => {
  newListHeading.classList = [];
  newListHeading.classList.add(className);
};

export const AddOriginalNotInServiceClass = () =>
  originalListHeading.classList.add('not-in-service');

export const AddNewNotInServiceClass = () =>
  newListHeading.classList.add('not-in-service');
  newListHeading.classList.remove('loading');

export const emptyOriginalListDiv = () => {
  if (originalListDiv.hasChildNodes()) {
    while (originalListDiv.firstChild) {
      originalListDiv.removeChild(originalListDiv.firstChild);
    }
  }
};

export const emptyNewListDiv = () => {
  if (newListDiv.hasChildNodes()) {
    while (newListDiv.firstChild) {
      newListDiv.removeChild(newListDiv.firstChild);
    }
  }
};

export const getLineTitleAndStationsList = (selectedTubeLine) => {
  switch (selectedTubeLine) {
    case 'bakerloo':
      fullLineTitle = 'Bakerloo Line';
      stations = allLinesArrays.bakerloo;
      break;
    case 'central':
      fullLineTitle = 'Central Line';
      stations = allLinesArrays.central;
      break;
    case 'circle':
      fullLineTitle = 'Circle Line';
      stations = allLinesArrays.circle;
      break;
    case 'district':
      fullLineTitle = 'District Line';
      stations = allLinesArrays.district;
      break;
    case 'hammersmithCity':
      fullLineTitle = 'Hammersmith & City Line';
      stations = allLinesArrays.hammersmithCity;
      break;
    case 'jubilee':
      fullLineTitle = 'Jubilee Line';
      stations = allLinesArrays.jubilee;
      break;
    case 'metropolitan':
      fullLineTitle = 'Metropolitan Line';
      stations = allLinesArrays.metropolitan;
      break;
    case 'northern':
      fullLineTitle = 'Northern Line';
      stations = allLinesArrays.northern;
      break;
    case 'piccadilly':
      fullLineTitle = 'Piccadilly Line';
      stations = allLinesArrays.piccadilly;
      break;
    case 'victoria':
      fullLineTitle = 'Victoria Line';
      stations = allLinesArrays.victoria;
      break;
    case 'waterlooCity':
      fullLineTitle = 'Waterloo & City Line';
      stations = allLinesArrays.waterlooCity;
      break;
    case 'none':
      fullLineTitle = 'No line selected';
      stations = [];
      break;
    default:
      fullLineTitle = 'No line selected';
      stations = [];
  }
  console.log('fullLineTitle is', fullLineTitle);
  console.log('stations are', stations);
  return { fullLineTitle, stations }; 
};