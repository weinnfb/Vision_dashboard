import { styled, Typography } from "@mui/material";
import { platformSettingsMock } from "../../../../../../mocks/platformSetting/platformSetting";
import { RowSwitch } from "./RowSwitch";

export default function PlatformSettingsCard() {
    return (
        <Card>
            <Title>Platform Settings</Title>

            <Content>
                {platformSettingsMock.map((section) => (
                    <Section key={section.id}>
                        <SectionTitle>{section.title}</SectionTitle>

                        <List>
                            {section.items.map((it) => (
                                <RowSwitch key={it.id} label={it.label} defaultChecked={it.enabled} />
                            ))}
                        </List>
                    </Section>
                ))}
            </Content>
        </Card>
    );
}

const Card = styled("section")({
    width: "100%",
    borderRadius: 20,
    padding: "28px 22px",
    color: "#fff",
    background:
        "linear-gradient(180deg, rgba(16,30,60,0.78) 0%, rgba(9,20,44,0.92) 55%, rgba(27,68,140,0.55) 100%)",
    boxShadow: "0 18px 46px rgba(0,0,0,0.35)",
    display: "flex",
    flexDirection: "column",
    gap: 27,
});

const Title = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.white,
    fontWeight: 700,
    fontSize: 18,
}));

const Content = styled("div")({
    display: "flex",
    flexDirection: "column",
    gap: 41,
});

const Section = styled("div")({
    display: "flex",
    flexDirection: "column",
    gap: 20,
});

const SectionTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[100],
    fontSize: 14,
    fontWeight: 400,
    textTransform: "uppercase",
    opacity: 0.9,
    lineHeight: 1.5
}));

const List = styled("div")({
    display: "flex",
    flexDirection: "column",
    gap: 19,
});
