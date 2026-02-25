import z from "zod";

export const teacherFormSchema = z.object({
  name: z.string().min(6, { error: "Invalid name" }),
  subject: z.string().min(4, { error: "Select a Subject" }),
});

export type TeacherFormSchema = z.infer<typeof teacherFormSchema>;
