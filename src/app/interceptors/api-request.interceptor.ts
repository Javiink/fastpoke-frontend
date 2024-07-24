import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../environments/environment';

export const apiRequestInterceptor: HttpInterceptorFn = (req, next) => {
  const endpoint = req.url.replace('/^\/?/', '/')
  const apiReq = req.clone({
    url: environment.apiUrl + endpoint
  })
  return next(apiReq);
};
