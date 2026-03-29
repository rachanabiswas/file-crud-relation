import CreateStudentForm from "@/components/Forms/CreateStudentForm";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcnui/card";
import prisma from "@/lib/database/dbClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Student | File Relation CRUD",
  description: "Create student page of File Relation CRUD application",
};

const page = async () => {
  const teachers = await prisma.teacher.findMany();

  return (
    <section className="grid h-[84dvh] place-items-center">
      <Card className="w-sm">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Create Student</CardTitle>
        </CardHeader>

        <CardContent>
          <CreateStudentForm teacherList={teachers} />
        </CardContent>
      </Card>
    </section>
  );
};

export default page;
