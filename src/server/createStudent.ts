"use server";

import prisma from "@/lib/database/dbClient";
import { StudentFormSchema } from "@/lib/zodSchema";
import { revalidatePath } from "next/cache";

const createStudent = async (data: StudentFormSchema) => {
  try {
    await prisma.student.create({
      data,
    });

    revalidatePath("/create");

    return {
      isSuccess: true,
      message: "Student created",
    };
  } catch (error) {
    console.log(error);

    return {
      isSuccess: false,
      message: "Something went wrong!",
    };
  }
};

export default createStudent;
