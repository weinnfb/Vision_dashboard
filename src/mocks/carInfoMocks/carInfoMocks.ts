export type TileKind = "icon" | "chart";

export type StatTileBase = {
    id: string;
    title: string;
    value: string;
    kind: TileKind;
};

export type StatTileIcon = StatTileBase & {
    kind: "icon";
    iconName: "car" | "bolt";
};

export type StatTileChart = StatTileBase & {
    kind: "chart";
    series: number[]; 
    color: string; 
};

export type CarInfoMocks = {
    helloName: string;
    batteryPct: number;
    etaMinutes: number;
    tiles: Array<StatTileIcon | StatTileChart>;
};

export const carInfoMocks: CarInfoMocks = {
    helloName: "Mark Johnson",
    batteryPct: 68,
    etaMinutes: 58,
    tiles: [
        { id: "health", title: "Battery Health", value: "76%", kind: "icon", iconName: "car" },
        { id: "eff", title: "Efficiency", value: "+20%", kind: "chart", color: "#22C55E", series: [5,8, 15, 7, 3,11,15,7,18, 26,18, 17, 13,5] },
        { id: "cons", title: "Consumption", value: "163W/km", kind: "icon", iconName: "bolt" },
        { id: "week", title: "This Week", value: "1.342km", kind: "chart", color: "#6488FF", series: [0.1, 0.32, 0.72, 0.6, 0.95, 1.18, 1.34] },
    ],
};
