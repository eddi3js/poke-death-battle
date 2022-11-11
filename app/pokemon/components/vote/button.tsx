"use client";
import { useQueryClient, useMutation } from "@tanstack/react-query";

export default function VoteButton({ id }: { id: number }) {
  // const queryClient = useQueryClient();
  // const { mutate } = useMutation(
  //   ["vote"],
  //   async () => await fetch(`/api/vote?for=${id}`, { method: "POST" }),
  //   {}
  // );

  return (
    <>
      <button
        // onClick={() => mutate({})}
        className={`btn btn-primary px-10 text-secondary`}
      >
        Winner
      </button>
    </>
  );
}
