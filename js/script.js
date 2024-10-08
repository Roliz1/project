"use strict";

const numberOfFilms = +promt('Сколько фильмов вы уже просмотрели?', '');

const personalMovieDB = {
     count: personalMovieDB, 
     movies: {},
     actors: {},
     genres: [],
     privat: false
}

const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('Насколько оцените его?', ''),
    c = prompt('Один из последних просмотренных фильмов?', ''),
    d = prompt('Насколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.actors[c] = d;

console.log(personalMovieDB);

