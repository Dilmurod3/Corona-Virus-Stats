const getCaseByCountry = async ({ country }) => {
  const url = `https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search?search=${country}`;

  const response = await fetch(url);

  return response.json();
};

export default getCaseByCountry;
