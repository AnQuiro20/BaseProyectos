"use client";

import { useEffect, useState } from "react";
import { User } from "../models/User.interface";

export const useUserListViewModel = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState<User[]>(() => {
    try {
      const raw = localStorage.getItem("user_list_v1");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("user_list_v1", JSON.stringify(users));
    } catch {}
  }, [users]);

  function addUser() {
    const trimmed = name.trim();
    if (!trimmed) return;
    setUsers((prev) => [...prev, { id: String(Date.now()), name: trimmed }]);
    setName("");
  }

  function removeUser(id: string) {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  }

  return {
    name,
    setName,
    users,
    addUser,
    removeUser,
  } as const;
};
