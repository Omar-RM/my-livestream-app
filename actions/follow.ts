"use server";

import { revalidatePath } from "next/cache";

import { followUSer } from "@/lib/follow-service";

export const onFollow = async (id: string) => {
  try {
    const followedUser = await followUSer(id);

    revalidatePath("/");

    if (followedUser) {
      revalidatePath(`/${followedUser.following.username}`);
    }
    return followedUser;
  } catch {
    throw new Error("Interal Error");
  }
};
