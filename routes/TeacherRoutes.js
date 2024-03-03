const express = require('express')

const { getTeachers, getTeacher, createTeacher, deleteTeacher, updateTeacher } = require('../models/controller/TeacherController')

const { fileCheck } = require('../middleware/file_check')


const router = express.Router();

//GET ALL TEACHERS
router.get('/api/teacher', getTeachers)

//GET A SINGLE TEACHERS
router.get('/api/single-teacher/:id', getTeacher)

//POST A NEW TEACHERS
router.route('/api/add-teacher').post(fileCheck, createTeacher)

//DELETE A NEW TEACHERS
router.delete('/api/delete-teacher/:id', deleteTeacher)


//UPDATE A NEW TEACHERS
router.patch('/api/update-teacher/:id', updateTeacher)



module.exports = router