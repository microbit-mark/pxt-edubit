//==============================================
// LEDs Bit
//==============================================
namespace edubit {
    export enum LedColor {
        Green,
        Red,
    };

    let greenLedPin = DigitalPin.P13;
    let greenLedState = 0;

    let redLedPin = DigitalPin.P14;
    let redLedState = 0;



    /**
     * Turn on/off the LED.
     * @param color LED color. eg: Green, Red
     * @param value LED value. eg: 0, 1
     */
    //% subcategory="LEDs Bit"
    //% blockGap=8
    //% blockId=edubit_set_led
    //% block="Set LED %color to %value"
    //% value.min=0 value.max=1
    export function setLed(color: LedColor, value: number): void {
        if (color == LedColor.Green) {
            greenLedState = value;
            pins.digitalWritePin(greenLedPin, value);
        }
        else if (color == LedColor.Red) {
            redLedState = value;
            pins.digitalWritePin(redLedPin, value);
        }
    }



    /**
     * Toggle the LED.
     * @param color LED color. eg: Green, Red
     */
    //% subcategory="LEDs Bit"
    //% blockGap=50
    //% blockId=edubit_toggle_led
    //% block="Toggle LED %color"
    export function toggleLed(color: LedColor): void {
        if (color == LedColor.Green) {
            greenLedState ^= 1;
            pins.digitalWritePin(greenLedPin, greenLedState);
        }
        else if (color == LedColor.Red) {
            redLedState ^= 1;
            pins.digitalWritePin(redLedPin, redLedState);
        }

    }



    /**
     * Assign new pin for the LED.
     * @param color LED color. eg: Green, Red
     * @param pin New pin number. eg: P13, P14
     */
    //% subcategory="LEDs Bit"
    //% blockGap=8
    //% blockId=edubit_assign_new_led_pin
    //% block="Assign LED %color to pin %pin"
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4
    //% pin.fieldOptions.tooltips="false" pin.fieldOptions.width="250"
    export function assignNewLedPin(color: LedColor, pin: DigitalPin): void {
        if (color == LedColor.Green) {
            greenLedPin = pin;
        }
        else if (color == LedColor.Red) {
            redLedPin = pin;
        }
    }
}