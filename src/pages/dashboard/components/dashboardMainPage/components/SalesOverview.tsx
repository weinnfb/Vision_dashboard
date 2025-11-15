import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";
import { curveCardinal } from "d3-shape";
import { styled, Typography } from "@mui/material";

const Card = styled("div")({
    width: "100%",
    height: 445,
    borderRadius: 20,
    padding: '28px 19px 29px 21px',
    color: "#fff",
    background:
        "linear-gradient(127deg, rgba(6, 11, 40, 0.80) 0%, rgba(15, 18, 52, 0.78) 30%, rgba(25, 22, 65, 0.75) 60%, rgba(10, 14, 35, 0.71) 100%)",
    boxShadow: "0 18px 46px rgba(0,0,0,0.35)",
    display: "flex",
    flexDirection: "column",
    gap: 6,
});

const Title = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.white,
    fontSize: 18,
    fontWeight: 700
}));

const SubPart = styled('div')({
    display: 'flex',
    alignItems: 'center',
    gap: 3
});

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


const ChartWrap = styled("div")({ flex: 1, minHeight: 260 });

const data = [
    { name: "Jan", uv: 500, pv: 180 },
    { name: "Feb", uv: 220, pv: 230 },
    { name: "Mar", uv: 210, pv: 160 },
    { name: "Apr", uv: 340, pv: 260 },
    { name: "May", uv: 360, pv: 220 },
    { name: "Jun", uv: 470, pv: 240 },
    { name: "Jul", uv: 380, pv: 260 },
    { name: "Aug", uv: 300, pv: 200 },
    { name: "Sep", uv: 330, pv: 110 },
    { name: "Oct", uv: 220, pv: 160 },
    { name: "Nov", uv: 410, pv: 170 },
    { name: "Dec", uv: 430, pv: 130 },
];

const cardinal = curveCardinal.tension(0.2);

export default function SalesOverviewCard() {
    return (
        <Card>
            <Title>Sales overview</Title>
            <SubPart>
                <Rise>
                    (+5)more
                </Rise>
                <Sub>
                    in 2021
                </Sub>
            </SubPart>

            <ChartWrap>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 8, right: 12, bottom: 0, left: 0 }}>
                        <defs>
                            <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#4F7DF5" stopOpacity={0.9} />
                                <stop offset="70%" stopColor="#3767D6" stopOpacity={0.55} />
                                <stop offset="100%" stopColor="#0A1430" stopOpacity={0.0} />
                            </linearGradient>
                            <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor="#9EE3FF" />
                                <stop offset="100%" stopColor="#7CC6FF" />
                            </linearGradient>
                        </defs>

                        <CartesianGrid strokeDasharray="4 8" vertical={false} stroke="rgba(255,255,255,0.18)" />
                        <XAxis
                            dataKey="name"
                            tick={{ fill: "rgba(255,255,255,0.9)", fontSize: 12 }}
                            tickLine={false}
                            axisLine={false}
                            interval={0}
                        />
                        <YAxis
                            width={32}
                            tick={{ fill: "rgba(255,255,255,0.8)", fontSize: 12 }}
                            tickLine={false}
                            axisLine={false}
                        />
                        <Tooltip
                            cursor={{ stroke: "rgba(255,255,255,0.25)" }}
                            contentStyle={{
                                background: "rgba(10,16,32,0.9)",
                                border: "1px solid rgba(255,255,255,0.08)",
                                borderRadius: 12,
                                color: "#fff",
                            }}
                            labelStyle={{ color: "rgba(255,255,255,0.8)" }}
                        />

                        <Area
                            type={cardinal}
                            dataKey="uv"
                            stroke="url(#lineGrad)"
                            strokeWidth={2}
                            fill="url(#areaFill)"
                            dot={false}
                            activeDot={{ r: 5 }}
                        />

                        <Area
                            type="natural"
                            dataKey="pv"
                            stroke="rgba(186,236,255,0.95)"
                            strokeWidth={3}
                            fillOpacity={0}
                            dot={false}
                            activeDot={{ r: 5 }}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </ChartWrap>
        </Card>
    );
}
