const dataUrl = "https://raw.githubusercontent.com/Shibbu264/preferences-data/main/abcd.json"
  const inputField = document.getElementById("Institute");
const autocompleteList = document.getElementById("autocomplete-list");
  document.addEventListener("click", event => {
    const targetElement = event.target;
    if (!targetElement.closest("#autocomplete-list")) {
     
      closeAutocompleteList();
    }
  });
  
  const closeAutocompleteList = () => {
    autocompleteList.innerHTML = "";
  };
  fetch(dataUrl)  // Adjust the path to include the 'data' folder
  .then(response => response.json())
  .then(data => {
    const instituteData = data.registerCommittees;
 
 
  
    inputField.addEventListener("input", function() {
      const inputValue = inputField.value;
      autocompleteList.innerHTML = "";

      const matchingColleges = instituteData.filter(institute => {

        return institute.includes(inputValue);

      });

      matchingColleges.forEach(institute => {
        if (inputValue.length>0){
        const suggestion = document.createElement("div");
        suggestion.textContent = institute;
        suggestion.addEventListener("click", function() {
          inputField.value = this.textContent;
          autocompleteList.innerHTML = "";
          
        });
        autocompleteList.appendChild(suggestion);
      }});
    });
  });
