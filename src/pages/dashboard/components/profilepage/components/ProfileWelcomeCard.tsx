import { styled, Typography } from "@mui/material";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

type Props = {
    userName: string;
    onTap?: () => void;
    imageUrl?: string;
};

export default function ProfileWelcomeCard({
    userName = "Mark Johnson",
    onTap,
    imageUrl = "/images/profile-Welcome-img.png",
}: Props) {
    return (
        <Root $image={imageUrl}>
            <Copy>
                <Headline>Welcome back!</Headline>
                <Subhead>Nice to see you, {userName}!</Subhead>
            </Copy>

            <Cta type="button" onClick={onTap}>
                Turn on your car <ArrowForwardOutlinedIcon sx={{ fontSize: 22 }} />
            </Cta>
        </Root>
    );
}

/* ---- styles ---- */

const Root = styled("section")<{ $image?: string }>(({ $image }) => ({
    position: "relative",
    height: 'var(--card-h)',
    borderRadius: 20,
    overflow: "hidden",
    boxShadow:
        "inset 0 0 0 1px rgba(255,255,255,0.06), 0 20px 40px rgba(0,0,0,0.45)",
    "::before": {
        content: '""',
        position: "absolute",
        inset: 0,
        background: $image ? `url(${$image}) right center / cover no-repeat` : "none",
        filter: "saturate(135%) contrast(105%)",
        zIndex: 0,
    },
    "::after": {
        content: '""',
        position: "absolute",
        inset: 0,
        background:
            "linear-gradient(100deg, rgba(9,16,38,.85) 0%, rgba(9,16,38,.60) 35%, rgba(9,16,38,.25) 60%, rgba(9,16,38,0) 85%)",
        zIndex: 1,
    },
}));

const Copy = styled("div")({
    position: "absolute",
    zIndex: 2,
    top: 31,
    left: 31,
    right: 31,
    maxWidth: "min(920px, 70%)",
    display: "flex",
    flexDirection: "column",
    gap: 16,
    pointerEvents: "none", // чтобы CTA снизу ловил клики
});

const Headline = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.white,
    fontWeight: 800,
    lineHeight: 1.05,
    fontSize: 30,
}));

const Subhead = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.white,
    opacity: 0.9,
    fontWeight: 400,
    lineHeight: 1.25,
    fontSize: 14,
}));

const Cta = styled("button")({
    position: "absolute",
    zIndex: 3,
    left: 31,
    bottom: 42,
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    padding: 0,
    border: "none",
    background: "transparent",
    color: "#FFFFFF",
    fontWeight: 700,
    fontSize: 12,
    cursor: "pointer",
    transition: "opacity .2s ease, transform .08s ease",
    "&:hover": { opacity: 0.9 },
    "&:active": { transform: "translateY(1px)" },
});
