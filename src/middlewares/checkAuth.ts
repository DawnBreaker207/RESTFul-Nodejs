import { RequestHandler } from 'express';
import { messageError } from '../constants/message';
import { statusCode } from '../constants/statusCode';
import { UserType } from '../interfaces/User.interface';
import User from '../models/User.model';
import { verifyToken } from '../utils/jwt';
import { log } from 'console';

export const checkAuth: RequestHandler = async (req, res, next) => {
  try {
    console.log(req.headers);

    const token = req.headers?.authorization?.split(' ')[1];
    console.log(token);

    if (!token) {
      return res.status(statusCode.BAD_REQUEST).json({
        message: messageError.TOKEN_INVALID,
      });
    }

    const decode = verifyToken(token) as { _id?: string };
    if (!decode) {
      return res.status(statusCode.BAD_REQUEST).json({
        message: messageError.TOKEN_INVALID,
      });
    }

    const user: UserType | null = await User.findById(decode._id);
    if (user) {
      req.user = user;
    }

    next();
  } catch (error) {
    next(error);
  }
};
