import { Skeleton } from "../ui/skeleton";

function LoadingTable({ rows }: { rows?: number }) {
  const tableRows = Array.from({ length: rows ?? 0 }, (_, index) => {
    return (
      <div className="mb-4" key={index}>
        <Skeleton className="w-full h-8 rounded" />
      </div>
    );
  });
  return <>{tableRows}</>;
}

export default LoadingTable;
