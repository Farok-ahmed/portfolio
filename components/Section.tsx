interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

const Section = ({ id, children, className = "" }: SectionProps) => (
  <section id={id} className={`py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto ${className}`}>
    {children}
  </section>
);

export default Section;
