import { MapPin, Package, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface Material {
  id: string;
  name: string;
  category: "plastic" | "metal" | "e-waste" | "wood" | "glass" | "other";
  quantity: number;
  unit: string;
  location: string;
  description?: string;
  dateAdded: string;
}

interface MaterialCardProps extends React.HTMLAttributes<HTMLDivElement> {
  material: Material;
  onRequest: (material: Material) => void;
}

const categoryColors: Record<Material["category"], string> = {
  plastic: "bg-blue-100 text-blue-700 border-blue-200",
  metal: "bg-slate-100 text-slate-700 border-slate-200",
  "e-waste": "bg-amber-100 text-amber-700 border-amber-200",
  wood: "bg-orange-100 text-orange-700 border-orange-200",
  glass: "bg-cyan-100 text-cyan-700 border-cyan-200",
  other: "bg-gray-100 text-gray-700 border-gray-200",
};

export function MaterialCard({ material, onRequest, className, ...props }: MaterialCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl border border-border bg-card p-5 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1",
        className
      )}
      {...props}
    >
      <div className="flex items-start justify-between mb-4">
        <Badge
          variant="outline"
          className={cn("capitalize font-medium", categoryColors[material.category])}
        >
          <Tag className="h-3 w-3 mr-1" />
          {material.category}
        </Badge>
        <span className="text-xs text-muted-foreground">{material.dateAdded}</span>
      </div>

      <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-1">
        {material.name}
      </h3>

      {material.description && (
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {material.description}
        </p>
      )}

      <div className="flex flex-col gap-2 mb-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Package className="h-4 w-4 text-primary" />
          <span>
            {material.quantity} {material.unit}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 text-primary" />
          <span>{material.location}</span>
        </div>
      </div>

      <Button
        variant="hero"
        size="sm"
        className="w-full"
        onClick={() => onRequest(material)}
      >
        Request Material
      </Button>

      <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-primary/0 transition-all duration-300 group-hover:ring-primary/10" />
    </div>
  );
}
