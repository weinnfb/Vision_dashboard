import * as React from "react";
import { styled, Typography } from "@mui/material";
import type { BillingInfo } from "../../../../../mocks/billingInfomocks/billingInfo";

type Props = {
    title?: string;
    items: BillingInfo[];
    rowsVisible?: number;
    rowMinHeight?: number;
    gap?: number;
};

export default function BillingInfoList({
    title = "Billing Information",
    items,
    rowsVisible = 3,
    rowMinHeight = 132,
    gap = 24,
}: Props) {
    return (
        <Wrap
            style={
                {
                    ["--gap" as any]: `${gap}px`,
                    ["--row-h" as any]: `${rowMinHeight}px`,
                    ["--list-h" as any]: `calc(var(--row-h) * ${rowsVisible} + var(--gap) * ${rowsVisible - 1
                        })`,
                } as React.CSSProperties
            }
        >
            <Title>{title}</Title>

            <List>
                {items.map((it) => (
                    <Item key={it.id}>
                        <Name>{it.fullName}</Name>

                        <Line>
                            <Label>Company Name:</Label>
                            <Value>{it.company}</Value>
                        </Line>

                        <Line>
                            <Label>Email Address:</Label>
                            <Value>{it.email}</Value>
                        </Line>

                        <Line>
                            <Label>VAT Number:</Label>
                            <Value>{it.vat}</Value>
                        </Line>
                    </Item>
                ))}
            </List>
        </Wrap>
    );
}


const Wrap = styled("div")({
    width: "100%",
    borderRadius: 20,
    padding: '28px 23px 23px 23px',
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
    display: "flex",
    flexDirection: "column",
    gap: "var(--gap)",
    paddingRight: 4,
    scrollbarWidth: "thin",
    scrollbarColor: "rgba(255,255,255,0.25) transparent",
    "&::-webkit-scrollbar": { width: 8 },
    "&::-webkit-scrollbar-thumb": {
        background: "rgba(255,255,255,0.25)",
        borderRadius: 999,
    },
    "&::-webkit-scrollbar-track": { background: "transparent" },
});

const Item = styled("div")({
    minHeight: "var(--row-h)",
    borderRadius: 20,
    padding: "15px 0px 28px 28px",
    display: "flex",
    flexDirection: "column",
    gap: 5,
    background:
        "linear-gradient(127deg, rgba(24, 29, 60, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)",
    boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)",
});

const Name = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.white,
    fontWeight: 700,
    fontSize: 16,
}));

const Line = styled("div")({
    display: "flex",
    alignItems: "baseline",
});

const Label = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[100],
    fontWeight: 500,
    fontSize: 15,
}));

const Value = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[100],
    fontWeight: 500,
    fontSize: 15,
}));
