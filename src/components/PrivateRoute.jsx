import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

const PrivateRoute = ({ component: Component, isAuthenticated, isProfessor, path }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return null; 
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (path === "/dashboard/manage" && !isProfessor) {
    return <Navigate to="/dashboard" />;
  }

  return <Component />;
};

export default PrivateRoute;
