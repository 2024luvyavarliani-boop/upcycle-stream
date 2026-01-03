import { useState } from "react";
import { Search, Filter } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { MaterialCard, Material } from "@/components/MaterialCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { mockMaterials, categories } from "@/data/mockData";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

export default function Materials() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedMaterial, setSelectedMaterial] = useState<Material | null>(null);
  const [requestQuantity, setRequestQuantity] = useState("");
  const [requestPurpose, setRequestPurpose] = useState("");
  const { toast } = useToast();

  const filteredMaterials = mockMaterials.filter((material) => {
    const matchesSearch =
      material.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      material.description?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || material.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleRequest = (material: Material) => {
    setSelectedMaterial(material);
    setRequestQuantity("");
    setRequestPurpose("");
  };

  const handleSubmitRequest = () => {
    if (!requestQuantity || !requestPurpose) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Request Submitted!",
      description: `Your request for ${selectedMaterial?.name} has been sent.`,
    });
    setSelectedMaterial(null);
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="container py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Explore <span className="text-gradient">Materials</span>
          </h1>
          <p className="text-muted-foreground">
            Find materials for your next project from campus labs and departments.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search materials..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-card border-border"
            />
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <Badge
              variant="outline"
              className={cn(
                "cursor-pointer transition-colors border-muted-foreground/30",
                !selectedCategory && "bg-primary text-primary-foreground border-primary"
              )}
              onClick={() => setSelectedCategory(null)}
            >
              All
            </Badge>
            {categories.map((cat) => (
              <Badge
                key={cat.value}
                variant="outline"
                className={cn(
                  "cursor-pointer transition-colors border-muted-foreground/30",
                  selectedCategory === cat.value &&
                    "bg-primary text-primary-foreground border-primary"
                )}
                onClick={() => setSelectedCategory(cat.value)}
              >
                {cat.label}
              </Badge>
            ))}
          </div>
        </div>

        {/* Results */}
        {filteredMaterials.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              No materials found matching your criteria.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMaterials.map((material, index) => (
              <MaterialCard
                key={material.id}
                material={material}
                onRequest={handleRequest}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` } as React.CSSProperties}
              />
            ))}
          </div>
        )}
      </main>

      {/* Request Modal */}
      <Dialog open={!!selectedMaterial} onOpenChange={() => setSelectedMaterial(null)}>
        <DialogContent className="sm:max-w-md bg-card border-border">
          <DialogHeader>
            <DialogTitle className="text-foreground">Request Material</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Submit a request for {selectedMaterial?.name}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="quantity" className="text-foreground">
                Required Quantity (Available: {selectedMaterial?.quantity}{" "}
                {selectedMaterial?.unit})
              </Label>
              <Input
                id="quantity"
                type="number"
                placeholder="Enter quantity needed"
                value={requestQuantity}
                onChange={(e) => setRequestQuantity(e.target.value)}
                max={selectedMaterial?.quantity}
                className="bg-secondary border-border"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="purpose" className="text-foreground">Purpose</Label>
              <Textarea
                id="purpose"
                placeholder="Describe your project and how you'll use this material..."
                value={requestPurpose}
                onChange={(e) => setRequestPurpose(e.target.value)}
                rows={4}
                className="bg-secondary border-border"
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setSelectedMaterial(null)}>
              Cancel
            </Button>
            <Button variant="glow" onClick={handleSubmitRequest}>
              Submit Request
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
