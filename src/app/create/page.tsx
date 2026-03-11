import CreateStudentForm from "@/components/Forms/CreateStudentForm";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Student | User CRUD",
  description: "Create student page of User CRUD application",
};

const page = () => {
  return (
    <section className="grid h-[84dvh] place-items-center">
      <Card className="w-sm">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Create Student</CardTitle>
        </CardHeader>

        <CardContent>
          <CreateStudentForm />
        </CardContent>
      </Card>
    </section>
  );
};

export default page;
