import CreateTeacherForm from "@/components/Forms/CreateTeacherForm";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create User | User CRUD",
  description: "Create user page of User CRUD application",
};

const page = () => {
  return (
    <section className="grid h-[84dvh] place-items-center">
      <Card className="w-sm">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Create Teacher</CardTitle>
        </CardHeader>

        <CardContent>
          <CreateTeacherForm />
        </CardContent>
      </Card>
    </section>
  );
};

export default page;
