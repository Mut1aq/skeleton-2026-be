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
