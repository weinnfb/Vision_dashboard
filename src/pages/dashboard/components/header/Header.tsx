import { styled, Typography, InputBase, IconButton, } from "@mui/material";
import type { HeaderMeta } from "../../../../mocks/headerMocks/HeaderMocks";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';

interface HeaderProps {
    activeTab: string;
    headerMap: Record<string, HeaderMeta>;
    userName: string | null;
    inSignInClick?: () => void;
    onSettingsClick?: () => void;
};

const Header = ({ activeTab, headerMap, userName = null, inSignInClick, onSettingsClick }: HeaderProps) => {
    const meta = headerMap[activeTab] ?? { title: activeTab, crumbs: ["Pages", activeTab] };
    const crumbs = meta.crumbs ?? ["Pages", meta.title];
    const prefix = crumbs.slice(0, -1).join(" / ");
    const last = crumbs[crumbs.length - 1] ?? meta.title;

    return (
        <Root>
            <Inner>
                <Left>
                    <Crumbs>
                        {prefix && <CrumbMuted>{prefix} /</CrumbMuted>}
                        <Crumb>{last}</Crumb>
                    </Crumbs>
                    <Title>{meta.title}</Title>
                </Left>

                <Right>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <SearchBox>
                            <SearchRoundedIcon sx={{ width: 15, height: 15 }} />
                            <InputBase placeholder="Type here..." sx={{ ml: 1, flex: 1, color: '#FFFF'}} />
                        </SearchBox>
                    </form>

                    {userName ? (
                        <UserPill>
                            <PersonRoundedIcon />
                            <UserName>{userName}</UserName>
                        </UserPill>
                    ) : (
                        <AuthButton type="button" onClick={inSignInClick}>
                            <PersonRoundedIcon sx={{ fontSize: 18, opacity: 0.9 }} />
                            <span>Sign In</span>
                        </AuthButton>
                    )}

                    <IconButton size="small" onClick={onSettingsClick}>
                        <SettingsRoundedIcon sx={{ color: '#ffff'}}  />
                    </IconButton>
                    <IconButton size="small">
                        <NotificationsRoundedIcon sx={{ color: '#ffff'}} />
                    </IconButton>
                </Right>
            </Inner>
        </Root>
    )
};
export default Header;

const Root = styled('div')({
    position: "sticky",
    top: 0,
    zIndex: 1100,
    backdropFilter: "saturate(180%) blur(8px)",
    background: "linear-gradient(180deg, rgba(8,14,33,0.92), rgba(8,14,33,0.86))",
    display: 'flex',
    justifyContent: 'space-between'
});

const Inner = styled('div')({
    display: 'flex',
    height: 64,
    width: "100%",
    margin: "0 auto",
    padding: "37px 47px 0px 40px",
    alignItems: "center",
    justifyContent: "space-between",
});

const Left = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
    alignItems: 'flex-start'
});

const Crumbs = styled("div")({
    display: "flex",
    gap: 6,
    alignItems: "baseline"
});

const CrumbMuted = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[100],
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 1
}));

const Crumb = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.white,
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 1
}));

const Title = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.white,
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 1
}));

const Right = styled('div')({
    display: 'flex',
    gap: 18,
    alignItems: 'center'
});

const SearchBox = styled("div")({
    display: "flex",
    alignItems: "center",
    gap: 11,
    padding: "8px 10px",
    minWidth: 260,
    borderRadius: 15,
    border: "0.5px solid rgba(226, 232, 240, 0.30)",
    background: "#0F1535",
    color: "#A0AEC0",
});

const UserPill = styled('div')({
    display: 'flex',
    gap: 4,
    alignItems: 'center'
});

const UserName = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[100],
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 1.5
}));

const AuthButton = styled("button")({
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "6px 10px",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "transparent",
    color: "rgba(255,255,255,0.85)",
    cursor: "pointer",
    fontWeight: 600,
});