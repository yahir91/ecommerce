import { useState, useEffect, createContext } from "react";
import { Token } from "../api/token";
import { User } from "../api/user";

const tokenCtrl = new Token();
const userCtrl = new User();

export const AuthContext = createContext("" as any);

export function AuthProvider(props: any) {
  const { children } = props;
  const [user, setUser] = useState<any>(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const token = tokenCtrl.getToken();

      if (!token) {
        logout();
        setLoading(false);
        return;
      }

      if (tokenCtrl.hasExpired(token)) {
        logout();
      } else {
        await login(token);
      }
    })();
  }, []);

  const login = async (token: any) => {
    try {
      tokenCtrl.setToken(token);
      const response = await userCtrl.getMe();
      console.log(response)
      setUser(response);
      setToken(token);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const logout = () => {
    tokenCtrl.removeToken();
    setToken(null);
    setUser(null);
  };

  const updateUser = (key: any, value: any) => {
    setUser({
      ...user,
      [key]: value,
    });
  };

  const data = {
    accessToken: token,
    user,
    login,
    logout,
    updateUser,
  };

  if (loading) return null;

  return (
    <AuthContext.Provider value={data as any}>{children}</AuthContext.Provider>
  );
}
