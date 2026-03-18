import { StudentGetPayload } from "../../generated/prisma/models";

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
  console.log(stuData);

  return <div>{stuData.name}</div>;
};

export default UserCard;
