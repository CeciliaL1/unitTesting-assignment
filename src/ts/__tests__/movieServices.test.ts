
import axios from "axios";
import { getData } from "../services/movieService";

describe('Movie Service', () => {
   

    test('it should test happy flow', async () => {
        const mockedAxios = jest.spyOn(axios, 'get');
        mockedAxios.mockResolvedValue({
            data: {
                Search: [{
                        "Title": "Harry Potter and the Deathly Hallows: Part 1",
                        "Year": "2010",
                        "imdbID": "tt0926084",
                        "Type": "movie",
                        "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_SX300.jpg"
                }]
            }
        });

        const searchText = "Harry Potter and the Deathly Hallows: Part 1";

        const movies = await getData(searchText)
    
        expect(mockedAxios).toHaveBeenCalled();
        expect(movies[0].Title).toStrictEqual("Harry Potter and the Deathly Hallows: Part 1");
        expect(movies[0].Year).toStrictEqual("2010");
        expect(movies[0].imdbID).toStrictEqual("tt0926084");
        expect(movies[0].Type).toStrictEqual("movie");
        expect(movies[0].Poster).toStrictEqual("https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_SX300.jpg");

    });

    test('it should reject', async () => {
        const mockedAxios = jest.spyOn(axios, 'get');
        mockedAxios.mockRejectedValue({data: { Search: []}});

        const searchText = "";

        const movies = await getData(searchText);

        expect(mockedAxios).toHaveBeenCalled();
        expect(movies).toStrictEqual([])
    });
})