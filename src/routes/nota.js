const express = require('express');
const router = express.Router();

const notaController = require('../controller/notaController'); 

//Solo existen los métodos get y post
router.get('/',notaController.list);
router.post('/add',notaController.add);
router.get('/delete/:id',notaController.delete);
router.get('/listo/:id',notaController.done);
module.exports = router;