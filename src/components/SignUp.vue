<template>
  <img src="../assets/logo.jpeg" alt="">
   <h1>Sign up</h1>
   <div class="register">
   <input type="text" v-model="name" placeholder="Enter Name"/> 
    <input type="text" v-model="email" placeholder="Enter Email"/> 
     <input type="password" v-model="password" placeholder="Enter Password"/> 
     <button v-on:click="signUp" >Sign Up</button>
   </div>
</template>

<script>
import axios from "axios"
export default{
    name:"SignUp",
    data(){
        return{
            name:'',
            email:'',
            password:'',
        }
        },
        methods:{
            async signUp(){
                let result = await axios.post("http://localhost:3000/users",{
                    email:this.email,
                    password:this.password,
                    name:this.name
                });
                console.warn(result);
                if(result.status==201){
                    alert("sign-up done");
                    localStorage.setItem("userInformations", JSON.stringify(result.data))

                }
                 }
    }
}
</script>

<style>

.logo{
   width: 100px; 
}
.register input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid skyblue;

}
.register button{
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    background-color: skyblue;
    color: #fff;
    cursor: pointer;
}
</style>