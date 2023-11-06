const { createApp } = Vue 
 createApp({
     data: function(){
         return{
             letter:0,
             number:0,
             symbol:0,

             letters_list : ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
             numbers_list : ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
             symbols_list : ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', '|', '\\', ':', ';', '<', '>', '.', ',', '?', '/', "'", '"'],
             password_list: [],
             result:''
         }
     },
     methods:{
             letter_input(){
                this.password_list = []
                 const min  = 1
                 const max = this.letters_list.length - 1
                 for(let i = 0; i < this.letter; i++){
                     rand_letter = Math.floor(Math.random() * (max - min) + min)
                     this.password_list.push(this.letters_list[rand_letter])
                    }
                },
                number_input(){
                    const min = 1
                    const max = this.numbers_list.length - 1
                    for(let i = 0; i < this.number; i++){
                        rand_number = Math.floor(Math.random() * (max - min) + min)
                        this.password_list.push(this.numbers_list[rand_number])
                    }
                },
                symbol_input(){
                    const min = 1
                    const max = this.symbols_list.length - 1
                    for(let i = 0; i < this.symbol; i++){
                        rand_symbol = Math.floor(Math.random() * (max - min) + min)
                        this.password_list.push(this.symbols_list[rand_symbol])
                    }
                    console.log(this.password_list)
             },
            find_password(){
                for(let i = this.password_list.length - 1; i > 0; i--){//4
                 rand_password = Math.floor(Math.random() * (i + 1))//2
                 console.log(rand_password)
                 const temp = this.password_list[i];//[ u 1 @ 4 U] U
                 this.password_list[i] = this.password_list[rand_password]; //1
                 this.password_list[rand_password] = temp; //U
                }
                    for(let a = 0; a < this.password_list.length; a++){
                        this.result += this.password_list[a]
                    }
             }
     }
 }).mount("#app")