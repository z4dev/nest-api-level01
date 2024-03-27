import { Controller, Get } from '@nestjs/common';
import{ConditionService} from 'src/condition/condition.service';
import{BatteryService} from 'src/battery/battery.service';
import{EngineService} from 'src/engine/engine.service';

@Controller('car')
export class CarController {
    constructor(private readonly conditionService: ConditionService 
    , private readonly batteryService:BatteryService
    , private readonly engineService:EngineService
    ) {}

    @Get()
    move(){
        return `Car is moving and the status of the air condition is ${this.conditionService.startAirCondition()}, battery status is ${this.batteryService.powerSupply()} and engine status is ${this.engineService.startEngine()}`;
    }

    


}
