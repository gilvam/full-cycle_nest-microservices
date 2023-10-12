import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateCategoryDto {
	@MaxLength(255)
	@IsString()
	@IsNotEmpty()
	name: string;

	createdAt: Date;
	updateAt: Date;
}
