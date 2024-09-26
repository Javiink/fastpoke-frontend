import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../environments/environment';

const baseUrl = environment.apiUrl || `${location.protocol}//${location.hostname}/api`;

export const apiRequestInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(baseUrl);
  const endpoint = req.url.replace('/^\/?/', '/')
  const apiReq = req.clone({
    url: baseUrl + endpoint
  })
  return next(apiReq);
};
