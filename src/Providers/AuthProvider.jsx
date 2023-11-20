import { createContext } from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config"
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);
const auth = getAuth(app)


// props drilling
const authInfo = {

}

const AuthProvider = ({children}) => {
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
};