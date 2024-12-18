import { useState, useEffect } from 'react';
import { getRspWorks, getIrspWorks } from '../services/workService';
import type { RspWork, IrspWork } from '../types/work';

export function useWorks() {
  const [rspWorks, setRspWorks] = useState<RspWork[]>([]);
  const [irspWorks, setIrspWorks] = useState<IrspWork[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const [rspData, irspData] = await Promise.all([
          getRspWorks(),
          getIrspWorks()
        ]);
        setRspWorks(rspData);
        setIrspWorks(irspData);
      } catch (err) {
        setError('Failed to fetch works data');
        console.error('Error fetching works:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWorks();
  }, []);

  return { rspWorks, irspWorks, isLoading, error };
}