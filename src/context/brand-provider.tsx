"use client";

import React, { createContext, useContext, useState, useMemo, useEffect } from 'react';
import type { Brand, DashboardData } from '@/lib/types';
import brandsData from '@/data/brands.json';
import dashboardData from '@/data/dashboard-data.json';

type BrandContextType = {
  brands: Brand[];
  selectedBrand: Brand | null;
  setSelectedBrandId: (id: string) => void;
  brandData: DashboardData | null;
  isLoading: boolean;
};

const BrandContext = createContext<BrandContextType | undefined>(undefined);

export function BrandProvider({ children }: { children: React.ReactNode }) {
  const brands: Brand[] = brandsData;
  const [selectedBrandId, setSelectedBrandId] = useState<string | null>(null);

  useEffect(() => {
    if (brands.length > 0) {
      setSelectedBrandId(brands[0].id);
    }
  }, [brands]);

  const isLoading = !selectedBrandId;

  const selectedBrand = useMemo(() => {
    return brands.find(b => b.id === selectedBrandId) ?? null;
  }, [selectedBrandId, brands]);

  const brandData = useMemo(() => {
    if (!selectedBrandId) return null;
    return (dashboardData as Record<string, DashboardData>)[selectedBrandId] ?? null;
  }, [selectedBrandId]);

  const value = {
    brands,
    selectedBrand,
    setSelectedBrandId,
    brandData,
    isLoading,
  };

  return <BrandContext.Provider value={value}>{children}</BrandContext.Provider>;
}

export function useBrand() {
  const context = useContext(BrandContext);
  if (context === undefined) {
    throw new Error('useBrand must be used within a BrandProvider');
  }
  return context;
}
