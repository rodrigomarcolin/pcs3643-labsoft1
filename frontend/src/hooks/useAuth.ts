import { useRecoilState } from "recoil";
import { authState } from "../state/atoms/auth";
import {
  login as loginService,
  logout as logoutService,
} from "../services/auth";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useRecoilState(authState);

  const login = async (username: string, password: string) => {
    const success = await loginService(username, password);
    setIsAuthenticated(success);
    return success;
  };

  const logout = () => {
    logoutService();
    setIsAuthenticated(false);
  };

  return { isAuthenticated, login, logout };
};
