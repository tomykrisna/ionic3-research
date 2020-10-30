import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import {Observable} from "rxjs";
import {Injectable} from '@angular/core';

@Injectable()
export class AuthInterceptors implements HttpInterceptor {
    constructor() {
    }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        let storage: any;
        let token: any;
        if (!!JSON.parse(localStorage.getItem('credentials'))) {
            // storage = JSON.parse(localStorage.getItem('credentials'));
            // token = storage.token;
        }
        req = req.clone({
            setHeaders: {
                'Content-Type': 'application/json',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36',
                'Accept-Encoding': 'gzip, deflate',
                'Accept-Language': 'en-US,en;q=0.9,id-ID;q=0.8,id;q=0.7',
                'Authorization': `SFGO160334216225209509952224014746`,
                'API-Host': `https://api.greatdayhr.com/dev`
            },
            // url: "http://172.16.0.142:8090" + req.url
            url: "https://api.greatdayhr.com/pagebuilder/dev" + req.url
        });

        return next.handle(req)
            // catchError((err: HttpErrorResponse) => {
            //   if (err && err.status === 401) {
            //     // this.guard.kickTologinPage();
            //   } else if (err && err.status === 404 || err.status === 500) {
            //     // this.messageProvider.error('Please Contact Support')
            //   } else {
            //     return err
            //     // return throwError(err.error);
            //   }
            // })
        // );
    }

}
