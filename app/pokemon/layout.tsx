import Sidebar from "./components/sidebar";

export default function PokemonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row w-screen h-screen">
      <div className="hidden md:flex">
        <Sidebar />
      </div>
      <div className="flex flex-col flex-1 p-8">
        <div className="text-sm max-w-3xl mx-auto w-full">{children}</div>
      </div>
    </div>
  );
}
