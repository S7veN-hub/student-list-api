const studentsMethods = require('../../controller/studentsMethods');
const express = require('express');
const routerEstudiantes = express.Router();

routerEstudiantes.get('/estudiantes', studentsMethods.getStudents);

routerEstudiantes.post('/estudiantes', studentsMethods.createStudent);

routerEstudiantes.put('/estudiantes/:id', studentsMethods.updateStudent);

routerEstudiantes.delete('/estudiantes/:id', studentsMethods.removeStudent);

module.exports = routerEstudiantes;