type BlackBoxProps = {
  handleClick?: () => void;
  href?: string;
  text: string;
};
export function BlackBox({ handleClick, href, text }: BlackBoxProps) {
  return (
    <div className="bg-black py-2.5 whitespace-nowrap px-6 text-center text-white">
      {text}
    </div>
  );
}
