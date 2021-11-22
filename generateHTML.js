const fs = require("fs");
const { resolve } = require("path/posix");

const writeFile = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./team.html", fileContent, (err) => {
      if (err) {
        reject(err);

        return;
      }
      resolve({
        ok: true,
        message: "Page Generated!",
      });
    });
  });
};
const copyFile = () => {
  return new Promise((resolve, reject) => {
    fs.copyFile("./src/assets/css/style.css", (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: "Stylesheet created!",
      });
    });
  });
};

module.exports = { writeFile, copyFile };
