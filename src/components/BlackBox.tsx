type BlackBoxProps = {
  handleClick?: () => void;
  href?: string;
  text: string;
};
export function BlackBox({ handleClick, href, text }: BlackBoxProps) {
  return (
    <div className="bg-black py-5 px-12 text-center text-white">{text}</div>
  );
}
