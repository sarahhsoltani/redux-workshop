
const Calcul=(initialState=0,action)=>{
switch(action.type){
    case 'PLUS':
        return initialState+1
        case 'MOINS':
        return initialState-1
        default:
            return initialState
}
}
export default Calcul