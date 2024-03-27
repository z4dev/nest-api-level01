import { Module } from '@nestjs/common';
import { EngineService } from './engine.service';
import { BatteryModule } from 'src/battery/battery.module';


@Module({
  imports: [BatteryModule],
  providers: [EngineService], 
  exports: [EngineService]
})
export class EngineModule {}
