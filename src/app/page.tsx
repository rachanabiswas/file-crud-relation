import UserCard from "@/components/UserCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Starter Fullstack",
  description: "Production grade Fullstack Next.js starter template",
};

const page = () => {
  return (
    <section className="grid grid-cols-1 place-items-center gap-4 lg:grid-cols-2 xl:grid-cols-3">
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
    </section>
  );
};

export default page;
