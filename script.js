fetch("countries.json")
  .then(r => r.json())
  .then(countries => {

    // 🔹 Simulate a “selected point”
    // (later this comes from map click)
    const selectedCountry = countries.find(c => c.name === "France");

    // 🔹 RULE: match continent of selected country
    const rule = {
      type: "Matching",
      property: "continent",
      value: selectedCountry.continent,
      mode: "include"
    };

    // 🔹 APPLY RULE
    const result = countries.filter(country => {
      const match = country[rule.property] === rule.value;
      return rule.mode === "include" ? match : !match;
    });

    // 🔹 DISPLAY
    document.body.innerHTML =
      "<h2>Selected: " + selectedCountry.name + "</h2>" +
      "<h3>Filtered Countries:</h3><pre>" +
      JSON.stringify(result, null, 2) +
      "</pre>";
  });
