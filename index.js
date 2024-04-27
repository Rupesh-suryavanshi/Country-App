document.addEventListener("DOMContentLoaded", () => {

    const apiUrl = "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries";


    const fetchData = async () => {
        try {
            const response = await fetch(apiUrl);
            const responseData = await response.json();
    
  
            if (Array.isArray(responseData.data)) {
                displayCountries(responseData.data);
            } else {
                console.error("Error fetching data:", responseData);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const displayCountries = (countries) => {
        const countryContainer = document.getElementById("country-container");
        countryContainer.innerHTML = "";

      
        if (!Array.isArray(countries)) {
            console.error("Data is not in the expected format:", countries);
            return;
        }

        countries.forEach((data) => {

            const card = document.createElement("div");
            card.classList.add("card");

       
            card.innerHTML = `
                <h2>${data.country}</h2>
                <p>Population: ${data.population}</p>
                <p>Rank: ${data.Rank}</p>
                <!-- Add more details as needed -->
            `;

          
            countryContainer.appendChild(card);
        });
    };

    fetchData(); 
});
