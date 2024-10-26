import { Module } from '@nestjs/common';
import { PdfGeneratorController } from './pdf-generator/pdf-generator.controller';
import { UsecasesProxyModule } from '../usecases-proxy/usecases-proxy.module';

@Module({
  imports: [UsecasesProxyModule.register()],
  controllers: [PdfGeneratorController]
})
export class ControllersModule {}
