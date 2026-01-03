import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Recycle, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/StatCard";
import { Navbar } from "@/components/Navbar";
import { impactStats } from "@/data/mockData";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero">
        <div className="container py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
              <Leaf className="h-4 w-4" />
              Sustainable Campus Initiative
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in [animation-delay:100ms]">
              Reduce Campus Waste,{" "}
              <span className="text-primary">Fuel Innovation</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in [animation-delay:200ms]">
              Connect with labs and departments to reuse materials for your projects.
              Save resources, reduce waste, and build something amazing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in [animation-delay:300ms]">
              <Link to="/materials">
                <Button variant="hero" size="lg">
                  Browse Materials
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/add-material">
                <Button variant="outline" size="lg">
                  Add Material
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </section>

      {/* Impact Stats */}
      <section className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Collective Impact
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Together, we're making a difference. See how our campus community
            is contributing to sustainability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            icon={Recycle}
            value={impactStats.totalMaterialsReused}
            label="Materials Reused"
            trend="+12%"
            className="animate-fade-in [animation-delay:100ms]"
          />
          <StatCard
            icon={Leaf}
            value={`${impactStats.co2Saved} tons`}
            label="CO₂ Emissions Saved"
            trend="+8%"
            className="animate-fade-in [animation-delay:200ms]"
          />
          <StatCard
            icon={TrendingUp}
            value={impactStats.activeListings}
            label="Active Listings"
            className="animate-fade-in [animation-delay:300ms]"
          />
          <StatCard
            icon={Users}
            value={impactStats.requestsFulfilled}
            label="Requests Fulfilled"
            trend="+25%"
            className="animate-fade-in [animation-delay:400ms]"
          />
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Simple steps to start reusing materials on campus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "Browse or List",
                description:
                  "Explore available materials or add items your department no longer needs.",
              },
              {
                step: "02",
                title: "Request",
                description:
                  "Find something useful? Submit a request with your project purpose.",
              },
              {
                step: "03",
                title: "Collect & Create",
                description:
                  "Pick up your materials and turn waste into innovation.",
              },
            ].map((item, index) => (
              <div
                key={item.step}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-primary text-primary-foreground text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-16 md:py-24">
        <div className="relative overflow-hidden rounded-2xl gradient-primary p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Ready to Make an Impact?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Join the UpCycle Connect community and help create a more sustainable campus.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/materials">
              <Button
                variant="secondary"
                size="lg"
                className="bg-card text-foreground hover:bg-card/90"
              >
                Start Browsing
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                View Dashboard
              </Button>
            </Link>
          </div>

          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary-foreground/10 rounded-full blur-2xl" />
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-primary-foreground/10 rounded-full blur-2xl" />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Recycle className="h-4 w-4 text-primary" />
            <span>UpCycle Connect © 2025</span>
          </div>
          <p>Built for a sustainable future 🌱</p>
        </div>
      </footer>
    </div>
  );
}
