import { SolutionsSectionProps } from "@/types";
import { SolutionCard } from "./SolutionCard";


export default function SolutionsSection({ solutions }: SolutionsSectionProps) {
  console.log('solutions:', solutions);
  return (
    <section className="container mx-auto px-4 py-16 max-w-6xl bg-white">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {solutions.map((sol, i) => (
      <SolutionCard
      key={i}
      icon={sol.icon}
      title={sol.title}
      description={sol.description}
      ctas={sol.ctas}  
      />
    ))}
    </div>
    </section>
  );
}
