import { Card } from './ui/card';
import { functionalities } from '../_constants/functionalities';
import { Button } from './ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';
import Image from 'next/image';

const FunctionalityCard = () => {
  return functionalities.map(functionality => {
    return (
      <Card key={functionality.id} className="space-y-2 px-2 py-7 text-center">
        <div className="bg-secondary relative mx-auto flex h-20 w-20 items-center justify-center rounded-2xl shadow-lg">
          <div className="flex h-full w-full transform items-center justify-center bg-transparent transition-all ease-in-out hover:-translate-y-3">
            <functionality.icon size={28} />
          </div>
        </div>
        <h3 className="text-foreground text-xl font-semibold">
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button
                variant="ghost"
                className="cursor-pointer hover:underline"
              >
                {functionality.title}
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="flex w-lg items-center justify-center">
              <Image
                src={functionality.gif}
                alt="Agenda"
                height={450}
                width={450}
                className="rounded-lg"
              />
            </HoverCardContent>
          </HoverCard>
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {functionality.description}
        </p>
      </Card>
    );
  });
};

export default FunctionalityCard;
