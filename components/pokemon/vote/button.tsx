"use client";
import useToast from "../../../utils/useToast";

export default function VoteButton({ id }: { id: number }) {
  const { ToastMessage, fireMessage } = useToast();

  const vote = () => {
    fireMessage("Voting Coming Soon!");
  };
  return (
    <>
      <button onClick={vote} className={`btn btn-primary px-10 text-secondary`}>
        Winner
      </button>
      <ToastMessage />
    </>
  );
}
