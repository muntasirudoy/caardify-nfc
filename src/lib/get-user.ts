import axios from "axios";

export const getUserBySlug = async (slug: string) => {
  if (!slug) throw new Error("Slug is required");

  const { data } = await axios.get(
    `https://api.caardify.com/v1/profile/${slug}`
  );

  if (!data) {
    throw new Error("Failed to fetch user data");
  }

  return data;
};
