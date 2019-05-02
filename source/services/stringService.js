const stringService = {
  convertHttpToHttps(httpString) {
    return httpString.replace(/^http:\/\//g, "https://");
  },
};

export { stringService };
