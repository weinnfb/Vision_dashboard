import { styled, Typography } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useSelector } from "react-redux";
import { selectUserName, selectUserEmail } from "../../../../../redux/store";

type Props = {
    bio?: string; 
    phone?: string;
    location?: string;
    social?: { facebook?: string; twitter?: string; instagram?: string };
};

const nameFromEmail = (e?: string | null) =>
    e ? e.split("@")[0].replace(/[._-]+/g, " ").replace(/\b\w/g, s => s.toUpperCase()) : null;

export default function ProfileInfoCard({
    bio,
    phone = "(44) 123 1234 123",
    location = "United States",
    social,
}: Props) {
    const reduxName = useSelector(selectUserName);
    const email = useSelector(selectUserEmail);

    const userName = reduxName ?? nameFromEmail(email) ?? "Guest";
    const safeEmail = email ?? "—";

    const defaultBio =
        "Hi, {name}, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).";

    const template = bio ?? defaultBio;
    const shownBio = template.replace(/\{name\}/g, userName);

    const { facebook = "#", twitter = "#", instagram = "#" } = social ?? {};

    return (
        <Card>
            <Title>Profile Informations</Title>
            <Bio>{shownBio}</Bio>
            <Divider />

            <Rows>
                <Row>
                    <Label>Full Name:</Label>
                    <Value>{userName}</Value>
                </Row>

                <Row>
                    <Label>Mobile:</Label>
                    <Value>{phone}</Value>
                </Row>

                <Row>
                    <Label>Email:</Label>
                    <Value component="a" href={`mailto:${safeEmail}`} sx={{ textDecoration: "none" }}>
                        {safeEmail}
                    </Value>
                </Row>

                <Row>
                    <Label>Location:</Label>
                    <Value>{location}</Value>
                </Row>

                <Row>
                    <Label>Social Media:</Label>
                    <Social>
                        <IconButtonLink href={facebook}><FacebookRoundedIcon fontSize="small" /></IconButtonLink>
                        <IconButtonLink href={twitter}><TwitterIcon fontSize="small" /></IconButtonLink>
                        <IconButtonLink href={instagram}><InstagramIcon fontSize="small" /></IconButtonLink>
                    </Social>
                </Row>
            </Rows>
        </Card>
    );
}


const Card = styled("section")({
    width: "100%",
    height: 'var(--card-h)',
    minHeight: 0,
    borderRadius: 20,
    padding: "28px 21px",
    color: "#fff",
    background:
        "linear-gradient(180deg, rgba(16,30,60,0.78) 0%, rgba(9,20,44,0.92) 55%, rgba(27,68,140,0.55) 100%)",
    boxShadow: "0 18px 46px rgba(0,0,0,0.35)",
    display: "flex",
    flexDirection: "column",
    gap: 5,
});

const Title = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.white,
    fontWeight: 700,
    fontSize: 18,
}));

const Bio = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[100],
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 1.6,
    maxWidth: 600,
}));

const Divider = styled("div")({
    marginTop: 15,
    height: 1,
    width: "100%",
    background: "rgba(255,255,255,0.14)",
    borderRadius: 1,
});

const Rows = styled("div")({
    display: "flex",
    flexDirection: "column",
    gap: 18,
    marginTop: 6,
});

const Row = styled("div")({
    display: "grid",
    gridTemplateColumns: "162px 1fr",
    alignItems: "center",
    gap: 5,
    minWidth: 0,
});

const Label = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[100],
    fontSize: 14,
    opacity: 0.85,
}));

const Value = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.white,
    fontWeight: 700,
    fontSize: 14,
    lineHeight: 1.2,
    minWidth: 0,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
}));

const Social = styled("div")({
    display: "flex",
    alignItems: "center",
    gap: 14,
});

const IconButtonLink = styled("a")({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 32,
    height: 32,
    borderRadius: 10,
    color: "rgba(255,255,255,0.9)",
    background: "rgba(255,255,255,0.08)",
    boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.12)",
    textDecoration: "none",
    transition: "background .2s ease",
    ":hover": { background: "rgba(255,255,255,0.18)" },
});
