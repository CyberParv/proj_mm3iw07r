interface Stat {
  value: string;
  label: string;
}

interface StatsCounterProps {
  stats: Stat[];
  bgColor?: string;
}

const defaultStats: Stat[] = [
  { value: "25k+", label: "Patients Served" },
  { value: "98%", label: "Patient Satisfaction" },
  { value: "40+", label: "Care Specialists" },
  { value: "12", label: "Neighborhood Clinics" },
];

export default function StatsCounter({
  stats = defaultStats,
  bgColor,
}: Partial<StatsCounterProps>) {
  return (
    <section
      className="py-16 bg-primary text-primary-foreground"
      style={bgColor ? { backgroundColor: bgColor } : undefined}
    >
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid gap-8 text-center grid-cols-2 md:grid-cols-4">
          {stats.map(function (stat, i) {
            return (
              <div key={i}>
                <p className="text-4xl font-bold md:text-5xl">{stat.value}</p>
                <p className="mt-2 text-sm uppercase tracking-wider opacity-80">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
