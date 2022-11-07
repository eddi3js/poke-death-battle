import Sidebar from "../../../components/pokemon/sidebar";

export default function PokemonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row w-screen h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1 p-8">
        <div className="text-sm max-w-3xl mx-auto w-full">{children}</div>
      </div>
    </div>
  );
}
