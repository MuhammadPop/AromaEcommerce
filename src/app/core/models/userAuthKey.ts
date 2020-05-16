export class UserLoginData{
    private static storageName:string = "userKey";
    private static adminstorageName:string = "isAdmin";
    static isAdmin:boolean = false;
    static _adminEmail = "tonyashraf159@gmail.com";

    static checkAdmin(email){
        if(UserLoginData._adminEmail == email){
            localStorage.setItem(this.adminstorageName, JSON.stringify("true"));
            UserLoginData.isAdmin = true;
            return true;
        }
        return false;
    }

    static getIsAdmin(){
        let data = localStorage.getItem(this.adminstorageName);
        return JSON.parse(data);
    }

    static setSetting(data:any){
        localStorage.setItem(this.storageName, JSON.stringify(data));
    }

    static getUserSetting(){
        let data = localStorage.getItem(this.storageName);
        return JSON.parse(data);
    }

    static clearUserSetting(){
        localStorage.removeItem(this.storageName);
    }

    static cleanAll() {
        localStorage.clear();
    }
}