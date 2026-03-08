"use server";

import prisma from "@/lib/database/dbClient";
import { TeacherFormSchema } from "@/lib/zodSchema";
import { revalidatePath } from "next/cache";

const createTeacher = async (data: TeacherFormSchema) => {
  try {
    await prisma.teacher.create({
      data,
    });

    revalidatePath("/create");

    return {
      isSuccess: true,
      message: "Teacher created",
    };
  } catch (error) {
    console.log(error);

    return {
      isSuccess: false,
      message: "Something went wrong!",
    };
  }
};

export default createTeacher;
