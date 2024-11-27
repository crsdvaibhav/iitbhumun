import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Alert } from '@material-tailwind/react';

// Import data from a separate file
import data from '../data/data.json';
import CommitteeSelectionStage from './RegistrationStages/CommitteeSelectionStage';
import PersonalInfoStage from './RegistrationStages/PersonalInfoStage';
import { useSession } from 'next-auth/react';

// Constant for committee mapping
const COMMITTEE_OPTIONS = {
  'AIPPM': data.aippm,
  'Lok Sabha': data.ls,
  'CCC': data.ccc,
  'UNCSW': data.uncsw,
  'ECOSOC': data.ecosoc,
  'DISEC': data.disec,
  'WTO(Online)': data.wto,
  'UNODC(Online)': data.unodc,
  'International Press(Hybrid)': data.ip,
};

// Initial form input structure
const INITIAL_FORM_INPUT = {
  Event_ID: 0,
  Name: '',
  Age: 0,
  Gender: '',
  City: '',
  Country: '',
  Institute_Name: '',
  Mobile_Number: '',
  Email_ID: '',
  Referral_Code: '',
  No_of_MUNs: '',
  List_of_previous_MUNs: '',
  Awards_in_previous_MUNs: '',
  Committee_Preferences: ['', '', ''],
  Committee_Country_Preferences: [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]
};

const Register = () => {

  const eventId = Math.floor(100000 + Math.random() * 900000);
  const session=useSession()
  const [isPersonalInfoStage, setIsPersonalInfoStage] = useState(true);
  const [formInput, setFormInput] = useState({
    ...INITIAL_FORM_INPUT,
    Event_ID: eventId,
    Email_ID:session?.data?.user?.email,
    Name:session?.data?.user?.name
  });
  const [committeeSelections, setCommitteeSelections] = useState({
    committees: ['None', 'None', 'None'],
    countryPreferences: [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ]
  });
  const [formErrors, setFormErrors] = useState({});


  const validatePersonalInfo = () => {
    const errors = {};
    const requiredFields = [
      'Name', 'Age', 'Gender', 'Institute_Name', 
      'Mobile_Number', 'Email_ID'
    ];

    requiredFields.forEach(field => {
      if (!formInput[field]) {
        errors[field] = `${field} is required`;
      }
    });

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateCommitteeSelection = () => {
    const errors = {};

    // Validate committee selections
    committeeSelections.committees.forEach((committee, index) => {
      if (committee === 'None') {
        errors[`committee_${index}`] = 'Please select a committee';
      }
    });

    // Validate country preferences
    committeeSelections.countryPreferences.forEach((preferences, committeIndex) => {
      preferences.forEach((pref, prefIndex) => {
        if (!pref) {
          errors[`preference_${committeIndex}_${prefIndex}`] = 'Please select a country';
        }
      });
    });

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handler for personal info input
  const handlePersonalInfoChange = (e) => {
    const { id, value } = e.target;
    setFormInput(prev => ({
      ...prev,
      [id]: value
    }));
  };

  // Handler for committee selection
  const handleCommitteeSelection = (portfolioIndex, value) => {
    const updatedCommittees = [...committeeSelections.committees];
    updatedCommittees[portfolioIndex] = value;

    setCommitteeSelections(prev => ({
      ...prev,
      committees: updatedCommittees
    }));

    // Update form input
    const updatedFormInput = {...formInput};
    updatedFormInput[`Committee_Preference_${portfolioIndex + 1}`] = value;
    setFormInput(updatedFormInput);
  };

  // Handler for country preference selection
  const handleCountryPreferenceSelection = (committeeIndex, optionIndex, value) => {
    const updatedCountryPreferences = [...committeeSelections.countryPreferences];
    updatedCountryPreferences[committeeIndex][optionIndex] = value;

    setCommitteeSelections(prev => ({
      ...prev,
      countryPreferences: updatedCountryPreferences
    }));

    // Update form input
    const updatedFormInput = {...formInput};
    updatedFormInput[`Committee_${committeeIndex + 1}_Country_Preference_${optionIndex + 1}`] = value;
    setFormInput(updatedFormInput);
  };

  // Render committee options
  const renderCommitteeOptions = (selectedCommittee) => {
    return COMMITTEE_OPTIONS[selectedCommittee]?.map(option => (
      <option key={option} value={option}>{option}</option>
    )) || null;
  };

  // Stage navigation
  const handleNextStage = (e) => {
    e.preventDefault();
    if (isPersonalInfoStage) {
      if (validatePersonalInfo()) {
        setIsPersonalInfoStage(false);
      }
    } else {
      if (validateCommitteeSelection()) {
        // Handle form submission
        handleFormSubmit();
      }
    }
  };

  const handlePreviousStage = () => {
    setIsPersonalInfoStage(true);
  };

  // Form submission handler
  const handleFormSubmit = () => {
    // Combine all form data
    const completeFormData = {
      ...formInput,
      ...committeeSelections
    };

    // Perform final validation
    console.log('Submitting form data:', completeFormData);
    
    // TODO: Implement actual form submission logic 
    // (e.g., API call, Firebase submission)
  };

  return (
    <div>
      <Head>
        <title>MUN Registration Form</title>
      </Head>
      
      <div className="container mx-auto px-4 py-8">
        {/* Progress Indicator */}
        <div className="place-items-center flex justify-center font-semibold text-center py-16">
          <div 
            className={`text-3xl ${isPersonalInfoStage ? 'bg-[#1A1E21] text-white' : 'bg-white text-[#1A1E21]'} 
            w-10 h-10 border-2 border-[#1A1E21] rounded-full flex items-center justify-center`}
          >
            1
          </div>
          <div className="w-40 mx-2 border h-0 justify-center border-[#1A1E21] my-6">
            Personal Info
          </div>
          <div 
            className={`text-3xl ${!isPersonalInfoStage ? 'bg-[#1A1E21] text-white' : 'bg-white text-[#1A1E21]'} 
            w-10 h-10 border-2 border-[#1A1E21] rounded-full flex items-center justify-center`}
          >
            2
          </div>
          <div className="w-40 mx-2 border h-0 justify-center border-[#1A1E21] my-6">
            Portfolio Selection
          </div>
        </div>

        {/* Form Stages */}
        <form onSubmit={handleNextStage}>
          {isPersonalInfoStage ? (
            <PersonalInfoStage 
              formInput={formInput}
              formErrors={formErrors}
              onInputChange={handlePersonalInfoChange}
            />
          ) : (
            <CommitteeSelectionStage 
              committeeSelections={committeeSelections}
              formErrors={formErrors}
              renderCommitteeOptions={renderCommitteeOptions}
              onCommitteeSelect={handleCommitteeSelection}
              onCountryPreferenceSelect={handleCountryPreferenceSelection}
            />
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            {!isPersonalInfoStage && (
              <button 
                type="button"
                onClick={handlePreviousStage}
                className="bg-gray-300 text-gray-700 py-2 px-4 rounded"
              >
                Back
              </button>
            )}
            <button 
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded"
            >
              {isPersonalInfoStage ? 'Next' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;