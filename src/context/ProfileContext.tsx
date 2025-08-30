"use client";

import React, { createContext, useState, ReactNode } from 'react';

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

const initialProfile: Profile = {
  id: "directora-estefania-perez",
  name: "Estefanía Pérez Vázquez",
  title: "Directora y Fundadora",
  avatar: "https://picsum.photos/100/100?q=5",
  email: "direccion@ptic-oaxaca.org",
  phone: "+52 951 123 4567",
  dataAiHint: "woman director portrait",
  department: "Dirección General"
};

interface ProfileContextType {
  profile: Profile;
  setProfile: (profile: Profile) => void;
}

export const ProfileContext = createContext<ProfileContextType>({
  profile: initialProfile,
  setProfile: () => {},
});

export const ProfileProvider = ({ children }: { children: ReactNode }) => {
  const [profile, setProfile] = useState<Profile>(initialProfile);

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};
