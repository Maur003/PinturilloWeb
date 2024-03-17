import {cn} from '~/components/ui/utils.ts';
import { IconGitHub } from '~/components/icons/simple.tsx';


const social = [
  {
    href: "https://github.com/Maur003/PinturilloWeb",
    name: "GitHub",
    icon: IconGitHub,
  },
];

export default () => {
  return (
    <div>
      <ul className="flex items-center justify-center gap-3 p-1">
        {social.map((social) => {
          return (
            <li key={social.name}>
              <a
                href={social.href}
                className={cn(
                  "group",
                  "flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20",
                  "bg-neutral-2 hover:bg-neutral-3",
                  "outline-none border border-neutral-4 hover:border-neutral-6 rounded-3xl",
                  "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-7 focus-visible:ring-offset-neutral-1"
                )}
                target="_blank"
                aria-label="Open"
              >
                <social.icon className="transition size-1/3 text-neutral-10 group-hover:text-neutral-11 group-hover:scale-110 group-focus-visible:text-neutral-11 group-focus-visible:scale-110" />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};