export interface SBRouteData {
  title?: string;
  activeTopNav?: string;
  breadcrumbs: Breadcrumb[];
  roles?: string[];
}

export interface Breadcrumb {
  text: string;
  link?: string;
  active?: boolean;
}
