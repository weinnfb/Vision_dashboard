import {
    styled, Typography, Button, Dialog, DialogTitle,
    DialogContent, DialogActions, TextField, IconButton
} from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import * as React from "react";

type Brand = "visa" | "mastercard" | "unknown";
type CardItem = { id: string; brand: Brand; number: string };

const digitsOnly = (s: string) => s.replace(/\D/g, "");
const detect = (d: string): Brand => (/^4/.test(d) ? "visa" : /^5[1-5]/.test(d) ? "mastercard" : "unknown");
const mask = (d: string) => {
    const s = digitsOnly(d).slice(0, 16).padEnd(16, "•");
    const g = s.match(/.{1,4}/g) ?? [];
    if (g.length >= 4) g[3] = "XXXX";
    return g.join(" ");
};

export default function PaymentMethods() {
    const [cards, setCards] = React.useState<CardItem[]>([
        { id: "1", brand: "mastercard", number: "7812213908231234" },
        { id: "2", brand: "visa", number: "7812213908235678" },
    ]);

    const [openAdd, setOpenAdd] = React.useState(false);
    const [num, setNum] = React.useState("");
    const [toRemove, setToRemove] = React.useState<CardItem | null>(null);

    const onAdd = () => {
        const d = digitsOnly(num);
        if (d.length < 13) return;
        setCards((prev) => [...prev, { id: String(Date.now()), brand: detect(d), number: d }]);
        setOpenAdd(false);
        setNum("");
    };

    const confirmRemove = () => {
        if (!toRemove) return;
        setCards((prev) => prev.filter(c => c.id !== toRemove.id));
        setToRemove(null);
    };

    return (
        <Wrap>
            <Header>
                <Title>Payment Method</Title>
                <Button
                    onClick={() => setOpenAdd(true)}
                    startIcon={<AddRoundedIcon />}
                    sx={{ textTransform: "none", borderRadius: 12, bgcolor: "#0075FF", ":hover": { bgcolor: "#2E6EE6" } }}
                    variant="contained"
                >
                    Add a new card
                </Button>
            </Header>

            <Grid>
                {cards.map((c) => (
                    <Card key={c.id} tabIndex={0}>
                        <DeleteBtn
                            className="del"
                            aria-label={`Delete ${c.brand} card ${mask(c.number)}`}
                            onClick={(e) => { e.stopPropagation(); setToRemove(c); }}
                            size="small"
                        >
                            <CloseRoundedIcon fontSize="small" />
                        </DeleteBtn>

                        <BrandBox>
                            {c.brand === "visa" ? (
                                <BrandPill>VISA</BrandPill>
                            ) : (
                                <MastercardIcon>
                                    <span className="l" />
                                    <span className="r" />
                                </MastercardIcon>
                            )}
                        </BrandBox>

                        <Typography sx={{ fontWeight: 700 }}>{mask(c.number)}</Typography>
                    </Card>
                ))}
            </Grid>
            <Dialog
                open={openAdd}
                onClose={() => setOpenAdd(false)}
                PaperProps={{ sx: { borderRadius: 3, bgcolor: "#0F1A35", color: "#fff", width: 420 } }}
            >
                <DialogTitle sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    Add a new card
                    <IconButton onClick={() => setOpenAdd(false)} size="small" sx={{ color: "rgba(255,255,255,0.7)" }}>
                        <CloseRoundedIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent sx={{ pt: 1 }}>
                    <TextField
                        fullWidth
                        label="Card number"
                        value={num}
                        onChange={(e) => setNum(digitsOnly(e.target.value).slice(0, 16))}
                        placeholder="1234 5678 9012 3456"
                        InputLabelProps={{ sx: { color: "rgba(255,255,255,0.8)" } }}
                        InputProps={{
                            sx: {
                                color: "#fff",
                                bgcolor: "rgba(255,255,255,0.06)",
                                borderRadius: 2,
                                "& fieldset": { borderColor: "rgba(255,255,255,0.15)" },
                                "&:hover fieldset": { borderColor: "rgba(255,255,255,0.35)" },
                            },
                        }}
                    />
                </DialogContent>
                <DialogActions sx={{ p: 2 }}>
                    <Button onClick={() => setOpenAdd(false)} sx={{ color: "rgba(255,255,255,0.9)" }}>Cancel</Button>
                    <Button onClick={onAdd} variant="contained" disabled={digitsOnly(num).length < 13}
                        sx={{ bgcolor: "#3B82F6", ":hover": { bgcolor: "#2E6EE6" } }}>
                        Save card
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog
                open={!!toRemove}
                onClose={() => setToRemove(null)}
                PaperProps={{ sx: { borderRadius: 3, bgcolor: "#0F1A35", color: "#fff", width: 420 } }}
            >
                <DialogTitle>Delete this card?</DialogTitle>
                <DialogContent sx={{ pt: 1 }}>
                    <Typography variant="body2" sx={{ opacity: .85 }}>
                        {toRemove ? `${toRemove.brand.toUpperCase()} • ${mask(toRemove.number)}` : ""}
                    </Typography>
                </DialogContent>
                <DialogActions sx={{ p: 2 }}>
                    <Button onClick={() => setToRemove(null)} sx={{ color: "rgba(255,255,255,0.9)" }}>Cancel</Button>
                    <Button onClick={confirmRemove} color="error" variant="contained">Delete</Button>
                </DialogActions>
            </Dialog>
        </Wrap>
    );
}


const Wrap = styled("div")({
    width: "100%",
    borderRadius: 20,
    padding: 25,
    background:
        "linear-gradient(127deg, rgba(6, 11, 40, 0.74) 0%, rgba(20, 15, 50, 0.75) 40%, rgba(30, 20, 60, 0.72) 70%, rgba(10, 14, 35, 0.71) 100%)",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    gap: 34,
    minHeight: 172
});

const Header = styled("div")({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
});

const Title = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.white,
    fontWeight: 700,
    fontSize: 18,
    letterSpacing: 0.2,
}));

const Grid = styled("div")({
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 28,
    "@media (max-width: 900px)": { gridTemplateColumns: "1fr" },
});

const Card = styled("div")({
    position: "relative",
    display: "flex",
    alignItems: "center",
    gap: 15,
    padding: "23px 48px 23px 23px",
    borderRadius: 20,
    background: "linear-gradient(117deg, rgba(255,255,255,0.00) -3.91%, rgba(255,255,255,0.04) 75.27%)",
    boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)",
    outline: "none",
    "&:hover .del, &:focus-within .del": { opacity: 1, transform: "translateY(0)" },
});

const DeleteBtn = styled(IconButton)({
    position: "absolute",
    top: 8,
    right: 8,
    width: 28,
    height: 28,
    borderRadius: 10,
    color: "rgba(255,255,255,0.9)",
    background: "rgba(255,255,255,0.10)",
    transition: "opacity .2s ease, transform .2s ease, background .2s ease",
    opacity: 0,
    transform: "translateY(-4px)",
    "&:hover": { background: "rgba(255,255,255,0.18)" },
});

const BrandBox = styled("div")({
    display: "grid",
    placeItems: "center",
    width: 56,
});

const BrandPill = styled("span")({
    display: "inline-block",
    padding: "6px 10px",
    fontSize: 12,
    fontWeight: 800,
    letterSpacing: 1,
    borderRadius: 10,
    background: "rgba(255,255,255,0.1)",
});

const MastercardIcon = styled("span")({
    position: "relative",
    width: 32,
    height: 20,
    ".l, .r": {
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        width: 16,
        height: 16,
        borderRadius: "50%",
        mixBlendMode: "screen",
    },
    ".l": { left: 2, background: "#F59E0B" },
    ".r": { right: 2, background: "#EF4444" },
});
