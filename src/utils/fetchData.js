export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'c0269ad3demshe8b5cf005111e30p188551jsn30df0d562b80',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = response.json();

    return data;
}