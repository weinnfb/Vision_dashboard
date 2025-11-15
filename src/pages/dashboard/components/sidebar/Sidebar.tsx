import { styled, Typography } from "@mui/material";
import type { TabItem } from "../../../../mocks/sidebarMocks/sidebarMocks";

interface SidebarProps {
    activeTab: string;
    setActiveTab: (value: string) => void;
    tabsPages: TabItem[];
    tabsAccount: TabItem[];
}

const SideBar = ({ activeTab, setActiveTab, tabsPages, tabsAccount }: SidebarProps) => {
    const renderTab = (t: TabItem) => {
        const active = activeTab === t.value;
        return (
            <TabBtn
                type="button"
                $active={active}
                aria-current={active ? "page" : undefined}
                onClick={() => setActiveTab(t.value)}
            >
                <IconCircle $active={active}>{t.icon}</IconCircle>
                <TabLabel>{t.label}</TabLabel>
            </TabBtn>
        );
    };
    return (
        <Wrapper role="navigation" aria-label="Sidebar">
            <HeaderPart>
                <HeaderTitle>VISION UI FREE</HeaderTitle>
                <Divider />
            </HeaderPart>
            <NavScroll>
                <NavGroup>{tabsPages.map(renderTab)}</NavGroup>

                {tabsAccount.length > 0 && (
                    <>
                        <SectionCaption>ACCOUNT PAGES</SectionCaption>
                        <NavGroup>{tabsAccount.map(renderTab)}</NavGroup>
                    </>
                )}
            </NavScroll>

            <HelpCard>
                <HelpBadge>?</HelpBadge>
                <TextPart>
                    <HelpTitle>Need help?</HelpTitle>
                    <HelpText>Please check our docs</HelpText>
                </TextPart>
                <DocButton>DOCUMENTATION</DocButton>
            </HelpCard>
        </Wrapper>
    )
}
export default SideBar;

const Wrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    width: '264px',
    height: "100vh",
    position: "sticky",
    gap: 20,
    top: 0,
    padding: " 36px 16px 24px 15px",
    borderRadius: 20,
    background: "linear-gradient(180deg, #0B1020 0%, #0D1630 60%, #0B1A3A 100%)",
    borderRight: "1px solid rgba(255,255,255,0.06)",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
    overflow: "hidden",
});

const HeaderPart = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: 30,
    alignItems: 'center'
});

const HeaderTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.white,
    fontSize: 14,
    fontWeight: 700,
    letterSpacing: 2.52,
    background: 'linear - gradient(98deg, #FFF 70.67 %, rgba(117, 122, 140, 0.00) 108.55 %)',   
}));

const Divider = styled("div")({
    height: 1,
    backgroundColor: "linear-gradient(90deg, rgba(255,255,255,0.06), rgba(255,255,255,0.0))",
});

const NavScroll = styled("div")({
    flex: 1,
    overflowY: "auto",
    padding: "6px 6px 12px 6px",
});

const NavGroup = styled("div")({
    display: "flex",
    flexDirection: "column",
    gap: 12,
});

const SectionCaption = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.white,
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 1.5,
    textTransform: "uppercase",
}));

const TabBtn = styled("button")<{ $active: boolean }>(({ $active }) => ({
    display: "flex",
    alignItems: "center",
    gap: 15,
    width: "100%",
    border: "none",
    cursor: "pointer",
    borderRadius: 15,
    padding: "12px 16px",
    background: $active ? "#1A1F37" : "transparent",
    color: $active ? "#FFFFFF" : "rgba(255,255,255,0.9)",
    transition: "background .2s ease, transform .06s ease",
    outline: "none",
    ":hover": { background: $active ? "rgba(59,130,246,0.22)" : "rgba(255,255,255,0.06)" },
    ":active": { transform: "translateY(1px)" },
    boxShadow: $active ? "inset 0 0 0 1px rgba(99,102,241,0.25)" : "none",
}));

const IconCircle = styled("span")<{ $active: boolean }>(({ $active }) => ({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
    borderRadius: 12,
    background: $active
        ? "#0075FF" : "#1A1F37)",
    color: $active ? "#FFFFFF" : "#8AB6FF",
    boxShadow: $active ? "0 8px 20px rgba(2,132,199,0.28)" : "0 6px 14px rgba(30,64,175,0.22)",
}));

const TabLabel = styled(Typography)({
    fontSize: 14,
    fontWeight: 600,
    lineHeight: 1.2,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
});

const HelpCard = styled('div')({
    display: 'flex',
    position: "relative",
    borderRadius: 15,
    padding: 16,
    background:
        "radial-gradient(120% 120% at 100% 0%, rgba(2,132,199,0.40) 0%, rgba(2,132,199,0.10) 40%, transparent 60%)," +
        "radial-gradient(120% 120% at 0% 100%, rgba(79,70,229,0.35) 0%, rgba(79,70,229,0.08) 45%, transparent 60%)," +
        "linear-gradient(180deg, #0B1020 0%, #0C1230 100%)",
    boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06), 0 10px 30px rgba(0,0,0,0.35)",
    color: "#fff",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 12,
});

const TextPart = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    alignItems: 'flex-start',
    marginTop: 8
})

const HelpBadge = styled("div")({
    width: 35,
    height: 35,
    borderRadius: 12,
    background: "#fff",
    color: "#0B1020",
    display: "grid",
    placeItems: "center",
    fontWeight: 800,
    fontSize: 14,
    boxShadow: "0 6px 14px rgba(255,255,255,0.2)",
});

const HelpTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.white,
    fontSize: 14,
    fontWeight: 700,
    lineHeight: 1.4,
}));

const HelpText = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.white,
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 1,
}));

const DocButton = styled("button")({
    alignSelf: "stretch",
    border: "none",
    borderRadius: 12,
    background: "linear-gradient(180deg, rgba(255,255,255,0.16), rgba(255,255,255,0.10))",
    color: "#FFF",
    padding: "10px 14px",
    fontWeight: 700,
    letterSpacing: ".06em",
    cursor: "pointer",
    transition: "transform .06s ease, background .2s ease",
    ":hover": { background: "rgba(255,255,255,0.20)" },
    ":active": { transform: "translateY(1px)" },
});