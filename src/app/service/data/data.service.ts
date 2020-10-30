import {Injectable} from "@angular/core";
import {ApiModelDto} from "../model/api.model";

@Injectable()
export class DataService {
  public dataAccess: ApiModelDto = new ApiModelDto()

  constructor() {
  }
}
