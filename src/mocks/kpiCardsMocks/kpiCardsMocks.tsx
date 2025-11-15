import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import PublicRoundedIcon from '@mui/icons-material/PublicRounded';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import type { ReactNode } from 'react';

export type Trend = "up" | "down";

export type KpiCardItem = {
    id: string;
    title: string;
    value: string;
    change: string;
    trend: Trend;
    icon: ReactNode;
};

export const kpiCardsMock: KpiCardItem[] = [
    {
        id: "money",
        title: "Today's Money",
        value: "$53,000",
        change: "+55%",
        trend: "up",
        icon: <AccountBalanceWalletRoundedIcon />,
    },
    {
        id: "users",
        title: "Today's Users",
        value: "2,300",
        change: "+5%",
        trend: "up",
        icon: <PublicRoundedIcon />,
    },
    {
        id: "clients",
        title: "New Clients",
        value: "+3,052",
        change: "-14%",
        trend: "down",
        icon: <DescriptionOutlinedIcon />,
    },
    {
        id: "sales",
        title: "Total Sales",
        value: "$173,000",
        change: "+8%",
        trend: "up",
        icon: <ShoppingCartOutlinedIcon />,
    },
];
