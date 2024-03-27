import { Module } from '@nestjs/common';
import { BatteryService } from './battery.service';

@Module({
  providers: [BatteryService],
  exports: [BatteryService]
})
export class BatteryModule {}
   
