interface ICONFIG {
    port: string,
    username?: string,
    password?: string,
    name: string
}
const config = {
    port: '90',
    name: 'bank'
}

const config2 = {
    port: '909',
    name: 'bankju'
}

class Database {
    private static _instance: null | Database
    constructor() {

    }


    static getInstance(){
        return this.init()
    }


    check(instance: Database) {
        if(Database._instance === instance){
            return true;
        }
        return false
    }

    static init() {
        if(!Database._instance){
            Database._instance = new Database();
            return Database._instance
        }
        return Database._instance
    }

    
}




const db = Database.getInstance()
const db2 = Database.getInstance()

const db3 = new Database()
const db4 = new Database()


console.log(db3 === db4)
console.log(db2 === db)




