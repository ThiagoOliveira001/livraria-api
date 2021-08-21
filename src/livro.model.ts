import { ApiProperty } from '@nestjs/swagger';
import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table
export class Livro extends Model<Livro> {
  @ApiProperty()
  @Column({
    type: DataType.STRING(60),
    allowNull: false,
  })
  codigo: string;

  @ApiProperty()
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nome: string;

  @ApiProperty()
  @Column({
    type: DataType.DECIMAL(6, 2),
    allowNull: false,
  })
  preco: number;
}
