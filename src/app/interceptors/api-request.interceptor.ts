import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../environments/environment';

export const apiRequestInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('interceptor');
  const endpoint = req.url.replace('/^\/?/', '/')
  const apiReq = req.clone({
    url: environment.apiUrl + endpoint
  })
  console.log('TRANSFORMED URL:', apiReq.url);
  return next(apiReq);
};
