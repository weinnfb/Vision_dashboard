import { styled, Switch, Typography } from "@mui/material";
import { useState } from "react";

type Props = { label: string; defaultChecked?: boolean };

export function RowSwitch({ label, defaultChecked = false }: Props) {
    const [on, setOn] = useState(defaultChecked);

    return (
        <Row>
            <Toggle
                checked={on}
                onChange={(e) => setOn(e.target.checked)}
                inputProps={{ "aria-label": label }}
            />
            <ItemText>{label}</ItemText>
        </Row>
    );
}

const Row = styled("label")({
    display: "flex",
    alignItems: "center",
    gap: 15,
    cursor: "pointer",
});

const ItemText = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[100],
    fontSize: 16,
    fontWeight: 400
}));

const Toggle = styled(Switch)({
    width: 44,
    height: 24,
    padding: 0,
    display: 'inline-flex',

    '& .MuiSwitch-switchBase': {
        padding: 3,
        transition: 'transform 180ms ease',
        '&.Mui-checked': {
            transform: 'translateX(20px)', 
            color: '#fff',
            '& + .MuiSwitch-track': {
                backgroundColor: '#3B82F6',
                opacity: 1,
            },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            boxShadow: '0 0 0 4px rgba(59,130,246,.35)',
        },
    },

    '& .MuiSwitch-thumb': {
        width: 18,
        height: 18,
        borderRadius: 999,
        background: '#fff',
        boxShadow: '0 2px 6px rgba(0,0,0,.35)',
    },

    '& .MuiSwitch-track': {
        borderRadius: 999,
        background: 'rgba(255,255,255,.14)',
        opacity: 1,
        transition: 'background-color 180ms ease',
    },
});


