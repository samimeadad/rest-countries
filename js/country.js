const loadCountries = () => {
    fetch( 'https://restcountries.eu/rest/v2/all' )
        .then( res => res.json() )
        .then( data => displayCountries( data ) );
}

const displayCountries = countries => {
    const countryHTML = countries.map( country => getCountryHTML( country ) );
    console.log( countryHTML );
    const joinCountry = countryHTML.join( ' ' );
    console.log( joinCountry );
    document.getElementById( 'countries' ).innerHTML = countryHTML.join( ' ' );
}

const getCountryHTML = country => {
    const {name, capital, flag} = country;
    return `
        <div class="country">
            <h2>${ name }</h2>
            <h4>Capital: ${ capital }</h4>
            <img src="${ flag }">
        </div>
    `
}

loadCountries();