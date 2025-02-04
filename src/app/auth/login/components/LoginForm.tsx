"use client";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import { login } from "../api";
import { useForm } from "react-hook-form";
import { LOGIN_SCHEMA } from "../schema/login";
import { LoginSchema } from "../schema/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

const LoginForm = () => {
 const router = useRouter();
 const {
  handleSubmit,
  watch,
  setValue,
  formState: { errors },
 } = useForm<LoginSchema>({
  resolver: zodResolver(LOGIN_SCHEMA),
  mode: "onChange",
  defaultValues: {
   identifier: "",
   password: "",
  },
 });

 const onSubmit = async (data: LoginSchema) => {
  const response = await login(data);
  if (response.status === "success") {
   localStorage.setItem("token", response.data.token);
   localStorage.setItem("user", JSON.stringify(response.data.user));
   router.push("/");
  }
 };

 return (
  <Container
   maxWidth="sm"
   sx={{
    backdropFilter: "blur(10px)",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: "10px",
    padding: "2rem",
    marginTop: "5rem",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
   }}
  >
   <Typography
    className="text-2xl text-black font-bold"
    variant="h4"
    align="center"
    gutterBottom
   >
    Login
   </Typography>
   <Box
    component="form"
    onSubmit={handleSubmit(onSubmit)}
    noValidate
    sx={{ mt: 1 }}
   >
    <TextField
     margin="normal"
     required
     fullWidth
     id="userName"
     label="Username"
     name="userName"
     autoComplete="username"
     autoFocus
     error={!!errors.identifier}
     helperText={errors.identifier?.message}
     value={watch("identifier")}
     onChange={(e) =>
      setValue("identifier", e.target.value, { shouldValidate: true })
     }
    />
    <TextField
     margin="normal"
     required
     fullWidth
     name="password"
     label="Password"
     type="password"
     id="password"
     autoComplete="current-password"
     error={!!errors.password}
     helperText={errors.password?.message}
     value={watch("password")}
     onChange={(e) =>
      setValue("password", e.target.value, { shouldValidate: true })
     }
    />
    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
     Login
    </Button>
   </Box>
  </Container>
 );
};

export default LoginForm;
