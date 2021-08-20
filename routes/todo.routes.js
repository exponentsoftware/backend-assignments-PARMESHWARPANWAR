import express from 'express';

// import authenticate from '../middleware/authenticate';
const router = express.Router();
const app = express();
app.use(express.json());

import { createtodo, Alltodo,todo,updatetodo,deletetodo }from '../controllers/todo.controllers.js';

router.post('/add', createtodo);
router.get('/alltodos', Alltodo);
router.get('/todo/:userId',todo);
router.patch('/update', updatetodo);
router.delete('/delete', deletetodo);

export default router;