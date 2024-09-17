import { Controller, Get, HttpCode, Param, Req, Res, ParseIntPipe, ParseBoolPipe, Query, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { ValidateUserPipe } from './pipes/validate.user/validate.user.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller()
export class HelloController {
  @Get('/hello')
  index(@Req() request: Request, @Res() response: Response) {
    console.log(request.url);
    
    response.status(200).send('Hello World!');
  }

  @Get('/notfound')
  @HttpCode(404)
  notFoundPage() {
    return '404 not found'
  }

  @Get('/error')
  @HttpCode(500)
  errorPage() {
    return '500 error'
  }

  @Get('/new')
  @HttpCode(201)
  newPage() {
    return '201 created'
  }

  @Get('ticket/:num')
  getNumber(@Param('num', ParseIntPipe) num: number) {
    console.log(typeof num);
    return num + 14;
  }

  @Get('active/:status')
  @UseGuards(AuthGuard)
  isUserActive(@Param('status', ParseBoolPipe) status: boolean) {
    console.log(typeof status);
    return status;
  }

  @Get('greet')
  @UseGuards(AuthGuard)
  greet(@Query(ValidateUserPipe) query: {name: string, age: number}) {
    console.log(typeof query.name);
    console.log(typeof query.age);

    return `Hello ${query.name}, you are ${query.age}`
  }
}
