import data from "../../data/data.json"













export default function CommitteeSelectionStage({
    committeeSelections,
    formErrors,
    renderCommitteeOptions,
    onCommitteeSelect,
    onCountryPreferenceSelect
}) {
    const portfolioTitles = ['PORTFOLIO I', 'PORTFOLIO II', 'PORTFOLIO III'];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioTitles.map((title, index) => (
                <div key={index}>
                    <h3 className="text-center font-bold text-2xl mb-4">{title}</h3>

                    {/* Committee Selection */}
                    <div className="mb-4">
                        <label className="block text-[#189BA5] mb-2">Select Committee</label>
                        <select
                            value={committeeSelections.committees[index]}
                            onChange={(e) => onCommitteeSelect(index, e.target.value)}
                            className="w-full p-2 rounded-lg"
                        >
                            {data.registerCommittees.map(committee => (
                                <option key={committee} value={committee}>
                                    {committee}
                                </option>
                            ))}
                        </select>
                        {formErrors[`committee_${index}`] && (
                            <p className="text-red-500 text-sm mt-1">
                                {formErrors[`committee_${index}`]}
                            </p>
                        )}
                    </div>

                    {/* Country Preference Options */}
                    {[1, 2, 3].map(optionNumber => (
                        <div key={optionNumber} className="mb-4">
                            <label className="block text-[#189BA5] mb-2">
                                Option {optionNumber}
                            </label>
                            <select
                                value={committeeSelections.countryPreferences[index][optionNumber - 1]}
                                onChange={(e) => onCountryPreferenceSelect(
                                    index,
                                    optionNumber - 1,
                                    e.target.value
                                )}
                                className="w-full p-2 rounded-lg"
                            >
                                {renderCommitteeOptions(committeeSelections.committees[index])}
                            </select>
                            {formErrors[`preference_${index}_${optionNumber - 1}`] && (
                                <p className="text-red-500 text-sm mt-1">
                                    {formErrors[`preference_${index}_${optionNumber - 1}`]}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};
