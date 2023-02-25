const loadCountries =() =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
}

const displayCountries = countries =>{
    const countriesContainer = document.getElementById('all-containers');
    // console.log(country)
//     for(const country of countries){}
    countries.forEach(country => {
        console.log(country);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML =`
            <div>
                <h3>Name: ${country.name.common}</h3>
                <p>Capital: ${country.capital ? country.capital[0] : 'No Capital'}</p>
            </div>


        `;
        console.log(countryDiv)
        countriesContainer.appendChild(countryDiv);

     });   



}


loadCountries();