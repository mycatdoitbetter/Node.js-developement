// Query params: ?user=1
// Routes params: /user/1
// Request body: {name: "André", email: "andre@gmai.com"}

const express = require("express");

const server = express();

server.use(express.json());

const projectsObjects = [];
var numberOfRequests = 0;

//Middleware local
function checkProjectExists(req, res, next) {
  const { id } = req.params;

  project = projectsObjects.find(project => project.id == id);

  if (!project) {
    res.status(400).json({ error: "ID not found" });
  }
  next();
}

// Middleware global
function countRequests(req, res, next) {
  numberOfRequests++;

  console.log(`Number of requests: ${numberOfRequests}`);

  return next();
}
server.use(countRequests);

// Método adicionar a lista de projetos no server
server.get("/projects", (req, res) => {
  return res.json(projectsObjects);
});

// Método para adicionar um novo projeto
server.post("/projects", (req, res) => {
  const { newProject } = req.body;
  projectsObjects.push(newProject);
});

// Método para adicionar uma novo título pelo id
server.put("/projects/:id", (req, res) => {
  const { id } = req.params;
  const { newTitle } = req.body;

  projectsObjects.map(project => {
    if (id == project.id) {
      project.title = newTitle;
    }
  });
});

// Método para deletar um projeto pelo id
server.delete("/projects/:id", checkProjectExists, (req, res) => {
  const { id } = req.params;

  const index = projectsObjects.findIndex(project => project.id == id);

  projectsObjects.splice(index, 1);
});

// Método para adicionar nova tarefa pelo ID
server.post("/projects/:id/task", checkProjectExists, (req, res) => {
  const { id } = req.params;
  const { newTask } = req.body;

  const index = projectsObjects.findIndex(project => project.id == id);

  projectsObjects[index].tasks.push(newTask);
});

server.listen(3000);
