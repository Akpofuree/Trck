export interface KycInput { legalName: string; identityDocument: string; proofOfAddress: string }

export function validateKyc(input: KycInput) {
  const errors: Partial<Record<keyof KycInput, string>> = {};
  if (!input.legalName.trim()) errors.legalName = "Legal name is required";
  if (!input.identityDocument) errors.identityDocument = "Identity document is required";
  if (!input.proofOfAddress) errors.proofOfAddress = "Proof of address is required";
  return { success: Object.keys(errors).length === 0, errors };
}
