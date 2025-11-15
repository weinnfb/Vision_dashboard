import { styled, Typography, IconButton } from "@mui/material";
import PictureAsPdfRoundedIcon from "@mui/icons-material/PictureAsPdfRounded";
import type { Invoice } from "../../../../../mocks/invoicesCardMocks/invoicesMocks";

const fmtMoney = (n: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

const fmtDate = (isoOrHuman: string) => {
    const d = new Date(isoOrHuman);
    if (isNaN(d.getTime())) return isoOrHuman;
    return d.toLocaleDateString("en-US", { month: "long", day: "2-digit", year: "numeric" });
};

type Props = {
    items: Invoice[];
    height?: number;
};

export default function InvoicesCard({ items, height = 380 }: Props) {
    return (
        <Card style={{ ["--list-h" as any]: `${height}px` }}>
            <Title>Invoices</Title>

            <List>
                {items.map((inv) => (
                    <Row key={inv.id}>
                        <Left>
                            <DateText>{fmtDate(inv.date)}</DateText>
                            <IdText>{inv.id}</IdText>
                        </Left>

                        <Right>
                            <Amount>{fmtMoney(inv.amount)}</Amount>

                            {inv.pdfUrl ? (
                                <PdfChip>
                                    <PictureAsPdfRoundedIcon sx={{ fontSize: 18 }} />
                                    <span>PDF</span>
                                </PdfChip>
                            ) : (
                                <PdfChip disabled>
                                    <PictureAsPdfRoundedIcon sx={{ fontSize: 18, opacity: 0.6 }} />
                                    <span>PDF</span>
                                </PdfChip>
                            )}
                        </Right>
                    </Row>
                ))}
            </List>
        </Card>
    );
}


const Card = styled("div")({
    width: "100%",
    borderRadius: 20,
    padding: 24,
    color: "#fff",
    background:
        "linear-gradient(180deg, rgba(16,30,60,0.75) 0%, rgba(9,20,44,0.92) 60%, rgba(27,68,140,0.55) 100%)",
    boxShadow: "0 18px 46px rgba(0,0,0,0.35)",
    display: "flex",
    flexDirection: "column",
    gap: 24,
});


const Title = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.white,
    fontWeight: 700,
    fontSize: 18,
}));

const List = styled("div")({
    height: "var(--list-h)",
    overflowY: "auto",
    paddingRight: 4,
    paddingBottom: 8,
    display: "flex",
    flexDirection: "column",
    gap: 24,
    scrollbarWidth: "thin",
    scrollbarColor: "rgba(255,255,255,0.25) transparent",
    "&::-webkit-scrollbar": { width: 8 },
    "&::-webkit-scrollbar-thumb": {
        background: "rgba(255,255,255,0.25)",
        borderRadius: 999,
    },
    "&::-webkit-scrollbar-track": { background: "transparent" },
})

const Row = styled("div")({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    "&:last-of-type": { borderBottom: "none" },
});

const Left = styled("div")({
    display: "flex",
    flexDirection: "column",
    gap: 4,
});

const Right = styled("div")({
    display: "flex",
    alignItems: "center",
    gap: 14,
});

const DateText = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.white,
    fontWeight: 400,
    fontSize: 14,
}));

const IdText = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[100],
    fontWeight: 400,
    fontSize: 12,
}));

const Amount = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[100],
    fontWeight: 400,
    fontSize: 12,
    textAlign: 'right'
}));

const PdfChip = styled(IconButton, {
    shouldForwardProp: (p) => p !== "disabled",
})<{ disabled?: boolean }>(({ disabled }) => ({
    height: 32,
    padding: "0 10px",
    borderRadius: 10,
    display: "inline-flex",
    alignItems: "center",
    gap: 4,
    color: disabled ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.9)",
    boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.14)",
    pointerEvents: disabled ? "none" : "auto",
    "&:hover": { background: "rgba(255,255,255,0.18)" },
    "& span": { fontSize: 13, fontWeight: 700 },
    border: 'none'
}));
