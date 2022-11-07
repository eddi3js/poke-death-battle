import { Root } from "../../server/pokemon";
import PokemonDetails from "./(details)/details";

export default async function InfoModal({
  pokemon,
  modalId,
}: {
  pokemon: Root;
  modalId: string;
}) {
  return (
    <>
      <input type="checkbox" id={modalId} className="modal-toggle" />
      <label htmlFor={modalId} className="modal">
        <label className="modal-box realtive" htmlFor="">
          <PokemonDetails from="modal" {...pokemon} />
        </label>
      </label>
    </>
  );
}
