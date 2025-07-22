
import { getUserBySlug } from "@/lib/get-user";
import UserNotFound from "./not-found";
import { UserSchema } from "./user-schema";
import TemplateBasic from "@/app/dashboard/user/(pages)/cards/_profile-templates/basic/template-basic";

async function UserProfile({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug

  if (!slug) {
    return <p>Missing user name.</p>;
  }

  try {
    const user = await getUserBySlug(slug);
    console.log(user);

    const parsedUser = UserSchema.safeParse(user.data);
    console.log(parsedUser);


    if (parsedUser) {
      return (
        // <TemplateWrapper>
        <>
          <TemplateBasic userData={parsedUser.data?.profiles} />
        </>
        // </TemplateWrapper>

      );
    }
  } catch (_) {

    return <UserNotFound />;
  }
}

export default UserProfile;
