import { Scissors } from 'lucide-react';
import { ModeToggle } from './mode-toggle';
import GradientText from './TextAnimations/GradientText/GradientText';

const Header = () => {
  return (
    <div className="fixed top-0 right-0 left-0 z-50 border-b border-[#262626] backdrop-blur-md transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="items flex cursor-pointer items-center">
            <Scissors size={20} />
            <GradientText
              colors={['#c27aff', '#9810fa', '#59168b ', '#ffffff']}
              animationSpeed={3}
              showBorder={false}
              className="custom-class flex items-center"
            >
              <h1 className="text-xl font-bold">EasyBarberApp</h1>
            </GradientText>
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <ul className="flex list-none items-center gap-2">
              <li>
                <a href="">Teste</a>
              </li>
              <li>
                <a href="">Teste</a>
              </li>
              <li>
                <a href="">Teste</a>
              </li>
              <li className='ml-4'>
                <ModeToggle />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
