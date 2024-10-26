import { Module } from '@nestjs/common';
import { ControllersModule } from './infraestructure/controllers/controllers.module';
import { UsecasesProxyModule } from './infraestructure/usecases-proxy/usecases-proxy.module';

@Module({
  imports: [
    UsecasesProxyModule.register(),
    ControllersModule,
  ]
})
export class AppModule {}
