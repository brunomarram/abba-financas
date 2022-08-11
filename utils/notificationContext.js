import React from "react";


export const NotificationContext = React.createContext({
    openNotification: (title, message, type = 'info') => null
});