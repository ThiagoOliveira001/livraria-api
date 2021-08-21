import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiBody, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Livro } from './livro.model';
import { LivrosService } from './livros.service';

@ApiTags('Livros')
@Controller('livros')
export class ProdutosController {
  constructor(private livrosService: LivrosService) {}

  @ApiResponse({
    status: 200,
    schema: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
          },
          codigo: {
            type: 'string',
          },
          nome: {
            type: 'string',
          },
          preco: {
            type: 'number',
          },
          createdAt: {
            type: 'string',
          },
          updatedAt: {
            type: 'string',
          },
        },
      },
    },
  })
  @Get()
  async obterTodos(): Promise<Livro[]> {
    return this.livrosService.obterTodos();
  }

  @ApiParam({ type: Number, name: 'id' })
  @ApiResponse({
    status: 200,
    schema: {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
        },
        codigo: {
          type: 'string',
        },
        nome: {
          type: 'string',
        },
        preco: {
          type: 'number',
        },
        createdAt: {
          type: 'string',
        },
        updatedAt: {
          type: 'string',
        },
      },
    },
  })
  @Get(':id')
  async obterUm(@Param() params): Promise<Livro> {
    return this.livrosService.obterUm(params.id);
  }

  @Post()
  async criar(@Body() produto: Livro) {
    this.livrosService.criar(produto);
  }

  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
        },
        codigo: {
          type: 'string',
        },
        nome: {
          type: 'string',
        },
        preco: {
          type: 'number',
        },
      },
    },
  })
  @Put()
  async alterar(@Body() produto: Livro): Promise<[number, Livro[]]> {
    return this.livrosService.alterar(produto);
  }

  @ApiParam({ type: Number, name: 'id' })
  @Delete(':id')
  async apagar(@Param() params) {
    this.livrosService.apagar(params.id);
  }
}
