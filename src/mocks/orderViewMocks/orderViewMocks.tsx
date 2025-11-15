import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import HtmlRoundedIcon from "@mui/icons-material/HtmlRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import LockOpenIcon from '@mui/icons-material/LockOpen';

export type OrderItem = {
    id: string;
    title: string;
    date: string;
    time: string;
    accent?: string;
    icon?: React.ReactNode;
    iconSrc?: string;
};

export const ordersOverviewMock: OrderItem[] = [
    {
        id: "1",
        title: "$2400, Design changes",
        date: "22 DEC",
        time: "7:20 PM",
        accent: "#60A5FA",
        icon: <NotificationsRoundedIcon />,
    },
    {
        id: "2",
        title: "New order #4219423",
        date: "21 DEC",
        time: "11:21 PM",
        accent: "#F97316",
        icon: <HtmlRoundedIcon />,
    },
    {
        id: "3",
        title: "Server Payments for April",
        date: "21 DEC",
        time: "9:28 PM",
        accent: "#7DD3FC",
        icon: <ShoppingCartRoundedIcon />,
    },
    {
        id: "4",
        title: "New card added for order #3210145",
        date: "20 DEC",
        time: "3:52 PM",
        accent: "#F59E0B",
        icon: <CreditCardRoundedIcon />,
    },
    {
        id: "5",
        title: "Unlock packages for Development",
        date: "19 DEC",
        time: "11:35 PM",
        accent: "#93C5FD",
        icon: <LockOpenIcon />,
    },
    {
        id: "6",
        title: "New order #9851258",
        date: "18 DEC",
        time: "4:41 PM",
        accent: "#F472B6",
        iconSrc: "/companies/xd.svg",
    },
];
