import { IsNotEmpty, IsOptional, Min } from 'class-validator';

export class UpdateCartDto {
  @IsOptional()
  userId?: number;

  @IsNotEmpty()
  productId!: number;

  @IsNotEmpty()
  @Min(1, { message: 'Quantity must be greater than 0' })
  quantity!: number;
}
