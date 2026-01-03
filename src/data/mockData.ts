import { Material } from "@/components/MaterialCard";

export const mockMaterials: Material[] = [
  {
    id: "1",
    name: "Plastic Containers (Various Sizes)",
    category: "plastic",
    quantity: 50,
    unit: "pieces",
    location: "Engineering Lab B",
    description: "Clean plastic containers from chemistry experiments, various sizes available.",
    dateAdded: "Dec 28",
  },
  {
    id: "2",
    name: "Aluminum Scrap Metal",
    category: "metal",
    quantity: 15,
    unit: "kg",
    location: "Workshop A",
    description: "Leftover aluminum from CNC machining projects.",
    dateAdded: "Dec 30",
  },
  {
    id: "3",
    name: "Circuit Boards & Components",
    category: "e-waste",
    quantity: 25,
    unit: "pieces",
    location: "Electronics Lab",
    description: "Decommissioned circuit boards with salvageable components.",
    dateAdded: "Jan 1",
  },
  {
    id: "4",
    name: "Wooden Pallets",
    category: "wood",
    quantity: 8,
    unit: "pieces",
    location: "Storage Facility",
    description: "Sturdy wooden pallets, great for furniture projects.",
    dateAdded: "Jan 2",
  },
  {
    id: "5",
    name: "Glass Beakers & Tubes",
    category: "glass",
    quantity: 30,
    unit: "pieces",
    location: "Chemistry Dept",
    description: "Used lab glassware, cleaned and ready for reuse.",
    dateAdded: "Jan 2",
  },
  {
    id: "6",
    name: "PVC Pipes",
    category: "plastic",
    quantity: 20,
    unit: "meters",
    location: "Maintenance Building",
    description: "Leftover PVC pipes from plumbing renovation.",
    dateAdded: "Jan 3",
  },
  {
    id: "7",
    name: "Copper Wire Spools",
    category: "metal",
    quantity: 5,
    unit: "kg",
    location: "Electrical Workshop",
    description: "Unused copper wire from electrical projects.",
    dateAdded: "Jan 3",
  },
  {
    id: "8",
    name: "Old Laptop Batteries",
    category: "e-waste",
    quantity: 12,
    unit: "pieces",
    location: "IT Department",
    description: "Li-ion batteries for recycling or cell extraction.",
    dateAdded: "Jan 3",
  },
];

export const impactStats = {
  totalMaterialsReused: 342,
  co2Saved: 1.8,
  activeListings: 45,
  requestsFulfilled: 128,
};

export const categoryStats = [
  { name: "Plastic", value: 35, fill: "hsl(210, 80%, 55%)" },
  { name: "Metal", value: 28, fill: "hsl(215, 20%, 50%)" },
  { name: "E-Waste", value: 18, fill: "hsl(38, 92%, 50%)" },
  { name: "Wood", value: 12, fill: "hsl(25, 70%, 50%)" },
  { name: "Glass", value: 7, fill: "hsl(185, 80%, 45%)" },
];

export const monthlyReuse = [
  { month: "Aug", reused: 18 },
  { month: "Sep", reused: 25 },
  { month: "Oct", reused: 32 },
  { month: "Nov", reused: 45 },
  { month: "Dec", reused: 58 },
  { month: "Jan", reused: 42 },
];

export const locations = [
  "Engineering Lab A",
  "Engineering Lab B",
  "Chemistry Dept",
  "Electronics Lab",
  "Workshop A",
  "Workshop B",
  "Storage Facility",
  "Maintenance Building",
  "IT Department",
  "Science Building",
];

export const categories = [
  { value: "plastic", label: "Plastic" },
  { value: "metal", label: "Metal" },
  { value: "e-waste", label: "E-Waste" },
  { value: "wood", label: "Wood" },
  { value: "glass", label: "Glass" },
  { value: "other", label: "Other" },
];
