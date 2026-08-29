export interface EventInput {
  title: string;
  description: string;
  date: string;
  location: string;
  category: string;
}

export function validateEvent(input: EventInput) {
  const errors: Partial<Record<keyof EventInput, string>> = {};
  if (!input.title.trim()) errors.title = "Event title is required";
  if (!input.description.trim()) errors.description = "Event description is required";
  if (!input.date) errors.date = "Event date is required";
  if (!input.location.trim()) errors.location = "Event location is required";
  if (!input.category.trim()) errors.category = "Choose an event category";
  return { success: Object.keys(errors).length === 0, errors };
}
