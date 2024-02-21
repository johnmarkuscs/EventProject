import express from 'express';
import * as eventController from '../controllers/eventController.js';

const router = express.Router();

router.get('/dashboard', eventController.showEvents);
router.post('/events/create', eventController.createEvent);

router.post('/events/:eventId/comments', eventController.createComment);
router.post('/events/:eventId/ratings', eventController.createRating);

router.post('/events/:eventId/join', eventController.joinEvent);

export default router;

