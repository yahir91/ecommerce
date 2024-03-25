import { Token } from "../api/token";

export async function authFetch(url: string, params: any) {
  const tokenCtrl = new Token();
  const token = tokenCtrl.getToken();

  const logout = () => {
    tokenCtrl.removeToken();
    window.location.replace("/");
  };

  if (!token) {
    logout();
  } else {
    if (tokenCtrl.hasExpired(token)) {
      logout();
    } else if(params) {
      const paramsTemp = {
        ...params,
        headers: {
          ...params?.headers,
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        return await fetch(url, paramsTemp ?? null);
      } catch (error) {
        return error;
      }
    }
  }
}
