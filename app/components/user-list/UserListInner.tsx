import React from "react";
import { User } from "./models/User.interface";

interface Props {
  name: string;
  users: User[];
  setName: (v: string) => void;
  addUser: () => void;
  removeUser: (id: string) => void;
}

const UserListInner = ({ name, users, setName, addUser, removeUser }: Props) => {
  return (
    <section className="w-full max-w-2xl rounded-md bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-2xl font-semibold">Lista de Usuarios</h2>

      <div className="mb-4 flex w-full items-center gap-3">
        <label className="min-w-[130px] text-sm font-medium">Nombre de usuario</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addUser()}
          className="w-full rounded-md border px-3 py-2 text-sm"
          placeholder="Escribe un nombre..."
          aria-label="Nombre de usuario"
        />
        <button
          onClick={addUser}
          className="rounded-md bg-foreground px-4 py-2 text-sm text-background"
        >
          Agregar
        </button>
      </div>

      <ul className="space-y-2">
        {users.length === 0 && (
          <li className="text-sm text-zinc-500">No hay usuarios agregados.</li>
        )}
        {users.map((u) => (
          <li
            key={u.id}
            className="flex items-center justify-between rounded-md border px-3 py-2"
          >
            <span>{u.name}</span>
            <button
              onClick={() => removeUser(u.id)}
              className="ml-4 rounded-md bg-red-50 px-3 py-1 text-sm text-red-600"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default UserListInner;
