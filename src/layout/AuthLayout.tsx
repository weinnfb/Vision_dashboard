import type { ReactNode } from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

interface Props {
    children: ReactNode;
};

export const AuthLayout = ({ children }: Props) => {
    return (
        <Wrapper>
            <Left>
                <LeftContent>
                    <ImgBack src="/images/auth-image.png" />
                    <TextPart>
                        <Sub>INSPIRED BY THE FUTURE:</Sub>
                        <Title>THE VISION DASHBOARD</Title>
                    </TextPart>
                </LeftContent>
            </Left>
            <Right>
                <RightInner>{children}</RightInner>
            </Right>
        </Wrapper>
    )
}

const Wrapper = styled('div')({
    display: 'grid',
    gridTemplateColumns: '1fr 520px',
    minHeight: '100vh',
    background: 'linear-gradient(159deg, #0F123B 14.25%, #090D2E 56.45%, #020515 86.14%)',
});

const Left = styled('div')({
    position: 'relative',
    overflow: 'hidden',
});

const LeftContent = styled('div')({
    display: 'flex',
    alignItems: 'center'
})


const ImgBack = styled('img')({
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
});

const TextPart = styled('div')({
    position: 'absolute',
    left: '8%',
    bottom: '15%',
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
});

const Sub = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.white,
    fontSize: 20,
    fontWeight: 400,
    letterSpacing: 3.6,
    textTransform: 'uppercase',
    opacity: 0.85,
}));

const Title = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.white,
    fontSize: 36,
    fontWeight: 700,
    letterSpacing: 6.48,
    background: 'linear-gradient(95deg, #FFFFFF 80%, #21242F 103%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
}));

const Right = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '64px 80px'
})

const RightInner = styled('div')({
    width: '100%',
    maxWidth: 520,
});