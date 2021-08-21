import { NestFactory } from '@nestjs/core';
import {
  SwaggerModule,
  DocumentBuilder,
  SwaggerDocumentOptions,
  SwaggerCustomOptions,
} from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options: SwaggerDocumentOptions = {
    operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
  };
  const customOptions: SwaggerCustomOptions = {
    customSiteTitle: 'Livraria API',
  };
  const config = new DocumentBuilder()
    .setTitle('Livraria')
    .setDescription('API Para manipulação de livros')
    .setVersion('1.0')
    .addTag('Livros')
    .build();
  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup('docs', app, document, customOptions);

  await app.listen(process.env.PORT);
}
bootstrap();
