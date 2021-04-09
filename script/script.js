var app = new Vue ({
  el: "#app",

  data: {
    listaDischi: [],
    listaGeneri: ["All",],
    genere: "All",
    listaAnni:[],
  },

  mounted: function() {

    console.log(this.genere);
    axios.get('https://flynn.boolean.careers/exercises/api/array/music')
    .then( (risposta) => {

      const albumsOrdered = risposta.data.response.sort(function(a,b){return a.year - b.year});

      this.listaDischi = albumsOrdered;
      console.log(this.listaDischi);

      for (var i = 0; i < this.listaDischi.length; i++) {

        if (this.listaGeneri.includes(this.listaDischi[i].genre) == false) {
          this.listaGeneri.push(this.listaDischi[i].genre);
        }

        console.log(this.listaAnni.push(this.listaDischi[i].year));
      }

      console.log(this.listaAnni);
      this.listaAnni.sort(function(a,b){return a-b});
      console.log(this.listaAnni);

    });


  },

})
