export type AuthorRow = {
    id: string;
    name: string;
    email: string;
    role: string;
    dept: string;
    status: "online" | "offline";
    employed: string;
    avatar?: string;
};

export const authorsRows: AuthorRow[] = [
    {
        id: "1",
        name: "Esthera Jackson",
        email: "esthera@simmmple.com",
        role: "Manager",
        dept: "Organization",
        status: "online",
        employed: "14/06/21",
        avatar: "/authors/author1.png",
    },
    {
        id: "2",
        name: "Alexa Liras",
        email: "alexa@simmmple.com",
        role: "Programmer",
        dept: "Developer",
        status: "offline",
        employed: "14/06/21",
        avatar: "/authors/author2.png",
    },
    {
        id: "3",
        name: "Laurent Michael",
        email: "laurent@simmmple.com",
        role: "Executive",
        dept: "Projects",
        status: "online",
        employed: "14/06/21",
        avatar: "/authors/author3.png",
    },
    {
        id: "4",
        name: "Freduardo Hill",
        email: "freduardo@simmmple.com",
        role: "Manager",
        dept: "Organization",
        status: "online",
        employed: "14/06/21",
        avatar: "/authors/author4.png",
    },
    {
        id: "5",
        name: "Daniel Thomas",
        email: "daniel@simmmple.com",
        role: "Programmer",
        dept: "Developer",
        status: "offline",
        employed: "14/06/21",
        avatar: "/authors/author5.png",
    },
    {
        id: "6",
        name: "Mark Wilson",
        email: "mark@simmmple.com",
        role: "Designer",
        dept: "UI/UX Design",
        status: "offline",
        employed: "14/06/21",
        avatar: "/authors/author6.png",
    },
];