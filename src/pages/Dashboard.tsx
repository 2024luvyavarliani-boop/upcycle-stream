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
    <div className="min-h-screen">
      <Navbar />

      <main className="container py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Impact <span className="text-gradient">Dashboard</span>
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
                    stroke="hsl(175, 20%, 25%)"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="month"
                    stroke="hsl(175, 15%, 65%)"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="hsl(175, 15%, 65%)"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(175, 30%, 18%)",
                      border: "1px solid hsl(175, 20%, 25%)",
                      borderRadius: "8px",
                      boxShadow: "var(--shadow-md)",
                      color: "hsl(0, 0%, 98%)",
                    }}
                    labelStyle={{ color: "hsl(0, 0%, 98%)" }}
                  />
                  <Bar
                    dataKey="reused"
                    fill="hsl(78, 80%, 55%)"
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
                      backgroundColor: "hsl(175, 30%, 18%)",
                      border: "1px solid hsl(175, 20%, 25%)",
                      borderRadius: "8px",
                      boxShadow: "var(--shadow-md)",
                      color: "hsl(0, 0%, 98%)",
                    }}
                    formatter={(value: number) => [`${value}%`, "Share"]}
                  />
                  <Legend
                    verticalAlign="bottom"
                    height={36}
                    formatter={(value) => (
                      <span style={{ color: "hsl(0, 0%, 98%)" }}>{value}</span>
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
            Sustainability <span className="text-gradient">Metrics</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card rounded-xl border border-border shadow-card p-6 text-center hover:border-primary/30 transition-colors">
              <div className="text-4xl font-bold text-primary mb-2">🌳</div>
              <p className="text-3xl font-bold text-foreground mb-1">42</p>
              <p className="text-muted-foreground text-sm">
                Trees worth of materials saved
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border shadow-card p-6 text-center hover:border-primary/30 transition-colors">
              <div className="text-4xl font-bold text-primary mb-2">💧</div>
              <p className="text-3xl font-bold text-foreground mb-1">2,400L</p>
              <p className="text-muted-foreground text-sm">
                Water saved from production
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border shadow-card p-6 text-center hover:border-primary/30 transition-colors">
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
