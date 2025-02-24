import { CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

function loading() {
  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-2">
      <CardContent className="p-4">
        <Skeleton className="h-96 w-full" />
      </CardContent>
      <CardContent className="p-4">
        <Skeleton className="h-8 w-1/2 mt-4" />
        <Skeleton className="h-8 w-3/4 mt-4" />
        <Skeleton className="h-8 w-1/5 mt-4" />
        <Skeleton className="h-8 w-7/12 mt-4" />
        <Skeleton className="h-32 w-full mt-4" />
      </CardContent>
    </div>
  );
}

export default loading;
