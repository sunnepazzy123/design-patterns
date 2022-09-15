import {appComponent, authComponent, mediatorSetup } from "./setup";


const action = {
    type: 'create',
    data: "hello"
}

mediatorSetup()
authComponent.publish(action)
appComponent.publish(action)





