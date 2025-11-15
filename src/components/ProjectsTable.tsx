import { styled, Typography } from "@mui/material"
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Avatar, Paper } from "@mui/material";
import type { Row } from "../mocks/projectTableMocks/ProjectsTAbleMocks";
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import { IconButton } from '@mui/material';

type Variant = "members" | "status";
type Size = "sm" | "md" | "lg";

const SIZES: Record<
    Size,
    { pad: number; row: number; cellY: number; avatar: number; bar: number; radius: number; title: number; logo: number }
> = {
    sm: { pad: 16, row: 44, cellY: 8, avatar: 18, bar: 3, radius: 20, title: 16, logo: 18 },
    md: { pad: 20, row: 56, cellY: 12, avatar: 20, bar: 4, radius: 20, title: 18, logo: 20 },
    lg: { pad: 28, row: 64, cellY: 16, avatar: 22, bar: 5, radius: 20, title: 20, logo: 22 },
};

const RING = "rgba(9,20,44,0.92)";

type Props = {
    rows: Row[];
    variant?: Variant;
    size?: Size;
    title?: string;
    showMore?: boolean;
    onMoreClick?: (row: Row) => void;
};

export default function ProjectsTableSimple({ rows, variant = "members", size = "md", title = "Projects", showMore = false,                   // ← ДЕФОЛТ
    onMoreClick,
}: Props) {
    const t = SIZES[size];

    const initials = (company: string) =>
        company
            .split(" ")
            .slice(0, 2)
            .map(w => w[0])
            .join("")
            .toUpperCase();

    const handleMore = (row: Row) => onMoreClick?.(row);
    return (
        <Card
            elevation={0}
            style={{
                ["--pad" as any]: `${t.pad}px`,
                ["--row" as any]: `${t.row}px`,
                ["--py" as any]: `${t.cellY}px`,
                ["--avatar" as any]: `${t.avatar}px`,
                ["--bar" as any]: `${t.bar}px`,
                ["--radius" as any]: `${t.radius}px`,
                ["--title" as any]: `${t.title}px`,
                ["--logo" as any]: `${t.logo}px`,
            }}
        >
            <Header>
                <Title>{title}</Title>
                <ProjectAmount>
                    <CheckCircleRoundedIcon sx={{ color: '#01B574' }} />
                    <Quant>30 done this month</Quant>
                </ProjectAmount>
            </Header>

            <TableContainer sx={{ background: "transparent" }}>
                <Table size="medium">
                    <TableHead>
                        <TableRow>
                            <HeadCell>COMPANIES</HeadCell>
                            <HeadCell >{variant === "members" ? "MEMBERS" : "STATUS"}</HeadCell>
                            <HeadCell>BUDGET</HeadCell>
                            <HeadCell>COMPLETION</HeadCell>
                            {showMore && <HeadCell align="right" sx={{ width: 44 }} />}
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {rows.map((r, i) => (
                            <TableRow key={i} hover>
                                <BodyCell>
                                    <CompanyCell>
                                        <LogoBox>
                                            {r.logoSrc ? (
                                                <LogoImg src={r.logoSrc} alt={`${r.company} logo`} loading="lazy" />
                                            ) : (
                                                <span style={{ fontWeight: 700 }}>{initials(r.company)}</span>
                                            )}
                                        </LogoBox>
                                        <Typography sx={{ fontWeight: 600, color: "#EAF0FF" }}>{r.company}</Typography>
                                    </CompanyCell>
                                </BodyCell>

                                <BodyCell >
                                    {variant === "members" ? (
                                        <MembersCell>
                                            <Stacked>
                                                {(r.members ?? []).map((m, idx) => (
                                                    <Avatar
                                                        key={m.id}
                                                        src={m.avatar}
                                                        sx={{ zIndex: idx + 1 }}
                                                    />
                                                ))}
                                            </Stacked>
                                        </MembersCell>
                                    ) : (
                                        <Pill >{r.status ?? "—"}</Pill>
                                    )}
                                </BodyCell>

                                <BodyCell sx={{ fontWeight: 700 }}>{r.budget}</BodyCell>

                                <BodyCell>
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: 8,
                                            width: "100%",
                                            alignItems: 'flex-start'
                                        }}
                                    >
                                        <Typography sx={{ fontWeight: 700, alignSelf: "flex-end" }}>
                                            {r.completion}%
                                        </Typography>

                                        <div style={{ width: "100%" }}>
                                            <Progress>
                                                <ProgressFill v={r.completion} />
                                            </Progress>
                                        </div>
                                    </div>
                                </BodyCell>
                                {showMore && (
                                    <BodyCell align="right">
                                        <MoreBtn
                                            size="small"
                                            aria-label={`More actions for ${r.company}`}
                                            onClick={() => handleMore(r)}
                                        >
                                            <MoreVertRoundedIcon fontSize="small" />
                                        </MoreBtn>
                                    </BodyCell>
                                )}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </TableContainer>
        </Card>
    )
}

const Card = styled(Paper)({
    width: "100%",
    borderRadius: "var(--radius)",
    padding: "var(--pad)",
    background:
        "linear-gradient(180deg, rgba(16,30,60,0.75) 0%, rgba(9,20,44,0.92) 60%, rgba(27,68,140,0.55) 100%)",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
});

const Header = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    alignItems: 'flex-start'
});

const Title = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.white,
    fontSize: 18,
    fontWeight: 700
}));

const ProjectAmount = styled('div')({
    display: 'flex',
    gap: 5,
    alignItems: 'center'
});

const Quant = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[100],
    fontSize: 14,
    fontWeight: 400
}));

const HeadCell = styled(TableCell)({
    borderBottom: "1px solid #56577A",
    color: "rgba(255,255,255,.7)",
    fontSize: 10,
    fontWeight: 400,
    letterSpacing: 0.6,
    textTransform: "uppercase",
    padding: "var(--py) 16px",
});

const BodyCell = styled(TableCell)({
    borderBottom: "1px solid #56577A",
    color: "rgba(255,255,255,.95)",
    fontSize: 14,
    padding: "var(--py) 16px",
    verticalAlign: "middle",
});

const CompanyCell = styled("div")({
    display: "flex", alignItems: "center", gap: 17,
});

const LogoBox = styled("div")({
    width: "var(--logo)", height: "var(--logo)", borderRadius: 6,
    display: "grid", placeItems: "center", overflow: "hidden",
    background: "transparent",
});
const LogoImg = styled("img")({
    width: "100%", height: "100%", objectFit: "contain",
});

const MembersCell = styled("div")({
    display: "flex", alignItems: "center", height: "var(--row)",
});

const Stacked = styled("div")({
    display: "flex",
    alignItems: "center",
    "& .MuiAvatar-root": {
        width: "var(--avatar)",
        height: "var(--avatar)",
        border: `2px solid ${RING}`,
        background: "rgba(255,255,255,0.15)",
    },
    "& .MuiAvatar-root + .MuiAvatar-root": {
        marginLeft: -12,
    },
});

const Pill = styled("span")({
    padding: "4px 10px",
    borderRadius: 999,
    fontSize: 12,
    fontWeight: 700,
    color: "#CFE8FF",
    background: "rgba(63,131,248,0.14)",
});

const Progress = styled("div")({
    width: "100%",
    height: "var(--bar)",
    borderRadius: 999,
    background: "rgba(255,255,255,.15)",
    overflow: "hidden",
});
const ProgressFill = styled("div")<{ v: number }>(({ v }) => ({
    width: `${Math.max(0, Math.min(100, v))}%`,
    height: "100%",
    background: "#0075FF",
}));

const MoreBtn = styled(IconButton)({
    width: 28,
    height: 28,
    borderRadius: 10,
    color: "rgba(255,255,255,0.8)",
    background: "rgba(255,255,255,0.08)",
    transition: "background .2s ease, transform .1s ease",
    "&:hover": { background: "rgba(255,255,255,0.16)" },
    "&:active": { transform: "scale(0.96)" },
});