import React from 'react';
import { ClipboardList, FileSpreadsheet } from 'lucide-react';
import { StatCard } from './StatCard';
import { useWorks } from '../../hooks/useWorks';

export function Summary() {
  const { rspWorks, irspWorks, isLoading } = useWorks();

  if (isLoading) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <StatCard
        title="Total RSP Works"
        value={rspWorks.length}
        icon={ClipboardList}
        description="Rolling Stock Programme works in progress"
      />
      <StatCard
        title="Total IRSP Works"
        value={irspWorks.length}
        icon={FileSpreadsheet}
        description="Itemized Rolling Stock Programme works in progress"
      />
    </div>
  );
}