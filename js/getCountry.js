export const fetchLocation = async () => {
    try {
      // Attempt to fetch location data based on IP
      let response = await fetch('https://ipapi.co/json/');
      let data = await response.json();
      return data.country_code;
    } catch (error) {
      console.error('Error:', error);
  
      // If IP-based geolocation fails, guess based on browser language
      let language = navigator.languages && navigator.languages[0] || // Chrome / Firefox
                     navigator.language ||   // All browsers
                     navigator.userLanguage;
  
      // For simplicity, we're assuming the first part of the language tag is the country code
      // e.g., "en-US" for "English - United States"
      let countryCode = language.split('-')[1];
      return countryCode || 'Unknown';
    }
  };
  