export type Category = 'RSP' | 'IRSP';

export type Status = 
  | 'DE under process'
  | 'DE sent to accounts'
  | 'DE sent to PCME sanction'
  | 'Tender Process'
  | 'Indents under Process'
  | 'WIP'
  | 'Works completed';

export interface BaseWork {
  slNo: string;
  description: string;
  yearOfSanction: number;
  qty: number;
  status: Status;
  createdAt: Date;
  updatedAt: Date;
}

export interface RspWork extends BaseWork {
  pbNo: string;
  deValue: number;
}

export interface IrspWork extends BaseWork {
  lawNo: string;
  rate: number;
  totalValue: number;
}