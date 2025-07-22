import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { LoginInputsDto } from "./login.schema";

export const useLogin = () => {
  // const router = useRouter();
  const params = useSearchParams();
  const confirmorder = params?.get("redirect");
  const productId = params?.get("productId");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    // resolver: zodResolver(LoginInputsSchema),
    defaultValues: {
      email_or_phone: "",
      password: "",
    },
  });
  // const { postData } = useFetch()
  const mutation = useMutation<
    LoginInputsDto,
    unknown,
    { email_or_phone: string; password: string }
  >((newUser) => axios.post("/api/auth/login", newUser), {
    onSuccess: (response: any) => {
      console.log(response);
      const userRole = response.data?.user?.role?.name;
      console.log(userRole);
      let redirectPath = "/dashboard/user";

      if (confirmorder && productId) {
        redirectPath = `/${confirmorder}?productId=${productId}`;
      } else if (userRole === "Customer") {
      } else {
        redirectPath = "/dashboard/admin";
      }
      // router.replace(redirectPath);
      window.location.href = redirectPath;
      reset();
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onSubmit = (data: any) => {
    console.log(data, "hhhh");
    mutation.mutate(data);
  };

  return {
    register,
    errors,
    handleSubmit: handleSubmit(onSubmit),
    mutation,
  };
};
