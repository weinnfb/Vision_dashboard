import { useState } from "react";
import { PieChart, Pie, Cell } from "recharts";
import { styled, Typography } from "@mui/material";
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';


const Card = styled("div")({
    background: "linear-gradient(127deg, rgba(6,11,40,0.36) 12%, rgba(14,21,58,0.32) 58%, rgba(96,165,250,0.34) 100%)",
    borderRadius: 20,
    padding: '27px 25px 44px 31px',
    maxWidth: 551,
    width: "100%",
    boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
    position: "relative",
    backdropFilter: 'blur(60px)',
    minHeight: 344,
    display: "flex", 
    flexDirection: "column",
});

const HeadRow = styled("div")({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 35,
});

const Title = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.white,
    fontSize: 18,
    fontWeight: 700
}))

const MenuBtn = styled("button")({
    background: "rgba(30,41,59,0.8)",
    border: "none",
    borderRadius: 12,
    width: 37,
    height: 37,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    padding: 0,
});


const Grid = styled("div")({
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 20,
    alignItems: "center",
});

const StatCol = styled("div")({
    display: "flex",
    flexDirection: "column",
    gap: 21,
});

const StatCard = styled("div")({
    background: "linear-gradient(127deg, #060C29 28.26%, rgba(4, 12, 48, 0.50) 91.2%)",
    borderRadius: 20,
    padding: "20px 99px 29px 24px",
});

const StatLabel = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[100],
    fontSize: 14,
    fontWeight: 400
}))

const StatValue = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.white,
    fontSize: 18,
    fontWeight: 700
}))

const ChartArea = styled("div")({
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 206,
});

const Overlay = styled("div")({
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 5,
});

const OverlayTop = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[100],
    fontSize: 14,
    fontWeight: 400
}))

const OverlayScore = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.white,
    fontSize: 50,
    fontWeight: 700
}))

const OverlayBottom = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[100],
    fontSize: 14,
    fontWeight: 400
}))

export default function ReferralTracking() {
    const [score] = useState(9.3);
    const [invited] = useState(145);
    const [bonus] = useState(1465);

    const percentage = (score / 10) * 100;

    const data = [
        { name: "Score", value: percentage },
        { name: "Remaining", value: 100 - percentage },
    ];

    const COLORS = ["#10b981", "#1e293b"];

    return (
        <Card>
            <HeadRow>
                <Title>Referral Tracking</Title>
                <MenuBtn>
                    <MoreHorizOutlinedIcon sx={{ color: '#7551FF' }} />
                </MenuBtn>
            </HeadRow>

            <Grid>
                <StatCol>
                    <StatCard>
                        <StatLabel>Invited</StatLabel>
                        <StatValue>{invited} people</StatValue>
                    </StatCard>

                    <StatCard>
                        <StatLabel>Bonus</StatLabel>
                        <StatValue>{bonus.toLocaleString()}</StatValue>
                    </StatCard>
                </StatCol>

                <ChartArea>
                    <PieChart width={212} height={212}>
                        <Pie
                            data={data}
                            dataKey="value"
                            startAngle={90}
                            endAngle={450}
                            innerRadius={73}
                            outerRadius={84}
                            paddingAngle={0}
                            cx="50%"
                            cy="50%"
                        >
                            {data.map((_entry, i) => (
                                <Cell key={i} fill={COLORS[i]} strokeWidth={0} />
                            ))}
                        </Pie>
                    </PieChart>

                    <Overlay>
                        <OverlayTop>Safety</OverlayTop>
                        <OverlayScore>{score}</OverlayScore>
                        <OverlayBottom>Total Score</OverlayBottom>
                    </Overlay>
                </ChartArea>
            </Grid>
        </Card>
    );
}
