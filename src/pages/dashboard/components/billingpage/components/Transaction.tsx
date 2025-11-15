import {
    styled,
    Typography,
    IconButton,
} from "@mui/material";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import type { TransactionSection, TxStatus } from "../../../../../mocks/transaction/transactionMocks";

type Props = {
    sections: TransactionSection[];
    range?: string;
    height?: number;
};

const fmtMoney = (n: number) =>
    (n >= 0 ? "+" : "-") +
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })
        .format(Math.abs(n));

export default function TransactionsCard({
    sections,
    range = "23 – 30 March 2020",
    height = 420,
}: Props) {
    return (
        <Card style={{ ["--list-h" as any]: `${height}px` }}>
            <Header>
                <Title>Your Transactions</Title>
                <Range>
                    <CalendarMonthRoundedIcon sx={{ fontSize: 18 }} />
                    <span>{range}</span>
                </Range>
            </Header>

            <List>
                {sections.map((sec) => (
                    <Section key={sec.label}>
                        <SectionLabel>{sec.label}</SectionLabel>

                        {sec.items.map((tx) => (
                            <Row key={tx.id}>
                                <Left>
                                    <Badge status={tx.status}>
                                        {tx.status === "in" && <ArrowUpwardRoundedIcon fontSize="small" />}
                                        {tx.status === "out" && <ArrowDownwardRoundedIcon fontSize="small" />}
                                        {tx.status === "pending" && <ErrorOutlineRoundedIcon fontSize="small" />}
                                    </Badge>

                                    <TextBlock>
                                        <RowTitle>{tx.title}</RowTitle>
                                        <RowSub>{tx.datetime}</RowSub>
                                    </TextBlock>
                                </Left>

                                <Right>
                                    {tx.status === "pending" || typeof tx.amount !== "number" ? (
                                        <Amount pending>Pending</Amount>
                                    ) : (
                                        <Amount value={tx.amount}>{fmtMoney(tx.amount)}</Amount>
                                    )}
                                </Right>
                            </Row>
                        ))}
                    </Section>
                ))}
            </List>
        </Card>
    );
}


const Card = styled("div")({
    width: "100%",
    borderRadius: 20,
    padding: '28px 23px 23px 23px',
    color: "#fff",
    background:
        "linear-gradient(180deg, rgba(16,30,60,0.75) 0%, rgba(9,20,44,0.92) 60%, rgba(27,68,140,0.55) 100%)",
    boxShadow: "0 18px 46px rgba(0,0,0,0.35)",
    display: "flex",
    flexDirection: "column",
    gap: 18,
});

const Header = styled("div")({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
});

const Title = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.white,
    fontWeight: 700,
    fontSize: 18,
}));

const Range = styled("div")({
    display: "flex",
    alignItems: "center",
    gap: 6,
    color: "#A0AEC0",
    fontSize: 14,
});

const List = styled("div")({
    height: "var(--list-h)",
    overflowY: "auto",
    paddingRight: 4,
    display: "flex",
    flexDirection: "column",
    gap: 21,

    scrollbarWidth: "thin",
    scrollbarColor: "rgba(255,255,255,0.25) transparent",
    "&::-webkit-scrollbar": { width: 8 },
    "&::-webkit-scrollbar-thumb": {
        background: "rgba(255,255,255,0.25)",
        borderRadius: 999,
    },
    "&::-webkit-scrollbar-track": { background: "transparent" },
});

const Section = styled("div")({
    display: "flex",
    flexDirection: "column",
    gap: 18,
});

const SectionLabel = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[100],
    fontWeight: 400,
    fontSize: 10,
    textTransform:'uppercase'
}));

const Row = styled("div")({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 14,
});

const Left = styled("div")({
    display: "flex",
    alignItems: "center",
    gap: 14,
    minWidth: 0,
});

const Badge = styled(IconButton, {
    shouldForwardProp: (p) => p !== "status",
})<{ status: TxStatus }>(({ status }) => {
    const border =
        status === "in" ? "#01B574" :
            status === "out" ? "#E31A1A" :
                "#A0AEC0)";
    const color =
        status === "in" ? "#01B574" :
            status === "out" ? "#E31A1A" :
                "#A0AEC0";

    return {
        width: 35,
        height: 35,
        borderRadius: "50%",
        boxShadow: `inset 0 0 0 2px ${border}`,
        background: "rgba(255,255,255,0.06)",
        color,
        "&:hover": { background: "rgba(255,255,255,0.12)" },
    };
});

const TextBlock = styled("div")({
    display: "flex",
    flexDirection: "column",
    gap: 4,
    minWidth: 0,
});

const RowTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.white,
    fontWeight: 700,
    fontSize: 14,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
}));

const RowSub = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[100],
    fontWeight: 400,
    fontSize: 13,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
}));

const Right = styled("div")({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    minWidth: 120,
});

const Amount = styled("div", {
    shouldForwardProp: (p) => p !== "value" && p !== "pending",
})<{ value?: number; pending?: boolean }>(({ value, pending }) => ({
    fontWeight: 700,
    fontSize: 16,
    color: pending
        ? "rgba(255,255,255,0.85)"
        : (value ?? 0) >= 0
            ? "#01B574" 
            : "rgb(239,68,68)", 
}));
