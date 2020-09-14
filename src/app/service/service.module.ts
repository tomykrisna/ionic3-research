import {NgModule} from "@angular/core";
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {TestApi} from "./api/test.api";

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        HttpClientModule,
    ],
    providers: [
        TestApi
    ]
})
export class ServiceModule {
}

