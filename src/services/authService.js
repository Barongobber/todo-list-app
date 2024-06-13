import { store } from "../app/store";
import { loginUser } from "../features/auth/authThunks";

const authService = {
    isAuthenticated: false,
    isDirectVisit: false,
    async authenticate(email, password) {
        const action = await store.dispatch(loginUser({ email, password }));
        const { api_token: token } = action.payload;
        
        if (token) {
            this.isAuthenticated = true;
        }
    },
    async signout() {
        store.dispatch({ type: 'auth/logout' });
        this.isAuthenticated = false;
    },
    isLoggedIn(value = false) {
        this.isDirectVisit = value;
        return this.isAuthenticated;
    },
    isDirectVisited() {
        return this.isDirectVisit;
    }
  };
  
  export default authService;