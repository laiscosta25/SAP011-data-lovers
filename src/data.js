const dataFunctions = {
  filter: function (characters, value, key) {
    const filter = characters.filter(function (character) {
      const filtered = character[key].includes(value);

      return filtered;
    });

    return filter;
  },

  ascending: function (characters) {
    const order = characters.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      } else {
        return -1;
      }
    });

    return order;
  },

  descending: function (characters) {
    const order = characters.sort(function (a, b) {
      if (a.name > b.name) {
        return -1;
      } else {
        return 1;
      }
    });

    return order;
  },

  order: function (characters, selectAz) {
    const copy = [...characters];
    if (selectAz === "A-Z") {
      return dataFunctions.ascending(copy);
    }
    return dataFunctions.descending(copy);
  },

  searchName: function (characters, name) {
    const filter = characters.filter(function (character) {
      const filteredSearch = character.name
        .toLowerCase()
        .includes(name.toLowerCase());
      return filteredSearch;
    });
    return filter;
  },

  calculatePercentage: function (sizeList, sizeFilteredList) {
    return Math.round((sizeFilteredList * 100) / sizeList);
  },
};

export default dataFunctions;