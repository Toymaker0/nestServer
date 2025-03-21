import { Injectable } from '@nestjs/common';

@Injectable()
export class LoginService {
    constructor(

    ){}

    async login(payLoad:any){
        console.log(payLoad.userName,payLoad.Password);
        
    }
}
