import { styled, Typography } from "@mui/material";
import RadialGauge from "./RadialGauge";
import { StatTileChart, StatTileIcon } from "./StatTileBase";
import type { StatTileChart as TChart, StatTileIcon as TIcon } from "../../../../../../mocks/carInfoMocks/carInfoMocks";

type Props = {
    helloName: string;
    batteryPct: number;
    etaMinutes: number;
    tiles: Array<TIcon | TChart>;
};

const fmtEta = (m: number) =>
    `${Math.floor(m / 60)}h ${String(m % 60).padStart(2, "0")} min`;

export default function CarInfoCard({ helloName, batteryPct, etaMinutes, tiles }: Props) {
    return (
        <Card>
            <Header>
                <Title>Car Informations</Title>
                <Sub>Hello, {helloName}! Your Car is ready.</Sub>
            </Header>

            <Grid>
                <LeftCol>
                    <RadialGauge value={batteryPct} />
                    <EtaBlock>
                        <EtaBig>{fmtEta(etaMinutes)}</EtaBig>
                        <EtaSmall>Time to full charge</EtaSmall>
                    </EtaBlock>
                </LeftCol>

                <RightCol>
                    {tiles.map(t =>
                        t.kind === "icon" ? (
                            <StatTileIcon key={t.id} title={t.title} value={t.value} icon={t.iconName} />
                        ) : (
                            <StatTileChart key={t.id} title={t.title} value={t.value} color={t.color} series={t.series} />
                        )
                    )}
                </RightCol>
            </Grid>
        </Card>
    );
}


const Card = styled("section")({
    width: "100%",
    height: 'var(--card-h)',
    minHeight: 0,
    borderRadius: 20,
    padding: "28px 22px 32px",
    color: "#fff",
    background:
        "linear-gradient(180deg, rgba(16,30,60,0.78) 0%, rgba(9,20,44,0.92) 55%, rgba(27,68,140,0.55) 100%)",
    boxShadow: "0 18px 46px rgba(0,0,0,0.35)",
    display: "flex",
    flexDirection: "column",
    gap: 24,
});

const Header = styled("div")({
    display: "flex",
    flexDirection: "column",
    gap: 6,
});

const Title = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.white,
    fontWeight: 800,
    fontSize: 22,
}));

const Sub = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.white,
    fontSize: 16,
}));

const Grid = styled("div")({
    display: "grid",
    gridTemplateColumns: "minmax(260px, 460px) 1fr",
    gap: 28,
    alignItems: "start",
});

const LeftCol = styled("div")({
    display: "flex",
    flexDirection: "column",
    gap: 16,
    alignItems: 'center'
});

const RightCol = styled("div")({
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(260px, 1fr))",
    gap: 24,
});

const EtaBlock = styled("div")({
    display: "flex",
    flexDirection: "column",
    gap: 2,
});

const EtaBig = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.white,
    fontWeight: 800,
    fontSize: 22,
}));

const EtaSmall = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[100],
    fontSize: 14,
}));
