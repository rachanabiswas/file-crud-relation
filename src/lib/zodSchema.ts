import z from "zod";

export const teacherFormSchema = z.object({
  name: z.string().min(6, { error: "Invalid name" }),
  subject: z.string().min(4, { error: "Select a Subject" }),
});

export type TeacherFormSchema = z.infer<typeof teacherFormSchema>;

export const studentFormSchema = z.object({
  name: z.string().min(6, { error: "Invalid name" }),
  email: z.email({ error: "Invalid email" }),
  gender: z.string().min(4, { error: "Select a gender" }),
  teacherId: z.string().min(32, { error: "Select a teacher" }),
});

export type StudentFormSchema = z.infer<typeof studentFormSchema>;
