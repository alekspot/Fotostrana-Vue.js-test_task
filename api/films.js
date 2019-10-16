import * as axios from "axios";

const instance1 = axios.create({
    baseURL: 'https://swapi.co/api/films/'
});


const key = "13941889-1998e9e6d7cca63d68fc8c0f8"
const instance2 = axios.create({
    baseURL: 'https://pixabay.com/api/',
});

async function getImg(films) { //принимает массив фильмов возвращает массив фильмов с картинками
    let filmsWithImg = [...films];

    for(const film of filmsWithImg ) { 

        const uri = encodeURIComponent(film.title);
        const response = await instance2.get(`?key=${key}&q=${uri}&per_page=3`);
        const imges = response.data.hits;

         //загружаем картинку по названию фильма
        film.img = imges.length > 0 ? imges[0].webformatURL : "http://placehold.it/260x85?text=Placeholder"
        //если картинка есть записываем ее в новое свойсто img или присваевываем картинку "заглушку"
        
    }
    return filmsWithImg
}

const filmAPI = {
    
    async getFilms() { // получить все фильмы 

        let response = await instance1.get();
        let films = response.data.results; 
        const filmsWithImg = getImg(films);
        return filmsWithImg;   
    },
    
    async getNewFilms(count, loadedCount, countFilms) { //принимает колличество фильмов, которое хотим загрузить, возвращает массив загруженных фильмов
        let counter;
        //всего 7 загружено 4 , создать массив из 1
        if(countFilms - loadedCount  <= count) {
            counter = countFilms - loadedCount;
        } else {
            counter = count
        }
       
        
        let arr = []; //создаем и заполняем массив значениями, чтобы использвать цикл for...of
        for (let i = 0; i < counter; i++){ 
            arr[i] = loadedCount + i + 1
        }

        let newFilms = []; //масиив для заполнения загружаемыми фильмами

        for (let item of arr) {  //для последовательного выполнения асинхронных действий используется цикл for...of
            const film = await instance1.get(`${item}/`);
            newFilms = [...newFilms, film.data]
        }

        const filmsWithImg = getImg(newFilms);
        return filmsWithImg;
    },
    
}

export default filmAPI