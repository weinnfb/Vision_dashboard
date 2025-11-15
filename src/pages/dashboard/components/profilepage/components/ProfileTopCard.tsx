import { styled, Typography, Button, IconButton, Avatar } from "@mui/material";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import HandymanRoundedIcon from "@mui/icons-material/HandymanRounded";
import { useSelector } from "react-redux";


import { selectUserName, selectUserEmail } from "../../../../../redux/store";

type TabKey = "overview" | "teams" | "projects";

type Props = {
    active?: TabKey;
    onTabChange?: (tab: TabKey) => void;
    avatarSrc?: string;
    onEditAvatar?: () => void;
    className?: string;
};

const initials = (full?: string | null) =>
    (full ?? "")
        .trim()
        .split(/\s+/)
        .slice(0, 2)
        .map((s) => s[0]?.toUpperCase() ?? "")
        .join("") || "U";

export default function ProfileTopBar({
    active = "overview",
    onTabChange,
    avatarSrc,
    onEditAvatar,
    className,
}: Props) {
    const name = useSelector(selectUserName) ?? "Guest";
    const email = useSelector(selectUserEmail) ?? "guest@example.com";

    return (
        <Wrap className={className}>
            <Left>
                <AvatarBox>
                    {avatarSrc ? (
                        <Img src={avatarSrc} alt={name} />
                    ) : (
                        <Fallback>
                            <Typography sx={{ fontWeight: 800, fontSize: 18 }}>{initials(name)}</Typography>
                        </Fallback>
                    )}
                    <EditBtn aria-label="Edit avatar" onClick={onEditAvatar}>
                        <EditRoundedIcon fontSize="small" />
                    </EditBtn>
                </AvatarBox>

                <NameBlock>
                    <Name>{name}</Name>
                    <Email title={email}>{email}</Email>
                </NameBlock>
            </Left>

            <Tabs>
                <TabBtn
                    active={active === "overview"}
                    startIcon={<SettingsRoundedIcon />}
                    onClick={() => onTabChange?.("overview")}
                >
                    Overview
                </TabBtn>
                <TabBtn
                    active={active === "teams"}
                    startIcon={<GroupsRoundedIcon />}
                    onClick={() => onTabChange?.("teams")}
                >
                    Teams
                </TabBtn>
                <TabBtn
                    active={active === "projects"}
                    startIcon={<HandymanRoundedIcon />}
                    onClick={() => onTabChange?.("projects")}
                >
                    Projects
                </TabBtn>
            </Tabs>
        </Wrap>
    );
};

const Wrap = styled("div")({
    width: "100%",
    borderRadius: 20,
    padding: '22px 85px 27px 22px',
    background:
        "linear-gradient(180deg, rgba(16,30,60,0.75) 0%, rgba(9,20,44,0.92) 60%, rgba(27,68,140,0.55) 100%)",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
    flexWrap: "wrap",
});

const Left = styled("div")({
    display: "flex",
    alignItems: "center",
    gap: 23,
    minWidth: 0,
});

const AvatarBox = styled("div")({
    position: "relative",
    width: 80,
    height: 80,
    borderRadius: 16,
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
});

const Img = styled("img")({
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
});

const Fallback = styled(Avatar)({
    width: "100%",
    height: "100%",
    borderRadius: 16,
    background:
        "linear-gradient(135deg, rgba(92,122,255,0.9) 0%, rgba(157,109,255,0.9) 100%)",
    display: "grid",
    placeItems: "center",
    border: "1px solid rgba(255,255,255,0.15)",
});

const EditBtn = styled(IconButton)({
    position: "absolute",
    right: 6,
    bottom: 6,
    width: 26,
    height: 26,
    borderRadius: 8,
    color: "rgba(255,255,255,0.95)",
    background: "rgba(0,0,0,0.35)",
    backdropFilter: "blur(4px)",
    "&:hover": { background: "rgba(0,0,0,0.5)" },
});

const NameBlock = styled("div")({
    display: "flex",
    flexDirection: "column",
    minWidth: 0,
});

const Name = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.white,
    fontWeight: 700,
    fontSize: 18,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
}));

const Email = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[100],
    fontSize: 14,
    fontWeight: 400,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
}));

const Tabs = styled("div")({
    display: "flex",
    alignItems: "center",
    gap: 24,
    marginLeft: "auto",
});

const TabBtn = styled(Button, {
    shouldForwardProp: (p) => p !== "active",
})<{ active?: boolean }>(({ active }) => ({
    textTransform: "none",
    alignItems:'center',
    borderRadius: 12,
    paddingInline: '15px',
    height: 36,
    fontWeight: 700,
    letterSpacing: 0.2,
    color: active ? "#fff" : "rgba(255,255,255,0.92)",
    background: active ? "#0075FF" : "transparent",
    boxShadow: active ? "none" : "inset 0 0 0 1px rgba(255,255,255,0.18)",
    "&:hover": {
        background: active ? "#2E6EE6" : "rgba(255,255,255,0.08)",
    },
}));
