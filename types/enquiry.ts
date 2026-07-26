import { z } from "zod";

export const EnquirySchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .transform((val) => {
      // Clean leading +91, 91 prefix, leading 0, spaces, dashes, parentheses
      let cleaned = val.replace(/[^\d+]/g, "");
      if (cleaned.startsWith("+91")) cleaned = cleaned.slice(3);
      else if (cleaned.startsWith("91") && cleaned.length === 12) cleaned = cleaned.slice(2);
      else if (cleaned.startsWith("0") && cleaned.length === 11) cleaned = cleaned.slice(1);
      return cleaned.trim();
    })
    .pipe(z.string().regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit mobile number")),
  email: z.string().trim().email("Please enter a valid email address").or(z.literal("")).optional(),
  timing: z.string().min(1, "Please select an expected visit timing"),
  intent: z.string().min(1, "Please select an investment goal"),
  source_url: z.string().optional(),
  form_id: z.string().optional(),
  plot_id: z.string().optional(),
  source_meta: z.string().optional(),
  _honey: z.string().optional(),
  website: z.string().optional(),
});

export type EnquiryData = z.infer<typeof EnquirySchema>;

export interface LeadResponse {
  success: boolean;
  message?: string;
  error?: string;
  vault?: string;
  telemetry?: {
    google_sheets?: { success: boolean; detail: string };
    local_ledger?: string;
    email?: string;
  };
}
