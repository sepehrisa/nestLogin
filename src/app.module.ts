import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { UsersController } from './users/users.controller';

@Module({
  imports: [ProductsModule],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule {}
