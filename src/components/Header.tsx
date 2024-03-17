import { Button } from "~/components/ui/Button/Button.tsx";

export default () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 lg:gap-8 px-3 lg:px-6 py-4">
      <div className="flex flex-row items-center gap-4">
        <div className="flex flex-col items-start gap-2">
          <h2 className="font-medium text-2xl lg:text-3xl">PINTURILLO</h2>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex">
          <Button as="a" href="_blank" target="_blank" className="text-lg lg:text-xl mr-4">
            Jugar
          </Button>
          <Button as="a" href="_blank" target="_blank" className="text-lg lg:text-xl">
            Mesas
          </Button>
        </div>
      </div>
    </div>
  );
};
