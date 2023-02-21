import { Notify } from 'notiflix/build/notiflix-notify-aio';
export default function renderCountries(data) {}

const listOfCountries = document.querySelector('.country-list');
const countryInfo = document.querySelector('.coutry-info');

let countries = [];

let quantityCountries = dataCountries.length;
if (quantityCountries > 10) {
  Notify.info('Too many matches found. Please enter a more specific name.');
} else if (quantityCountries <= 10 && quantityCountries > 2) {
  data.map(country => {
    countries += `
        <li>
        <img src="${country.flags.svg}" class="flag"/>
        <span class="country-name">${country.name}</span>
        </li>
        `;
    listOfCountries.innerHTML = countries;
  });
  countryInfo.innerHTML = '';
} else {
  let coutry = dataCountries[0];
  let languages = [];

  country.languages.map(language => {
    languages.push(language.name);
  });

  countryInfo.innerHTML = `
    <div class="country-header">
    <img src="${country.flags.svg}" class="flag"/>
    <h2 class="title">${country.name}</h2>
    </div>

    <ul class="list-countries">
    <li>
    <span>Capital: </span>${country.capital}
    </li>
    <li>
    <span>Languages: </span>${languages.join(', ')}
    </li>
    </ul>
    `;
  listOfCountries.innerHTML = '';
}
