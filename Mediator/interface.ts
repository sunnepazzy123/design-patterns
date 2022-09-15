export interface IComponent<T> {
    publish: (msg: T) => void,
    subscribe: (msg: T) => void,
    name?: string
}

export interface IComponentType<T> {
    type: string,
    data: T,
    name?: string
}

export interface IModel {

}

export interface IService<T> {
    send_mail: (data: T) => void
}