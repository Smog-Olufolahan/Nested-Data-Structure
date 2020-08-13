/* PART 2: Given the following nested object: */
var nestedObject = {
    speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
    data: {
      continents: {
        europe: {
          countries: {
            switzerland: {
              capital: "Bern",
              population: 8000000
            }
          }
        }
      },
      languages: {
        spanish: {
            hello: "Hola"
        },
        french: {
            hello: "Bonjour"
        }
      }
    }
  }
  
  /* Question 1: Write a function addSpeaker to add a speaker to the array of speakers. The speaker you add must be an object with a key of name and a value of whatever you'd like. */
  
  function addSpeaker(speaker) {
    var speakersObject = nestedObject.speakers;
    speakersObject.push({name: speaker});
    return speakersObject;
  }
  addSpeaker('Smog');
  
  /* Question 2: Write a function addLanguage that adds a language to the languages object. The language object you add should have a key with the name of the language and the value of another object with a key of "hello" and a value of however you spell "hello" in the language you add. */
  
  function addLanguage(language, interpretationOfHello) {
    var languagesObject = nestedObject.data.languages;
    languagesObject[language] = ({hello:interpretationOfHello});
    return languagesObject;
  }
  addLanguage('yoruba', 'Bawo Ni');
  
  /* Question 3: Write a function addCountry that adds a European country to the countries object (inside of the continents object, inside of the countries object). The country you add should be an object with the key as name of the country and the value as an object with the keys of "capital" and "population" and their respective values. */
  
  function addCountry(countryName, countryCapital, countryPopulation) {
    var countriesObject = nestedObject.data.continents.europe.countries;
    countriesObject[countryName] = ({capital: countryCapital, population: countryPopulation});
    return countriesObject;
  }
  addCountry('Nigeria', 'Abuja', 1500000000);
  
  