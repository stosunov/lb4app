import {Entity, model, property} from '@loopback/repository';

@model()
export class Products extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  product_id: number;

  @property({
    type: 'string',
    required: true,
  })
  product_name: string;

  @property({
    type: 'string',
    required: true,
  })
  product_description: string;

  @property({
    type: 'number',
    required: true,
  })
  price: number;


  constructor(data?: Partial<Products>) {
    super(data);
  }
}

export interface ProductsRelations {
  // describe navigational properties here
}

export type ProductsWithRelations = Products & ProductsRelations;
