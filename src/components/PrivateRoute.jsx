import { Navigate } from "react-router-dom";

const PrivateRoute = ({ Component }) => {
 
const [isAuthenticated, setIsAuthenticated] = useState(false);
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
        setIsAuthenticated(true);
        }
    }, []);
 
  return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};
export default PrivateRoute