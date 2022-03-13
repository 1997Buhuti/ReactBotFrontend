import{SAVE_MESSAGE} from './types'

export function saveMessage(message){
    return{
        type:SAVE_MESSAGE,
        payload:message
    }
}
