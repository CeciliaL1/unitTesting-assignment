import { createHtml, displayNoResult } from "../htmlFunctions";
import { IMovie } from "../models/Movie";


describe('Main Functions', () => {
    beforeEach(() => {
        document.body.innerHTML = `
        <div id="app">
            <form id="searchForm">
                <input type="text" id="searchText" placeholder="Skriv titel här" />
                <button type="submit" id="search">Sök</button>
            </form>
            <div id="movie-container"></div>
        </div>`;

    });

    test('it should test createHtml', () => {
        const movies: IMovie[] = [{
            "Title": "Harry Potter and the Deathly Hallows: Part 1",
            "Year": "2010",
            "imdbID": "tt0926084",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_SX300.jpg"
          },
          {
            "Title": "Sagan om ringen",
            "Year": "1971",
            "imdbID": "tt9810254",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BZmQ3YjkyNjAtY2RhMC00NWVmLThhMjAtMjRkMGI2YTg0MjI0XkEyXkFqcGdeQXVyNDUxNjc5NjY@._V1_SX300.jpg"
          }];
        const container = document.querySelector('#movie-container') as HTMLDivElement;

        createHtml(movies, container);

        const movie = document.querySelectorAll('.movie');

        expect(movie).toHaveLength(2);
          
    });

    test('it should test displayNoResult', () => {
        const container = document.querySelector('#movie-container') as HTMLDivElement;

        displayNoResult(container);

        let expected = '<p>Inga sökresultat att visa</p>'

        expect(container.innerHTML).toStrictEqual(expected);

    });
})