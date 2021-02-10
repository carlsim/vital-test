/* eslint-env browser */
(function() {
  'use strict';
  
  // My JS
  console.log('[Running JS] Hello World!');

  //Variable declarations
  const API_URL = 'https://carlsim.github.io/vital-test/data/data.json';

  //logging output
  // console.log(API_URL);

  /**
   * Get data from API
   */
  async function getData() {
    // Variable declarations for data expected
    const response = await fetch(`${API_URL}`);
    const data = await response.json();

    const countryCode = data.countryCode.toLowerCase();
    const currentURL = document.location.href;

    /**
     * Check to see if URL contains the country code
     * If doesnt exist, put it in URL otherwise don't do anything
     */
    if(currentURL.includes("?ca")) {
    }else {
      document.location.href += '?' + countryCode;
    }
  }

  // Call async function to get the data from JSON
  getData()
  .catch(error => {
    console.log(`Error: ${error}`);
  });
})();
