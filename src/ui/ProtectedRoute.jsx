import { useNavigate } from "react-router-dom";
import useUser from "../features/authentication/useUser";
import Spinner from "./Spinner";
import styled from "styled-components";
import { useEffect } from "react";

const FullPageSpinner = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  //Todo: 1. Load the authenticated user
  const { isLoading, isAuthenticated } = useUser();

  //Todo: 2. If there is no user, redirect to the login page

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isAuthenticated, navigate, isLoading]);

  //Todo: 3. While loading, show a spinner
  if (isLoading)
    return (
      <FullPageSpinner>
        <Spinner />
      </FullPageSpinner>
    );

  //Todo: 4. If there is a user, render the app

  return children;
}

export default ProtectedRoute;
