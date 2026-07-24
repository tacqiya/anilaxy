type BadgeProps = {
  children: React.ReactNode;
};

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="rounded-full bg-red-600 px-3 py-1 text-sm font-medium">
      {children}
    </span>
  );
}