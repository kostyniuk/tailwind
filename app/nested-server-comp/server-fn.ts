"use server";

import { revalidatePath } from "next/cache";

export const handleClick = async () => {
    console.log("Button clicked");
    revalidatePath("/nested-server-comp");
}