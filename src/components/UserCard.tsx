import { StudentGetPayload } from "../../generated/prisma/models";
import { Card, CardContent, CardHeader, CardTitle } from "./shadcnui/card";

type UserCardProps = {
  stuData: StudentGetPayload<{
    select: {
      id: true;
      name: true;
      email: true;
      gender: true;
      teacher: {
        select: {
          name: true;
          subject: true;
        };
      };
    };
  }>;
};

const UserCard = ({ stuData }: UserCardProps) => {
  // console.log(stuData);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center text-2xl">{stuData.name}</CardTitle>
      </CardHeader>

      <CardContent className="grid grid-cols-4 gap-4">
        <div className="col-span-1">Email</div>
        <div className="col-span-3">{stuData.email}</div>
        <div className="col-span-1">Gender</div>
        <div className="col-span-3">{stuData.gender}</div>
        <div className="col-span-1">Teacher</div>
        <div className="col-span-3">
          {stuData.teacher.name} ({stuData.teacher.subject})
        </div>
      </CardContent>
    </Card>
  );
};

export default UserCard;
