import { Router } from 'express';
import { AnswerController } from './controllers/AnswerController';
import { NpsController } from './controllers/NpsController';
import { SendMailController } from './controllers/sendMailController';
import { SurveyController } from './controllers/surveyController';
import { UserController } from "./controllers/userController";

const router = Router();

const userController = new UserController();
const surveyController = new SurveyController();
const sendMailController = new SendMailController();
const answerController = new AnswerController();
const npsController = new NpsController();

router.post("/users", userController.create);
router.post("/surveys", surveyController.create);
router.get("/surveys", surveyController.show);
router.post("/sendMail", sendMailController.execute);
router.get("/answers/:value", answerController.execute);
router.get("/nps/:survey_id", npsController.execute);


export { router };