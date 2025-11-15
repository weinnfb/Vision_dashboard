import {
    Avatar,
    Paper,
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
    Typography, styled, Button
} from "@mui/material";
import type { AuthorRow } from "../../../../../mocks/authorsTableMocks/authorTablemocks";

type Size = "sm" | "md" | "lg";
const SIZES: Record<Size, { pad: number; row: number; py: number; avatar: number; radius: number; title: number }> = {
    sm: { pad: 16, row: 44, py: 8, avatar: 34, radius: 20, title: 18 },
    md: { pad: 20, row: 56, py: 12, avatar: 40, radius: 20, title: 18 },
    lg: { pad: 28, row: 64, py: 16, avatar: 44, radius: 20, title: 20 },
};

type Props = {
    rows: AuthorRow[];
    size?: Size;
    title?: string;
    onEdit?: (row: AuthorRow) => void;
};
function getInitials(name: string) {
    const p = name.trim().split(" ");
    const a = (p[0]?.[0] ?? "").toUpperCase();
    const b = (p[1]?.[0] ?? "").toUpperCase();
    return `${a}${b}` || "A";
}

export default function AuthorsTable({ rows, size = "lg", title = "Authors Table", onEdit }: Props) {
    const t = SIZES[size];
    return (
        <Card elevation={0}
            style={
                {
                    ["--pad" as any]: `${t.pad}px`,
                    ["--row" as any]: `${t.row}px`,
                    ["--py" as any]: `${t.py}px`,
                    ["--avatar" as any]: `${t.avatar}px`,
                    ["--radius" as any]: `${t.radius}px`,
                    ["--title" as any]: `${t.title}px`,
                } as React.CSSProperties
            }>
            <Header>
                <Title>{title}</Title>
            </Header>

            <TableContainer sx={{ background: "transparent" }}>
                <Table size="medium">
                    <TableHead>
                        <TableRow>
                            <HeadCell sx={{ width: "42%" }}>Author</HeadCell>
                            <HeadCell sx={{ width: "26%" }}>Function</HeadCell>
                            <HeadCell sx={{ width: "14%", textAlign: "center" }}>Status</HeadCell>
                            <HeadCell sx={{ width: "12%" }}>Employed</HeadCell>
                            <HeadCell align="right" sx={{ width: "6%" }} />
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((r) => (
                            <TableRow key={r.id} hover>
                                <BodyCell>
                                    <AuthorWrap>
                                        <Avatar
                                            src={r.avatar}
                                            alt={r.name}
                                            sx={{ width: "var(--avatar)", height: "var(--avatar)" }}
                                        >
                                            {getInitials(r.name)}
                                        </Avatar>

                                        <div>
                                            <Name>{r.name}</Name>
                                            <Email>{r.email}</Email>
                                        </div>
                                    </AuthorWrap>
                                </BodyCell>

                                <BodyCell>
                                    <Role>{r.role}</Role>
                                    <Dept>{r.dept}</Dept>
                                </BodyCell>

                                <BodyCell align="center">
                                    <StatusPill data-online={r.status === "online"}>
                                        {r.status === "online" ? "Online" : "Offline"}
                                    </StatusPill>
                                </BodyCell>

                                <BodyCell>{r.employed}</BodyCell>

                                <BodyCell align="right">
                                    <EditBtn onClick={() => onEdit?.(r)}>Edit</EditBtn>
                                </BodyCell>
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

const Header = styled("div")({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
});

const Title = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.white,
    fontSize: "var(--title)",
    fontWeight: 700,
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
    height: "var(--row)",
    verticalAlign: "middle",
    padding: "var(--py) 16px",
});

const AuthorWrap = styled("div")({
    display: "flex",
    alignItems: "center",
    gap: 14,
});

const Name = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.white,
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 1.4
}));

const Email = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[100],
    fontSize: 14,
    fontWeight: 700,
    lineHeight: 1.5
}));

const Role = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.white,
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 1.4
}));

const Dept = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[100],
    fontSize: 14,
    fontWeight: 700,
    lineHeight: 1.5
}));

const StatusPill = styled("span")({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2px 12px",
    borderRadius: 8,
    fontSize: 14,
    fontWeight: 700,
    letterSpacing: 0.2,
    color: "#FFF",
    background: "rgba(255,255,255,0.12)",
    border: "1px solid rgba(255,255,255,0.2)",
    '&[data-online="true"]': {
        color: "#FFF",
        background: "#4ADE80",
        border: "1px solid rgba(0,0,0,0.06)",
    },
});

const EditBtn = styled(Button)({
    minWidth: 0,
    textTransform: "none",
    fontSize: 14,
    fontWeight: 400,
    color: "#A0AEC0",
    "&:hover": { background: "rgba(255,255,255,0.16)" },
});