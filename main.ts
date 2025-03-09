//% color="#AA278D"
//% groups="['Mapping', 'Iteration']"
namespace map {
    //% block="new Map()"
    //% group="Mapping"
    //% weight = 203
    export function newMap() {
        return new Map();
    }

    //% block="set Map($mp Key: $key Value: %value)"
    //% group="Mapping"
    //% weight = 202
    export function setMap(mp: Map<any, any>, key: any, value?: any): Map<any, any> {
        return mp.set(key, value);
    }
    
    //% block="get Map($mp Key: $key)"
    //% group="Mapping"
    //% weight = 201
    export function getMap(mp: Map<any, any>, key: any): any {
        return mp.get(key);
    }

    //% block="for $key, $value in Map: $mp"
    //% group="Iteration"
    //% draggableParameters="reporter"
    //% handlerStatement
    //% weight = 101
    export function iterate(mp: Map<any, any>, code: (key: any, value: any) => void) {
        for (const [key, value] of mp) {
            code(key, value);
        }
    }

}


//% color="#AA278D"
//% groups="['Constructor', 'Initialization']"
namespace cls {

}
