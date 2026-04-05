"use client";

import { useState, useEffect } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "@/app/lib/auth/authActions";
import { AppDispatch, RootState } from "../lib/auth/store";
import { clearAuthError } from "@/app/lib/auth/authSlice"; // Ensure this matches your slice exports
import Link from "next/link";
type FromValues = {
  email: string;
  password: string;
  confirmPassword: string;
  nickname: string;
  name: string;
  referralCode: string;
};

export default function Registration() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  // Get Global State from Redux Toolkit
  const { isLoading, error } = useSelector((state: RootState) => state.auth);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<FromValues>({
    mode: "onTouched", // Validates as the user leaves each input field
  });

  // Watch password to compare with Confirm Password
  const password = watch("password");

  const onSubmit = async (data: FromValues) => {
    if (!agreedToTerms) {
      alert("Please agree to the terms of use.");
      return;
    }

    // Prepare payload: exactly the 5 fields the API expects
    const payload = {
      email: data.email,
      password: data.password,
      nickname: data.nickname,
      name: data.name,
      referralCode: data.referralCode,
    };

    const result = await dispatch(registerUser(payload));

    if (registerUser.fulfilled.match(result)) {
      alert("Registration successful ✅");
      reset();
      router.push("/login");
    }
  };

  return (
    <div style={{ backgroundColor: "#F2EDE9", minHeight: "100vh", paddingBottom: "50px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "50px",
        }}
      >

        <h2 style={{ fontWeight: "600", marginBottom: "20px" }}>
          Set Your Login Information
        </h2>

        <div className="d-grid gap-2 col-lg-4 col-md-6 col-sm-10 mx-auto mt-4">

          {/* User Friendly Server Error Alert */}
          {error && (
            <div className="alert alert-danger alert-dismissible fade show" role="alert">
              <strong>Error:</strong> {error}
              <button
                type="button"
                className="btn-close"
                onClick={() => dispatch(clearAuthError())}
              ></button>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-4 rounded shadow-sm">

            {/* Email Field */}
            <div className="form-group mb-3">
              <label className="text_heading">
                Email address <span className="badge-must">must</span>
              </label>
              <input
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                placeholder="Enter email"
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+$/i, message: "Enter a valid email address" }
                })}
              />
              {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
            </div>

            {/* Password Field */}
            <div className="form-group mb-3" style={{ position: "relative" }}>
              <label className="text_heading">
                Password <span className="badge-must">must</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                className={`form-control ${errors.password ? "is-invalid" : ""}`}
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 8, message: "At least 8 characters required" },
                })}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                style={{ position: "absolute", right: "10px", top: "38px", cursor: "pointer" }}
              >
                {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </span>
              {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
            </div>

            {/* Confirm Password Field */}
            <div className="form-group mb-3" style={{ position: "relative" }}>
              <label className="text_heading">
                Confirm Password <span className="badge-must">must</span>
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
                placeholder="Confirm Password"
                {...register("confirmPassword", {
                  required: "Confirm your password",
                  validate: (value) => value === password || "Passwords do not match",
                })}
              />
              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                style={{ position: "absolute", right: "10px", top: "38px", cursor: "pointer" }}
              >
                {showConfirmPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </span>
              {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword.message}</div>}
            </div>

            {/* Nickname Field */}
            <div className="form-group mb-3">
              <label className="text_heading">
                Nickname <span className="badge-must">must</span>
              </label>
              <input
                type="text"
                placeholder="Enter Nickname"
                className={`form-control ${errors.nickname ? "is-invalid" : ""}`}
                {...register("nickname", { required: "Nickname is required" })}
              />
              {errors.nickname && <div className="invalid-feedback">{errors.nickname.message}</div>}
            </div>

            {/* Full Name Field */}
            <div className="form-group mb-3">
              <label className="text_heading">
                Name <span className="badge-must">must</span>
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                {...register("name", { required: "Full Name is required" })}
              />
              {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
            </div>

            {/* Referral Code Field */}
            <div className="form-group mb-3">
              <label className="text_heading">
                Referral Code
              </label>
              <input
                type="text"
                placeholder="Optional"
                className="form-control"
                {...register("referralCode")}
              />
            </div>

            {/* Terms and Privacy Policy */}
            <div className="form-check mb-4">
              <input
                type="checkbox"
                className="form-check-input"
                id="terms"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
              />
              <label className="form-check-label small" htmlFor="terms">
                I agree to the terms of use and privacy policy
              </label>
            </div>

            {/* Action Buttons */}
            <div className="d-flex justify-content-between">
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => {
                  router.push("/login");
                  reset();
                }}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={isLoading}
                style={{ backgroundColor: "#2b3d51", border: "none" }}
              >
                {isLoading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2"></span>
                    Creating Account...
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
            <Link href="/login">Login</Link>
          </form>
        </div>
      </div>
    </div>
  );
}