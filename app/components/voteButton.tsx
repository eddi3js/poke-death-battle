"use client";
import { useRouter } from "next/navigation";
import { useVote } from "../../pages/api/vote";

interface VoteButtonProps {
  for: number;
  against: number;
  name: string;
}

export default function VoteButton(props: VoteButtonProps) {
  const { refresh } = useRouter();

  const { vote, isLoading, isSuccess } = useVote(async () => {
    await fetch("/api/vote", {
      method: "POST",
      body: JSON.stringify({
        for: props.for,
        against: props.against,
      }),
    });
    refresh();
  });

  const handleVote = () => {
    if (!isSuccess) {
      vote();
    }
  };

  return (
    <>
      <button
        disabled={isLoading}
        onClick={handleVote}
        className={`btn ${
          isSuccess ? "btn-success text-white" : "btn-primary"
        } px-10 text-secondary ${isLoading ? "loading" : ""}`}
      >
        {isSuccess && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        )}{" "}
        Vote for {props.name}
      </button>
    </>
  );
}
