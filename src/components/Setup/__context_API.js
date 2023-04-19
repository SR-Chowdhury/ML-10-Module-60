/**
 * CONTEXT API create:
 * 1. Create a component
 * 2. Create a global variable: export const AuthContext = createContext(null)
 *    N>B> Must export the created context variable
 * 3. Create a provider: AuthContext.Provider and give a value = {}
 * 
 * 
 * --------------------
 * 1. Create a context  (export)
 * 2. create provider
 * 3. set context value
 * 4. to access the value: useContext Hook
 */

/**
 * CONTEXT API usage:
 * 1. <AuthProvider> {children} </AuthProvider>
 * 2. const x = useContext(AuthContext)
 *    done
 * 
 * -------------------
 * 1. main.jsx set AuthProvider
 * 2. inside provider access children props and then use 
 */