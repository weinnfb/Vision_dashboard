import * as React from "react";
import { styled, Typography } from "@mui/material";
import ElectricCarRoundedIcon from "@mui/icons-material/ElectricCarRounded";
import ElectricBoltRoundedIcon from "@mui/icons-material/ElectricBoltRounded";
import { ResponsiveContainer, LineChart, Line } from "recharts";

type BaseProps = { title: string; value: string; rightSlot?: React.ReactNode };

export function StatTileBase({ title, value, rightSlot }: BaseProps) {
    return (
        <Tile>
            <TextCol>
                <Label>{title}</Label>
                <Val>{value}</Val>
            </TextCol>

            {rightSlot ? <RightWrap>{rightSlot}</RightWrap> : null}
        </Tile>
    );
}

export function StatTileIcon({
    title,
    value,
    icon,
}: { title: string; value: string; icon: "car" | "bolt" }) {
    return (
        <StatTileBase
            title={title}
            value={value}
            rightSlot={
                <IconBadge>
                    {icon === "car" ? <ElectricCarRoundedIcon /> : <ElectricBoltRoundedIcon />}
                </IconBadge>
            }
        />
    );
}

export function StatTileChart({
    title,
    value,
    color,
    series,
}: { title: string; value: string; color: string; series: number[] }) {
    const data = React.useMemo(() => series.map((y, i) => ({ x: i, y })), [series]);

    return (
        <StatTileBase
            title={title}
            value={value}
            rightSlot={
                <MiniChart>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                            <Line type="monotone" dataKey="y" stroke={color} strokeWidth={3} dot={false} strokeLinecap="round" />
                        </LineChart>
                    </ResponsiveContainer>
                </MiniChart>
            }
        />
    );
}


const Tile = styled("div")({
    borderRadius: 20,
    padding: "14px 14px 14px 18px",
    background: "linear-gradient(127deg, rgba(6,11,38,.74) 28.26%, rgba(26,31,55,.50) 91.2%)",
    boxShadow: "inset 0 0 0 1px rgba(255,255,255,.08)",
    minHeight: 84,
    display: "grid",
    gridTemplateColumns: "1fr auto",
    alignItems: "center",
    columnGap: 36,
});

const TextCol = styled("div")({
    display: "flex",
    flexDirection: "column",
    rowGap: 3,
    minWidth: 0,
});

const RightWrap = styled("div")({
    justifySelf: "end",
    display: "grid",
    placeItems: "center",
});

const Label = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[100],
    fontSize: 12, 
    fontWeight: 400,
    opacity: 0.75,
}));

const Val = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.white,
    fontWeight: 700,
    fontSize: 22,
    letterSpacing: 0.2,
    lineHeight: 1.4,
}));

const IconBadge = styled("div")({
    width: 56, 
    height: 56,
    borderRadius: 14,
    display: "grid",
    placeItems: "center",
    background: "#3B82F6",
    color: "#fff",
    boxShadow: "0 12px 28px rgba(59,130,246,.32), inset 0 0 0 1px rgba(255,255,255,.12)",
    "& svg": { fontSize: 28 },
});

const MiniChart = styled("div")({
    width: 81,
    height: 52,
    opacity: 0.95,
});
