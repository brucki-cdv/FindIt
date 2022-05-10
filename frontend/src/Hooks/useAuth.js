import { useSelector } from "react-redux";
import { useDebugValue } from "react";

const useAuth = () => {
  const { token } = useSelector(state => state.auth);
  useDebugValue(token, (token) => (token?.user ? "Logged In" : "Logged Out"));
  return useSelector(state => state.auth);
};

export default useAuth;
