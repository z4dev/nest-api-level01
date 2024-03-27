import { Injectable } from '@nestjs/common';
import { BatteryService } from 'src/battery/battery.service';

@Injectable()
export class EngineService {
    constructor(private batteryService: BatteryService) {}
     
    startEngine(){
         if(this.batteryService.powerSupply()){
                return 'Engine is started';
         }
            return 'Engine is not started , cuz battery is not supplying power';
    }

    
}
