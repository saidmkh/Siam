import store from './store';


export function dispatchChangeRoute(route="dashboard") {
    store.dispatch({
        type: 'CHANGE_ROUTE',
        payload: {current_page: route}
    })
}

export function dispatchLogin(token, email, first_name, last_name) {
    store.dispatch({
        type: 'AUTH',
        payload: {
            'token': token,
            'email': email,
            'first_name': first_name,
            'last_name': last_name
        }
    })
}

export function dispatchLogout() {
    store.dispatch({
        type: 'LOGOUT'
    })
}
