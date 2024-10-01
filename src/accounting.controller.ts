import { Controller, Post, Body, Get } from '@nestjs/common';
import { AccountingService } from './accounting.service';

@Controller('accounting')
export class AccountingController {
  constructor(private readonly accountingService: AccountingService) {}

  @Post('save')
  saveData(@Body() accountingData: { monthlyIncome: number, expenses: number, extraMoney: number }) {
    return this.accountingService.saveData(accountingData);
  }

  @Get('data')
  getData() {
    return this.accountingService.getData();
  }
}