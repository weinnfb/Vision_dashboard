export type Member = { id: string; avatar?: string };
export type Row = {
    company: string;
    logoSrc?: string;
    budget: string;
    completion: number;
    members?: Member[];
    status?: "Working" | "Done" | "Canceled";
};

const teamFull: Member[] = [
    { id: "1", avatar: '/avatars/avatar1.png' },
    { id: "2", avatar: '/avatars/avatar2.png' },
    { id: "3", avatar: '/avatars/avatar3.png' },
    { id: "4", avatar: '/avatars/avatar4.png' },
    { id: "5", avatar: '/avatars/avatar5.png' },
];

const teamSmall: Member[] = [
    { id: "1", avatar: '/avatars/avatar1.png' },
    { id: "2", avatar: '/avatars/avatar2.png' },
];

const teamMedium: Member[] = [
    { id: "1", avatar: '/avatars/avatar1.png' },
    { id: "2", avatar: '/avatars/avatar2.png' },
    { id: "3", avatar: '/avatars/avatar3.png' },
    { id: "4", avatar: '/avatars/avatar4.png' },
];

export const rowsCompact: Row[] = [
    { company: "Chakra Soft UI Version", logoSrc: '/companies/xd.svg', budget: "$14,000", completion: 60, members: teamFull },
    { company: "Add Progress Track", logoSrc: '/companies/acana.svg', budget: "$3,000", completion: 10, members: teamSmall },
    { company: "Fix Platform Errors", logoSrc: '/companies/slack.svg', budget: "Not set", completion: 100, members: teamSmall },
    { company: "Launch our Mobile App", logoSrc: '/companies/spotify.svg', budget: "$32,000", completion: 100, members: teamMedium },
    { company: "Add the New Pricing Page", logoSrc: '/companies/jira.svg', budget: "$400", completion: 25, members: teamFull },
    { company: "Redesign New Online Shop", logoSrc: '/companies/invision.svg', budget: "$7,600", completion: 40, members: teamSmall },
];

export const rowsWide: Row[] = [
    { company: "Chakra Soft UI Version", logoSrc: '/companies/xd.svg', budget: "$14,000", completion: 60, status: "Working" },
    { company: "Add Progress Track", logoSrc: '/companies/acana.svg', budget: "$3,000", completion: 10, status: "Canceled" },
    { company: "Fix Platform Errors", logoSrc: '/companies/slack.svg', budget: "Not set", completion: 100, status: "Done" },
    { company: "Launch our Mobile App", logoSrc: '/companies/spotify.svg', budget: "$32,000", completion: 100, status: "Done" },
    { company: "Add the New Pricing Page", logoSrc: '/companies/jira.svg',   budget: "$400",    completion: 25,  status: "Working" },
  ];