const express = require("express");
const connection = require("../node/db/connection");
const app = express();
const port = 3000;

app.get("/", (_request, response) => {
  const query = "SELECT * FROM people";
  connection.query(query, (err, results) => {
    if (!err) {
      const resultsBody = results.map((result) => {
        return `<br/><b>Name: ${result.name}</b>`;
      });
      response.status(302).send("<h1>Full Cycle Rocks!!</h1>" + resultsBody);
    } else {
      connection.end();
      throw err;
    }
  });
});

app.post("/users", (request, response) => {
  const query = connection.query(
    `INSERT INTO people(name) values('${request.query.name}')`
  );
  connection.query(query, (err) => {
    if (!err) {
      response.status(401).send("<h1>Name inserted!");
    } else {
      connection.end();
      throw err;
    }
  });
});

app.listen(port, () => console.log(`Rodando na porta ${port}`));
