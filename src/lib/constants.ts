import { Phone, Mail, Facebook, Instagram, Youtube, X } from "lucide-react";
import { NavItem } from "@/types/index"

export const NAV_ITEMS: NavItem[] = [
  { label: "About Us", href: "/about" },
  { label: "Matches", href: "/matches" },
  { label: "Programs", href: "/programs" },
  { label: "Coaches", href: "/coaches" },
  { label: "Amenities", href: "/amenities" },
  { label: "Events", href: "/events" },
  { label: "News", href: "/news" },
  { label: "Blogs", href: "/blogs" },
]


export const ADDRESS = "30 Wills Hill Road, Lovedale, NSW";

export const CONTACT_LINKS = [
  { 
    label: "+ 91 5642589752", 
    href: "tel:+915642589752", 
    icon: Phone 
  },
  { 
    label: "info@ssagroup.com", 
    href: "mailto:info@ssagroup.com", 
    icon: Mail 
  }
];

export const SOCIAL_LINKS = [
  { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
  { href: "https://x.com", icon: X, label: "X" },
  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
  { href: "https://youtube.com", icon: Youtube, label: "YouTube" },
];