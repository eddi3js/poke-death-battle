import Image from "next/image";
import { getPokemonById } from "../../server/pokemon";
import InfoModal from "../../components/pokemon/infoModal";

export default async function VoteBlock({ id }: { id: number }) {
  const pokemon = await getPokemonById(id);
  return (
    <>
      <div
        className={`flex flex-col items-center transition-opacity`}
        key={pokemon.id}
      >
        <h2 className="text-xl flex flex-row gap-2 text-center capitalize mt-[-0.5rem] text-secondary">
          {pokemon.name}{" "}
          <div
            className="tooltip tooltip-info"
            data-tip="Click for more details"
          >
            <label
              htmlFor={`modal-details-${pokemon.name}`}
              className="hover:cursor-pointer hover:text-info"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>
            </label>
          </div>
        </h2>
        <Image
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          width={256}
          height={256}
          className="animate-fade-in"
        />
        <button className={`btn btn-primary px-10 text-secondary`}>
          Winner
        </button>
      </div>

      <InfoModal pokemon={pokemon} modalId={`modal-details-${pokemon.name}`} />
    </>
  );
}
