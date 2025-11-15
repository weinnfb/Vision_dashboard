export type SwitchItem = {
    id: string;
    label: string;
    enabled: boolean
};
export type SettingsSection = {
    id: string;
    title: string;
    items: SwitchItem[]
};

export const platformSettingsMock: SettingsSection[] = [
    {
        id: "account",
        title: "Account",
        items: [
            { id: "acc_follow", label: "Email me when someone follows me", enabled: true },
            { id: "acc_reply", label: "Email me when someone answers to…", enabled: false },
            { id: "acc_mention", label: "Email me when someone mentions me", enabled: true },
        ],
    },
    {
        id: "app",
        title: "Application",
        items: [
            { id: "app_launches", label: "New launches and projects", enabled: false },
            { id: "app_updates", label: "Monthly product updates", enabled: false },
            { id: "app_newsletter", label: "Subscribe to newsletter", enabled: true },
            { id: "app_weekly", label: "Receive mails weekly", enabled: true },
        ],
    },
];
