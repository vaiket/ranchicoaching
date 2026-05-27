import { cn } from "@/lib/utils";

export default function SectionWrapper({
  id,
  eyebrow,
  title,
  children,
  className,
}: {
  id?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("relative px-5 py-24 md:px-8 lg:py-32", className)}>
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title) && (
          <div className="mb-12 max-w-3xl">
            {eyebrow && (
              <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.28em] text-or">
                {eyebrow}
              </p>
            )}
            {title && <h2 className="section-title">{title}</h2>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
