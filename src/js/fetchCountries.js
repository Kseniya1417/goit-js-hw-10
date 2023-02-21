export default function fetchCountries(country) {
  // 2) ми йдемо у цю функцію вже з назвою країни,
  // яку прийняла ця функція
  // формуємо запит і чекаємо поки йде запит
  return (
    fetch(
      `https://restcountries.com/v2/name/${country}?fields=name,capital,population,flags,languages`
    )
      // 3) відповідь отримаємо у then
      // 4) в then ми перевіряємо response
      // 5)  якщо response не ok тобто якась помилка
      .then(response => {
        if (!response.ok) {
          // 6)  ми отримуєм екземпляр класу error
          // 7) цей запис це стандартна штука для обробки помилок
          // 8) у нас відповідь з проміса це не країни - це error
          throw new Error(response.status);
        }
        // 10) якщо if ми б оминули, помали б в return
        // json витягає дані, які потрібні для роботи
        // з відповіддю сервера. Щоб ми могли в коді
        // з цими даними працювати. JS з json
        // не працює, але json перетворює дані
        // з якими JS може працювати.
        // json робиться в останній момент перед тим як дані підуть далі
        // якщо нам потрібно перевірки (if наприклад) то
        // це обробляється від responsa без json
        // бо у ньому є коди помилок
        // Коли вже повернули через json там уже немає кода помилок
        // там повернуті суто дані які повернув сервер
        return response.json();
      })
  );
}
// https://restcountries.com/v2/name/${country}?fields=name,capital,population,flags,languages
// https://restcountries.com/v2/all?fields=name,capital,currencies

// name.official - повна назва країни
// capital - столиця
// population - населення
// flags.svg - посилання на зображення прапора
// languages - масив мов
