export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "radius",
  navItems: [
    {
      label: "HOME",
      href: "/",
    },
    {
      label: "ABOUT US",
      href: "/about",
    },
    {
      label: "PRINTING&MAILING",
      href: "/print-and-mailing",
    },
    {
      label: "CONTACT",
      href: "/contact",
    },
  ],
  navMenuItems: [
    {
      label: "Radius Mapping",
      href: "/radius-mapping",
    },
    {
      label: "Property Ownership and Occupant List",
      href: "/property-ownership",
    },
    {
      label: "Certified Affidavit Preparation",
      href: "/certified-affidavit",
    },
    {
      label: "Public Notice Printing and Mailing",
      href: "/public-notice",
    },
    {
      label: "Public Hearing Signs",
      href: "/public-hearing",
    },
    {
      label: "Notary and Document Certification",
      href: "/notary-document",
    },
    {
      label: "Telecommunications Mapping and Notification",
      href: "/telecommunications",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui-docs-v2.vercel.app",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
