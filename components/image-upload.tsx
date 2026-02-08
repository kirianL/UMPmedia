"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Loader2, Upload, X } from "lucide-react";
import Image from "next/image";

interface ImageUploadProps {
  value?: string | null;
  onChange: (url: string) => void;
  disabled?: boolean;
}

export function ImageUpload({ value, onChange, disabled }: ImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const supabase = createClient();

  const onUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);

    try {
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("media")
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      const { data } = supabase.storage.from("media").getPublicUrl(filePath);
      onChange(data.publicUrl);
    } catch (error) {
      console.error("Upload error", error);
      alert("Error uploading image");
    } finally {
      setIsUploading(false);
    }
  };

  const onRemove = () => {
    onChange("");
  };

  return (
    <div className="flex flex-col items-start gap-4">
      {value ? (
        <div className="relative w-[200px] h-[200px] rounded-md overflow-hidden border border-zinc-200 dark:border-zinc-800">
          <Button
            onClick={onRemove}
            variant="destructive"
            size="icon"
            className="absolute top-2 right-2 z-10 h-6 w-6"
            type="button"
          >
            <X className="h-4 w-4" />
          </Button>
          <Image
            fill
            className="object-cover"
            alt="Uploaded Image"
            src={value}
          />
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <Button
            type="button"
            variant="secondary"
            disabled={disabled || isUploading}
            onClick={() => document.getElementById("file-upload")?.click()}
          >
            {isUploading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Upload className="mr-2 h-4 w-4" />
            )}
            Upload Image
          </Button>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={onUpload}
            disabled={disabled || isUploading}
          />
        </div>
      )}
    </div>
  );
}
