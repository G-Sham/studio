"use client";

import { useBrand } from "@/context/brand-provider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";

export function BrandSelector() {
  const { brands, selectedBrand, setSelectedBrandId, isLoading } = useBrand();

  if (isLoading || !selectedBrand) {
    return <Skeleton className="h-9 w-[200px]" />;
  }

  return (
    <Select value={selectedBrand.id} onValueChange={setSelectedBrandId}>
      <SelectTrigger className="w-auto md:w-[200px]">
        <SelectValue placeholder="Select a brand" />
      </SelectTrigger>
      <SelectContent>
        {brands.map((brand) => (
          <SelectItem key={brand.id} value={brand.id}>
            {brand.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
