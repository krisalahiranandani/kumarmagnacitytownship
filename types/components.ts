import { FAQPageSchema } from "./schema";

export interface HeaderProps {
  isMarathi?: boolean;
  transparent?: boolean;
}

export interface FooterProps {
  isMarathi?: boolean;
}

export interface EnquiryFormProps {
  formId?: string;
  sourceUrl?: string;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  isModal?: boolean;
}

export interface FAQSectionProps {
  faqJson: FAQPageSchema | null;
}

export interface InventoryBadgeProps {
  text?: string;
}
