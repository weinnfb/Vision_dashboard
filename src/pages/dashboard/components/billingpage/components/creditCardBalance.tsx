import { styled, Typography, IconButton } from "@mui/material";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import ApartmentIcon from '@mui/icons-material/Apartment';

type NewestTx = {
    title: string;
    timestamp: string;
    amount: number;
};

type Props = {
    balance: number;
    newest: NewestTx;
};

const usd = (n: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

export default function CreditBalanceCard({
    balance = 25215,
    newest = { title: "Bill & Taxes", timestamp: "Today, 16:36", amount: -154.5 },
}: Props) {
    return (
        <Card>
            <TopPill>
                <div>
                    <TopLabel>Credit Balance</TopLabel>
                    <TopValue>{usd(balance)}</TopValue>
                </div>

                <RightTools>
                    <IconButton size="small" aria-label="more" sx={{ color: "rgba(255,255,255,0.9)" }}>
                        <MoreHorizRoundedIcon />
                    </IconButton>
                    <Wave aria-hidden viewBox="0 0 44 20">
                        <path d="M2 14c6 0 6-8 12-8s6 8 12 8 6-8 12-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </Wave>
                </RightTools>

                <PillShine />
            </TopPill>

            <SectionTitle>NEWEST</SectionTitle>

            <Row>
                <IconWrap>
                    <ApartmentIcon sx={{color:'#01B574', width: 20, height: 20}} />
                </IconWrap>

                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <RowTitle>{newest.title}</RowTitle>
                    <RowSub>{newest.timestamp}</RowSub>
                </div>

                <Amount negative={newest.amount < 0}>
                    {newest.amount < 0 ? "−" : "+"}
                    {usd(Math.abs(newest.amount))}
                </Amount>
            </Row>
        </Card>
    );
}


const Card = styled("div")({
    width: "100%",
    borderRadius: 20,
    padding: 25,
    background: "linear-gradient(127deg, rgba(6, 11, 40, 0.74) 0%, rgba(20, 15, 50, 0.75) 40%, rgba(30, 20, 60, 0.72) 70%, rgba(10, 14, 35, 0.71) 100%)",
    boxShadow: "0 24px 60px rgba(0,0,0,0.35)",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    gap: 19,
    maxWidth: 416,
    height: 240
});

const TopPill = styled("div")({
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px 18px",
    borderRadius: 18,
    background:
        "linear-gradient(135deg, rgba(10,16,32,0.85) 0%, rgba(10,16,32,0.72) 60%)",
    overflow: "hidden",
});

const PillShine = styled("div")({
    content: '""',
    position: "absolute",
    right: -40,
    top: -30,
    width: 220,
    height: 220,
    borderRadius: "30px",
    transform: "rotate(20deg)",
    background: "radial-gradient(closest-side, rgba(255,255,255,0.08), rgba(255,255,255,0))",
    pointerEvents: "none",
});

const TopLabel = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.white,
    fontWeight: 700,
    fontSize: 12,
    letterSpacing: 0.2,
}));


const TopValue = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.white,
    fontWeight: 700,
    fontSize: 34,
    letterSpacing: 0.2,
}));


const RightTools = styled("div")({
    display: "flex",
    alignItems: "center",
    gap: 10,
});

const Wave = styled("svg")({
    width: 59,
    height: 218,
    color: "#ffff",
});

const SectionTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[100],
    fontWeight: 400,
    fontSize: 10,
    letterSpacing: 0.2,
    textTransform:'uppercase'
}));

const Row = styled("div")({
    display: "grid",
    gridTemplateColumns: "40px 1fr auto",
    alignItems: "center",
    columnGap: 14,
});

const IconWrap = styled("div")({
    width: 42,
    height: 42,
    borderRadius: 12,
    display: "grid",
    placeItems: "center",
    background: "rgba(0,117,255,0.15)",
    boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)",
});

const RowTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.white,
    fontWeight: 400,
    fontSize: 14,
}));

const RowSub = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[100],
    fontWeight: 400,
    fontSize: 14,
}));

const Amount = styled("div")<{ negative?: boolean }>(({ negative }) => ({
    fontWeight: 800,
    fontSize: 18,
    color: negative ? "#ffffff" : "#69F5A3",
}));
