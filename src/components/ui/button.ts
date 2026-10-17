// Class names for button-styled elements. A function rather than a component,
// so it works on <button>, <a> and <Link> alike:
//   <a className={buttonClass('ghost')} href="...">

type Variant = 'primary' | 'ghost'

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg border px-5 py-3 text-[0.95rem] font-semibold transition-colors cursor-pointer disabled:cursor-not-allowed disabled:opacity-60'

const variants: Record<Variant, string> = {
  primary: 'border-transparent bg-accent text-background hover:bg-accent/85',
  ghost: 'border-line bg-transparent text-foreground hover:border-muted',
}

export function buttonClass(variant: Variant = 'primary') {
  return `${base} ${variants[variant]}`
}
