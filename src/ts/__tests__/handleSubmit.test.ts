
import { handleSubmit } from "../handleSubmit";
import * as htmlFunctions from '../htmlFunctions'
import { IMovie } from "../models/Movie";

import * as movieSevices from '../services/movieService'


describe('Main functions', () => {
  let mockedCreateHtml: jest.SpyInstance<void>;
  let mockedDisplayNoResult: jest.SpyInstance<void>;
  let mockedAxios: jest.SpyInstance<Promise<IMovie[]>>

  let container: HTMLDivElement;
  let movies:IMovie[] = [{
    "Title": "Harry Potter and the Deathly Hallows: Part 1",
    "Year": "2010",
    "imdbID": "tt0926084",
     "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_SX300.jpg"
  }];


  beforeEach(() => {
    mockedCreateHtml = jest.spyOn(htmlFunctions, 'createHtml');
    mockedDisplayNoResult = jest.spyOn(htmlFunctions, 'displayNoResult');
    mockedAxios = jest.spyOn(movieSevices, 'getData');
        
  
    document.body.innerHTML = `
    <div id="app">
      <form id="searchForm">
        <input type="text" id="searchText" placeholder="Skriv titel här" />
        <button type="submit" id="search">Sök</button>
      </form>
      <div id="movie-container"></div>
    </div>`;

    container =  document.querySelector('#movie-container') as HTMLDivElement;
           
  });

  afterEach(() => {
    mockedAxios.mockReset();
    mockedCreateHtml.mockReset();
    mockedDisplayNoResult.mockReset();
  });
    

  test('it should read value of searchText', async () => {
    const searchText = (document.getElementById('searchText') as HTMLInputElement);

    searchText.value = '';

    await handleSubmit();

    expect(searchText.value).toBe('');
    expect(searchText).not.toBeNull();
    expect(searchText.type).toBe('text');
    expect(searchText.id).toBe('searchText');
    expect(searchText.placeholder).toBe('Skriv titel här');
  });

  test('it should test createHtml', async () => {
    mockedCreateHtml.mockImplementation(() =>{});
    mockedDisplayNoResult.mockImplementation(() =>{});
      
    mockedAxios.mockResolvedValue(movies);

  
    await handleSubmit()

    
  
    expect(mockedAxios).toHaveBeenCalled();
    expect(mockedCreateHtml).toHaveBeenCalledWith(movies, container);
    expect(mockedDisplayNoResult).not.toHaveBeenCalled()
      
  });


  test('it should test displayNoResult', async () => {

    mockedCreateHtml.mockImplementation(() =>{});
    mockedDisplayNoResult.mockImplementation(() =>{});
      
    mockedAxios.mockResolvedValue([]);

    await handleSubmit();

    
        
    expect(mockedAxios).toHaveBeenCalled();
    expect(mockedDisplayNoResult).toHaveBeenCalled();
    expect(mockedCreateHtml).not.toHaveBeenCalled()
  });


  test('it should reject', async () => {

    mockedCreateHtml.mockImplementation(() =>{});
    mockedDisplayNoResult.mockImplementation(() =>{});
  

    mockedAxios.mockRejectedValue([]);

    await handleSubmit();


    
    expect(mockedAxios).toHaveBeenCalled();
    expect(mockedDisplayNoResult).toHaveBeenCalled();
    expect(mockedCreateHtml).not.toHaveBeenCalled();
 
  });
});