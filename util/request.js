import { error } from "./response";

const request = async (url, method, body, headers) => {
  const options = {
    method,
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  if (headers) {
    options.headers = headers;
  }

  try {
    return await fetch(url, options);
  } catch (e) {
    console.log(`Error requesting ${url}`, method, body, headers);
    return Promise.reject(error(500, "Something went wrong"));
  }
};

const handleResponse = async (response) => {
  try {
    const json = await response.json();

    if (response.ok) {
      return json.data;
    } else {
      return Promise.reject(json);
    }
  } catch (e) {
    console.log("Error handling response", e);
    return Promise.reject(error(500, "Something went wrong"));
  }
};

// export const get = async (url, queryObj, headers) => {
//   const queryString = qs.stringify(queryObj, { arrayFormat: "comma" });
//   const fullUrl = `${url}?${queryString}`;

//   try {
//     const response = await request(fullUrl, "GET", null, headers);
//     return await handleResponse(response);
//   } catch (e) {
//     return Promise.reject(e);
//   }
// };

export const post = async (url, body, headers) => {
  try {
    const response = await request(url, "POST", body, {
      "content-type": "application/json",
      ...headers,
    });
    return await handleResponse(response);
  } catch (e) {
    return Promise.reject(e);
  }
};

export const put = async (url, body, headers) => {
  try {
    const response = await request(url, "PUT", body, headers);
    return await handleResponse(response);
  } catch (e) {
    return Promise.reject(e);
  }
};
