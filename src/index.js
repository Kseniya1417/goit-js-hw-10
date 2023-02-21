import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import fetchCountries from './js/fetchCountries';
import renderCountries from './renderCountries';
import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const input = document.querySelector('#search-box');
const listOfCountries = document.querySelector('.country-list');
const countryInfo = document.querySelector('.coutry-info');

function searchCountries(e) {
  let getCountry = e.target.value.trim();
  // 1) тут викликається наша функція fetchCountries
  if (getCountry) {
    fetchCountries(getCountry)
      .then(data => {
        // 11) ми отримали б масив обєктів і попали б у then знову
        // 12) і там би ми прийняли в then цю data (data -
        // це наш response)
        renderCountries(data);
      })
      // 9) якщо у нас error то ми then оминаємо і попадаємо
      // зразу в catch
      .catch(error => {
        Notify.failure('Oops, there is no country with that name');
      });
  } else {
    listOfCountries.innerHTML = '';
    countryInfo.innerHTML = '';
  }
}
input.addEventListener('input', debounce(searchCountries, DEBOUNCE_DELAY));
