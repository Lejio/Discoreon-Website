export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      test_user: {
        Row: {
          created_at: string | null
          email: string | null
          id: number
          name: string | null
          price: string | null
          stripe_customer_id: string | null
          subscription_status: string | null
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          id?: number
          name?: string | null
          price?: string | null
          stripe_customer_id?: string | null
          subscription_status?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string | null
          id?: number
          name?: string | null
          price?: string | null
          stripe_customer_id?: string | null
          subscription_status?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}


// https://supabase.com/docs/reference/javascript/typescript-support