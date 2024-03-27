import { NestFactory } from '@nestjs/core';
import { CarModule } from './car/car.module';
async function bootstrap() {
  const app = await NestFactory.create(CarModule); // here i put the root module of the application
  await app.listen(3000);
  
}

bootstrap();



