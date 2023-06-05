import fs from "fs";
let jsonData = [];

export const reading = () => {
  return new Promise((resolve, reject) => {
    fs.readFile("movieData.json", "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        const catalog = JSON.parse(data);
        resolve(catalog);
      }
    });
  });
};
export const writing = (catalog) => {
  fs.readFile("movieData.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    jsonData = JSON.parse(data);

    jsonData.push(catalog);
    var stringifyData = JSON.stringify(catalog);

    fs.writeFile("movieData.json", stringifyData, "utf8", (err) => {
      if (err) {
        console.error(err);
       return 
      }
      console.log("Things are going well");
    });
  });
};
