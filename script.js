fetch("countries.json")
  .then(r => r.json())
  .then(countries => {

    const rule = {
      type: "Matching",
      property: "continent",
      value: "Europe",
      mode: "include"
    };

    const result = countries.filter(country => {
      const match = country[rule.property] === rule.value;
      return rule.mode === "include" ? match : !match;
    });

    document.body.innerHTML = "<h2>Filtered Countries:</h2><pre>" +
      JSON.stringify(result, null, 2) +
      "</pre>";
  });
