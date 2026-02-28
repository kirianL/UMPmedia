import { getAdminTeamMembers } from "./actions";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Plus, Edit } from "lucide-react";
import { TeamForm } from "./team-form";
import Image from "next/image";

// Use a Client Component wrapper for the sheet state if needed,
// or simpler: just create a client component page that fetches data?
// Or server page passing data to client table?
// Let's make the whole page content a client component for interactivity (Sheet state),
// but fetch initial data on server.

import { TeamClientPage } from "./client-page";

export default async function AdminTeamPage() {
  const members = await getAdminTeamMembers();
  return <TeamClientPage initialMembers={members} />;
}
