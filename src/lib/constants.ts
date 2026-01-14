import { Phone, Mail, Facebook, Instagram, Youtube, X } from "lucide-react"
import { NavItem } from "@/types/index"

const NAV_ITEMS: NavItem[] = [
  { label: "About Us", href: "/about" },
  { label: "Matches", href: "/matches" },
  { label: "Programs", href: "/programs" },
  { label: "Coaches", href: "/coaches" },
  { label: "Amenities", href: "/amenities" },
  { label: "Events", href: "/events" },
  { label: "News", href: "/news" },
  { label: "Blogs", href: "/blogs" },
]

const ADDRESS = "30 Wills Hill Road, Lovedale, NSW"

const CONTACT_LINKS = [
  {
    label: "+ 91 5642589752",
    href: "tel:+915642589752",
    icon: Phone,
  },
  {
    label: "info@ssagroup.com",
    href: "mailto:info@ssagroup.com",
    icon: Mail,
  },
]

const SOCIAL_LINKS = [
  { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
  { href: "https://x.com", icon: X, label: "X" },
  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
  { href: "https://youtube.com", icon: Youtube, label: "YouTube" },
]

const FEATURES = [
  "First venue in the world",
  "First venue in the world",
  "First venue in the world to have 60 multi surface courts (20 clay & 30 hard + 10 natural grass) at one location alongside a stadium",
  "First venue in the world to have 60 multi surface courts (20 clay & 30 hard + 10 natural grass) at one location alongside a stadium",
  "First facility in the world to have capabilities to hold WTA & ATP events on any three court surface at one location",
  "First facility in the world to have capabilities to hold WTA & ATP events on any three court surface at one location",
  "First tennis academy in the world to have capabilities to stage WTA & ATP events too",
  "First tennis academy in the world to have capabilities to stage WTA & ATP events too",
  "First venue in the world with tennis academy, Equestrian Centre, 18 holes golf course, Exhibition Centre, Aboriginal Art & Culture Museum, Stadium, 5 Star Hunter Valley resort and airport all in 500 meters radius",
  "First venue in the world with tennis academy, Equestrian Centre, 18 holes golf course, Exhibition Centre, Aboriginal Art & Culture Museum, Stadium, 5 Star Hunter Valley resort and airport all in 500 meters radius",
  "First one stop tennis academy in Asia Pacific",
  "First one stop tennis academy in Asia Pacific",
]

const TABS_ARR = ["About Us", "Coaches", "Vision", "Mission"]

const STATS = [
  { value: "20", label: "courts" },
  { value: "12", label: "coaches" },
  { value: "17", label: "years" },
  { value: "10", label: "clubs" },
]

const ABOUT_IMAGES = [
  {
    id: 1,
    src: "/assets/masonry-grid/item-one.png",
    alt: "Coaches High Five",
    className: "col-span-7",
  },
  {
    id: 2,
    src: "/assets/masonry-grid/item-two.png",
    alt: "Kids Training",
    className: "col-span-5",
  },
  {
    id: 3,
    src: "/assets/masonry-grid/item-three.png",
    alt: "Man Playing Tennis",
    className: "col-span-6",
  },
  {
    id: 4,
    src: "/assets/masonry-grid/item-four.png",
    alt: "Woman Playing Tennis",
    className: "col-span-6",
  },
]

const GLIMPSE_ITEMS = [
  {
    id: 1,
    src: "/assets/player-exc.webp",
    alt: "Tennis Player",

    className: "col-span-12 md:col-span-5",
    imageClassName: "grayscale-75",
  },
  {
    id: 2,
    src: "/assets/court-exc.webp",
    alt: "Tennis Courts Aerial",
    className: "col-span-12 md:col-span-7",
    imageClassName: "",
  },
]

const PROGRAMS = [
  {
    id: 1,
    title: "Academy",
    subtitle: "Live and train with us",
    src: "/assets/field.webp",
  },
  {
    id: 2,
    title: "Camps",
    subtitle: "Train like a pro with us",
    src: "/assets/coach.webp",
  },
  {
    id: 3,
    title: "Performance",
    subtitle: "Elevate your game with us",
    src: "/assets/player-exc.webp",
  },
]

const PROFESSIONALS = [
  {
    id: 1,
    name: "Craig Tiley",
    role: "CEO Tennis Australia & Australian Open",
    src: "/assets/professional.webp",
  },
  {
    id: 2,
    name: "Stephen Farrow",
    role: "Director - Tournament, Players & International Relations",
    src: "/assets/professional.webp",
  },
  {
    id: 3,
    name: "Cameron Pearson",
    role: "Head Major Events - Tennis Australia",
    src: "/assets/professional.webp",
  },
]

const MARQUEE_ITEMS = [
  "ADOPT",
  "NURTURE",
  "DELIVER",
  "ADOPT",
  "NURTURE",
  "DELIVER",
]

const LOCATIONS = [
  { name: "Hunter Valley Golf And Country Club", distance: "220m" },
  { name: "Rydges Resort Hunter Valley", distance: "550m" },
  { name: "Cressnock Airport", distance: "1.7km" },
  { name: "Cressnock CBD", distance: "7km" },
  { name: "Nulkaba Public School", distance: "4.8km" },
  { name: "Cressnock Hospital", distance: "7.3km" },
  { name: "McDonalds, KFC, Oporto", distance: "7km" },
]

export {
  FEATURES,
  NAV_ITEMS,
  ADDRESS,
  CONTACT_LINKS,
  SOCIAL_LINKS,
  TABS_ARR,
  STATS,
  ABOUT_IMAGES,
  GLIMPSE_ITEMS,
  PROGRAMS,
  PROFESSIONALS,
  MARQUEE_ITEMS,
  LOCATIONS,
}
