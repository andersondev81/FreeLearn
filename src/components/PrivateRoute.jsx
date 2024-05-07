import { Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

const PrivateRoute = ({ element, isAuthenticated, isProfessor }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return null; // ou você pode retornar um componente de carregamento aqui
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (element.props.path === "/dashboard/manage" && !isProfessor) {
    return <Navigate to="/dashboard" />;
  }

  return element;
};

export default PrivateRoute;
