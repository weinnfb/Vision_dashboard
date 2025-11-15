import { styled, Typography, } from "@mui/material";
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

type Props = {
    userName: string;
    onTap?: () => void;
    imageUrl?: string;
}

export default function WelcomeCard({
    userName = "Mark Johnson",
    onTap,
    imageUrl = "/images/jellyfish.png",
}: Props) {
    return (
        <Root $image={imageUrl}>
            <Content>
                <Hello>Welcome back,</Hello>
                <Name variant="h3">{userName}</Name>

                <Sub>Glad to see you again! Ask me anything.</Sub>

                <Cta type="button" onClick={onTap}>
                    Tap to record <ArrowForwardOutlinedIcon sx={{ fontSize: 18 }} />
                </Cta>
            </Content>

            <EdgeGlow />
        </Root>
    );
};

const Root = styled("section")<{ $image?: string }>(({ $image }) => ({
    position: "relative",
    minHeight: 344,
    width: 650,
    flexShrink: 0,
    borderRadius: 20,
    overflow: "hidden",
    "::before": {
        content: '""',
        position: "absolute",
        inset: 0,
        background: $image
            ? `url(${$image}) center/cover no-repeat`
            : "none",
        filter: "saturate(120%) contrast(105%)",
        zIndex: 0,
    },
    "::after": {
        content: '""',
        position: "absolute",
        inset: 0,
        background:
            "linear-gradient(90deg, rgba(9,16,38,.90) 0%, rgba(9,16,38,.78) 40%, rgba(9,16,38,.25) 68%, rgba(9,16,38,0) 100%)",
        zIndex: 1,
    },
    boxShadow:
        "inset 0 0 0 1px rgba(255,255,255,0.06), 0 20px 40px rgba(0,0,0,0.45)",
}));

const Content = styled("div")({
    position: "relative",
    zIndex: 2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: 16,
    padding: "28px",
    width: "min(520px, 45%)",
    color: "#EAF2FF",
});

const Hello = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[100],
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 1
}));

const Name = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.white,
    fontSize: 28,
    fontWeight: 700,
    lineHeight: 1
}));

const Sub = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[100],
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 1.5,
    maxWidth: 158
}));

const Cta = styled("button")({
    position: "relative",
    zIndex: 3,
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "10px 14px",
    borderRadius: 12,
    appearance: "none",
    WebkitAppearance: "none",
    border: "none",
    outline: "none",
    backgroundColor: "rgba(255,255,255,0.12)",
    color: "#FFFFFF",
    "-webkit-tap-highlight-color": "transparent",
    "::-moz-focus-inner": { border: 0, padding: 0 },

    fontWeight: 700,
    cursor: "pointer",
    transition: "transform .06s ease, background .2s ease",
    "&:hover": { backgroundColor: "rgba(255,255,255,0.16)" },
    "&:active": { transform: "translateY(1px)" },
});


const EdgeGlow = styled("div")({
    position: "absolute",
    inset: 0,
    boxShadow: "inset 0 0 0 2px rgba(66,133,244,0.25)",
    borderRadius: 28,
    pointerEvents: "none",
});