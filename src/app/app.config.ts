import { ApplicationConfig, DEFAULT_CURRENCY_CODE, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from "@angular/platform-browser/animations";

import { routes } from './app.routes';
import { loadingInterceptor } from './interceptors/loading.interceptor';
import { apiRequestInterceptor } from './interceptors/api-request.interceptor';
import { registerLocaleData } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([apiRequestInterceptor, loadingInterceptor])),
    provideAnimations(),
    {provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR'}
  ]
};
