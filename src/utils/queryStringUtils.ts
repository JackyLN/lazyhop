export const getCommandFromQueryString = (query: string): string => {
  return query.split(" ")[0];
};

export const getSearchQueryFromQueryString = (query: string): string => {
  const cmd = getCommandFromQueryString(query);

  return query.substring(cmd.length).trim();
};

export const constructNormalUrl = (query: string): string => {
  //TODO: enchance regex instead of 2 matches
  return (query.match(/\/$/) || query.match(/\?/)) ? query : query + "/";
};

export const constructGoogleSearchUrl = (query: string): string => {
  const googleString = "https://google.com/search?q=";

  return googleString + encodeURI(query.trim());
};
