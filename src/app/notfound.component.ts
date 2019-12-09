import { Component } from '@angular/core';
@Component({
    selector: 'app-notfound',
    template: `
        <div>
            <h1>Page not found</h1>
            <p>The page your are looking for doesnot exist !!!
                Go back <a routerLink='/'>Home</a></p>
        </div>
    `,
    styleUrls: ['./app.component.scss']
})
export class NotFoundComponent { }
