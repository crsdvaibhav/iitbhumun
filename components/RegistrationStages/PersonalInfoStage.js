import { useSession } from 'next-auth/react';
import React from 'react'

export default function PersonalInfoStage ({ formInput, formErrors, onInputChange }) {
    const session =useSession()
    const personalInfoFields = [
      { id: 'Name', label: 'Name', type: 'text' },
      { id: 'Age', label: 'Age', type: 'number' },
      { id: 'Mobile_Number', label: 'Phone Number', type: 'tel' },
      { id: 'Email_ID', label: 'Email', type: 'email' },
      { id: 'Institute_Name', label: 'Institution', type: 'text' }
    ];
  
    return (
      <div>
        {personalInfoFields.map(field => (
          <div key={field.id} className="mb-4">
            <label htmlFor={field.id} className="block text-gray-700 font-bold mb-2">
              {field.label}*
            </label>
            <input 
              type={field.type}
              id={field.id}
              value={formInput[field.id]}
              disabled={field.id=='Email_ID'}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required 
            />
            {formErrors[field.id] && (
              <p className="text-red-500 text-sm mt-1">{formErrors[field.id]}</p>
            )}
          </div>
        ))}
        
        {/* Gender Dropdown */}
        <div className="mb-4">
          <label htmlFor="Gender" className="block text-gray-700 font-bold mb-2">
            Gender*
          </label>
          <select 
            id="Gender"
            value={formInput.Gender}
            onChange={onInputChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select>
        </div>
      </div>
    );
  };
