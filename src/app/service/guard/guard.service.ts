import {Injectable} from "@angular/core";
import {DataService} from "../data/data.service";
import {TestApi} from "../api/test.api";

@Injectable()
export class GuardService {

  data = {
    "companyId": "15594",
    "empId": "DO170002",
    "userAccess": [
      {
        "userId": 5,
        "usergroupId": 3,
        "groupName": "SysAdmin",
        "companyId": 15594,
        "groupType": 2,
        "description": "System Administrator",
        "status": 1,
        "companyCode": "sfgo885"
      },
      {
        "userId": 5,
        "usergroupId": 7,
        "groupName": "Supervisor",
        "companyId": 15594,
        "groupType": 1,
        "description": "Supervisor",
        "status": 1,
        "companyCode": "sfgo885"
      },
      {
        "userId": 5,
        "usergroupId": 16,
        "groupName": "HRAdmin",
        "companyId": 15594,
        "groupType": 1,
        "description": "HR Administrator",
        "status": 1,
        "companyCode": "sfgo885"
      },
      {
        "userId": 5,
        "usergroupId": 19,
        "groupName": "Employee",
        "companyId": 15594,
        "groupType": 0,
        "description": "Regular Employee",
        "status": 1,
        "companyCode": "sfgo885"
      },
      {
        "userId": 5,
        "usergroupId": 24,
        "groupName": "Group_ERP_Finance_Accounting",
        "companyId": 15594,
        "groupType": 1,
        "description": "Group ERP Finance Accounting",
        "status": 1,
        "companyCode": "sfgo885"
      },
      {
        "userId": 5,
        "usergroupId": 28,
        "groupName": "Group_SFGO_HR_Payroll",
        "companyId": 15594,
        "groupType": 1,
        "description": "Payroll Admin",
        "status": 1,
        "companyCode": "sfgo885"
      },
      {
        "userId": 5,
        "usergroupId": 29,
        "groupName": "Group_SFGO_HR_Attendance",
        "companyId": 15594,
        "groupType": 1,
        "description": "Attendance Admin",
        "status": 1,
        "companyCode": "sfgo885"
      },
      {
        "userId": 5,
        "usergroupId": 37,
        "groupName": "test2",
        "companyId": 15594,
        "groupType": 2,
        "description": "test abc",
        "status": 1,
        "companyCode": "sfgo885"
      }
    ]
  }

  constructor(
    private dataService: DataService,
    private testApi: TestApi
  ) {
  }

  async checkGuard(pageId: string) {
    return new Promise<any>(async (resolve, reject) => {
      if (this.dataService.dataAccess.data) {
        resolve(await this.checkData(pageId))
      } else {
        this.getData().then(result => {
          console.log("result get api", result)
          resolve(this.checkData(pageId))
        })
      }

    })
  }

  getData(): Promise<any> {
    return new Promise<any>(async (resolve, reject) => {
      this.testApi.getAllPageAccessible(this.data).toPromise().then(result => {
        this.dataService.dataAccess = result
        if (this.dataService.dataAccess) {
          resolve(true)
        }
      })
    })
  }

  checkData(pageId: string): Promise<any> {
    return new Promise<any>(async (resolve, reject) => {
      for (let data of this.dataService.dataAccess.data) {
        if (pageId === data.pageCode) {
          resolve(data.result)
        }
      }
    })
  }

}
