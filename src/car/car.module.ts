import { Module } from '@nestjs/common';
import { CarController } from './car.controller';
import { BatteryModule } from 'src/battery/battery.module';
import { ConditionModule } from 'src/condition/condition.module';
import { EngineModule } from 'src/engine/engine.module';


@Module({
  imports: [BatteryModule,ConditionModule,EngineModule], // to use the services from other modules we need to import them
  controllers: [CarController],
})
export class CarModule {}
