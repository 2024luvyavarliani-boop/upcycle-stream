import { Navbar } from "@/components/Navbar";
import { StatCard } from "@/components/StatCard";
import { Recycle, Leaf, TrendingUp, Users } from "lucide-react";
import {
  impactStats,
  categoryStats,
  monthlyReuse,
} from "@/data/mockData";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Impact Dashboard
          </h1>
          <p className="text-muted-foreground">
            Track our collective sustainability efforts across campus.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard
            icon={Recycle}
            value={impactStats.totalMaterialsReused}
            label="Materials Reused"
            trend="+12%"
          />
          <StatCard
            icon={Leaf}
            value={`${impactStats.co2Saved} tons`}
            label="CO₂ Emissions Saved"
            trend="+8%"
          />
          <StatCard
            icon={TrendingUp}
            value={impactStats.activeListings}
            label="Active Listings"
          />
          <StatCard
            icon={Users}
            value={impactStats.requestsFulfilled}
            label="Requests Fulfilled"
            trend="+25%"
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Monthly Reuse Chart */}
          <div className="bg-card rounded-xl border border-border shadow-card p-6">
            <h2 className="text-xl font-semibold text-foreground mb-6">
              Monthly Material Reuse
            </h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyReuse}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="hsl(var(--border))"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="month"
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                      boxShadow: "var(--shadow-md)",
                    }}
                    labelStyle={{ color: "hsl(var(--foreground))" }}
                  />
                  <Bar
                    dataKey="reused"
                    fill="hsl(var(--primary))"
                    radius={[4, 4, 0, 0]}
                    name="Items Reused"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Category Distribution */}
          <div className="bg-card rounded-xl border border-border shadow-card p-6">
            <h2 className="text-xl font-semibold text-foreground mb-6">
              Materials by Category
            </h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryStats}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                    nameKey="name"
                  >
                    {categoryStats.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                      boxShadow: "var(--shadow-md)",
                    }}
                    formatter={(value: number) => [`${value}%`, "Share"]}
                  />
                  <Legend
                    verticalAlign="bottom"
                    height={36}
                    formatter={(value) => (
                      <span style={{ color: "hsl(var(--foreground))" }}>{value}</span>
                    )}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Sustainability Metrics */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Sustainability Metrics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card rounded-xl border border-border shadow-card p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">🌳</div>
              <p className="text-3xl font-bold text-foreground mb-1">42</p>
              <p className="text-muted-foreground text-sm">
                Trees worth of materials saved
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border shadow-card p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">💧</div>
              <p className="text-3xl font-bold text-foreground mb-1">2,400L</p>
              <p className="text-muted-foreground text-sm">
                Water saved from production
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border shadow-card p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">⚡</div>
              <p className="text-3xl font-bold text-foreground mb-1">850 kWh</p>
              <p className="text-muted-foreground text-sm">
                Energy saved through reuse
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
