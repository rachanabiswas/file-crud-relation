import UserCard from "@/components/UserCard";
import prisma from "@/lib/database/dbClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Starter Fullstack",
  description: "Production grade Fullstack Next.js starter template",
};

const page = async () => {
  const students = await prisma.student.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      gender: true,
      teacher: {
        select: {
          name: true,
          subject: true,
        },
      },
    },
  });

  return (
    <section className="grid grid-cols-1 place-items-center gap-4 lg:grid-cols-2 xl:grid-cols-3">
      {students.map((item) => (
        <UserCard
          key={item.id}
          stuData={item}
        />
      ))}
    </section>
  );
};

export default page;
