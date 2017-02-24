import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <div>
            <table border="2">
                <thead>
                    <td>
                        Commit Id
                    </td>
                    <td>
                         Reivew Person
                    </td>
                    <td>
                        Review Time
                    </td>
                    <td>
                        Reivew File
                    </td>
                    <td>
                        Commit Person
                    </td>
                </thead>
                <tr>
                    <td>
                        {{data.id}}
                    </td>
                    <td>
                        {{data.reviewer}}
                    </td>
                    <td>
                        {{data.reviewtime}}
                    </td>
                    <td>
                        {{data.file}}
                    </td>
                    <td>
                        {{data.committer}}
                    </td>
                </tr>
            </table>
        </div>
    `,
})

export class AppComponent {
    title = 'The committed details of This Project';
    data: ReviewData = {
        id: "zkasdf1234",
        reviewer: "00316496",
        reviewtime: "201702242200",
        file: "123.txt",
        committer: "00388224",
    };
}

export class ReviewData {
    id: string;
    reviewer: string;
    reviewtime: string;
    file : string;
    committer: string;
}