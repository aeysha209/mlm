"use client";

import { FormEvent, useState } from "react";

export default function Registration() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data: any = Object.fromEntries(formData.entries());
    const agreeToTerms = formData.has("agreeToTerms");

    const newErrors: Record<string, string> = {};

    // Validations
    if (!data.email) newErrors.email = "Email is required";
    if (!data.password || data.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    if (data.password !== data.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (!data.nickname) newErrors.nickname = "Nickname is required";
    if (!data.fullName) newErrors.fullName = "Full Name is required";
    if (!agreeToTerms) newErrors.agreeToTerms = "You must agree to the terms";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Remove fields not needed in API
    delete data.confirmPassword;
    delete data.agreeToTerms;

    try {
      setLoading(true);

      const response = await fetch(
        "http://10.11.106.31:5001/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        alert(result.message || "Registration failed");
        setLoading(false);
        return;
      }

      alert("Registration successful ✅");
      console.log("User created:", result);

      setErrors({});
      setAgreedToTerms(false);
      e.currentTarget.reset();
    } catch (error) {
      console.error("Server error:", error);
      alert("Server connection error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Bootstrap CDN */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      />

      <div className="min-vh-100 bg-light d-flex align-items-center justify-content-center py-5">
        <form
          onSubmit={onSubmit}
          className="bg-white p-4 rounded shadow-sm d-flex flex-column gap-3"
          style={{ width: "380px" }}
        >
          <h3 className="text-center h4 mb-3">Registration</h3>

          <div>
            <input
              name="email"
              type="email"
              placeholder="Email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </div>

          <div>
            <input
              name="password"
              type="password"
              placeholder="Password (min 8 chars)"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
          </div>

          <div>
            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              className={`form-control ${
                errors.confirmPassword ? "is-invalid" : ""
              }`}
            />
            {errors.confirmPassword && (
              <div className="invalid-feedback">
                {errors.confirmPassword}
              </div>
            )}
          </div>

          <div>
            <input
              name="nickname"
              type="text"
              placeholder="Nickname"
              className={`form-control ${errors.nickname ? "is-invalid" : ""}`}
            />
            {errors.nickname && (
              <div className="invalid-feedback">{errors.nickname}</div>
            )}
          </div>

          <div>
            <input
              name="fullName"
              type="text"
              placeholder="Full Name"
              className={`form-control ${errors.fullName ? "is-invalid" : ""}`}
            />
            {errors.fullName && (
              <div className="invalid-feedback">{errors.fullName}</div>
            )}
          </div>

          <div>
            <input
              name="referralCode"
              type="text"
              placeholder="Referral Code (optional)"
              className="form-control"
            />
          </div>

          <div className="form-check">
            <input
              type="checkbox"
              name="agreeToTerms"
              className={`form-check-input ${
                errors.agreeToTerms ? "is-invalid" : ""
              }`}
              id="agreeToTermsCheck"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
            />
            <label
              className="form-check-label text-secondary"
              htmlFor="agreeToTermsCheck"
            >
              Agree to terms
            </label>
            {errors.agreeToTerms && (
              <div className="invalid-feedback">
                {errors.agreeToTerms}
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={!agreedToTerms || loading}
            className={`btn mt-2 fw-medium ${
              agreedToTerms
                ? "btn-primary w-100"
                : "btn-secondary w-100 opacity-50"
            }`}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
}