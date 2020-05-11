import {DefaultCrudRepository} from '@loopback/repository';
import {Customers, CustomersRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CustomersRepository extends DefaultCrudRepository<
  Customers,
  typeof Customers.prototype.user_id,
  CustomersRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Customers, dataSource);
  }
}
