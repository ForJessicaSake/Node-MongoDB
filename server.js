const name = "This is nodejs";
console.log(name);

//get file path and directory
console.log(__filename);
console.log(__dirname);

// How to import a module and use it
console.log(require("./module.js"));

const { error } = require("console");

//read file using file sys
const fs = require("fs");

fs.readFile("./HTML/index.html", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});

//write file using file sys
fs.writeFile("./HTML/index.html", "<p>random content</p>", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("file written");
  }
});

//create a file directory
if (!fs.existsSync("./test")) {
  fs.mkdir("./test", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("new directory created");
  });
}

//delete a file directory
if (fs.existsSync("./test")) {
  fs.rmdir("./test", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("directory deleted");
    }
  });
}

//delete file using file sys
fs.unlink("./HTML/index.html", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("file deleted");
  }
});

// how to create a server
const http = require("http");

const server = http.createServer((req, res) => {
  // define a response and req object
  console.log(req.method, res.url);
  res.setHeader("Content-type", "text/html");
  res.write("<p>hello worl</p>");
  res.end()
});

//how to listen for a server with a port
server.listen(3000, () => {
  console.log("listening on port 3000");
});
