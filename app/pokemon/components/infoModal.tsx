import PokemonDetails from "../details";
import { Root } from "../../../server/models/pokemon";

export default function InfoModal({
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
          <PokemonDetails {...pokemon} />
        </label>
      </label>
    </>
  );
}
