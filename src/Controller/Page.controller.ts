import { BodyRequestLogin, BodyResponseLogin } from "../Model/ILogin";
export class PageController{
    public url:string;

    constructor(url:string){
        this.url = url;
    }
    async login(data: BodyRequestLogin, endPoint:string):Promise<BodyResponseLogin>{
        const response = await fetch(this.url + endPoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const token: BodyResponseLogin = await response.json();
        return token;
    }
}