var baseUrl = "https://server-ecomm.vinesto.xyz"
// var baseUrl = "http://localhost:3000"
// var baseUrl = "http://35.240.213.71"
var app = new Vue({
    el: '#app',
    data: {
        items: '',
        cartvalue: '',
        total: 0,
        token: false,
        errorMessage: [],
        message: '',
    },
    methods: {
        
    },
    created() {
        let checkToken = localStorage.getItem("token")
        if(checkToken){
            this.token = true
        }
        // this.getAllItem()
    },
    watch: {
        isLogin:function(newLogin,oldLogin){
            if(newLogin){
                this.token = true  
            }
        },
        isLogout:function(newLogout, oldLogout){
            if(newLogout){
                this.token = false
            }
        }
    },
    computed:{
        priceTag:function(){
            
        }
    }
})