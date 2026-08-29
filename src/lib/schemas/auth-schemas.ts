export interface LoginInput { email: string; password: string }
export interface SignupInput { name: string; email: string; password: string }

export function validateLogin(input: LoginInput) {
  const errors: Partial<Record<keyof LoginInput, string>> = {};
  if (!/^\S+@\S+\.\S+$/.test(input.email)) errors.email = "Enter a valid email address";
  if (input.password.length < 8) errors.password = "Password must be at least 8 characters";
  return { success: Object.keys(errors).length === 0, errors };
}

export function validateSignup(input: SignupInput) {
  const errors: Partial<Record<keyof SignupInput, string>> = {};
  if (!input.name.trim()) errors.name = "Name is required";
  if (!/^\S+@\S+\.\S+$/.test(input.email)) errors.email = "Enter a valid email address";
  if (input.password.length < 8) errors.password = "Password must be at least 8 characters";
  return { success: Object.keys(errors).length === 0, errors };
}
