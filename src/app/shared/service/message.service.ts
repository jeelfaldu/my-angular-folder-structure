import { Injectable } from '@angular/core';
import { NgxNotificationDirection, NgxNotificationMsgService, NgxNotificationStatusMsg } from 'ngx-notification-msg';

@Injectable({
    providedIn: 'root'
})
export class MessageService {


    constructor(private ngxNotificationMsgService: NgxNotificationMsgService) { }

    openNotificationMsg(
        status: NgxNotificationStatusMsg,
        header: string,
        msg, delay?: number,
        direction?: NgxNotificationDirection
    ): void {
        this.ngxNotificationMsgService.open({
            status,
            header,
            messages: [msg],
            delay: (delay ? delay : 3000),
            direction: (direction ? direction : NgxNotificationDirection.TOP),
            displayIcon: true,
            displayProgressBar: true,
            closeable: true
        });
    }
}
