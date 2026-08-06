import { z } from "zod";

const stripHtml = (val: string) => val.replace(/</g, "&lt;").replace(/>/g, "&gt;");

export const EnquirySchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").transform(stripHtml),
  phone: z
    .string()
    .transform((val) => {
      let cleaned = val.replace(/[^\d+]/g, "");
      if (cleaned.startsWith("+91")) cleaned = cleaned.slice(3);
      else if (cleaned.startsWith("91") && cleaned.length === 12) cleaned = cleaned.slice(2);
      else if (cleaned.startsWith("0") && cleaned.length === 11) cleaned = cleaned.slice(1);
      return cleaned.trim();
    })
    .pipe(z.string().regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit mobile number")),
  email: z.string().trim().email("Please enter a valid email address").or(z.literal("")).optional().transform(v => v ? stripHtml(v) : v),
  timing: z.string().min(1, "Please select an expected visit timing").transform(stripHtml),
  intent: z.string().min(1, "Please select an investment goal").transform(stripHtml),
  source_url: z.string().optional().transform(v => v ? stripHtml(v) : v),
  form_id: z.string().optional().transform(v => v ? stripHtml(v) : v),
  plot_id: z.string().optional().transform(v => v ? stripHtml(v) : v),
  source_meta: z.string().optional().transform(v => v ? stripHtml(v) : v),
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
