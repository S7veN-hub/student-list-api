const student = require('../database/database');

const studentsMethods = {
    getStudents: (req, res) => {
        student.find((err, arr) => {
            if (err) {
                console.log('Error al realizar la query:', err);
                res.json({status: 'error'});
            }
            if (arr) {
                console.log('Se ha podido devolver los registros de estudiantes:', arr);
                res.json({students: arr});
            }
        });
    },

    removeStudent: (req, res) => {
        let id = req.params.id;
        student.findByIdAndDelete(id, (err, data) => {
            if (err) {
                console.log('Error al borrar el estudiante:', err);
                res.json({status: 'error'});
            }
            if (data) {
                console.log('Éxito al borrar el estudiante', data);
                res.json({status: 'success'});
            }
        });
    },

    updateStudent: (req, res) => {
        let id = req.params.id;
        let updatedStudent = req.body;
        student.findByIdAndUpdate(id, updatedStudent, (err, data) => {
            if (err) {
                console.log('No se ha podido actualizar el estudiante:', err);
                res.json({status: 'error'});
            }
            if (data) {
                console.log('Se ha podido actualizar el estudiante:', data);
                res.json({status: 'success'});
            }
        });
    },

    createStudent: (req, res) => {
        let newStudent = req.body;
        student.create(newStudent, (err, data) => {
            if (err) {
                console.log('Error al crear el nuevo estudiante:', err);
                res.json({status: 'error'});
            }
            if (data) {
                console.log('Éxito al crearse el nuevo estudiante:', data);
                res.json({status: 'success'});
            }
        });
    }
};

module.exports = studentsMethods;