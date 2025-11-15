import { useDispatch } from 'react-redux';
import { Button, Link, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { login } from '../../redux/authAction';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

type Props = { onSwitch: () => void };

type SignUpValues = {
    name: string;
    email: string;
    password: string;
};

const signUpSchema = Yup.object({
    name: Yup.string().required('Enter name'),
    email: Yup.string().email('Invalid email').required('Enter email'),
    password: Yup.string().min(6, 'Min 6 characters').required('Enter password'),
});


export default function SignUpForm({ onSwitch }: Props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formik = useFormik<SignUpValues>({
        initialValues: { name: '', email: '', password: '' },
        validationSchema: signUpSchema,
        onSubmit: async (values, helpers) => {
            try {
                dispatch(login(values.email, values.name ?? null));
                navigate('/dashboard', { replace: true });
            } finally {
                helpers.setSubmitting(false);
            }
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} noValidate>
            <PageWrap>
                <Welcome>
                    <Title>Welcome!</Title>
                    <Desc>
                        Use these awesome forms to login or create new account in your project for free.
                    </Desc>
                </Welcome>

                <AuthCard>
                    <StyledTextField
                        label="Name"
                        placeholder="Your full name"
                        fullWidth
                        {...formik.getFieldProps('name')}
                        InputLabelProps={{
                            shrink: true,
                            sx: { color: '#fff', fontSize: 14, fontWeight: 400 },
                        }}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={(formik.touched.name && formik.errors.name) || ' '}
                    />

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
                        autoComplete="email"
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
                        autoComplete="new-password"
                    />

                    <ButtonAction type="submit" variant="contained" fullWidth disabled={formik.isSubmitting}>
                        {formik.isSubmitting ? 'Signing up...' : 'SIGN UP'}
                    </ButtonAction>

                    <Row>
                        <Question>Already have an account?</Question>
                        <Link component="button" onClick={onSwitch} variant="body1" underline="hover">
                            &nbsp;Log In
                        </Link>
                    </Row>
                </AuthCard>
            </PageWrap>
        </form>
    );
}

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
        '& .MuiOutlinedInput-input': {
            padding: '18px 22px',
            '::placeholder': { color: 'rgba(255,255,255,0.6)', opacity: 1 },
        },
    },
    '& .MuiFormHelperText-root': { marginLeft: 0 },
});

const PageWrap = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: 40,
    alignItems: 'center',
});

const Welcome = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    alignItems: 'center',
    textAlign: 'center',
});

const Title = styled(Typography)({
    color: '#fff',
    fontSize: 36,
    fontWeight: 800,
    lineHeight: 1.2,
});

const Desc = styled(Typography)({
    color: 'rgba(255,255,255,0.75)',
    fontSize: 16,
    maxWidth: 520,
});

const AuthCard = styled('div')({
    width: '100%',
    maxWidth: 520,
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    padding: '28px 24px',
    borderRadius: 24,
    border: '1px solid rgba(255,255,255,0.2)',
    background:
        'linear-gradient(124deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)',
    backdropFilter: 'blur(18px)',
    boxShadow: '0 10px 40px rgba(0,0,0,0.35)',
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
    gap: 4,
});

const Question = styled(Typography)({
    color: 'rgba(255,255,255,0.75)',
    fontSize: 16,
    fontWeight: 400,
});