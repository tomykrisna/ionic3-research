import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class TestApi {
  constructor(private http: HttpClient) {
  }

  testApi(){
    return this.http.get('/person/findByPage?pass=12345678&personId=-1&length=-1&index=0');
  }

}
