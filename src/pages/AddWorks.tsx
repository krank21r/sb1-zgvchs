import React, { useState } from 'react';
import { Save } from 'lucide-react';
import { RspForm } from '../components/forms/RspForm';
import { IrspForm } from '../components/forms/IrspForm';
import { addRspWork, addIrspWork } from '../services/workService';
import type { Category, RspWork, IrspWork } from '../types/work';
import { STATUS_OPTIONS } from '../constants/status';

export default function AddWorks() {
  const [category, setCategory] = useState<Category>('RSP');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    slNo: '',
    description: '',
    pbNo: '',
    lawNo: '',
    yearOfSanction: new Date().getFullYear(),
    qty: 0,
    deValue: 0,
    rate: 0,
    totalValue: 0,
    status: STATUS_OPTIONS[0]
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (category === 'RSP') {
        const { lawNo, rate, totalValue, ...rspData } = formData;
        await addRspWork(rspData as Omit<RspWork, 'createdAt' | 'updatedAt'>);
      } else {
        const { pbNo, deValue, ...irspData } = formData;
        await addIrspWork(irspData as Omit<IrspWork, 'createdAt' | 'updatedAt'>);
      }

      // Reset form
      setFormData({
        slNo: '',
        description: '',
        pbNo: '',
        lawNo: '',
        yearOfSanction: new Date().getFullYear(),
        qty: 0,
        deValue: 0,
        rate: 0,
        totalValue: 0,
        status: STATUS_OPTIONS[0]
      });

      alert('Work added successfully!');
    } catch (error) {
      console.error('Error adding work:', error);
      alert('Error adding work. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Add New Works</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as Category)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="RSP">RSP</option>
            <option value="IRSP">IRSP</option>
          </select>
        </div>

        {category === 'RSP' ? (
          <RspForm formData={formData} onChange={handleInputChange} />
        ) : (
          <IrspForm formData={formData} onChange={handleInputChange} />
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
        >
          <Save className="w-5 h-5 mr-2" />
          {loading ? 'Saving...' : 'Save Work'}
        </button>
      </form>
    </div>
  );
}