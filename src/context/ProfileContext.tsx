
"use client";

import { createContext, useState, useEffect } from "react";

export interface Profile {
  id: string;
  name: string;
  title: string;
  avatar: string;
  email: string;
  phone: string;
  dataAiHint: string;
  department: string;
  website?: string;
}

interface ProfileContextType {
  profile: Profile;
  setProfile: (profile: Profile) => void;
  isInitialized: boolean;
}

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

export const ProfileContext = createContext<ProfileContextType>({
    profile: initialProfile,
    setProfile: () => {},
    isInitialized: false,
});

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
