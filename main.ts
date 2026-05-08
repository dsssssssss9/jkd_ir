makerbit.onIrButton(IrButton.Left, IrButtonAction.Pressed, function () {
    basic.showArrow(ArrowNames.West)
})
makerbit.onIrButton(IrButton.Down, IrButtonAction.Pressed, function () {
    basic.showArrow(ArrowNames.South)
})
makerbit.onIrButton(IrButton.Up, IrButtonAction.Pressed, function () {
    basic.showArrow(ArrowNames.North)
})
makerbit.onIrButton(IrButton.Right, IrButtonAction.Pressed, function () {
    basic.showArrow(ArrowNames.East)
})
makerbit.onIrButton(IrButton.Ok, IrButtonAction.Pressed, function () {
    basic.showIcon(IconNames.Happy)
})
/**
 * if not working try changing NEC to keyestudio above
 */
makerbit.connectIrReceiver(DigitalPin.P1, IrProtocol.NEC)
