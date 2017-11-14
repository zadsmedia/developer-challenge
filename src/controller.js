var app = new Vue({
    el: '#lista',
    data: {
        lista_telefones: [
          { 
            numero: "",
          quantidade: ""
          }
        ],
        sortAsc: false,
        filterValue: '',
        somaTel: '0',
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
                console.log(this.lista_telefones)
                return this.lista_telefones;
              })
        })
        .catch(error => {
          alert(error)
        })
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

// //! Custom OBJ Para Search Topo 
// var searchTop = new Vue({
//   el: '#search_filter',
//   data: {
//     filterValue: '',
//   }
// });

// var search = new Vue({
//   el: '#GetSearchTopo',
//   data: {
//   },
//   computed: {
//     message: function () {
//       return searchTop.filterValue;
//     }
//   }
// })



// var search = new Vue({
//  el: '#lista',
//  data: {
//    filterValue:'',
//  }
// });

// var soma = new Vue({
//  el: '#card-intro',
//  data: {
//    somaTel: "",
//    app_: "",
//  }, computed: {
//      somaTelEncontrados() {
//        app_ = app.lista_telefones;
//        console.log(app_)
//        console.log(app_.lista_telefones.lenght);
//        for (i=0; i< app_.lista_telefones.lenght; i = 1+1) {
//          console.log(app_.lista_telefones[i].quantidade)
//        }
//        // let result = this.lista_telefones;
//      }
//     }
// });



// var listener_ordenar = new Vue({
//   el: '#listener-ordenar',
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

var soma = new Vue({
  el: '#card-intro',
  data: {
    somaTel: "",
  }, 
  computed: {
        // a computed getter
      somaTelEncontrados: function () {
        var local = 0;
        // return app.lista_telefones.lenght;
        console.log(app.lista_telefones[0].quantidade);
        // console.log(app.lista_telefones.length);
        for(i = 0; i < app.lista_telefones.length; i++) {
          local = local+parseInt(app.lista_telefones[i].quantidade);
        }
        this.somaTel = local;
        return local;
      }
    },
    
});
