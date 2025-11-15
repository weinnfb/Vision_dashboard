export type HeaderMeta = {
    title: string;
    crumbs?: string[];
    subtitle?: string;
};

export const headerMetaByTab: Record<string, HeaderMeta> = {
    dashboard: { title: "Dashboard", crumbs: ["Pages", "Dashboard"] },
    tables: { title: "Tables", crumbs: ["Pages", "Tables"] },
    billing: { title: "Billing", crumbs: ["Pages", "Billing"] },
    rtl: { title: "RTL", crumbs: ["Pages", "RTL"] },
    profile: { title: "Profile", crumbs: ["Account Pages", "Profile"] },
};

export const defaultHeaderMeta: HeaderMeta = {
    title: "Dashboard",
    crumbs: ["Pages", "Dashboard"],
};