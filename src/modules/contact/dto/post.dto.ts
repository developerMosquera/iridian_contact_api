import { IsString, IsEmail, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PostDto {
  @IsString()
  @ApiProperty()
  nombre: string;

  @IsString()
  @ApiProperty()
  apellido: string;

  @IsEmail()
  @ApiProperty()
  correo: string;

  @IsString()
  @ApiProperty()
  celular: string;

  @IsString()
  @ApiProperty()
  mensaje: string;

  @IsNumber()
  @ApiProperty()
  contact_area_id: number;
}
