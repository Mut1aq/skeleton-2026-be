import { Module } from '@nestjs/common';
import { ModulesModule } from './modules/modules.module';
import { I18nModule } from 'nestjs-i18n';
import { i18nOptions } from './shared/configs/app-options.constant';

@Module({
  imports: [ModulesModule, I18nModule.forRoot(i18nOptions)],
  controllers: [],
  providers: [],
})
export class AppModule {}
