import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './modules/login/login.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [LoginModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
