export interface HeaderProps {
    isMarathi?: boolean;
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
  faqJson: any; // Using any for schema.org raw JSON to maintain flexibility
}

export interface InventoryBadgeProps {
    text?: string;
}
