export const validationMessages = {
  firstName: {
    "any.required": "Please enter your first name",
    "string.empty": "First name cannot be empty",
    "string.min": "First name must be at least 2 characters long",
    "string.max": "First name cannot exceed 50 characters",
  },

  lastName: {
    "any.required": "Please enter your last name",
    "string.empty": "Last name cannot be empty",
    "string.min": "Last name must be at least 2 characters long",
    "string.max": "Last name cannot exceed 50 characters",
  },

  email: {
    "any.required": "Please enter your email address",
    "string.empty": "Email address cannot be empty",
    "string.email": "Please enter a valid email address",
  },

  password: {
    "any.required": "Please enter your password",
    "string.empty": "Password cannot be empty",
    "string.min": "Password must be at least 8 characters long",
    "string.max": "Password cannot exceed 30 characters",
    "string.pattern.base":
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
  },

  role: {
    "any.required": "Please select a role",
    "any.only": "Selected role is invalid",
  },

  token: {
    "any.required": "Token is required",
    "string.empty": "Token cannot be empty",
  },

  refreshToken: {
    "any.required": "Refresh token is required",
    "string.empty": "Refresh token cannot be empty",
  },

  currentPassword: {
    "any.required": "Please enter your current password",
    "string.empty": "Current password cannot be empty",
  },

  newPassword: {
    "any.required": "Please enter your new password",
    "string.empty": "New password cannot be empty",
    "string.min": "New password must be at least 8 characters long",
    "string.max": "New password cannot exceed 30 characters",
    "string.pattern.base":
      "New password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
  },

  confirmPassword: {
    "any.required": "Please confirm your password",
    "string.empty": "Confirm password cannot be empty",
    "any.only": "Passwords do not match",
  },
};
