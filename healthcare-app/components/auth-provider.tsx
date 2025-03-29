"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"

type Role = "public" | "patient" | "staff"

interface User {
  id: string
  name: string
  email: string
  role: Role
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  switchRole: (role: Role) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for saved user in localStorage
    const savedUser = localStorage.getItem("user")
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      // Mock login - in a real app, this would be an API call
      const mockUsers: Record<string, User> = {
        "patient@example.com": {
          id: "1",
          name: "John Doe",
          email: "patient@example.com",
          role: "patient",
        },
        "staff@example.com": {
          id: "2",
          name: "Dr. Jane Smith",
          email: "staff@example.com",
          role: "staff",
        },
      }

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500))

      const user = mockUsers[email]
      if (!user || password !== "password") {
        throw new Error("Invalid credentials")
      }

      setUser(user)
      localStorage.setItem("user", JSON.stringify(user))
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  const switchRole = (role: Role) => {
    if (!user) return
    const updatedUser = { ...user, role }
    setUser(updatedUser)
    localStorage.setItem("user", JSON.stringify(updatedUser))
  }

  return <AuthContext.Provider value={{ user, isLoading, login, logout, switchRole }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

