"use client";

import { useState } from "react";
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
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Plus, Pencil, Trash } from "lucide-react";
import { NewsForm } from "./news-form";
import { deleteNews } from "./actions";
import { useRouter } from "next/navigation";
import Image from "next/image";

export function NewsClientPage({ initialNews }: { initialNews: any[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const router = useRouter();

  const handleEdit = (item: any) => {
    setEditingItem(item);
    setIsOpen(true);
  };

  const handleAdd = () => {
    setEditingItem(null);
    setIsOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure?")) return;
    await deleteNews(id);
    router.refresh();
  };

  const onSuccess = () => {
    setIsOpen(false);
    router.refresh();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">News Management</h1>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <Button onClick={handleAdd}>
            <Plus className="mr-2 h-4 w-4" /> Create Post
          </Button>
          <SheetContent className="overflow-y-auto w-[400px] sm:w-[640px]">
            <SheetHeader>
              <SheetTitle>{editingItem ? "Edit Post" : "New Post"}</SheetTitle>
              <SheetDescription>Bilingual news content.</SheetDescription>
            </SheetHeader>
            <NewsForm
              key={editingItem?.id || "new"}
              initialData={editingItem}
              onSuccess={onSuccess}
            />
          </SheetContent>
        </Sheet>
      </div>

      <div className="rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Cover</TableHead>
              <TableHead>Title (ES)</TableHead>
              <TableHead>Title (EN)</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {initialNews.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="whitespace-nowrap">
                  {new Date(item.created_at).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  {item.cover_image && (
                    <div className="relative h-10 w-16 rounded overflow-hidden">
                      <Image
                        src={item.cover_image}
                        alt="cover"
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </TableCell>
                <TableCell className="font-medium truncate max-w-[200px]">
                  {item.title_es}
                </TableCell>
                <TableCell className="truncate max-w-[200px]">
                  {item.title_en}
                </TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${item.published ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"}`}
                  >
                    {item.published ? "Published" : "Draft"}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleEdit(item)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-red-500 hover:text-red-600"
                      onClick={() => handleDelete(item.id)}
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {initialNews.length === 0 && (
              <TableRow>
                <TableCell colSpan={6} className="h-24 text-center">
                  No news found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
