export class ApiModelDto{
  message: string;
  data: Data[];
}

export class Data {
  pageId?: number;
  pageCode: string;
  result: boolean;
}
