const MoviesList = document.querySelector('.movies__list')
const elForm = document.querySelector('.site-header__form')
const elSelect = document.querySelector('.filter-form__select')
const wrapper = document.createDocumentFragment()
function newEl(element, className = '', TextContent = '') {
  const newEl = document.createElement(element)

  if(className) {
    newEl.className = className
  }

  if(TextContent && typeof TextContent === 'string') {
    newEl.textContent = TextContent
    return newEl
  } else if(TextContent) {
    newEl.append(TextContent)
    return newEl
  }
  return newEl
}

for (k = 0; k <= genres.length - 1; k++){
  const newSelect = newEl('option' , '' , genres[k].name)
  elSelect.append(newSelect)
}

for (i = 0; i <= films.length - 1; i++){
  const card = newEl('li', 'movies__item movie-card')
  const movieImg = newEl('img', 'movie-card__poster')
  movieImg.src = films[i].poster
  const cardWrapper = newEl('div', 'movie-card__content')
  const cardTitle = newEl('h3', 'movie-card__title',)
  const cardTitleLink = newEl('a', 'movie-card__link', films[i].title)
  const cardText = newEl('p', 'movie-card__overview', films[i].overview)
  const cardList = newEl('ul', 'movie-card__genres')
  for(j = 0; j <= films[i].genres.length - 1; j++){
    const gentesItem = newEl('li', 'movie-card__genre badge', films[i].genres[j])
    cardList.append(gentesItem)
  }
  cardTitle.append(cardTitleLink)
  cardWrapper.append(cardTitle, cardTitle, cardText, cardList)
  card.append(movieImg, cardWrapper,)
  wrapper.append(card)
}
MoviesList.append(wrapper)

function evt(event) {
  event.preventDefault()
  MoviesList.innerHTML = ''
  for (i = 0; i <= films.length - 1; i++) {
    if (films[i].genres.includes(elSelect.value)){
      const card = newEl('li', 'movies__item movie-card',)
      const img = newEl('img', 'movie-card__poster')
      img.src = films[i].poster
      const cardWrapper = newEl('div', 'movie-card__content',)
      const titleMovie = newEl('h3','movie-card__title')
      const movieLInk = newEl('a', 'movie-card__link', films[i].title)
      const movieText = newEl('p', 'movie-card__overview', films[i].overview)
      const time = newEl('time', 'movie-card__release-date', films[i].release_date)
      const genresList = newEl('ul', 'movie-card__genres')
      for(j = 0; j <= films[i].genres.length - 1; j++){
          const gentesItem = newEl('li', 'movie-card__genre badge', films[i].genres[j])
          genresList.append(gentesItem)
          titleMovie.append(movieLInk)
          cardWrapper.append(titleMovie, movieText, time,  genresList,)
          card.append(img, cardWrapper)
          wrapper.append(card)
          MoviesList.append(wrapper)
      }
    } else if (elSelect.value === 'All'){
      const card = newEl('li', 'movies__item movie-card',)
      const img = newEl('img', 'movie-card__poster')
      img.src = films[i].poster
      const cardWrapper = newEl('div', 'movie-card__content',)
      const titleMovie = newEl('h3','movie-card__title')
      const movieLInk = newEl('a', 'movie-card__link', films[i].title)
      const movieText = newEl('p', 'movie-card__overview', films[i].overview)
      const time = newEl('time', 'movie-card__release-date', films[i].release_date)
      const genresList = newEl('ul', 'movie-card__genres')
      for(j = 0; j <= films[i].genres.length - 1; j++){
          const gentesItem = newEl('li', 'movie-card__genre badge', films[i].genres[j])
          genresList.append(gentesItem)
          titleMovie.append(movieLInk)
          cardWrapper.append(titleMovie, movieText, time,  genresList,)
          card.append(img, cardWrapper)
          wrapper.append(card)
          MoviesList.append(wrapper)
      }
    }
  }
}

elForm.addEventListener('submit', evt)

