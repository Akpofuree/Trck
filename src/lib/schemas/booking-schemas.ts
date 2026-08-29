export interface BookingDetailsInput {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  specialRequests?: string;
}

export interface ValidationResult<T> {
  success: boolean;
  data?: T;
  errors: Partial<Record<keyof T, string>>;
}

export function validateBookingDetails(input: BookingDetailsInput): ValidationResult<BookingDetailsInput> {
  const errors: ValidationResult<BookingDetailsInput>["errors"] = {};
  if (!input.firstName.trim()) errors.firstName = "First name is required";
  if (!input.lastName.trim()) errors.lastName = "Last name is required";
  if (!/^\S+@\S+\.\S+$/.test(input.email)) errors.email = "Enter a valid email address";
  if (!input.phone.trim()) errors.phone = "Phone number is required";
  if ((input.specialRequests?.length ?? 0) > 500) errors.specialRequests = "Maximum 500 characters";
  return { success: Object.keys(errors).length === 0, data: Object.keys(errors).length ? undefined : input, errors };
}

export interface PromoCodeInput { promoCode: string }

export function validatePromoCode(input: PromoCodeInput): ValidationResult<PromoCodeInput> {
  const promoCode = input.promoCode.trim();
  const errors = promoCode ? {} : { promoCode: "Enter a promo code" };
  return { success: Boolean(promoCode), data: promoCode ? { promoCode } : undefined, errors };
}
