import { useSelector } from "react-redux";
import authSlice from "../../redux/features/auth/authSlice"
// import { selectIsLoggedIn } from "../../redux/features/auth/authSlice";

export const ShowOnLogin = ({ children }) => {
  const isLoggedIn = useSelector(authSlice.selectIsLoggedIn);

  if (isLoggedIn) {
    return <> {children}</>;
  }
  return null;
};

export const ShowOnLogout = ({ children }) => {
  const isLoggedIn = useSelector(authSlice.selectIsLoggedIn);

  if (!isLoggedIn) {
    return <> {children}</>;
  }
  return null;
};
