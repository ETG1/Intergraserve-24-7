import { createClient } from '@supabase/supabase-js'
import { createBrowserClient, createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

// Environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Client-side Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Client component client (for use in client components)
export const createSupabaseClient = () => {
  return createBrowserClient(supabaseUrl, supabaseAnonKey)
}

// Server component client (for use in server components)
export const createSupabaseServerClient = () => {
  const cookieStore = cookies()
  return createServerClient(
    supabaseUrl,
    supabaseAnonKey,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
      },
    }
  )
}

// Database types (will be generated from Supabase)
export interface Database {
  public: {
    Tables: {
      courses: {
        Row: {
          id: string
          name: string
          category: string
          duration: string
          price: number
          description: string
          features: string[]
          is_popular: boolean
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          category: string
          duration: string
          price: number
          description: string
          features: string[]
          is_popular?: boolean
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          category?: string
          duration?: string
          price?: number
          description?: string
          features?: string[]
          is_popular?: boolean
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      enrollments: {
        Row: {
          id: string
          user_id: string
          course_id: string
          status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
          payment_status: 'pending' | 'paid' | 'failed' | 'refunded'
          enrollment_date: string
          completion_date: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          course_id: string
          status?: 'pending' | 'confirmed' | 'completed' | 'cancelled'
          payment_status?: 'pending' | 'paid' | 'failed' | 'refunded'
          enrollment_date?: string
          completion_date?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          course_id?: string
          status?: 'pending' | 'confirmed' | 'completed' | 'cancelled'
          payment_status?: 'pending' | 'paid' | 'failed' | 'refunded'
          enrollment_date?: string
          completion_date?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      contact_submissions: {
        Row: {
          id: string
          name: string
          email: string
          phone: string | null
          subject: string
          message: string
          status: 'new' | 'read' | 'responded' | 'closed'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          phone?: string | null
          subject: string
          message: string
          status?: 'new' | 'read' | 'responded' | 'closed'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          phone?: string | null
          subject?: string
          message?: string
          status?: 'new' | 'read' | 'responded' | 'closed'
          created_at?: string
          updated_at?: string
        }
      }
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          phone: string | null
          avatar_url: string | null
          role: 'student' | 'instructor' | 'admin'
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          phone?: string | null
          avatar_url?: string | null
          role?: 'student' | 'instructor' | 'admin'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          phone?: string | null
          avatar_url?: string | null
          role?: 'student' | 'instructor' | 'admin'
          created_at?: string
          updated_at?: string
        }
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
  }
}
