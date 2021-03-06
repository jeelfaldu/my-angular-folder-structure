import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
@Injectable({
    providedIn: 'root'
})
export class LoadingService {

    constructor(private spinner: NgxSpinnerService) { }

    showSpinner(): void {
        this.spinner.show();
    }
    hideSpinner(): void {
        this.spinner.hide();
    }
}
