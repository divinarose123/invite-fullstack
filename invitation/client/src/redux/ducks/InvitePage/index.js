// 1. imports
import axios from 'axios'
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"


// 2. action definitions
const GET_INVITE = "users/GET_INVITE"


// 3. initial state
const initialState = {
    users: {}
}

// 4. reducer
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_INVITE:
            return { ...state, users: action.payload }
        default:
            return state
    }
}

// 5. action creators
function getInvite() {
    useEffect(() => {
        axios.get('https://randomuser.me/api/').then(item => {
            item.data
        })
    }, [])
}







// 6. custom hook
export function useUsers() {
    const dispatch = useDispatch()
    const users = useSelector(appState => appState.usersState.users)

    const invited = () => dispatch(getInvite())
   

    return { users, invited }
}
