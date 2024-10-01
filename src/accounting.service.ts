import { Injectable } from '@nestjs/common';

@Injectable()
export class AccountingService {
  private data = [];

  saveData(accountingData: { monthlyIncome: number, expenses: number, extraMoney: number }) {
    this.data.push(accountingData);
    return { message: 'Data saved successfully' };
  }

  getData() {
    return this.data;
  }
}