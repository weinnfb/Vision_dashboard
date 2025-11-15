import { createTheme } from "@mui/material/styles";
import { palette } from "./palette";

const theme = createTheme ({
    palette,
    typography: {
        fontFamily: 'Plus Jakarta Sans',
    }
});
export default theme;