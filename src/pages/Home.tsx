import React from 'react';
import { Building2, ClipboardList, FileSpreadsheet, PlusCircle } from 'lucide-react';
import { WorkCard } from '../components/home/WorkCard';
import { WorksSummary } from '../components/home/WorksSummary';
import { Card } from '../components/ui/Card';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to RSP Portal
        </h1>
        <p className="text-xl text-gray-600">
          Manage and track RSP and IRSP works efficiently
        </p>
      </div>

      <WorksSummary />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <WorkCard
          title="RSP Works"
          description="View and manage Rolling Stock Programme works"
          icon={ClipboardList}
          to="/rsp-works"
          color="blue"
        />
        <WorkCard
          title="IRSP"
          description="Track Itemized Rolling Stock Programme"
          icon={FileSpreadsheet}
          to="/irsp"
          color="green"
        />
        <WorkCard
          title="Add Works"
          description="Create new RSP or IRSP work entries"
          icon={PlusCircle}
          to="/add-works"
          color="purple"
        />
      </div>

      <Card>
        <div className="flex items-center mb-6">
          <Building2 className="h-8 w-8 text-blue-600 mr-4" />
          <h2 className="text-2xl font-bold text-gray-900">About SCR Carriage Workshop LGD</h2>
        </div>
        <p className="text-gray-600 leading-relaxed">
          SCR Carriage Workshop Lallaguda (LGD) is one of the major workshops of Indian Railways. 
          Our organization manages various works under the Rolling Stock Programme (RSP) and 
          Itemized Rolling Stock Programme (IRSP) to maintain and improve railway infrastructure 
          and services.
        </p>
      </Card>
    </div>
  );
}