export class CreateProductDto {
	name: string;
	price: number;
	createdAt: Date;
	updateAt: Date;

	categoryId: number;
}
