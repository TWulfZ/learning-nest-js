import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //app.setGlobalPrefix('api');
  const config = new DocumentBuilder()
    .setTitle('TWulfZ first NestJS API')
    .setDescription(
      'The TWulfZ API is designed based on the Fazt tutorial for learn NestJS',
    )
    .setVersion('1.0')
    .addTag('wulf')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  await app.listen(3000);
}
bootstrap();
