const originalListDiv = document.querySelector('.original-stations-list');
// get the div that will display the replacement station list
const newListDiv = document.querySelector('.new-stations-list');
// get the h2 that will head the original station list
const originalListHeading = document.querySelector(
  '.original-stations-panel h3'
);
// get the h2 that will head the replacement station list
const newListHeading = document.querySelector('.new-stations-panel h3');

export const removeOriginalClasses = () =>
  originalListHeading.classList.remove('not-in-service');

export const removeNewClasses = () => {
  newListHeading.classList.remove('not-in-service');
  newListHeading.classList.remove('loading');
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