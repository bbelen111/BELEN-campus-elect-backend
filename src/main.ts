import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const PORT = process.env.PORT?? 3001

  const config = new DocumentBuilder()
    .setTitle('Campus Elect Backend')
    .setDescription('API documentation for the Campus Elect application')
    .setVersion('1.0')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, documentFactory);

  await app.listen(PORT);

  console.log(`🚀 Server is running at: http://localhost:${PORT}`);
  console.log('RUNNING ON PORT :',PORT)
  console.log('hello world')
}

void bootstrap();
