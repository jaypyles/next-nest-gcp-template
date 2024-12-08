"use client";

import apiService from "@/app/services/api-service";
import { useState, useEffect } from "react";
import styles from "./user-table.module.css";

type User = {
  name: string;
  email: string;
  age: number;
};

export default function UserTable() {
  const [users, setUsers] = useState<User[]>([]);

  const handleCreateUser = () => {
    apiService.createUser().then((user) => {
      setUsers([...users, user]);
    });
  };

  useEffect(() => {
    apiService.getUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  return (
    <div>
      <button onClick={handleCreateUser}>Create User</button>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>Name</th>
            <th className={styles.th}>Email</th>
            <th className={styles.th}>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.name}>
              <td className={styles.td}>{user.name}</td>
              <td className={styles.td}>{user.email}</td>
              <td className={styles.td}>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
