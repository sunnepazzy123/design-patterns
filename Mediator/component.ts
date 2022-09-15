
import { IComponent, IComponentType, IModel } from "./interface";
import { Mediator } from "./mediator";

export class Component implements IComponent<IComponentType<IModel>>{
    protected mediator: Mediator
    constructor(mediator: Mediator, public name: string) {
        this.mediator = mediator
    }
    subscribe (msg: IComponentType<IModel>) {
        console.log( `Component ${this.name} is subscribing a msg ${msg.type} method`)
        this.consume(msg)       
    }

    publish(msg: IComponentType<IModel>){
        console.log( `Component ${this.name} is publishing a msg ${msg.type} method`)
        msg.name = this.name
        this.mediator.publish(msg, this)
    }

    consume(msg: IComponentType<IModel>) {
        switch(msg.type) {
            case "create":
                this.mediator.send_mail(msg.data)
            break
            case "get":
                this.mediator.send_mail(msg.data)
            break

            default:
                this.mediator.print()
        }
    }
}