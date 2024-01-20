// curring function
import { Middleware } from "@reduxjs/toolkit"

const logger: Middleware = (store) => (next) => (action) => {

    
    console.log('curr state:', store.getState(), 'action:', action);
    next(action);
    console.log('next state:', store.getState());

}

export default logger;