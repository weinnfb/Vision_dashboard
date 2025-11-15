export type Member = { id: string | number; avatarUrl?: string };

export type ProjectCardData = {
    id: string | number;
    tag: string;
    title: string;
    description: string;
    imageUrl: string;
    members: Member[];
    cta?: { href?: string; label?: string };
};

export const projects: ProjectCardData[] = [
    {
        id: 1,
        tag: "Project #1",
        title: "Modern",
        description: "As Uber works through a huge amount of internal management turmoil",
        imageUrl: "/images/project1.png",
        members: [
            { id: 1, avatarUrl: "/avatars/avatar1.png" },
            { id: 2, avatarUrl: "/avatars/avatar2.png   " },
            { id: 3, avatarUrl: "/avatars/avatar3.png" },
            { id: 4, avatarUrl: "/avatars/avatar4.png" },

        ],
        cta: { href: "#", label: "View all" },
    },
    {
        id: 2,
        tag: "Project #2",
        title: "Scandinavian",
        description: "Music is something that every person has his or her own specific opinion about.",
        imageUrl: "/images/project2.png",
        members: [
            { id: 1, avatarUrl: "/avatars/avatar1.png" },
            { id: 2, avatarUrl: "/avatars/avatar2.png" },
            { id: 3, avatarUrl: "/avatars/avatar3.png" },
        ],
        cta: { href: "#", label: "View all" },
    },
    {
        id: 3,
        tag: "Project #3",
        title: "Minimalist",
        description: "Different people have different taste, and various types of music.",
        imageUrl: "/images/project3.png",
        members: [
            { id: 1, avatarUrl: "/avatars/avatar1.png" },
            { id: 2, avatarUrl: "/avatars/avatar2.png   " },
            { id: 3, avatarUrl: "/avatars/avatar3.png" },
            { id: 4, avatarUrl: "/avatars/avatar4.png" },
        ],
        cta: { href: "#", label: "View all" },
    },

];
