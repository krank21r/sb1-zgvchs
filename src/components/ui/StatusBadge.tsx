import React from 'react';
import { Status } from '../../types/work';

interface StatusBadgeProps {
  status: Status;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const getStatusColor = (status: Status) => {
    switch (status) {
      case 'DE under process':
        return 'bg-blue-100 text-blue-800';
      case 'DE sent to accounts':
        return 'bg-yellow-100 text-yellow-800';
      case 'DE sent to PCME sanction':
        return 'bg-purple-100 text-purple-800';
      case 'Tender Process':
        return 'bg-orange-100 text-orange-800';
      case 'Indents under Process':
        return 'bg-cyan-100 text-cyan-800';
      case 'WIP':
        return 'bg-indigo-100 text-indigo-800';
      case 'Works completed':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(status)}`}>
      {status}
    </span>
  );
}