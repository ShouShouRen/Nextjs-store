import { currentUser } from "@clerk/nextjs/server";
import { LuUser } from "react-icons/lu";

async function UserIcon() {
  const user = await currentUser();

  const profileImage = user?.imageUrl;

  if (profileImage) {
    return (
      // eslint-disable-next-line next/next/no-img-element
      <img
        src={profileImage}
        alt="User Profile"
        className="w-6 h-6 rounded-full object-cover"
      />
    );
  }

  return <LuUser className="w-6 h-6 bg-primary rounded-full text-white" />;
}

export default UserIcon;
