export default function Loading() {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="flex animate-pulse flex-row h-full justify-start space-x-5">
        <div className="bg-gray-300 w-28 h-28 rounded-md"></div>
        <div className="flex flex-col space-y-3">
          <div className="w-30 bg-gray-300 h-6 rounded-md"></div>
          <div className="w-48 bg-gray-300 h-4 rounded-md"></div>
          <div className="w-16 bg-gray-300 h-4 rounded-md"></div>
          <div className="w-56 bg-gray-300 h-4 rounded-md"></div>
        </div>
      </div>
      <div className="flex animate-pulse flex-col space-y-3">
        <div className="w-16 bg-gray-300 h-4 rounded-md mt-5"></div>
        <div className="w-full bg-gray-300 h-24 rounded-md mt-5"></div>
      </div>
    </div>
  );
}
