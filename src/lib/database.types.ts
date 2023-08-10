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
          discord_id: number | null
          discord_name: string | null
          id: number
          price_id: string | null
          stripe_customer_id: string
          subscription_id: string | null
          subscription_status: string | null
        }
        Insert: {
          created_at?: string | null
          discord_id?: number | null
          discord_name?: string | null
          id?: number
          price_id?: string | null
          stripe_customer_id: string
          subscription_id?: string | null
          subscription_status?: string | null
        }
        Update: {
          created_at?: string | null
          discord_id?: number | null
          discord_name?: string | null
          id?: number
          price_id?: string | null
          stripe_customer_id?: string
          subscription_id?: string | null
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
