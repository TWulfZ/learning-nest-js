import {
  HttpException,
  HttpStatus,
  Injectable,
  Logger,
  NestMiddleware,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const { authorization } = req.headers;

    if (!authorization) {
      Logger.debug('Unauthorized');
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }

    if (authorization !== 'xyz123') {
      Logger.debug('Forbidden');
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    next();
  }
}
