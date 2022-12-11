const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors());

const projects = require('./data/projectsDetails.json')

app.get('/', (req, res) => {
  res.send('Portfolio is running');
})

app.get('/projects', (req, res) => {
  res.send(projects)
})

app.get('/projects/:id', (req, res) => {
  const id = req.params.id
  const selectProject = projects.find(n => n.id === id);
  res.send(selectProject)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})