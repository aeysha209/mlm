"use client";

import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../lib/auth/store";
import { Login as loginUser } from "../lib/auth/authActions";
import { cookies } from "next/headers";
type FormValues = {
  email: string;
  password: string;
};
//email": "user@example.com",
//"password": "Password123"//
export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [agreedToTerms, setShowAgreeToTerms] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    mode: "onTouched",
  });
  const password = watch("password");

  const onSubmit = async (data: FormValues) => {
    const payload = {
      email: data.email,
      password: data.password,
    };
    const result = await dispatch(loginUser(payload));

    ///  store in cookies//
    //    cookies().set("token",){
    /// httpOnly:true
    // secure: true
    //path:"/"
    // max: 60 * 60 * 24,
    // };
    // ✅ store user in localStorage


    console.log("fff", result, payload);

    if (loginUser.fulfilled.match(result)) {
      const user = result.payload.user;
      const token = result.payload.token;
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", JSON.stringify(token));
      document.cookie = "token=${token};pathe=/;max-age=${7 * 24 * 60 };SameSite=Strict";
      alert("Login successful");
      reset();
      router.push("/dashboard");

    }
  };
  return (
    <div
      style={{
        backgroundColor: "#F2EDE9",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          backgroundColor: "#fff",
          padding: "40px",
          borderRadius: "12px",
          width: "100%",
          maxWidth: "400px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "10px" }}>Login</h2>

        {/* Email */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            {...register("email", { required: "Email is required" })}
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: errors.email ? "2px solid red" : "1px solid #ccc",
              fontSize: "16px",
            }}
          />
          {errors.email && (
            <span style={{ color: "red", fontSize: "14px", marginTop: "4px" }}>
              {errors.email.message}
            </span>
          )}
        </div>

        {/* Password */}
        <div style={{ position: "relative", display: "flex", flexDirection: "column" }}>
          <label>Password</label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 8, message: "Password must be at least 8 characters" },
            })}
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: errors.password ? "2px solid red" : "1px solid #ccc",
              fontSize: "16px",
            }}
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: "absolute",
              right: "12px",
              top: "38px",
              cursor: "pointer",
              color: "#555",
            }}
          >
            {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </span>
          {errors.password && (
            <span style={{ color: "red", fontSize: "14px", marginTop: "4px" }}>
              {errors.password.message}
            </span>
          )}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "14px",
            borderRadius: "9999px",
            border: "2px solid #8F5A89",
            backgroundColor: "#76356E",
            color: "#fff",
            fontWeight: 500,
            fontSize: "16px",
            cursor: "pointer",
            width: "100%",
          }}
        >
          {loading ? "Submitting..." : "Login"}
        </button>
        <Link href="/registration">Register</Link>
      </form>
    </div>
  );
}