import { Component } from "./component"
import { Mediator } from "./mediator"

const mediator = Mediator.getInstance()

export const appComponent = new Component(mediator, 'appComponent')
export const authComponent = new Component(mediator, 'authComponent')


export const mediatorSetup = () => {
    mediator.register(authComponent)
    mediator.register(appComponent)

    return mediator
}