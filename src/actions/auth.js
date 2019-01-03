export const login = (uid) => ({
    type: "LOGIN",
    uid
});

export const logout = () => ({
    type: "LOGOUT"
});

export const startLogin = () => ({
	type: 'START_LOGIN'
});

export const startLogout = () => ({
	type: 'START_LOGOUT'
});
