import { IComponent, IComponentType, IModel } from "./interface";
import { Service } from "./service";

export class Mediator extends Service {

    static _instance: Mediator|null = null
    constructor(private components: IComponent<IComponentType<IModel>>[] = []) {
        super()
    }


    static getInstance() {
        if(!this._instance){
            this._instance = new Mediator()
        }
        return this._instance
    }

    public register(component: IComponent<IComponentType<IModel>>) {
        this.components.push(component)
        console.log(`component ${component.name} registered`)
    }

    public unregister(_component: IComponent<IComponentType<IModel>>) {
       this.components = this.components.filter((component) => _component != component)
        console.log(`component ${_component.name} unregistered`, this.components.length)
    }

    public publish(msg: IComponentType<IModel>, _component: IComponent<IComponentType<IModel>>) {
        for(const component of this.components){
            if(component != _component){
                component.subscribe(msg)
            }
        }
        console.log('publishing service is done')
    }

    print() {
        console.log('Mediator is running')
    }
    
}