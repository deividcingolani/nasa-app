export const URLS = {
  PROJECTS: { url: "projects", subUrl: "" },
  DETAIL_PROJECT: { url: "projects", subUrl: "project_id" },
  FAVOURITES_PROJECT: { url: "projects", subUrl: "favourites" },
  DELETED_PROJECT: { url: "projects", subUrl: "deleted" },


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
