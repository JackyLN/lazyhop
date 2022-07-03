export const getCommandFromQueryString = (query: string): string => {
  return query.split(" ")[0];
};

export const constructGoogleSearchUrl = (query: string): string => {
  const googleString = "https://google.com/search?q=";

  return googleString + encodeURI(query);
};
