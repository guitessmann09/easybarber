import { CheckCircle2 } from 'lucide-react';
import { solutionsList } from '@/app/_constants/solutions-list';
import { Card, CardContent } from '@/app/_components/ui/card';

const SolutionsCard = () => {
  return (
    <Card className="w-[100%] lg:w-[48%]">
      <CardContent>
        <ul className="space-y-6">
          {solutionsList.map(solution => {
            return (
              <li key={solution.title}>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-primary" />
                  <p className="text-sm md:text-base">{solution.title}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </CardContent>
    </Card>
  );
};

export default SolutionsCard;
