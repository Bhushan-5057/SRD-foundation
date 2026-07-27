export type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
};

export type ContactFormErrors = {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
  phone?: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[\d\s+().-]{7,20}$/;

export function validateContactField(name: string, value: string, requirePhone = false) {
  switch (name) {
    case "firstName":
      if (!value.trim()) return "First name is required.";
      return "";

    case "lastName":
      if (!value.trim()) return "Last name is required.";
      return "";

    case "email":
      if (!value.trim()) return "Email is required.";
      if (!emailRegex.test(value)) return "Please enter a valid email address.";
      return "";

    case "phone":
      if (requirePhone && !value.trim()) return "Phone number is required.";
      if (value.trim() && !phoneRegex.test(value.trim())) {
        return "Please enter a valid phone number.";
      }
      return "";

    case "message":
      if (!value.trim()) return "Message cannot be empty.";
      return "";

    default:
      return "";
  }
}

export function validateContactForm(
  data: ContactFormData,
  options?: { requirePhone?: boolean }
): ContactFormErrors {
  const requirePhone = Boolean(options?.requirePhone);
  const errors: ContactFormErrors = {};

  const firstNameError = validateContactField("firstName", data.firstName);
  if (firstNameError) errors.firstName = firstNameError;

  const lastNameError = validateContactField("lastName", data.lastName);
  if (lastNameError) errors.lastName = lastNameError;

  const emailError = validateContactField("email", data.email);
  if (emailError) errors.email = emailError;

  const phoneError = validateContactField("phone", data.phone ?? "", requirePhone);
  if (phoneError) errors.phone = phoneError;

  const messageError = validateContactField("message", data.message);
  if (messageError) errors.message = messageError;

  return errors;
}
