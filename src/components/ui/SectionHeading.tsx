type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  center?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  text,
  center = false,
}: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}

      <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
        {title}
      </h2>

      {text && <p className="mt-5 text-lg text-pretty">{text}</p>}
    </div>
  );
}