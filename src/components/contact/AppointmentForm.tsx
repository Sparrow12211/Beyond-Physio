"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  service: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  preferredDate?: string;
  preferredTime?: string;
}

const initialForm: FormData = {
  fullName: "",
  phone: "",
  email: "",
  preferredDate: "",
  preferredTime: "",
  service: "",
  message: "",
};

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.fullName.trim()) {
    errors.fullName = "Full name is required";
  }

  if (!data.phone.trim()) {
    errors.phone = "Phone number is required";
  } else if (!/^[\d\s+\-()]{7,}$/.test(data.phone)) {
    errors.phone = "Please enter a valid phone number";
  }

  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!data.preferredDate) {
    errors.preferredDate = "Preferred date is required";
  }

  if (!data.preferredTime) {
    errors.preferredTime = "Preferred time is required";
  }

  return errors;
}

export function AppointmentForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        className="rounded-2xl bg-[var(--color-deep-teal)]/70 p-8 text-center ring-1 ring-[rgba(225,16,0,0.08)]"
        role="status"
      >
        <p className="font-serif text-xl font-bold text-white">
          Request Received
        </p>
        <p className="mt-3 text-sm leading-relaxed text-foreground/70">
          Thank you for your appointment request. This form is for frontend
          demonstration — please call or WhatsApp us to confirm your booking.
        </p>
      </div>
    );
  }

  const fieldClass =
    "w-full min-w-0 rounded-lg border border-[rgba(255,255,255,0.06)] bg-[var(--color-mint)] px-4 py-3 text-base text-white placeholder:text-foreground/40 transition-colors focus:border-[var(--color-teal)] focus:outline-none focus:ring-2 focus:ring-[var(--color-teal)]/20 sm:text-sm min-h-[44px]";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
      <div className="grid min-w-0 gap-4 sm:grid-cols-2 sm:gap-5">
        <Field label="Full Name" id="fullName" error={errors.fullName} required>
          <input
            id="fullName"
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            className={fieldClass}
            placeholder="Your full name"
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
          />
        </Field>

        <Field label="Phone Number" error={errors.phone} required>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className={fieldClass}
            placeholder="0300-0000000"
            aria-invalid={!!errors.phone}
          />
        </Field>
      </div>

      <Field label="Email" error={errors.email} required>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className={fieldClass}
          placeholder="you@example.com"
          aria-invalid={!!errors.email}
        />
      </Field>

      <div className="grid min-w-0 gap-4 sm:grid-cols-2 sm:gap-5">
        <Field label="Preferred Date" error={errors.preferredDate} required>
          <input
            type="date"
            name="preferredDate"
            value={form.preferredDate}
            onChange={handleChange}
            className={fieldClass}
            min={new Date().toISOString().split("T")[0]}
            aria-invalid={!!errors.preferredDate}
          />
        </Field>

        <Field label="Preferred Time" error={errors.preferredTime} required>
          <input
            type="time"
            name="preferredTime"
            value={form.preferredTime}
            onChange={handleChange}
            className={fieldClass}
            aria-invalid={!!errors.preferredTime}
          />
        </Field>
      </div>

      <Field label="Service">
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          className={cn(fieldClass, "cursor-pointer")}
        >
          <option value="">Select a service (optional)</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Message">
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          className={cn(fieldClass, "resize-y")}
          placeholder="Tell us about your concerns or questions..."
        />
      </Field>

      <Button type="submit" variant="primary" className="w-full sm:w-auto">
        Request Appointment
      </Button>

      <p className="text-xs text-foreground/50">
        This form does not send email automatically. Please contact us directly
        to confirm your appointment.
      </p>
    </form>
  );
}

function Field({
  label,
  error,
  required,
  children,
  id,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
  id?: string;
}) {
  const fieldId = id ?? label.toLowerCase().replace(/\s+/g, "-");
  return (
    <div>
      <label htmlFor={fieldId} className="mb-1.5 block text-sm font-medium text-white">
        {label}
        {required && <span className="text-[var(--color-teal)]"> *</span>}
      </label>
      {children}
      {error && (
        <p id={`${fieldId}-error`} className="mt-1 text-xs text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
