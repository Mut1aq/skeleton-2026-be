import { Module } from '@nestjs/common';
import { ModulesModule } from './modules/modules.module';
import { I18nModule } from 'nestjs-i18n';
import {
  configOptions,
  i18nOptions,
} from './shared/configs/app-options.constant';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ModulesModule,
    I18nModule.forRoot(i18nOptions),
    ConfigModule.forRoot(configOptions),
  ],
})
export class AppModule {}
