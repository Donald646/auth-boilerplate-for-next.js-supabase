const API_URL = "https://worksheetcreator-32445e06bf4d.herokuapp.com";

export const getData = async (endpoint) => {
  const response = await fetch(`${API_URL}/${endpoint}`, {
    method: "",
  });
  const data = await response.json();

  return data;
};

export const postData = async (api_url, endpoint, body) => {
  const allHeaders = { "Content-Type": "application/json" };
  let response;

  if (api_url == true) {
    response = await fetch(`${API_URL}/${endpoint}`, {
      method: "POST",
      headers: allHeaders,
      body: JSON.stringify(body),
    });
  } else {
    response = await fetch(`/${endpoint}`, {
      method: "POST",
      headers: allHeaders,
      body: JSON.stringify(body),
    });
  }

  const data = await response.json();
  return data;
};
