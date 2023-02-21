import { NextFunction, Request, Response } from 'express';
import { LoginResponse } from '../interfaces/loginResponseInterface';

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = 'testid';
    const response: LoginResponse = {
      userId,
    };

    res.send(response);
  } catch (e) {
    next(e);
  }
};

export default { login };
