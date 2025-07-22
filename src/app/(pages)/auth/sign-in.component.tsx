import { Button } from "../../../components/ui/button";
import { signIn } from "@/lib/auth";

export const SignInButton = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <Button type="submit">Signin with Google</Button>
    </form>
  );
};
