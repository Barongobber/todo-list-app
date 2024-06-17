import { store } from "../app/store";
import { loginUser } from "../features/auth/authThunks";

const authService = {
    isAuthenticated: false,
    isDirectVisit: false,
    isAccWrong: false,
    async authenticate(email, password) {
        const action = await store.dispatch(loginUser({ email, password }));
        
        if (!action.payload) {
            this.isAccWrong = true;
            
            return;
        }

        const { api_token: token } = action.payload;
        
        if (token) {
            this.isAccWrong = false;
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
    },
    isCredentialWrong() {
        return this.isAccWrong;
    }
  };
  
  export default authService;