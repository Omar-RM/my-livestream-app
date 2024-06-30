"use server";

export const onFollow = async (id: string) => {
  try {
    console.log("I am the same as an API Call", id);
  } catch (erorr) {
    throw new Error("Interal Error");
  }
};
