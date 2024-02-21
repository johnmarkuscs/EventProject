import express from "express";
import * as accountController from '../controllers/accountController.js';

const router = express.Router();

router.get('/login', accountController.login);

router.post('/signup', accountController.createAccount);
router.post('/signup/admin', accountController.createAdmin);

export default router;
