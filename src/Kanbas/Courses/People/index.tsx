import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { findUsersForCourse } from "../client";
import Table from "./Table";

export default function People() {
  const { cid } = useParams(); // Get course ID from route params
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      if (cid) {
        const enrolledUsers = await findUsersForCourse(cid);
        setUsers(enrolledUsers);
      }
    };

    fetchUsers();
  }, [cid]);

  return (
    <div>
      <h2>Enrolled Users</h2>
      <Table users={users} />
    </div>
  );
}
