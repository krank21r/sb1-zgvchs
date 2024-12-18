import React from 'react';
import { ClipboardList, FileSpreadsheet } from 'lucide-react';
import { StatCard } from './StatCard';
import { useWorks } from '../../hooks/useWorks';
import { Card } from '../ui/Card';

export function WorksSummary() {
  const { rspWorks, irspWorks, isLoading, error } = useWorks();

  if (isLoading) {
    return (
      <Card>
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          <div className="h-8 bg-gray-200 rounded w-1/2"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        </div>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="text-center p-8 text-red-600">
        <p>{error}</p>
      </Card>
    );
  }

  const completedRspWorks = rspWorks.filter(work => work.status === 'Works completed').length;
  const completedIrspWorks = irspWorks.filter(work => work.status === 'Works completed').length;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <StatCard
          title="Total RSP Works"
          value={rspWorks.length}
          icon={ClipboardList}
          description={`${completedRspWorks} works completed`}
        />
        <StatCard
          title="Total IRSP Works"
          value={irspWorks.length}
          icon={FileSpreadsheet}
          description={`${completedIrspWorks} works completed`}
        />
      </div>

      <Card>
        <h3 className="text-lg font-semibold mb-4">Works Progress Overview</h3>
        <div className="space-y-4">
          {['DE under process', 'Tender Process', 'WIP', 'Works completed'].map(status => {
            const rspCount = rspWorks.filter(work => work.status === status).length;
            const irspCount = irspWorks.filter(work => work.status === status).length;
            const total = rspCount + irspCount;
            const percentage = ((total / (rspWorks.length + irspWorks.length)) * 100).toFixed(1);

            return (
              <div key={status} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">{status}</span>
                  <span className="text-gray-900 font-medium">{percentage}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-600 rounded-full transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}