import { styled, Typography } from "@mui/material";
import AvatarStack from "./avatarStack";
import type { ProjectCardData } from "../../../../../../mocks/projectCardMock/projectsMocks";

export default function ProjectCard({ tag, title, description, imageUrl, members, cta }: ProjectCardData) {
    return (
        <Card>
            <Poster>
                <img src={imageUrl} alt={title} />
            </Poster>

            <Meta>
                <Small>{tag}</Small>
                <Title>{title}</Title>
                <Desc>{description}</Desc>
            </Meta>

            <Footer>
                {cta?.href ? (
                    <BtnLink href={cta.href} aria-label={cta.label || "View all"}>
                        {cta.label ?? "View all"}
                    </BtnLink>
                ) : (
                    <BtnGhost type="button" disabled>View all</BtnGhost>
                )}
                <AvatarStack members={members} />
            </Footer>
        </Card>
    );
}

const Card = styled("article")({
    display: "flex",
    flexDirection: "column",
    gap: 14,
    minHeight: 320,
});

const Poster = styled("div")({
    borderRadius: 10,
    overflow: "hidden",
    height: 191,
    "& img": { width: "100%", height: "100%", objectFit: "cover", display: "block" },
});

const Meta = styled("div")({
    display: "flex",
    flexDirection: "column",
    gap: 8,
    padding: "0 4px",
});

const Small = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[100],
    fontSize: 10,
    fontWeight: 400,
    lineHeight: 1
}));


const Title = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.white,
    fontSize: 18,
    fontWeight: 700,
    lineHeight: 1
}));

const Desc = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[100],
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 1.5,
    maxWidth: 307
}));

const Footer = styled("div")({
    marginTop: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
});

const btnBase = {
    height: 36,
    padding: "0 18px",
    borderRadius: 12,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    textTransform: "uppercase" as const,
    fontSize: 12,
    letterSpacing: 0.6,
    fontWeight: 700,
    textDecoration: "none",
    border: "1px solid rgba(255,255,255,.35)",
    color: "#fff",
    background: "transparent",
    cursor: "pointer",
    transition: "background .2s ease, transform .06s ease",
    "&:hover": { background: "rgba(255,255,255,.12)" },
    "&:active": { transform: "translateY(1px)" },
};

const BtnLink = styled("a")(btnBase);
const BtnGhost = styled("button")({
    ...btnBase,
    cursor: "default",
    opacity: 0.7,
    "&:hover": { background: "transparent" },
    "&:active": { transform: "none" },
});
