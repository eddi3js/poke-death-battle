import Image from "next/image";
import { getResults } from "../../server/votes";

export default async function VotingResults() {
  const results = await getResults();

  return (
    <div className="flex flex-1 flex-col justify-center items-center h-full">
      <h3>Voting Results</h3>

      <table className="table table-compact w-full max-w-xl">
        <thead>
          <tr>
            <th>Name</th>
            <th align="center">Vote %</th>
          </tr>
        </thead>
        <tbody>
          {results.map(({ name, votePercent, spriteUrl }) => (
            <tr key={name}>
              <td>
                <div className="flex flex-row gap-4 items-center capitalize font-bold">
                  <Image
                    alt={name}
                    src={spriteUrl}
                    width={75}
                    height={75}
                    className="m-0"
                  />
                  {name}
                </div>
              </td>
              <td align="center">{votePercent}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
