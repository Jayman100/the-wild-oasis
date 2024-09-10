import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function useLogin() {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      //sets the data in the cache of user query
      queryClient.setQueriesData(["user"], user);
      navigate("/dashboard", { replace: true });
    },

    onError: (error) => {
      console.log(error, "error");

      toast.error("Provided email and password is incorrect");
    },
  });

  return { login, isLoading };
}

export default useLogin;
