import { styled, Typography } from "@mui/material";
import ProjectCard from "./ProjectsCard";
import { projects } from "../../../../../../mocks/projectCardMock/projectsMocks";

export default function ProjectsSection() {
    return (
        <Wrapper>
            <TextPart>
                <Title>Projects</Title>
                <Sub>Architects design houses</Sub>
            </TextPart>
            <Grid>
                {projects.map(p => (
                    <ProjectCard key={p.id} {...p} />
                ))}
            </Grid>
        </Wrapper>
    );
}

const Grid = styled("div")({
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: 24,
});

const Wrapper = styled('div')({
    width: "1206",
    borderRadius: 20,
    padding: "28px 21px",
    color: "#fff",
    background:
        "linear-gradient(180deg, rgba(16,30,60,0.78) 0%, rgba(9,20,44,0.92) 55%, rgba(27,68,140,0.55) 100%)",
    boxShadow: "0 18px 46px rgba(0,0,0,0.35)",
    display: "flex",
    flexDirection: "column",
    gap: 22,
});

const TextPart = styled('div')({
    display:'flex',
    flexDirection:'column',
    gap: 6
});

const Title = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.white,
    fontWeight: 700,
    fontSize: 18,
}));

const Sub = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[100],
    fontWeight: 400,
    fontSize: 14,
}));