import { Injectable } from '@nestjs/common';

@Injectable()
export class BatteryService {
    powerSupply(){
        return 'Battery is supplying power';
    }
}
