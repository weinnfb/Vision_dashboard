import { styled, Typography } from "@mui/material";
import type { OrderItem } from "../../../../../mocks/orderViewMocks/orderViewMocks";
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';


type Props = {
    items: OrderItem[];
    title?: string;
    deltaText?: string;
};

export default function OrdersOverviewCard({
    items,
    title = "Orders overview",
    deltaText = "+30% this month",
}: Props) {
    return (
        <Card>
            <Header>
                <Title>{title}</Title>
                <Delta>
                    <CheckCircleRoundedIcon sx={{ color: '#01B574' }} />
                    <DeltaText>{deltaText}</DeltaText>
                </Delta>
            </Header>

            <List>
                {items.map((it) => (
                    <Row key={it.id}>
                        <IconWrap style={{ ["--accent" as any]: it.accent || "#7aa2ff" }}>
                            {it.icon}
                        </IconWrap>
                        <Texts>
                            <ItemTitle>{it.title}</ItemTitle>
                            <ItemSub>
                                {it.date} {it.time}
                            </ItemSub>
                        </Texts>
                    </Row>
                ))}
            </List>
        </Card>
    );
}


const Card = styled("div")({
    width: "100%",
    borderRadius: 20,
    padding: '28px 0px 33px 19px',
    background:
        "linear-gradient(135deg, rgba(10,20,44,0.85) 0%, rgba(8,18,40,0.9) 55%, rgba(27,68,140,0.45) 100%)",
    boxShadow: "0 18px 46px rgba(0,0,0,.35)",
    color: "#EAF0FF",
});

const Header = styled("div")({
    display: "flex",
    alignItems: "flex-start",
    flexDirection: 'column',
    gap: 5
});

const Title = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.white,
    fontSize: 18,
    fontWeight: 700
}));

const Delta = styled("div")({
    display: "flex",
    gap: 5,
    alignItems: "center",
});


const DeltaText = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[100],
    fontSize: 14,
    fontWeight: 400
}));


const List = styled("div")({
    display: "flex",
    flexDirection: "column",
    gap: 24,
    marginTop: 25,
});

const Row = styled("div")({
    display: "flex",
    alignItems: "flex-start",
    gap: 19,
});


const IconWrap = styled("span")({
    display: "grid",
    placeItems: "center",
    "& svg": {
        width: 20,
        height: 20,
        color: "var(--accent, #7aa2ff)",
    },
});

const Texts = styled("div")({
    display: "flex",
    flexDirection: "column",
    gap: 3,
});

const ItemTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.white,
    fontSize: 14,
    fontWeight: 400
}));

const ItemSub = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[100],
    fontSize: 12,
    fontWeight: 400
}));
