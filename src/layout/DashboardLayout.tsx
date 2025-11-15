import type { ReactNode } from "react";
import { styled } from "@mui/material";
import SideBar from "../pages/dashboard/components/sidebar/Sidebar";
import Header from "../pages/dashboard/components/header/Header";
import type { TabItem } from "../mocks/sidebarMocks/sidebarMocks";
import type { HeaderMeta } from "../mocks/headerMocks/HeaderMocks";

interface LayoutProps {
    children: ReactNode;
    activeTab: string;
    setActiveTab: (value: string) => void;
    tabsPages: TabItem[];
    tabsAccount: TabItem[];
    headerMap: Record<string, HeaderMeta>;
    userName?: string | null;
}

export default function DashboardLayout({
    children,
    activeTab,
    setActiveTab,
    tabsPages,
    tabsAccount,
    headerMap,
    userName = null,
}: LayoutProps) {
    return (
        <Wrapper>
            <SidebarShell>
                <SideBar
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    tabsPages={tabsPages}
                    tabsAccount={tabsAccount}
                />
            </SidebarShell>

            <ContentShell>
                <Header
                    activeTab={activeTab}
                    headerMap={headerMap}
                    userName={userName}
                    inSignInClick={() => setActiveTab("signin")}
                    onSettingsClick={() => console.log("open settings")}
                />

                <MainScroll>
                    <MainContainer>{children}</MainContainer>
                </MainScroll>
            </ContentShell>
        </Wrapper>
    );
}

const Wrapper = styled("div")({
    display: "flex",
    minHeight: "100vh",
    width: "100%",
    overflow: "hidden",
    background: "linear-gradient(180deg, #0A1024 0%, #0D1732 60%, #0B1B3D 100%)",
});

const SidebarShell = styled("div")({
    width: 264,
    background: "transparent",
    position: "sticky",
    top: 0,
    height: "100vh",
    overflow: "hidden",
});

const ContentShell = styled("div")({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    overflow: "hidden",
});

const MainScroll = styled("div")({
    flex: 1,
    overflowY: "auto"
});
const MainContainer = styled("div")({
    // maxWidth: 1160,
    margin: "0 auto",
    padding: 24
});