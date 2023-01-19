import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: 'auth',
    initialState: { user: {
        userName: null,
        userFirstName: null,
        userLastName: null,
        userPassword: null,
        role:[{
            roleName: null,
            roleDescription:null
        }]
    },
    token: null },
    reducers: {
        setCredentials: (state, action) => {
            console.log(action.payload)
            const { user, token } = action.payload
            console.log(user)
            console.log(token)
            state.user = user
            state.token = token
        },
        logOut: (state, action) => {
            state.user.userName = null
            state.user.userFirstName= null
            state.user.userLastName= null
            state.role.roleName=null
            state.role.roleDescription=null
            state.role.userPassword=null
            state.token = null
        }
    },
})

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state) => state.auth.user
export const selectCurrentToken = (state) => state.auth.token