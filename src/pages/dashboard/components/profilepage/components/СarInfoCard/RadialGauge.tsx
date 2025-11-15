import * as React from "react";
import { styled, Typography } from "@mui/material";
import { PieChart, Pie, Cell } from "recharts";
import BoltRoundedIcon from '@mui/icons-material/BoltRounded';

type RingGaugeProps = {
    value: number;
    size?: number;
    thickness?: number; 
    color?: string;
    trackColor?: string;
    bottomText?: string;
    showPercentSign?: boolean;
};

export default function RingGauge({
    value,
    size = 171,
    thickness = 15,
    color = "#05CD99",
    trackColor = "rgba(255,255,255,0.12)",
    bottomText = "Current load",
    showPercentSign = true,
}: RingGaugeProps) {
    const v = Math.max(0, Math.min(100, Math.round(value)));
    const data = React.useMemo(
        () => [
            { name: "value", value: v },
            { name: "rest", value: 100 - v },
        ],
        [v]
    );
    const COLORS = [color, trackColor];
    const outerR = size / 2;
    const innerR = outerR - thickness;

    return (
        <ChartArea style={{ width: size, height: size }}>
            <PieChart width={size} height={size}>
                <Pie
                    data={data}
                    dataKey="value"
                    startAngle={90}
                    endAngle={450}
                    innerRadius={innerR}
                    outerRadius={outerR}
                    paddingAngle={0}
                    cx="50%"
                    cy="50%"
                    isAnimationActive={false}
                    stroke="none"
                >
                    {data.map((_entry, i) => (
                        <Cell key={i} fill={COLORS[i]} stroke="none" />
                    ))}
                </Pie>
            </PieChart>

            <Overlay>
                <OverlayTop><BoltRoundedIcon sx={{color:'#05CD99', width: 30, height: 30}} /></OverlayTop>
                <OverlayScore>
                    {v}
                    {showPercentSign ? "%" : ""}
                </OverlayScore>
                {bottomText && <OverlayBottom>{bottomText}</OverlayBottom>}
            </Overlay>
        </ChartArea>
    );
}

/* styles */

const ChartArea = styled("div")({
    position: "relative",
    display: "inline-block",
});

const Overlay = styled("div")({
    position: "absolute",
    inset: 0,
    display: "grid",
    placeItems: "center",
    alignContent: "center",
    gap: 6,
    pointerEvents: "none",
    textAlign: "center",
});

const OverlayTop = styled(Typography)({
    fontSize: 12,
    opacity: 0.85,
});

const OverlayScore = styled(Typography)({
    fontWeight: 800,
    fontSize: 36,
    lineHeight: 1,
});

const OverlayBottom = styled(Typography)({
    fontSize: 12,
    opacity: 0.8,
});
