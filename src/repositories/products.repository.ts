import {DefaultCrudRepository} from '@loopback/repository';
import {Products, ProductsRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ProductsRepository extends DefaultCrudRepository<
  Products,
  typeof Products.prototype.product_id,
  ProductsRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Products, dataSource);
  }
}
