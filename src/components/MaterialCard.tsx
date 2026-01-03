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
  plastic: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  metal: "bg-slate-500/20 text-slate-300 border-slate-500/30",
  "e-waste": "bg-amber-500/20 text-amber-300 border-amber-500/30",
  wood: "bg-orange-500/20 text-orange-300 border-orange-500/30",
  glass: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  other: "bg-gray-500/20 text-gray-300 border-gray-500/30",
};

export function MaterialCard({ material, onRequest, className, ...props }: MaterialCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl border border-border bg-card p-5 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-primary/30",
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
        variant="glow"
        size="sm"
        className="w-full"
        onClick={() => onRequest(material)}
      >
        Request Material
      </Button>

      <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-primary/0 transition-all duration-300 group-hover:ring-primary/20" />
    </div>
  );
}
