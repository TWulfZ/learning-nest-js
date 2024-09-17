import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log(`--- Funcion intermedia (middleware en: ${req.originalUrl}) ---`);
    console.log(` Url: ${req.url} - Method: ${req.method}`);
    
    next();
  }
}
