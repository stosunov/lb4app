import {Entity, model, property} from '@loopback/repository';

@model()
export class Alerts extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  alert_id: number;

  @property({
    type: 'number',
    required: true,
  })
  product_id: number;

  @property({
    type: 'number',
    required: true,
  })
  customer_id: number;

  @property({
    type: 'number',
    required: true,
  })
  max_price: number;

  @property({
    type: 'boolean',
    required: true,
  })
  bought: boolean;


  constructor(data?: Partial<Alerts>) {
    super(data);
  }
}

export interface AlertsRelations {
  // describe navigational properties here
}

export type AlertsWithRelations = Alerts & AlertsRelations;
