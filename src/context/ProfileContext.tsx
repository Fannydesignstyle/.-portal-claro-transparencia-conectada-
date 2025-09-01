
"use client";

import React, { createContext, useState, ReactNode, useEffect } from 'react';

export type Profile = {
  id: string;
  name: string;
  title: string;
  avatar: string;
  email: string;
  phone: string;
  dataAiHint?: string;
  department: string;
  website?: string;
};

const defaultProfile: Profile = {
  id: "directora-estefania-perez",
  name: "Estefanía Pérez Vázquez",
  title: "Directora y Fundadora",
  avatar: "https://picsum.photos/100/100?q=5",
  email: "direccion@ptic-oaxaca.org",
  phone: "+52 951 123 4567",
  dataAiHint: "woman director portrait",
  department: "Plataforma Voz Ciudadana"
};

interface ProfileContextType {
  profile: Profile;
  setProfile: (profile: Profile | ((prev: Profile) => Profile)) => void;
  isInitialized: boolean;
}

export const ProfileContext = createContext<ProfileContextType>({
  profile: defaultProfile,
  setProfile: () => {},
  isInitialized: false,
});

export const ProfileProvider = ({ children }: { children: ReactNode }) => {
  const [profile, setProfile] = useState<Profile>(defaultProfile);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    try {
      const storedProfile = localStorage.getItem('userProfile');
      if (storedProfile) {
        setProfile(JSON.parse(storedProfile));
      }
    } catch (error) {
      console.error("Failed to parse profile from localStorage", error);
    }
    setIsInitialized(true);
  }, []);

  const setProfileHandler = (newProfileData: Profile | ((prev: Profile) => Profile)) => {
    const newProfile = typeof newProfileData === 'function' ? newProfileData(profile) : newProfileData;
    setProfile(newProfile);
    try {
        localStorage.setItem('userProfile', JSON.stringify(newProfile));
    } catch (error) {
        console.error("Failed to save profile to localStorage", error);
    }
  };

  return (
    <ProfileContext.Provider value={{ profile, setProfile: setProfileHandler, isInitialized }}>
      {children}
    </ProfileContext.Provider>
  );
};
