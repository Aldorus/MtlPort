import React, {useEffect, useState} from 'react';
import './notification.scss';
import {Notification, useNotificationsSubSubscription} from "@mtlport/schema";

export const NotificationCenter = () => {
  const {data} = useNotificationsSubSubscription();
  const [notifications, setNotifications] = useState<Notification[]>([]);
  useEffect(() => {
      console.log('Notification', data);
    if (data?.notificationAdded) {
      setNotifications([...notifications, data.notificationAdded]);
    }
  }, [data?.notificationAdded]);


  return <div className="Notification">Here the notification:
    {notifications.map(notification => <div>{notification.content}</div>)}
  </div>
}
