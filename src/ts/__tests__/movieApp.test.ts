import * as handleSubmit from '../handleSubmit';
import { init } from '../movieApp';

describe('Init function', () =>{
  let mockedHandleSubmit: jest.SpyInstance;

  beforeEach(() => {
    mockedHandleSubmit = jest.spyOn(handleSubmit, 'handleSubmit');
  });

  afterEach(() => {
    mockedHandleSubmit.mockReset();
  });

    test('it will test submit', () => {
        
      mockedHandleSubmit.mockImplementation(() =>{});

      document.body.innerHTML = `
        <div id="app">
          <form id="searchForm">
            <input type="text" id="searchText" placeholder="Skriv titel här" />
            <button type="submit" id="search">Sök</button>
          </form>
          <div id="movie-container"></div>
        </div>`;

      const form = document.getElementById("searchForm") as HTMLFormElement;
      
      init();

      form.submit();
      expect(mockedHandleSubmit).toHaveBeenCalled();
    });
});