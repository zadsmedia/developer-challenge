var app = new Vue({
    el: '#lista',
    data: {
        lista_telefones: [
          { 
            numero: "",
            quantidade: ""
          }
        ],
        limitNumber: 4,
        // filterValue: '',
    },
    mounted() {
      // lista = app.lista_telefones;
        fetch('data.json')
            .then(response => {
              response.json().then((data) => {
                this.lista_telefones = data.phones;
                this.lista_telefones.forEach(function (OBJ, key) {
                  this.quantidade = OBJ.quantidade;
                  this.numero = OBJ.numero;
                  // this.somaTel = this.somaTel + quantidade;
                })
                return this.lista_telefones;
              })
        })
        .catch(error => {
          alert(error)
        })
    },
    computed: {
      timeToLoad() {
        var t = 0;
        var start = new Date();
        // console.log(start);
        // console.log($('#lista').on('load'));
        $(window).on('load', function() {
            t = (new Date() - start)/1000;
            console.log(t)
        });
        // console.log(t);
        return t;
      },
      limitedPhones: function(){
        return this.lista_telefones.slice(0, this.limitNumber);
        // return _.chunk(this.lista_telefones, 4);
      }
    },
    methods: {
      show_more: function(event) {
        // return false;
        // return loadMore.show_more();
      }
    }


});

var loadMore = new Vue({
  el: "#ver_mais",
  methods: {
    show_more: function(event) {
      app.limitNumber += 4;
      // console.log(app.limitNumber)
      if (app.limitNumber >= app.lista_telefones.length) {
        $("#btn-ver-mais").removeClass("cursor-pointer");
        $("#btn-ver-mais").removeClass("load-more");
        $("#btn-ver-mais").addClass("disabled-btn");
      }
      return app.lista_telefones.slice(0, app.limitNumber);
    }
  }
})

var sort = new Vue({
  el: '#listener-ordenar',
    methods : {
      sort_list: function (event) {
        if ($('#sort_numbers').hasClass('fa-sort-numeric-desc')) {
          app.lista_telefones = (_.orderBy(app.lista_telefones,['quantidade'], ['desc']));
        } else {
          app.lista_telefones = (_.orderBy(app.lista_telefones,['quantidade'], ['asc']));
        }
      },
    }
});

var soma = new Vue({
  el: '#card-intro',
  data: {
    somaTel: "",
  }, 
  computed: {
      somaTelEncontrados: function () {
        var local = 0;
        for(i = 0; i < app.lista_telefones.length; i++) {
          local = local+parseInt(app.lista_telefones[i].quantidade);
        }
        this.somaTel = local;
        return local;
      },
      timeLoad: function() {
        return app.timeToLoad;
      }
    },
    
});

// Descobre URL Arquivo JSON
var dataPlace = new Vue({
  el: '#data_storage',
  data: {
    url: '',
  },
  computed: {

  },
  methods: {
    getURL: function (event) {
        alert(this.url);
      }
  }
});

//! Custom OBJ Para Search Topo 
var searchTop = new Vue({
  el: '#search_filter',
  data: {
    filterValue: '',
  },
  computed: {
    message: function () {
      var pesquisa = this.filterValue;
      console.log(pesquisa)
      // return app.lista_telefones.filter(function (pesquisa) {
        // return app.lista_telefones.numero === pesquisa;
      // })
      
    }
  }
})

// var listener_ordenar = new Vue({
//   
//   data: {
//     vetorQntd = [],
//     aux = '';
//   } methods: {
//      sort_asc: function (event) {
//        vetorQntd = app.lista_telefones;
//        i = vetorQntd.lenght;
//        app.lista_telefones.forEach(function (telefone, quantidade) {
//          if (this[i].quantidade < telefone.quantidade) {
//            aux = this.quantidade[i];
//            this.quantidade[i] = this.quantidade[i-1];
//            this.quantidade[i-1]
//          } else {
//              i++;
//            }
//          }
//        }
//        console.log(telefone);
//      }
// })


      // filteredAndSortedData() {
     //            // Apply filter first
     //            let result = this.lista_telefones;
     //            if (this.filterValue) {
     //                result = result.filter(item => item.name.includes(this.filterValue));
     //            }
     //            // Sort the remaining values
     //            let ascDesc = this.sortAsc ? 1 : -1;
     //            return result.sort((a, b) => ascDesc * a.name.localeCompare(b.name));
  //    //        },
  //    filtered: function (lista_telefones) {
  //        if(this.filterValue) {
  //          console.log("sim")
  //        } else {
  //          console.log("nao")
  //        }
  //        return lista_telefones.filter(function (filterValue) {
            
    //        return lista_telefones.quantidade === this.filterValue || lista_telefones.telefone === this.filterValue;
    //    })
    // },
  //    invertSort() {
  //        this.sortAsc = !this.sortAsc;
    // }
    

//     update {
//       // GET /someUrl
//       this.$http.get('/someUrl').then(response => {

//         // get body data
//         this.someData = response.body;

//       }, response => {
//         // error callback
//       }
//     },
//     methods: {
//       search_another: function(){
//         $.getJSON('http://localhost:8080/#/timeline.json',function(json){
//           console.log('Entered inside');
//           this.items = new vis.DataSet([json]);
//           console.log(json);
//         });
//       },
//     }
