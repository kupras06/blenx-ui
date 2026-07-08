import {
  Badge,
  VStack,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeaderCell,
  TableCell,
} from "@blenx-dev/core";

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
  return (
    <VStack gap="md">
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
            <TableHeaderCell>Role</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>
                <Badge palette={user.status === "active" ? "primary" : "default"}>
                  {user.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </VStack>
  );
}

export const demos = [{ name: "Default", component: TableDemo }];
