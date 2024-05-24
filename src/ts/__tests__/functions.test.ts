import { movieSort } from "../functions";
import { IMovie } from "../models/Movie";

describe('Main functions', () => {

    test('if true return 1', () => {
        const desc = true;
        const movies: IMovie[] = [
            {
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
              }
        ];
        
        const sort = movieSort(movies, desc);

        expect(sort).toStrictEqual(movies);
        expect(sort).toHaveLength(2);
    });

    test('if true return -1', () => {
        const desc = true;
        const movies: IMovie[] = [
            {
              "Title": "Sagan om ringen",
              "Year": "1971",
              "imdbID": "tt9810254",
              "Type": "movie",
              "Poster": "https://m.media-amazon.com/images/M/MV5BZmQ3YjkyNjAtY2RhMC00NWVmLThhMjAtMjRkMGI2YTg0MjI0XkEyXkFqcGdeQXVyNDUxNjc5NjY@._V1_SX300.jpg"
            },
            {
              "Title": "Harry Potter and the Deathly Hallows: Part 1",
              "Year": "2010",
              "imdbID": "tt0926084",
              "Type": "movie",
              "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_SX300.jpg"
            }
      ];
        
        const sort = movieSort(movies, desc);

        expect(sort).toStrictEqual(movies);
        expect(sort).toHaveLength(2);
    });

    test('if true return 0', () => {
        const desc = true;
        const movies: IMovie[] = [
            {
                "Title": "Harry Potter and the Deathly Hallows: Part 1",
                "Year": "2010",
                "imdbID": "tt0926084",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_SX300.jpg"
              },
              {
                "Title": "Harry Potter and the Deathly Hallows: Part 1",
                "Year": "2010",
                "imdbID": "tt0926084",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_SX300.jpg"
              }
        ]; 
        const sort = movieSort(movies, desc);

        expect(sort).toStrictEqual(movies);
        expect(sort).toHaveLength(2);
    });

    test('if false return 1', () => {
        const desc = false;
        const movies: IMovie[] = [
            {
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
              }
        ];
        
        const sort = movieSort(movies, desc);

        expect(sort).toStrictEqual(movies);
        expect(sort).toHaveLength(2);
    });

    test('if false return -1', () => {
        const desc = false;
        const movies: IMovie[] = [
            
              {
                "Title": "Sagan om ringen",
                "Year": "1971",
                "imdbID": "tt9810254",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BZmQ3YjkyNjAtY2RhMC00NWVmLThhMjAtMjRkMGI2YTg0MjI0XkEyXkFqcGdeQXVyNDUxNjc5NjY@._V1_SX300.jpg"
              },
              {
                "Title": "Harry Potter and the Deathly Hallows: Part 1",
                "Year": "2010",
                "imdbID": "tt0926084",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_SX300.jpg"
              }
        ]
        
        const sort = movieSort(movies, desc);

        expect(sort).toStrictEqual(movies);
        expect(sort).toHaveLength(2);
    });

    test('if false return 0', () => {
        const desc = false;
        const movies: IMovie[] = [
            {
                "Title": "Harry Potter and the Deathly Hallows: Part 1",
                "Year": "2010",
                "imdbID": "tt0926084",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_SX300.jpg"
              },
              {
                "Title": "Harry Potter and the Deathly Hallows: Part 1",
                "Year": "2010",
                "imdbID": "tt0926084",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_SX300.jpg"
              }
        ]; 
        const sort = movieSort(movies, desc);

        expect(sort).toStrictEqual(movies);
        expect(sort).toHaveLength(2);
    });
})