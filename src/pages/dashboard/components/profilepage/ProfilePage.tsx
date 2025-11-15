import * as React from "react";
import { styled } from "@mui/material";
import { useSelector } from "react-redux";

import ProfileTopBar from "./components/ProfileTopCard";
import ProfileWelcomeCard from "./components/ProfileWelcomeCard";
import { selectUserName, selectUserEmail } from "../../../../redux/store";
import CarInfoCard from "./components/СarInfoCard/CarInfo";
import { carInfoMocks } from "../../../../mocks/carInfoMocks/carInfoMocks";
import ProfileInfoCard from "./components/ProfileInfo";
import PlatformSettingsCard from "./components/platformSettings/platformSettingCard";
import ProjectsSection from "./components/projectCard/projectSection";

const nameFromEmail = (e?: string | null) =>
    e ? e.split("@")[0].replace(/[._-]+/g, " ").replace(/\b\w/g, s => s.toUpperCase()) : null;
const CARD_H = 420

export default function ProfilePage() {
    const [tab, setTab] = React.useState<"overview" | "teams" | "projects">("overview");
    const reduxName = useSelector(selectUserName);
    const email = useSelector(selectUserEmail);
    const userName = reduxName ?? nameFromEmail(email) ?? "Guest";
    const { batteryPct, etaMinutes, tiles } = carInfoMocks;;
    return (
        <Wrap>
            <ProfileTopBar active={tab} onTabChange={setTab} />

            <Row>
                <ProfileWelcomeCard userName={userName} />
                <CarInfoCard
                    helloName={userName}
                    batteryPct={batteryPct}
                    etaMinutes={etaMinutes}
                    tiles={tiles}
                />
                <ProfileInfoCard />
            </Row>

            <Row2>
                <PlatformSettingsCard />
                <ProjectsSection />
            </Row2>
        </Wrap>
    );
}

const Wrap = styled("div")({
    display: "flex",
    flexDirection: "column",
    gap: 24,
});

const Row = styled('div')({
    display: 'grid',
    gridTemplateColumns: '1.3fr 1.4fr 1.3fr',
    gap: 24,
    alignItems: 'stretch',
    '--card-h': `${CARD_H}px`,
});

const Row2 = styled('div')({
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    gap: 24,
    alignItems: 'stretch',
});