interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justigy-center">
      <h1 className="text-3xl font-semibold ">BUHREC</h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
