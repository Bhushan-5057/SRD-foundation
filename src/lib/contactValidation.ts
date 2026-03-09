export type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
};

export type ContactFormErrors = {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactField(name: string, value: string) {
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

    case "message":
      if (!value.trim()) return "Message cannot be empty.";
      return "";

    default:
      return "";
  }
}

export function validateContactForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};

  const firstNameError = validateContactField("firstName", data.firstName);
  if (firstNameError) errors.firstName = firstNameError;

  const lastNameError = validateContactField("lastName", data.lastName);
  if (lastNameError) errors.lastName = lastNameError;

  const emailError = validateContactField("email", data.email);
  if (emailError) errors.email = emailError;

  const messageError = validateContactField("message", data.message);
  if (messageError) errors.message = messageError;

  return errors;
}