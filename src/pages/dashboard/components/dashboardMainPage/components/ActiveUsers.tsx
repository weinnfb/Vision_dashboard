import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";
import { styled, Typography } from "@mui/material";
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import BuildRoundedIcon from '@mui/icons-material/BuildRounded';

const Card = styled("div")({
    width: "100%",
    borderRadius: 20,
    padding: 16,
    color: "#fff",
    background:
        "linear-gradient(180deg, rgba(20,42,84,0.65) 0%, rgba(9,22,44,0.85) 55%, rgba(27,68,140,0.55) 100%)",
    boxShadow: "0 18px 46px rgba(0,0,0,0.35)",
    display: "flex",
    flexDirection: "column",
    gap: 28,
});

const ChartShell = styled("div")({
    height: 222,
    background: "linear-gradient(127deg, #060C29 28.26%, rgba(4, 12, 48, 0.50) 91.2%)",
    borderRadius: 20,
    padding: 18,
});

const TextPart = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
    alignItems: 'flex-start'
})

const Title = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.white,
    fontSize: 18,
    fontWeight: 700
}));

const Rise = styled(Typography)(({ theme }) => ({
    color: theme.palette.success.main,
    fontSize: 14,
    fontWeight: 700
}));

const Sub = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[100],
    fontSize: 14,
    fontWeight: 400
}));

const SubPart = styled('div')({
    display: 'flex',
    alignItems: 'center',
    gap: 3
});

const KpiRow = styled("div")({
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    gap: 56,
});

const KpiCard = styled("div")({
    display: "flex",
    flexDirection: "column",
    gap: 7,
});

const Header = styled('div')({
    display: 'flex',
    gap: 11,
    alignItems: 'center'
})

const KpiTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[100],
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 1,
}));

const IconBox = styled("div")({
    width: 25,
    height: 25,
    borderRadius: 6,
    background: "#0075FF",
    display: "inline-flex", // можно inline-flex, чтобы вести себя как текст
    alignItems: "center",
    justifyContent: "center",
    flex: "0 0 25px",
    "& svg": { width: 12, height: 12, color: "#fff" }, // общий размер и цвет иконок
});

const KpiValue = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.white,
    fontSize: 18,
    fontWeight: 700
}));
const Progress = styled("div")({
    height: 3,
    borderRadius: 999,
    background: "#2D2E5F",
    overflow: "hidden",
});
const ProgressFill = styled("div")<{ w: number }>(({ w }) => ({
    width: `${Math.max(0, Math.min(100, w))}%`,
    height: "100%",
    background: "#0075FF",
}));

const bars = [
    { name: "Jan", v: 320 },
    { name: "Feb", v: 230 },
    { name: "Mar", v: 110 },
    { name: "Apr", v: 280 },
    { name: "May", v: 0 },
    { name: "Jun", v: 520 },
    { name: "Jul", v: 420 },
    { name: "Aug", v: 500 },
    { name: "Sep", v: 50 },
    { name: "Oct", v: 300 },
    { name: "Nov", v: 220 },
    { name: "Dec", v: 100 },
];

type KPI = {
    icon: React.ReactNode;
    label: string;
    value: string;
    progress: number;
};
const kpis: KPI[] = [
    { icon: <AccountBalanceWalletRoundedIcon />, label: "Users", value: "32,984", progress: 62 },
    { icon: <RocketLaunchRoundedIcon />, label: "Clicks", value: "2,42m", progress: 68 },
    { icon: <ShoppingCartRoundedIcon />, label: "Sales", value: "2,400$", progress: 54 },
    { icon: <BuildRoundedIcon/>, label: "Items", value: "320", progress: 36 },
];

export default function ActiveUsersCard() {

    return (
        <Card>
            <ChartShell>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={bars}
                        margin={{ top: 10, right: 16, bottom: 0, left: 0 }}
                        barSize={8}
                        barCategoryGap="35%"
                    >
                        <CartesianGrid
                            strokeDasharray="4 8"
                            vertical={false}
                            stroke="rgba(255,255,255,0.18)"
                        />
                        <XAxis
                            dataKey="name"
                            tick={{ fill: "rgba(255,255,255,0.85)", fontSize: 12 }}
                            tickLine={false}
                            axisLine={false}
                        />
                        <YAxis
                            width={36}
                            tick={{ fill: "rgba(255,255,255,0.85)", fontSize: 12 }}
                            tickLine={false}
                            axisLine={false}
                            domain={[0, 520]}
                            ticks={[0, 100, 200, 300, 400, 500]}
                        />
                        <Tooltip
                            cursor={{ fill: "rgba(255,255,255,0.06)" }}
                            contentStyle={{
                                background: "rgba(10,16,32,0.95)",
                                border: "1px solid rgba(255,255,255,0.08)",
                                borderRadius: 12,
                                color: "#fff",
                            }}
                            labelStyle={{ color: "rgba(255,255,255,0.8)" }}
                        />
                        <Bar
                            dataKey="v"
                            fill="#FFFFFF"
                            radius={[8, 8, 8, 8]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </ChartShell>

            <TextPart>
                <Title>Active Users</Title>
                <SubPart>
                    <Rise>
                        +23
                    </Rise>
                    <Sub>
                        than last week
                    </Sub>
                </SubPart>
            </TextPart>

            <KpiRow>
                {kpis.map((k) => (
                    <KpiCard key={k.label}>
                        <Header>
                            <KpiTitle>
                                <IconBox>{k.icon}</IconBox>
                                {k.label}
                            </KpiTitle>
                        </Header>
                        <KpiValue>{k.value}</KpiValue>
                        <Progress>
                            <ProgressFill w={k.progress} />
                        </Progress>
                    </KpiCard>
                ))}
            </KpiRow>
        </Card>
    );
}
