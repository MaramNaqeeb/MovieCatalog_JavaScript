import {
  appendToFile,
  showCatalog,
  updateOneMovie,
  deleteOneMovie,
  filterBySomething,
  searchForSomething,
  
} from "./Functions.js";
import { getData, fetchData } from "./FetchApi.js";
import { reading } from "./Files.js";
("use strict");

import ps from "prompt-sync";

const prompt = ps();

let catalog = [];

const main = () => {
  console.log(
    ` Welcome to Movie Catalog Application, choose of these numbers:
    ****************************************************
      1. Show a List of Movies.
      2. Add a movie.
      3. Edit a Movie.
      4. Delete One Movie.
      5. Filter by by title, director, or genre.
      6. Search by genre or release year.
      7. List fetched data.
      8. Enhance the catalogue with the fetched data.
      0. Exit the Application.
    *************************************************** `
  );
};

const whileLoop = async () => {
  catalog = await reading("movieData.json");

  while (true) {
    main();

    var userInput = await prompt("Choose a Number: ");

    switch (userInput) {
      case "1":
        showCatalog(catalog);
        break;
      case "2":
        await appendToFile(catalog);
        break;
      case "3":
        await updateOneMovie(catalog);
        break;
      case "4":
        await deleteOneMovie(catalog);
        break;
      case "5":
        await filterBySomething(catalog);
        break;
      case "6":
        searchForSomething(catalog);
        break;
      case "7":
        getData();
        break;
      case "8":
        await fetchData(catalog);
        break;
      case "0":
        return;
      default:
        break;
    }
  }
};

whileLoop();
