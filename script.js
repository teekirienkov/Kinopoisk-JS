// Получение элементов со страницы
const searchForm = document.querySelector('#search-form'); // поиск через id

const API_KEY = '9c464a059d368b1b6fa45ea91caad68b';

function apiSearch(event) {
  event.preventDefault();    // Отмена обновления страницы при submit


  const searchText = document.querySelector('.form-control').value, // Сохраняет только текст из инпута
        server = 'https://api.themoviedb.org/3/search/multi?api_key=9c464a059d368b1b6fa45ea91caad68b&language=ru&query=&page=1&include_adult=true';
  
}







// Обработчик события отправки формы
searchForm.addEventListener('submit', apiSearch);


// Функция получения данных из API
function requestApi(url) {

}