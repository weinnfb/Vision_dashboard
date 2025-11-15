import { useDispatch } from 'react-redux';
import { Button, Link, TextField, Typography } from '@mui/material';
import { styled } from "@mui/material/styles";
import { login } from "../../redux/authAction";
import { useNavigate, useLocation } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

type Props = { onSwitch: () => void };

type LoginValues = {
    email: string;
    password: string;
};

const loginSchema = Yup.object({
    email: Yup.string().email('Invaled email').required('Enter email'),
    password: Yup.string().min(4, 'Min 4 characters').required('Enter password')
});


export default function LoginForm({ onSwitch }: Props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation() as any;
    const from = location.state?.from?.pathname || "/dashboard";

    const formik = useFormik<LoginValues>({
        initialValues: { email: "", password: "" },
        validationSchema: loginSchema,
        onSubmit: async (values, helpers) => {
            try {
                dispatch(login(values.email));
                navigate(from, { replace: true });
            } finally {
                helpers.setSubmitting(false);
            }
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} noValidate>
            <FormWrapper>
                <TextPart>
                    <Title>Nice to see you!</Title>
                    <Desc>Enter your email and password to sign in</Desc>
                </TextPart>

                <StyledTextField
                    label="Email"
                    placeholder="Your email address"
                    type="email"
                    fullWidth
                    {...formik.getFieldProps('email')}
                    InputLabelProps={{
                        shrink: true,
                        sx: { color: '#fff', fontSize: 14, fontWeight: 400 },
                    }}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={(formik.touched.email && formik.errors.email) || ' '}
                />


                <StyledTextField
                    label="Password"
                    placeholder="Your password"
                    type="password"
                    fullWidth
                    {...formik.getFieldProps('password')}
                    InputLabelProps={{
                        shrink: true,
                        sx: { color: '#fff', fontSize: 14, fontWeight: 400 },
                    }}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={(formik.touched.password && formik.errors.password) || ' '}
                />

                <ButtonAction
                    type="submit"
                    variant="contained"
                    fullWidth
                    disabled={formik.isSubmitting}>
                    SIGN IN
                </ButtonAction>

                <Row>
                    <Question>Don’t have an account?&nbsp;</Question>
                    <Link component="button" onClick={onSwitch} variant="body1" underline="hover">
                        Sign up
                    </Link>
                </Row>
            </FormWrapper>
        </form>
    );
}

const FormWrapper = styled("div")({
    display: "flex",
    flexDirection: "column",
    gap: 25,
    alignItems: "flex-start",
});

const TextPart = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: 7,
    alignItems: 'flex-start',
});

const Title = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.white,
    fontSize: 30,
    fontWeigh: 700,
    lineHeight: 1.3
}));

const Desc = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[100],
    fontSize: 14,
    fontWeigh: 400,
    lineHeight: 1.4
}));

const StyledTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        borderRadius: 20,
        background:
            'linear-gradient(117deg, rgba(255,255,255,0.00) -3.91%, rgba(255,255,255,0.06) 75.27%)',
        color: '#fff',
        '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.35)' },
        '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.6)' },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#0075FF',
            boxShadow: '0 0 0 3px rgba(0,117,255,0.25)',
            backdropFilter: 'blur(21px)',
        },
        '&.Mui-error .MuiOutlinedInput-notchedOutline': { borderColor: '#F53C2B' },
        '& .MuiOutlinedInput-input': { padding: '18px 22px' },
    },
    '& .MuiFormHelperText-root': { marginLeft: 0 },
});

const ButtonAction = styled(Button)({
    background: '#0075FF',
    padding: '16px 8px',
    borderRadius: 16,
    color: '#fff',
    fontWeight: 700,
    '&:hover': { background: '#0a6af0' },
});

const Row = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

const Question = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[100],
    fontSize: 14,
    fontWeight: 400,
    textAlign: 'center'
}));

