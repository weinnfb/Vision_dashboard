import * as React from "react";
import { styled, Typography } from "@mui/material";

type Props = {
    title?: string;
    cardNumber: string;
    validThru: string;
    cvv: string;
};
function formatCardNumber(input: string) {
    const digits = (input || "").replace(/\D/g, "").slice(0, 16).padEnd(16, "•");
    const groups = digits.match(/.{1,4}/g) ?? [];
    if (groups.length) groups[3] = "XXXX";
    return groups.join(" ");
}

export default function BillingCard({
    title = "Vision UI",
    cardNumber,
    validThru,
    cvv,
}: Props) {
    const formatted = React.useMemo(() => formatCardNumber(cardNumber), [cardNumber]);

    return (
        <Root aria-label="Bank card">
            <Content>
                <TopRow>
                    <Title>{title}</Title>
                    <Brand aria-hidden />
                </TopRow>

                <BottomRow>
                    <Number aria-label="Card number">{formatted}</Number>
                    <Info>
                        <Col>
                            <Label>VALID THRU</Label>
                            <Value>{validThru}</Value>
                        </Col>
                        <Col>
                            <Label>CVV</Label>
                            <Value>{cvv}</Value>
                        </Col>
                    </Info>
                </BottomRow>
            </Content>
        </Root >
    );
}



const Root = styled("div")({
    position: "relative",
    width: "100%",
    maxWidth: 460,
    aspectRatio: "16 / 9",
    borderRadius: 20,
    overflow: "hidden",
    boxShadow: "0 30px 70px rgba(0,0,0,0.45)",
    backgroundImage: 'url(/images/paymentCardImage.png)',
    height: 240
});


const Content = styled("div")({
    position: "relative",
    zIndex: 1,
    height: "100%",
    padding: "26px 25px 36px 31px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
});

const TopRow = styled("div")({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
});

const Title = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.white,
    fontWeight: 700,
    fontSize: 18,
    letterSpacing: 0.2,
}));

const Brand = styled("div")({
    position: "relative",
    width: 32,
    height: 32,
    "&::before, &::after": {
        content: '""',
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        width: 32,
        height: 32,
        borderRadius: "50%",
        background: "rgba(255,255,255,0.35)",
    },
    "&::before": { right: 18 },
    "&::after": { right: -6, background: "#FFF", opacity: 0.4 },
});

const Number = styled("div")(({ theme }) => ({
    color: theme.palette.common.white,
    fontWeight: 800,
    letterSpacing: 1.2,
    lineHeight: 1.05,
    fontSize: 24,
    marginTop: 8,
}));

const BottomRow = styled("div")({
    display: "flex",
    flexDirection: 'column',
    gap: 12,
});

const Info = styled('div')({
    display:'flex',
    gap: 35,
    alignItems:'center'
})

const Col = styled("div")({
    display: "flex",
    flexDirection: "column",
});

const Label = styled("div")(({ theme }) => ({
    color: theme.palette.common.white,
    fontWeight: 400,
    fontSize: 10
}));;

const Value = styled("div")(({ theme }) => ({
    color: theme.palette.common.white,
    fontWeight: 700,
    fontSize: 14
}));;
