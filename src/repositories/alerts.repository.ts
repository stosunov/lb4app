import {DefaultCrudRepository} from '@loopback/repository';
import {Alerts, AlertsRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AlertsRepository extends DefaultCrudRepository<
  Alerts,
  typeof Alerts.prototype.alert_id,
  AlertsRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Alerts, dataSource);
  }
}
