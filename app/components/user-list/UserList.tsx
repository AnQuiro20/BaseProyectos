"use client";

import UserListInner from "./UserListInner";
import { useUserListViewModel } from "./hooks/useUserListViewModel";

export default function UserList() {
  const vm = useUserListViewModel();
  return <UserListInner {...vm} />;
}
