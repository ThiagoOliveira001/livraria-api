import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Livro } from './livro.model';
import { ProdutosController } from './livros.controller';
import { LivrosService } from './livros.service';

enum dialects {
  mysql = 'mysql',
  postgres = 'postgres',
  mariadb = 'mariadb',
  sqlite = 'sqlite',
}

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: dialects[process.env.DB_DIALECT],
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Livro]),
  ],
  controllers: [AppController, ProdutosController],
  providers: [AppService, LivrosService],
})
export class AppModule {}
