import { Body, Controller, Post } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('/')
  async login(@Body() postData:object){
    console.log(postData);
    
    await this.loginService.login(postData)
  }
}
