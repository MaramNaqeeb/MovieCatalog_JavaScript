import fs from "fs";

import fetch from "node-fetch";

export const fetchData = async () => {
  console.log("Press number '0' to see the result");

  fetch("https://dummyapi.online/api/movies")
    .then((response) => response.json())

    .then((catalog) => {

      const list = catalog.map((s) => ({ id: s.id, title: s.movie }));
      var stringifyData = JSON.stringify(list);

      fs.writeFile("fetchedData.json", stringifyData, "utf8", (err) => {});

    })

    .catch((err) => {
      console.error(err);
    });
};

export function getData() {
  console.log("Press number '0' to get the data");

  fetch("https://dummyapi.online/api/movies")
    .then(async (res) => {
      const data = await res.json();

      console.log(data);


    })
    .catch((err) => {
      console.log("Failed to get the data!");
      console.log(err);
    });
}
