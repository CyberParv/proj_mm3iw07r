import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface TeamMember {
  name: string;
  title: string;
  imageUrl?: string;
  bio?: string;
}

interface TeamGridProps {
  headline: string;
  subheadline?: string;
  members: TeamMember[];
}

const defaultMembers: TeamMember[] = [
  {
    name: "Dr. Maya Patel",
    title: "Family Medicine",
    imageUrl: "/images/team.jpg",
    bio: "Focuses on preventative care and long-term wellness for families.",
  },
  {
    name: "Dr. James Lee",
    title: "Cardiology",
    imageUrl: "/images/team.jpg",
    bio: "Specialist in advanced cardiac diagnostics and patient education.",
  },
  {
    name: "Dr. Sofia Ramirez",
    title: "Pediatrics",
    imageUrl: "/images/team.jpg",
    bio: "Known for compassionate pediatric care and parent coaching.",
  },
  {
    name: "Dr. Ethan Cole",
    title: "Internal Medicine",
    imageUrl: "/images/team.jpg",
    bio: "Helps patients manage chronic conditions with personalized plans.",
  },
];

export default function TeamGrid({
  headline = "Meet your care team",
  subheadline = "Board-certified physicians and specialists dedicated to your well-being.",
  members = defaultMembers,
}: Partial<TeamGridProps>) {
  return (
    <section className="py-20 md:py-28 bg-muted/50" id="doctors">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {members.map(function (member, i) {
            return (
              <Card key={i} className="overflow-hidden border border-border/50 bg-background shadow-lg rounded-2xl text-center">
                {member.imageUrl && (
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      width={500}
                      height={500}
                      unoptimized={member.imageUrl.startsWith("http")}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
                <CardContent className="p-5">
                  <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-primary">{member.title}</p>
                  {member.bio && <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
