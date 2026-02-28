"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox"; // need to install or use native
import { Label } from "@/components/ui/label"; // need to install or use native
import { Textarea } from "@/components/ui/textarea"; // need to install or use native
import { ImageUpload } from "@/components/image-upload";
import { upsertTeamMember } from "./actions";
import { Database } from "@/lib/supabase/types";
import { SheetFooter, SheetClose } from "@/components/ui/sheet";
import { toast } from "sonner"; // or useToast if installed

type TeamMember = Database["public"]["Tables"]["team_members"]["Row"];

interface TeamFormProps {
  initialData?: TeamMember | null;
  onSuccess: () => void;
}

export function TeamForm({ initialData, onSuccess }: TeamFormProps) {
  const [loading, setLoading] = useState(false);

  // Simple state management for form, or use react-hook-form
  // Using native form submission for simplicity with server actions,
  // but need controlled state for Arrays (specialties) and Boolean (is_core)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data: any = Object.fromEntries(formData.entries());

    // Process specialties - split by comma
    const specialties_es = (data.specialties_es as string)
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    const specialties_en = (data.specialties_en as string)
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

    const payload = {
      ...initialData, // keep existing id/created_at
      name: data.name,
      role_es: data.role_es,
      role_en: data.role_en,
      bio_es: data.bio_es,
      bio_en: data.bio_en,
      specialties_es,
      specialties_en,
      photo_url: data.photo_url,
      is_core: formData.get("is_core") === "on",
      published: formData.get("published") === "on",
      display_order: parseInt(data.display_order) || 0,
    };

    try {
      await upsertTeamMember(payload);
      onSuccess();
      alert("Saved successfully");
    } catch (error) {
      console.error(error);
      alert("Error saving");
    } finally {
      setLoading(false);
    }
  };

  // Helper state for ImageUpload
  const [imgUrl, setImgUrl] = useState(initialData?.photo_url || "");

  return (
    <form onSubmit={onSubmit} className="space-y-4 py-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Full Name</label>
        <Input
          name="name"
          defaultValue={initialData?.name}
          required
          placeholder="Juan Pérez"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Photo</label>
        <Input type="hidden" name="photo_url" value={imgUrl} />
        <ImageUpload value={imgUrl} onChange={setImgUrl} />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Role (ES)</label>
          <Input
            name="role_es"
            defaultValue={initialData?.role_es || ""}
            placeholder="Director"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Role (EN)</label>
          <Input
            name="role_en"
            defaultValue={initialData?.role_en || ""}
            placeholder="Director"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Bio (ES)</label>
          <textarea
            name="bio_es"
            className="flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            defaultValue={initialData?.bio_es || ""}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Bio (EN)</label>
          <textarea
            name="bio_en"
            className="flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            defaultValue={initialData?.bio_en || ""}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">
          Specialties (ES) - comma separated
        </label>
        <Input
          name="specialties_es"
          defaultValue={initialData?.specialties_es?.join(", ")}
          placeholder="Edición, Cámara, Guion"
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">
          Specialties (EN) - comma separated
        </label>
        <Input
          name="specialties_en"
          defaultValue={initialData?.specialties_en?.join(", ")}
          placeholder="Editing, Camera, Script"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Display Order</label>
          <Input
            type="number"
            name="display_order"
            defaultValue={initialData?.display_order || 0}
          />
        </div>
      </div>

      <div className="flex gap-6">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="is_core"
            id="is_core"
            defaultChecked={initialData?.is_core ?? false}
            className="h-4 w-4"
          />
          <label htmlFor="is_core" className="text-sm">
            Is Core Team
          </label>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="published"
            id="published"
            defaultChecked={initialData?.published ?? false}
            className="h-4 w-4"
          />
          <label htmlFor="published" className="text-sm">
            Published
          </label>
        </div>
      </div>

      <SheetFooter>
        <Button type="submit" disabled={loading}>
          {loading ? "Saving..." : "Save Member"}
        </Button>
      </SheetFooter>
    </form>
  );
}
