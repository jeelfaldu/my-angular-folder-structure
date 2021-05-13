import { Component } from '@angular/core';
import { LoadingService } from './shared/service/loading.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private Loadingservice: LoadingService) {
        // Loadingservice.showSpinner();
     }
}
