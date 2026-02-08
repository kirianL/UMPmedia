export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      team_members: {
        Row: {
          id: string;
          name: string;
          role_es: string | null;
          role_en: string | null;
          bio_es: string | null;
          bio_en: string | null;
          specialties_es: string[] | null;
          specialties_en: string[] | null;
          photo_url: string | null;
          is_core: boolean;
          display_order: number;
          published: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          role_es?: string | null;
          role_en?: string | null;
          bio_es?: string | null;
          bio_en?: string | null;
          specialties_es?: string[] | null;
          specialties_en?: string[] | null;
          photo_url?: string | null;
          is_core?: boolean;
          display_order?: number;
          published?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          role_es?: string | null;
          role_en?: string | null;
          bio_es?: string | null;
          bio_en?: string | null;
          specialties_es?: string[] | null;
          specialties_en?: string[] | null;
          photo_url?: string | null;
          is_core?: boolean;
          display_order?: number;
          published?: boolean;
          created_at?: string;
        };
      };
      news: {
        Row: {
          id: string;
          title_es: string;
          title_en: string;
          slug_es: string;
          slug_en: string;
          excerpt_es: string | null;
          excerpt_en: string | null;
          content_es: string | null;
          content_en: string | null;
          cover_image: string | null;
          published: boolean;
          published_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title_es: string;
          title_en: string;
          slug_es: string;
          slug_en: string;
          excerpt_es?: string | null;
          excerpt_en?: string | null;
          content_es?: string | null;
          content_en?: string | null;
          cover_image?: string | null;
          published?: boolean;
          published_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title_es?: string;
          title_en?: string;
          slug_es?: string;
          slug_en?: string;
          excerpt_es?: string | null;
          excerpt_en?: string | null;
          content_es?: string | null;
          content_en?: string | null;
          cover_image?: string | null;
          published?: boolean;
          published_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      events: {
        Row: {
          id: string;
          title_es: string;
          title_en: string;
          slug_es: string;
          slug_en: string;
          description_es: string | null;
          description_en: string | null;
          event_date: string;
          location_es: string | null;
          location_en: string | null;
          cover_image: string | null;
          published: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          title_es: string;
          title_en: string;
          slug_es: string;
          slug_en: string;
          description_es?: string | null;
          description_en?: string | null;
          event_date: string;
          location_es?: string | null;
          location_en?: string | null;
          cover_image?: string | null;
          published?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          title_es?: string;
          title_en?: string;
          slug_es?: string;
          slug_en?: string;
          description_es?: string | null;
          description_en?: string | null;
          event_date?: string;
          location_es?: string | null;
          location_en?: string | null;
          cover_image?: string | null;
          published?: boolean;
          created_at?: string;
        };
      };
    };
  };
}
