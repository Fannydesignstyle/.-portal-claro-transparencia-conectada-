
"use client";

import { createContext, useState, useEffect } from "react";

/**
 * Profile interface representing a user profile in the system
 */
export interface Profile {
  /** Unique identifier for the profile */
  id: string;
  /** Full name of the profile owner */
  name: string;
  /** Job title or position */
  title: string;
  /** URL to the profile avatar image */
  avatar: string;
  /** Email address */
  email: string;
  /** Phone number */
  phone: string;
  /** AI hint for generating profile images */
  dataAiHint: string;
  /** Department or organization */
  department: string;
  /** Optional website URL */
  website?: string;
}

/**
 * Profile context type definition
 */
interface ProfileContextType {
  /** Current profile data */
  profile: Profile;
  /** Function to update profile data */
  setProfile: (profile: Profile) => void;
  /** Indicates if the profile has been initialized */
  isInitialized: boolean;
}

/**
 * Initial profile data with default values
 */
const initialProfile: Profile = {
  id: "directora-estefania-perez",
  name: "Estefanía Pérez Vázquez",
  title: "Directora de la Plataforma",
  avatar: "https://picsum.photos/seed/director/100/100",
  email: "estefania.perez@plataforma.oaxaca.gob.mx",
  phone: "+52 951 123 4567",
  dataAiHint: "woman director portrait",
  department: "Dirección General"
};

/**
 * React Context for managing user profile state across the application
 * 
 * This context provides a way to share profile data between components
 * without having to pass props down manually at every level.
 */
export const ProfileContext = createContext<ProfileContextType>({
    profile: initialProfile,
    setProfile: () => {},
    isInitialized: false,
});

/**
 * Profile Provider component that wraps the application and provides
 * profile state management functionality
 * 
 * @param children - Child components that will have access to the profile context
 */
export const ProfileProvider = ({ children }: { children: React.ReactNode }) => {
  const [profile, setProfile] = useState<Profile>(initialProfile);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    try {
        const storedProfile = localStorage.getItem("userProfile");
        if (storedProfile) {
            setProfile(JSON.parse(storedProfile));
        }
    } catch (e) {
        console.error("Failed to load profile from localStorage", e);
    } finally {
        setIsInitialized(true);
    }
  }, []);

  /**
   * Updates the profile state and persists it to localStorage
   * @param newProfile - The new profile data to set
   */
  const handleSetProfile = (newProfile: Profile) => {
    setProfile(newProfile);
    try {
        localStorage.setItem("userProfile", JSON.stringify(newProfile));
    } catch(e) {
        console.error("Failed to save profile to localStorage", e);
    }
  }

  const value = {
    profile,
    setProfile: handleSetProfile,
    isInitialized,
  };

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
};
