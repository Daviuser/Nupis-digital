export interface NavItem {
  label: string;
  href: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface ContentItem {
  title: string;
  description: string;
}

export interface MethodStep extends ContentItem {
  number: string;
}
