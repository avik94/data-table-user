import { HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServerInterceptorService implements HttpInterceptor {

  constructor() { }
  // @ts-ignore
  intercept(req, next){

    const reqClone = req.clone({
      setHeaders: {
        Authorization: "XX.YY.ZZ"
      }
    })
    console.log(reqClone)
    return next.handle(reqClone).pipe(
      finalize(()=>{
        console.log("complted")
      })
    )

  }
}
