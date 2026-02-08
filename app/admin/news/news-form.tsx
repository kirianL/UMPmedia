"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ImageUpload } from "@/components/image-upload";
import { upsertNews } from "./actions";
import { Database } from "@/lib/supabase/types";
import { SheetFooter } from "@/components/ui/sheet";
import { toast } from "sonner";

type NewsItem = Database["public"]["Tables"]["news"]["Row"];

interface NewsFormProps {
  initialData?: NewsItem | null;
  onSuccess: () => void;
}

export function NewsForm({ initialData, onSuccess }: NewsFormProps) {
  const [loading, setLoading] = useState(false);
  const [imgUrl, setImgUrl] = useState(initialData?.cover_image || "");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data: any = Object.fromEntries(formData.entries());

    const payload = {
      ...initialData,
      title_es: data.title_es,
      title_en: data.title_en,
      slug_es: data.slug_es, // Optional, can be empty for auto-gen
      slug_en: data.slug_en,
      excerpt_es: data.excerpt_es,
      excerpt_en: data.excerpt_en,
      content_es: data.content_es,
      content_en: data.content_en,
      cover_image: data.cover_image,
      published: formData.get("published") === "on",
      published_at: data.published_at || null,
    };

    try {
      await upsertNews(payload);
      onSuccess();
      alert("Saved successfully");
    } catch (error) {
      console.error(error);
      alert("Error saving");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4 py-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Cover Image</label>
        <Input type="hidden" name="cover_image" value={imgUrl} />
        <ImageUpload value={imgUrl} onChange={setImgUrl} />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Title (ES)</label>
          <Input
            name="title_es"
            defaultValue={initialData?.title_es}
            required
            placeholder="Título Noticia"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Title (EN)</label>
          <Input
            name="title_en"
            defaultValue={initialData?.title_en}
            required
            placeholder="News Title"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Slug (ES) - Optional</label>
          <Input
            name="slug_es"
            defaultValue={initialData?.slug_es}
            placeholder="Auto-generated"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Slug (EN) - Optional</label>
          <Input
            name="slug_en"
            defaultValue={initialData?.slug_en}
            placeholder="Auto-generated"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Excerpt (ES)</label>
          <Textarea
            name="excerpt_es"
            defaultValue={initialData?.excerpt_es || ""}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Excerpt (EN)</label>
          <Textarea
            name="excerpt_en"
            defaultValue={initialData?.excerpt_en || ""}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">
          Content (ES) - Markdown/HTML
        </label>
        <Textarea
          name="content_es"
          className="h-32"
          defaultValue={initialData?.content_es || ""}
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">
          Content (EN) - Markdown/HTML
        </label>
        <Textarea
          name="content_en"
          className="h-32"
          defaultValue={initialData?.content_en || ""}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Publish Date</label>
          <Input
            type="datetime-local"
            name="published_at"
            defaultValue={
              initialData?.published_at
                ? new Date(initialData.published_at).toISOString().slice(0, 16)
                : ""
            }
          />
        </div>
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

      <SheetFooter>
        <Button type="submit" disabled={loading}>
          {loading ? "Saving..." : "Save News"}
        </Button>
      </SheetFooter>
    </form>
  );
}
