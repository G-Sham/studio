"use client";

import { useBrand } from "@/context/brand-provider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Activity, ShieldCheck, Target, Clock } from "lucide-react";
import { useEffect, useState } from "react";

function SnapshotCard({ title, value, icon: Icon, isLoading, unit = '' }: { title: string; value: string | number; icon: React.ElementType; isLoading: boolean; unit?: string }) {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{title}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                {isLoading ? (
                    <Skeleton className="h-8 w-1/2" />
                ) : (
                    <div className="text-2xl font-bold">{value}{unit}</div>
                )}
            </CardContent>
        </Card>
    );
}

export default function DashboardPage() {
    const { selectedBrand, brandData, isLoading } = useBrand();
    const [lastAuditTime, setLastAuditTime] = useState('');

    useEffect(() => {
        if (!isLoading && brandData?.lastAudit) {
            import('date-fns').then(({ formatDistanceToNow }) => {
                setLastAuditTime(formatDistanceToNow(new Date(brandData.lastAudit), { addSuffix: true }));
            });
        }
    }, [isLoading, brandData]);
    
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tight">
                {isLoading || !selectedBrand ? <Skeleton className="h-9 w-64" /> : `${selectedBrand.name} Snapshot`}
            </h1>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <SnapshotCard
                    title="AI Visibility Score"
                    value={brandData?.aiVisibility ?? 0}
                    icon={Activity}
                    isLoading={isLoading}
                    unit="%"
                />
                <SnapshotCard
                    title="Trust / EEAT Score"
                    value={brandData?.trustScore ?? 0}
                    icon={ShieldCheck}
                    isLoading={isLoading}
                    unit="%"
                />
                <SnapshotCard
                    title="Non-Branded Keyword Coverage"
                    value={brandData?.keywordCoverage ?? 0}
                    icon={Target}
                    isLoading={isLoading}
                    unit="%"
                />
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Last Audit</CardTitle>
                        <Clock className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        {isLoading ? (
                            <Skeleton className="h-8 w-3/4" />
                        ) : (
                            <div className="text-2xl font-bold">{lastAuditTime}</div>
                        )}
                    </CardContent>
                </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Welcome to your Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">This is a high-level overview of your brand's performance in the AI search landscape. Use the navigation on the left to dive deeper into specific audit modules or explore the system architecture.</p>
              </CardContent>
            </Card>
        </div>
    );
}
