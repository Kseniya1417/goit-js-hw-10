import { Notify } from 'notiflix/build/notiflix-notify-aio';
export default function renderCountries(data) {
  const listOfCountries = document.querySelector('.country-list');
  const countryInfo = document.querySelector('.country-info');

  let countries = [];

  let quantityCountries = data.length;

  if (quantityCountries > 10) {
    Notify.info('Too many matches found. Please enter a more specific name.');
  } else if (quantityCountries <= 10 && quantityCountries > 2) {
    data.map(country => {
      countries += `
        <li>
        <img width=40 src="${country.flags.svg}" class="flag"/>
        <span class="country-name">${country.name}</span>
        </li>
        `;
      listOfCountries.innerHTML = countries;
    });

    countryInfo.innerHTML = '';
  } else {
    let country = data[0];
    let languages = [];

    country.languages.map(language => {
      languages.push(language.name);
    });

    countryInfo.innerHTML = `
      <div class="country-header">
        <img width=80 src="${country.flags.svg}" class="flag"/>
        <span class="title">${country.name}</span>
      </div>

      <ul class="list-countries">
        <li><b>Capital: </b>${country.capital}</li>
        <li><b>Population: </b>${country.population}</li>
        <li><b>Languages: </b>${languages.join(', ')}</li>
      </ul>
    `;
    listOfCountries.innerHTML = '';
  }
}
