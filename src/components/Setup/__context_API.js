/**
 * CONTEXT API create:
 * 1. Create a component
 * 2. Create a global variable: export const AuthContext = createContext(null)
 *    N>B> Must export the created context variable
 * 3. Create a provider: AuthContext.Provider and give a value = {}
 */

/**
 * CONTEXT API usage:
 * 1. <AuthProvider> {children} </AuthProvider>
 * 2. const x = useContext(AuthContext)
 *    done
 */