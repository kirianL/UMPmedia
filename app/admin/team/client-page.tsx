"use client";

import { useState, useEffect } from "react";
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
import { Plus, Pencil, Trash } from "lucide-react";
import { TeamForm } from "./team-form";
import { deleteTeamMember } from "./actions";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function TeamClientPage({ initialMembers }: { initialMembers: any[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [editingMember, setEditingMember] = useState<any>(null);
  const router = useRouter();

  const handleEdit = (member: any) => {
    setEditingMember(member);
    setIsOpen(true);
  };

  const handleAdd = () => {
    setEditingMember(null);
    setIsOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure?")) return;
    await deleteTeamMember(id);
    router.refresh();
  };

  const onScanSuccess = () => {
    setIsOpen(false);
    router.refresh();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Team Management</h1>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <Button onClick={handleAdd}>
            <Plus className="mr-2 h-4 w-4" /> Add Member
          </Button>
          <SheetContent className="overflow-y-auto w-[400px] sm:w-[540px]">
            <SheetHeader>
              <SheetTitle>
                {editingMember ? "Edit Member" : "Add New Member"}
              </SheetTitle>
              <SheetDescription>
                Make changes to the team member profile here.
              </SheetDescription>
            </SheetHeader>
            {/* Pass key to reset form on new member */}
            <TeamForm
              key={editingMember?.id || "new"}
              initialData={editingMember}
              onSuccess={onScanSuccess}
            />
          </SheetContent>
        </Sheet>
      </div>

      <div className="rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order</TableHead>
              <TableHead>Photo</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Role (ES)</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {initialMembers.map((member) => (
              <TableRow key={member.id}>
                <TableCell>{member.display_order}</TableCell>
                <TableCell>
                  {member.photo_url && (
                    <div className="relative h-10 w-10 rounded-full overflow-hidden">
                      <Image
                        src={member.photo_url}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </TableCell>
                <TableCell className="font-medium">{member.name}</TableCell>
                <TableCell>{member.role_es}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${member.published ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"}`}
                  >
                    {member.published ? "Published" : "Draft"}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleEdit(member)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-red-500 hover:text-red-600"
                      onClick={() => handleDelete(member.id)}
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {initialMembers.length === 0 && (
              <TableRow>
                <TableCell colSpan={6} className="h-24 text-center">
                  No members found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
