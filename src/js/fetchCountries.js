export default function fetchCountries(country) {
  const url = `https://restcountries.com/v2/name/${country}?fields=name,capital,population,flags,languages`;
  return fetch(url).then(response => {
    if (!response.ok) {
      console.log(11111111111);
      throw new Error(response.status);
    }
    return response.json();
  });
}
