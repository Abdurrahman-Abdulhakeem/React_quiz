import { useUser } from "./contexts/UserProvider";
import { Navigate } from "react-router-dom";

function LoginRequired({ children }) {
  const {  user } = useUser();
  //   const navigate = useNavigate();

  return user ? children : <Navigate to="/signin" replace />;
}

export default LoginRequired;
