export const URLS = {
  PROJECTS: { url: "projects", subUrl: "" },
  DETAIL_PROJECT: { url: "projects", subUrl: "project_id" },

};

export const getEndpointURL = (key) => {
  let finalUrl = "";
  if (key && URLS[key]) {
    const urlKey = URLS[key];
    if (urlKey.url) {
      finalUrl = urlKey.url;
    }
    if (urlKey.subUrl && urlKey.subUrl.length > 0) {
      finalUrl += `/${urlKey.subUrl}`;
    }
  }
  return finalUrl;
};
