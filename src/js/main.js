new Vue({
	el: '#app',
	data: {
		searchText: '',
		numbers:[],
	},
 	created: function () {},
	methods: {
		doSearch: function(url){
			console.log(url);	
			if(url != ""){
				fetch("fake-api/data.json")
				.then(r => r.json())
				.then(json => {
					this.numbers=json.numbers;
				});
			} else {
				this.numbers = [];
			}
		}
	}
})