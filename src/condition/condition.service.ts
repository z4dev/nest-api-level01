import { Injectable } from '@nestjs/common';
import { BatteryService } from 'src/battery/battery.service';
import { EngineService } from 'src/engine/engine.service';

@Injectable()
export class ConditionService {
    constructor(private readonly batteryService: BatteryService, private engineService: EngineService) {}

    startAirCondition(){
        
        if(this.batteryService.powerSupply()){
            if(this.engineService.startEngine()){
                return 'Air condition is started';
            }
            return 'Air condition is not started cuz engine  is not started';
        }
        return 'Air condition is not started, cuz battery is not started yet ';
    }

}
