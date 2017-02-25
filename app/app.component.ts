import { Component } from '@angular/core';

import { ReviewData } from './reviewdata';

const DATAS: ReviewData[] = [
    {
        id: "zkasdf1",
        reviewer: "00316496",
        reviewtime: "201702242200",
        file: "12.txt",
        committer: "00388224",
    },
    {
        id: "zkasdf12",
        reviewer: "00316496",
        reviewtime: "201702232200",
        file: "123.txt",
        committer: "00388224",
    },
    {
        id: "zkasdf123",
        reviewer: "00316496",
        reviewtime: "201702235200",
        file: "1234.txt",
        committer: "00388224",
    },
];

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl:'app.component.html',
})

export class AppComponent {
    title = 'The committed details of This Project';
    datas = DATAS;
}
