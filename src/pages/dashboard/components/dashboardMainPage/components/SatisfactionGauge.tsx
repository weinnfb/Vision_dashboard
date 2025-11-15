import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { styled, Typography } from "@mui/material";
import TagFacesOutlinedIcon from '@mui/icons-material/TagFacesOutlined';

export default function SatisfactionRate() {
    const [satisfaction] = useState(95);

    const data = [
        { name: "Satisfied", value: satisfaction },
        { name: "Remaining", value: 100 - satisfaction },
    ];

    const COLORS = ["#3b82f6", "#1e293b"];


    return (
        <Card>
            <Header>
                <Title>Satisfaction Rate</Title>
                <SubTitle>From all projects</SubTitle>
            </Header>

            <ChartWrap>
                <ChartBox>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                dataKey="value"
                                cx="50%"
                                cy="50%"
                                startAngle={90}
                                endAngle={450}
                                innerRadius="73%"
                                outerRadius="88%"
                                paddingAngle={0}
                                strokeLinecap="round"
                                stroke="none"
                            >
                                {data.map((_entry, index) => (
                                    <Cell key={index} fill={COLORS[index]} strokeWidth={0} strokeLinecap="round" />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>

                    <CenterIconWrap>
                        <CenterBadge>
                            <TagFacesOutlinedIcon sx={{ color: '#FFFF' }} />
                        </CenterBadge>
                    </CenterIconWrap>

                    <BottomWrap>
                        <BottomBar>
                            <SideLeft>0%</SideLeft>

                            <PercentCol>
                                <BigPercent>{satisfaction}%</BigPercent>
                                <SmallNote>Based on likes</SmallNote>
                            </PercentCol>

                            <SideRight>100%</SideRight>
                        </BottomBar>
                    </BottomWrap>
                </ChartBox>
            </ChartWrap>
        </Card>
    );
}

const Card = styled("div")({
    background: "linear-gradient(127deg, rgba(6,11,40,0.36) 12%, rgba(14,21,58,0.32) 58%, rgba(96,165,250,0.34) 100%)",
    borderRadius: 20,
    padding: 27,
    maxWidth: 350,
    width: "100%",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
    minHeight: 344,
    display: "flex",
    flexDirection: "column",
});

const Header = styled("div")({
    marginBottom: 15,
});

const Title = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.white,
    fontSize: 18,
    fontWeight: 700
}))

const SubTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[100],
    fontSize: 14,
    fontWeight: 400
}))

const ChartWrap = styled("div")({
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
});

const ChartBox = styled("div")({
    position: "relative",
    width: "100%",
    maxWidth: 220,
    aspectRatio: "1 / 1",
});

const CenterIconWrap = styled("div")({
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
});

const CenterBadge = styled("div")({
    background: "#0075FF",
    borderRadius: "50%",
    width: 48,
    height: 48,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)",
});

const BottomWrap = styled("div")({
    position: "absolute",
    left: "50%",
    bottom: 15,
    transform: "translateX(-50%)",
    width: "100%",
    maxWidth: 293,
});

const BottomBar = styled("div")({
    background: "rgba(15, 23, 42, 0.95)",
    borderRadius: 20,
    height: 82,
    backdropFilter: "blur(10px)",
    boxShadow: "linear-gradient(127deg, rgba(6, 11, 40, 0.74) 28.26%, rgba(10, 14, 35, 0.71) 91.2%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "17px 15px 20px 20px ",
    position: "relative",
});

const SideLabel = styled("span")({
    color: "#A0AEC0",
    fontSize: 12,
    fontWeight: 400,
    position: "absolute",
});

const SideLeft = styled(SideLabel)({
    left: 25,
});

const SideRight = styled(SideLabel)({
    right: 15,
});

const PercentCol = styled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 5,
});

const BigPercent = styled("div")({
    fontSize: 28,
    fontWeight: 700,
    color: "#fff",
    lineHeight: 1,
});

const SmallNote = styled("div")({
    fontSize: 12,
    color: "#A0AEC0",
});