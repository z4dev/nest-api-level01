import { Module } from '@nestjs/common';
import { ConditionService } from './condition.service';
import { BatteryModule } from 'src/battery/battery.module';
import{ EngineModule } from 'src/engine/engine.module';

@Module({
  providers: [ConditionService],
  imports:[BatteryModule,EngineModule],
  exports:[ConditionService]
})
export class ConditionModule {}
