import { NotificationEnum } from "./NotificationEnum";

export class GenericResponse<T> {
    public readonly data: T | null;
    public readonly notification: Map<NotificationEnum, string>;
  
    constructor(dataOrNotifications: T , notifications: Map<NotificationEnum, string>) {
        this.data = dataOrNotifications;
        this.notification = notifications;
    }
  }