var app = new Vue ({
  el: "#app",

  data: {
    listaDischi: [],
    listaGeneri: [],
  },

  mounted: function() {


    axios.get('https://flynn.boolean.careers/exercises/api/array/music')
    .then( (risposta) => {
      this.listaDischi = risposta.data.response;
      console.log(this.listaDischi);

      for (var i = 0; i < this.listaDischi.length; i++) {

        if (this.listaGeneri.includes(this.listaDischi[i].genre) == false) {
          this.listaGeneri.push(this.listaDischi[i].genre);
        }
      }


    });


  },
  methods:{
    filtragen: function(item,i) {
      this.listaDischi.forEach((genere, i) => {
        console.log("ciao");
      });

    },
  }
})
