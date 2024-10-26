import { Body, Controller, Inject, Post } from '@nestjs/common';
import { GeneratePdfDto } from './pdf-generator.dto';
import { UsecasesProxyModule } from 'src/infraestructure/usecases-proxy/usecases-proxy.module';
import { UseCaseProxy } from 'src/infraestructure/usecases-proxy/usecases-proxy';
import { GeneratePdfUseCases } from 'src/usecases/pdf-generator/generatePdf.usecases';

@Controller('pdf-generator')
export class PdfGeneratorController {

  constructor(
    @Inject(UsecasesProxyModule.GENERATEPDF_USECASES_PROXY)
    private readonly generatePdfUseCaseProxy: UseCaseProxy<GeneratePdfUseCases>
  ) {}

  @Post('generatePdf')
  generatePdf(@Body() generatePdfDto: GeneratePdfDto) {
    this.generatePdfUseCaseProxy.getInstance().execute({});
    return 'success';
  }
}
