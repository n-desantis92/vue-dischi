var app = new Vue ({
  el: "#app",

  data: {
    listaDischi: [],
  },

  mounted: function() {


    axios.get('https://flynn.boolean.careers/exercises/api/array/music')
    .then( (risposta) => {
      this.listaDischi = risposta.data.response;
      console.log(this.listaDischi);
      
    });


  }
})
