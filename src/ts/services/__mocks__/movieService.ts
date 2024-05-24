
import { IMovie } from "../../models/Movie";

export const getData = async (): Promise<IMovie[]> => {
     return await new Promise((resolve, reject) => {
      
        resolve([{
          "Title": "Harry Potter and the Deathly Hallows: Part 1",
          "Year": "2010",
          "imdbID": "tt0926084",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_SX300.jpg"
        }]);
        reject([])

    })
  };
  