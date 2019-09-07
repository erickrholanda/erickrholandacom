import { INC_NUMBER } from './actions';

funtion performAction(state, action) {
    switch (action.type) {
        case INC_NUMBER:
            console.log('action perform from reducer')
            console.log(state, action);
            let num = 0;
            return {num};
            break;
    
        default:
            let num = 0;
            return num;
            break;
    }
}