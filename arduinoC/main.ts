
//% color="#AA278D" iconWidth=50 iconHeight=40
namespace FreeSixIMU {
    //% block="FreeSixIMU init  " blockType="command"
    //% SSR.shadow="number" SSR.defl="9600"
    
    export function FreeSixIMUInit(parameter: any, block: any) {
        
        //let ssr=parameter.SSR.code;
      
        Generator.addInclude("FreeSixIMUInit", "#include <FreeSixIMU.h>");
        Generator.addInclude("FreeSixIMUInitAD", "#include <FIMU_ADXL345.h>");
        Generator.addInclude("FreeSixIMUInitIT", "#include <FIMU_ITG3200.h>");
        Generator.addInclude("FreeSixIMUInitWire1", "#include <Wire.h>");
    
        Generator.addObject("FreeSixIMUInit1", "float", `angles[3];`);

        Generator.addObject("FreeSixIMUInit", "FreeSixIMU", `sixDOF = FreeSixIMU();`);

        //Generator.addSetup("FreeSixIMUInitSetupmySerial", `Serial.begin(${ssr});`);
        Generator.addSetup("FreeSixIMUInitSetupWire", "Wire.begin();");
        Generator.addSetup("FreeSixIMUInitSetupDelay", "delay(5);");
        Generator.addSetup("FreeSixIMUInitSetupsixDOF", "sixDOF.init();");
        Generator.addSetup("FreeSixIMUInitSetupDelay1", "delay(5);");

    }

    

    //% block="FreeSixIMUInit read" blockType="command"
      
    export function FreeSixIMUInitRead(parameter: any, block: any) {

        Generator.addCode("sixDOF.getEuler(angles);");

    }

     //% block="FreeSixIMUInit readxyz [SR]" blockType="reporter"
     //% SR.shadow="dropdown" SR.options="SR"
      
     export function FreeSixIMUInitReadXYZ(parameter: any, block: any) {
        let sr =parameter.SR.code;
        
        Generator.addCode(`angles[${sr}]`);

    }

}
