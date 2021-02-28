import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { AppError } from "../errors/AppError";
import { SurveyUsersRepository } from "../repositories/SurveysUsersRepository";


class AnswerController {

    // http://localhost:3333/answers/1?u=087992ae-5de4-4da0-b8d8-1b3c4c996e38
    async execute(request: Request, response: Response) {
        const { value } = request.params;
        const { u } = request.query;

        const surveyUsersRepository = getCustomRepository(SurveyUsersRepository);

        const surveyUser = await surveyUsersRepository.findOne({
            id: String(u)
        });

        if (!surveyUser) {
            throw new AppError("Survey User does not exists!");
        }
        surveyUser.value = Number(value);

        await surveyUsersRepository.save(surveyUser);

        return response.json(surveyUser);
    }
}

export { AnswerController }