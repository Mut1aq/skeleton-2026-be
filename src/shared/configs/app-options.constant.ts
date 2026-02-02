import { ConfigModuleOptions } from '@nestjs/config';
import Joi from 'joi';
import {
  I18nOptions,
  QueryResolver,
  HeaderResolver,
  AcceptLanguageResolver,
  CookieResolver,
} from 'nestjs-i18n';
import { join } from 'path';

export const i18nOptions: I18nOptions = {
  fallbackLanguage: 'en',
  loaderOptions: {
    path: join(__dirname, '../../resources/i18n'),
    watch: true,
  },
  typesOutputPath: join(
    `${process.cwd()}/src/resources/generated/i18n.generated.ts`,
  ),
  resolvers: [
    { use: QueryResolver, options: ['lang', 'locale', 'l'] },
    new HeaderResolver(['x-custom-lang']),
    AcceptLanguageResolver,
    new CookieResolver(['lang', 'locale', 'l']),
  ],
};

export const configOptions: ConfigModuleOptions = {
  envFilePath: `environments/.development.env`,
  isGlobal: true,
  cache: true,
  validationSchema: Joi.object({
    // Core application
    PORT: Joi.number().required().default(3000),
    ALLOWED_HOSTS: Joi.string().required(),
    PREFIX: Joi.string().min(3).max(10).required(),
    APP_NAME: Joi.string().min(3).max(30).required(),
    NODE_ENV: Joi.string().valid('dev', 'prod', 'stable').required(),
  }),
};
