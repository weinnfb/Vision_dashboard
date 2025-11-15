import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import EqualizerRoundedIcon from '@mui/icons-material/EqualizerRounded';
import PaymentRoundedIcon from '@mui/icons-material/PaymentRounded';
import BuildRoundedIcon from '@mui/icons-material/BuildRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import type { ReactNode } from 'react';

export type TabItem = {
    value: string;
    label: string;
    icon: ReactNode;
};

export const sidebarPages: TabItem[] = [
    { value: "dashboard", label: "Dashboard", icon: <HomeRoundedIcon fontSize="small" /> },
    { value: "tables", label: "Tables", icon: <EqualizerRoundedIcon fontSize="small" /> },
    { value: "billing", label: "Billing", icon: <PaymentRoundedIcon fontSize="small" /> },
    { value: "rtl", label: "RTL", icon: <BuildRoundedIcon fontSize="small" /> },
];

export const sidebarAccount: TabItem[] = [
    { value: "profile", label: "Profile", icon: <PersonRoundedIcon fontSize="small" /> },
];