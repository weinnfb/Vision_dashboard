import { styled } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUserName, selectUserEmail, nameFromEmail } from "../../../../redux/store";
import KpiCard from "./components/KPICard";
import { kpiCardsMock } from "../../../../mocks/kpiCardsMocks/kpiCardsMocks";
import WelcomeCard from "./components/welcomeCard";
import SatisfactionGauge from "./components/SatisfactionGauge";
import ReferralTracking from "./components/RefferalTrackingCard";
import SalesOverviewCard from "./components/SalesOverview";
import ActiveUsers from "./components/ActiveUsers";
import ProjectsTableSimple from "../../../../components/ProjectsTable";
import { rowsCompact } from "../../../../mocks/projectTableMocks/ProjectsTAbleMocks";
import OrdersOverviewCard from "./components/OrderViewCard";
import { ordersOverviewMock } from "../../../../mocks/orderViewMocks/orderViewMocks";

const DashboardMainPage = () => {
    const reduxName = useSelector(selectUserName);
    const email = useSelector(selectUserEmail);

    const userName = reduxName ?? nameFromEmail(email) ?? "Guest";
    return (
        <Wrap>
            <CardsRow>
                {kpiCardsMock.map((card) => (
                    <KpiCard key={card.id} item={card} />
                ))}
            </CardsRow>
            <TopRow>
                <WelcomeCard userName={userName} />
                <SatisfactionGauge />
                <ReferralTracking />
            </TopRow>

            <Row2>
                <Cell><SalesOverviewCard /></Cell>
                <Cell><ActiveUsers /></Cell>
            </Row2>

            <Row1>
                <Cell><ProjectsTableSimple rows={rowsCompact} size="sm" variant="members" /></Cell>
                <Cell><OrdersOverviewCard items={ordersOverviewMock} /></Cell>
            </Row1>
        </Wrap>
    );
};

export default DashboardMainPage;

const Wrap = styled("div")({
    display: "flex",
    flexDirection: "column",
    gap: 24,
});

const CardsRow = styled("div")({
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    gap: 24,
});

const TopRow = styled("div")({
    display: "flex",
    gap: 24,
    alignItems: "stretch", // <- важно
});

const Cell = styled("div")({
    minHeight: 344,
    display: "flex",
    "& > *": {
        width: "100%",
        height: "100%",
        maxWidth: "none",
    },
});

const Row2 = styled("div")({
    display: "grid",
    gridTemplateColumns: "1.6fr 1fr ",
    gap: 24,
    alignItems: "stretch",
});

const Row1 = styled("div")({
    display: "grid",
    gridTemplateColumns: "1.8fr 1fr ",
    gap: 24,
    alignItems: "stretch",
});