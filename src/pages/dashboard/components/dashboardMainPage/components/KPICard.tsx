import { styled, Typography } from "@mui/material";
import type { KpiCardItem } from "../../../../../mocks/kpiCardsMocks/kpiCardsMocks";

type Props = { item: KpiCardItem };

const KpiCard = ({ item }: Props) => {
    return (
        <Card>
            <Left>
                <Title>{item.title}</Title>
                <Row>
                    <Value>{item.value}</Value>
                    <Change $trend={item.trend}>{item.change}</Change>
                </Row>
            </Left>

            <RightIcon>
                <IconInner>{item.icon}</IconInner>
            </RightIcon>
        </Card>
    )
}

export default KpiCard;

const Card = styled('div')({
    display: 'flex',
    padding: '18px 18px 18px 22px',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 20,
    background: 'linear-gradient(127deg, rgba(6, 11, 38, 0.74) 28.26%, rgba(26, 31, 55, 0.50) 91.2%)',
    backdropFilter: 'blur(60px)'
});

const Left = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
    alignItems: 'flex-start'
})

const Title = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[100],
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 1,
}));

const Row = styled('div')({
    display: 'flex',
    gap: 4,
    alignItems: 'center'
});

const Value = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.white,
    fontSize: 18,
    fontWeight: 700,
    lineHeight: 1.4,
}));

const Change = styled("span")<{ $trend: "up" | "down" }>(
    ({ $trend }) => ({
        fontSize: 14,
        fontWeight: 700,
        color:
            $trend === "up"
                ? "#01B574"
                : $trend === "down"
                    ? "#E31A1A"
                    : "rgba(234,242,255,0.7)",
    })
);

const RightIcon = styled("div")({
    width: 45,
    height: 45,
    borderRadius: 12,
    background:"#0075FF",
    boxShadow: "0 10px 22px rgba(76,130,255,0.35)",
    display: "grid",
    placeItems: "center",
});

const IconInner = styled("div")({
    width: 22,
    height: 22,
    display: "grid",
    placeItems: "center",
    color: "#FFFFFF",
});