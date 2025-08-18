import { problemsList } from '@/app/_constants/solutions-list';
import { Card, CardContent } from '@/app/_components/ui/card';
import { AlertCircleIcon } from 'lucide-react';

const ProblemsCard = () => {
  return (
    <Card className="w-[100%] lg:w-[48%]">
      <CardContent>
        <ul className="space-y-6">
          {problemsList.map(problem => {
            return (
              <li key={problem.title}>
                <div className="flex items-center gap-2">
                  <AlertCircleIcon className="text-destructive" />
                  <p className="text-sm md:text-base">{problem.title}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ProblemsCard;
