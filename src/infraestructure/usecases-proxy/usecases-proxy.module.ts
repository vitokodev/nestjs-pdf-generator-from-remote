import { DynamicModule, Module } from "@nestjs/common";
import { UseCaseProxy } from "./usecases-proxy";
import { GeneratePdfUseCases } from "src/usecases/pdf-generator/generatePdf.usecases";

@Module({})
export class UsecasesProxyModule {
  static GENERATEPDF_USECASES_PROXY = 'generatePdf';

  static register(): DynamicModule {
    return {
      module: UsecasesProxyModule,
      providers: [
        {
          // inject: [LoggerService, JwtTokenService, EnvironmentConfigService, DatabaseUserRepository, BcryptService],
          provide: UsecasesProxyModule.GENERATEPDF_USECASES_PROXY,
          useFactory: (
            // logger: LoggerService,
            // jwtTokenService: JwtTokenService,
            // config: EnvironmentConfigService,
            // userRepo: DatabaseUserRepository,
            // bcryptService: BcryptService,
          ) => new UseCaseProxy(new GeneratePdfUseCases(
            // logger, jwtTokenService, config, userRepo, bcryptService
          ))
        }
      ],
      exports: [
        UsecasesProxyModule.GENERATEPDF_USECASES_PROXY,
      ]
    }
  }
}