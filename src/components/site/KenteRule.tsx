export function KenteRule({ className }: { className?: string }) {
  return <div className={['kente-rule', className].filter(Boolean).join(' ')} />;
}
