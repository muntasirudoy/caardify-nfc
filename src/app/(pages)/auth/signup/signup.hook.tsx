import { useFetch } from "@/hooks/use-fetch";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { SingupInputsDto } from "./signup.schema";
import { toast } from "sonner";

export const useSignup = () => {
  // const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SingupInputsDto>();
  const { postData } = useFetch();

  const mutation = useMutation<
    SingupInputsDto,
    unknown,
    { email_or_phone: string; password: string }
  >(
    (newUser) => postData("/auth/signup", newUser),
    {
      onSuccess: (data) => {
        console.log(data);
        reset()
        toast.success("Signup successful! Welcome!");
      },
      onError: (error) => {
        console.log(error);

        toast.error("Signup failed. Please try again.");
      },
    }
  );

  const onSubmit = (data: any) => {
    console.log(data);
    mutation.mutate({
      email_or_phone: data.email_mobile,
      password: data.password,
    });
  };

  return {
    register,
    errors,
    onSubmitForm: handleSubmit(onSubmit),
    mutation,
  };
};
