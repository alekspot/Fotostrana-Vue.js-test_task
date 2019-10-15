import * as axios from "axios";

const instance1 = axios.create({
    baseURL: 'https://swapi.co/api/films/'
});


const key = "13941889-1998e9e6d7cca63d68fc8c0f8"
const instance2 = axios.create({
    baseURL: 'https://pixabay.com/api/',
    
    headers: {
        
    }
});

const filmAPI = {
    getFilms() { //возвращает массив фильмов
        return instance1.get()
            .then(response => {
                return response.data.results;
            });
    },
    getImg(name="dog") {
        let uri = encodeURIComponent(name)
        return instance2.get(`?key=${key}&q=${uri}&per_page=3`)
            .then(response => {
                console.log(response.data);
                return response.data;
            });
    },
}

export default filmAPI