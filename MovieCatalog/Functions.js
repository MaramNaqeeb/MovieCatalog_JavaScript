import Movies from "./Movies.js";
import { writing, reading } from "./Files.js";
("use strict");

import ps from "prompt-sync";

const prompt = ps();

export const showCatalog = (catalog) => {
  console.log("The movie catalog is: ");
  catalog.map((item) =>
    console.log(
      ` Movie id: ${item.id}, Title: ${item.title}, Director: ${item.director}, Release year: ${item.release_year}, Genre: ${item.genre}`
    )
  );
};
export const appendToFile = async (catalog) => {
  Object.prototype.id = Math.floor(Math.random() * 1000);
  Object.prototype.title = await prompt("enter title: ");
  Object.prototype.director = await prompt("Enter director name: ");
  Object.prototype.release_year = await prompt("Enter year: ");
  const genre = await prompt("Enter genre type: ");

  const movie = new Movies(id, title, director, release_year, genre);
  catalog.push(movie);
  console.log(movie);

  writing(catalog);

  console.log("one movie has been added");
  console.log("Press number '0' to see the result in the json file");

};

export const updateOneMovie = async (catalog) => {
  let id = prompt("Enter id number: ");
  var x = catalog.findIndex((jsonData) => jsonData.id == id);

  console.log("The object before updating is: ", catalog[x]);

  while (true) {
    let choice = prompt(
      "write 't' for title, 'd' for director, 'y' for year or 'g' for genre or press enter to exit the update function: "
    );
    if (choice == "t") {
      let title = prompt("enter the title: ");

      catalog[x].title = title;
      console.log(" the movie after updating the title",catalog[x])
    }

    if (choice == "d") {
      let director = prompt("enter the director: ");

      catalog[x].director = director;
      console.log(" the movie after updating the director",catalog[x])

    }

    if (choice == " y") {
      let release_year = prompt("enter the year: ");

      catalog[x].release_year = release_year;
      console.log(" the movie after updating the year",catalog[x])

    }

    if (choice == "g") {
      let genre = prompt("enter the genre: ");

      catalog[x].genre = genre;
      console.log(" the movie after updating the genre",catalog[x])

    }
    if (choice == "") {
      return;
    }
    writing(catalog);
    console.log("one movie has been updated");
  console.log("Press number '0' to see the result in the json file");

  }
};

export const deleteOneMovie = async (catalog) => {
  let id = prompt("enter id: ");
  const objWithIdIndex = catalog.findIndex((jsonData) => jsonData.id == id);
  catalog.splice(objWithIdIndex, 1);
  writing(catalog);
  console.log("one movie has been deleted");
  console.log("Press number '0' to see the result in the json file");

};

export const filterBySomething = async (catalog) => {
  while (true) {
    let filterChoices = prompt(
      "write 't' for title, 'd' for director, or 'g' for genre or press enter to exit the filtering function: "
    );
    if (filterChoices == "d") {
      let director = prompt(
        "enter the director in small letters to filter by: "
      );
      const x = catalog.filter(
        (jsonData) => jsonData.director.toLowerCase() === director
      );
      console.log(x);
    }
    if (filterChoices == "t") {
      let title = prompt("enter the title in small letters to filter by: ");
      const o = catalog.filter(
        (jsonData) => jsonData.title.toLowerCase() === title
      );
      console.log(o);
    }
    if (filterChoices == "g") {
      let genre = prompt("enter the genre in small letters to filter by: ");
      const c = catalog.filter(
        (jsonData) => jsonData.genre.toLowerCase() === genre
      );
      console.log(c);
    }
    if (filterChoices == "") {
      return;
    }
  }
};

export const searchForSomething = async (catalog) => {
  while (true) {
    let searchChoices = prompt(
      "write 'y' for year or 'g' for genre or press enter to exit the searching function: "
    );

    if (searchChoices == "g") {
      let genre = prompt("Enter the genre in small letters: ");
      const x = catalog.filter((jsonData) =>
        jsonData.genre.toLowerCase().includes(genre)
      );
      console.log(x);
    }
    if (searchChoices == "y") {
      let release_year = prompt("Enter the year in small letters: ");

      const s = catalog.filter((item) =>
        item.release_year.includes(release_year)
      );
      console.log(s);
    }
    if (searchChoices == "") {
      return;
    }
  }
};
