import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import fetchCountries from './js/fetchCountries';
import renderCountries from './js/renderCountries';
import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const input = document.querySelector('#search-box');
const listOfCountries = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

input.addEventListener('input', debounce(searchCountries, DEBOUNCE_DELAY));

function searchCountries(event) {
  let countryName = event.target.value.trim();
  if (countryName) {
    fetchCountries(countryName)
      .then(data => {
        renderCountries(data);
      })
      .catch(() => {
        Notify.failure('Oops, there is no country with that name');
      });
  } else {
    listOfCountries.innerHTML = '';
    countryInfo.innerHTML = '';
  }
}
