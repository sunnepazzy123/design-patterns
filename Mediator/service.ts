import { IModel, IService } from "./interface";

export class Service implements IService<IModel> {

    send_mail(data: IModel){
        console.log("sending mail ----: ", data )
    }
}