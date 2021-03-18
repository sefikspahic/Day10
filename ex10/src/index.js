function myFunction() {
  var myMusic = {
    001: {
      artist: "Billy Joel",
      title: "Piano Ma",
      release_year: 1973,
      formats: {
        1: "CD",
        2: "8T",
        3: "LP",
      },
      gold: true,
    },
    002: {
      // Add a record here
      artist: "Esad Multimedia",
      title: "Auto moje",
      release_year: 1999,
      id: 1,
      formats: {
        1: "Hanka",
        2: "Usta joj velika",
        3: "DB",
      },
      gold: false,
    },
  };

  return myMusic;
}

console.log(myFunction()[2]);

module.exports = myFunction;
