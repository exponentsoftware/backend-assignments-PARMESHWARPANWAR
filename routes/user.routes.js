import express from 'express';

// import authenticate from '../middleware/authenticate';
const router = express.Router();
const app = express();
app.use(express.json());

import {newUser,Allusers,user} from '../controllers/user.controllers';

router.post('/create_user', newUser);
router.get('/all_user', Allusers);
router.get('/user/:id',user);

export default router;