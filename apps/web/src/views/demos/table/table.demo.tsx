import { Badge, VStack, Table } from "@blenx-dev/core";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: "active" | "inactive";
}

const users: User[] = [
  {
    id: "1",
    name: "Alice Johnson",
    email: "alice@example.com",
    role: "Admin",
    status: "active",
  },
  {
    id: "2",
    name: "Bob Smith",
    email: "bob@example.com",
    role: "Editor",
    status: "active",
  },
  {
    id: "3",
    name: "Carol Davis",
    email: "carol@example.com",
    role: "Viewer",
    status: "inactive",
  },
];

export function TableDemo() {
  const columns = [
    { key: "name" as keyof User, header: "Name" },
    { key: "email" as keyof User, header: "Email" },
    { key: "role" as keyof User, header: "Role" },
    {
      key: "status" as keyof User,
      header: "Status",
      cell: (row: User) => (
        <Badge variant={row.status === "active" ? "primary" : "default"}>{row.status}</Badge>
      ),
    },
  ];

  return (
    <VStack gap="md">
      <Table columnData={columns} rowData={users} rowKey="id" />
    </VStack>
  );
}

export const demos = [{ name: "Default", component: TableDemo }];
