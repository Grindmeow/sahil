const express = require('express')

const { getClasses, getClass, createClass, deleteClass, updateClass } = require('../models/controller/ClassController')

const { fileCheck } = require('../middleware/file_check')


const router = express.Router();

//GET ALL TEACHERS
router.get('/', getClasses)

//GET A SINGLE TEACHERS
router.get('/:id', getClass)

//POST A NEW TEACHERS
router.post('/', fileCheck, createClass)

//DELETE A NEW TEACHERS
router.delete('/:id', deleteClass)


//UPDATE A NEW TEACHERS
router.patch('/:id', updateClass)



module.exports = router