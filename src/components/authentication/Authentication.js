import axios from 'axios'
// moviedbackend.herokuapp.com
const register=async(userData)=>{
    const res=await axios.post('https://moviedbackend.herokuapp.com/api/register', userData)
    if (res.data) {
        localStorage.setItem('user', JSON.stringify(res.data))
        // console.log(localStorage)
      }
    return res;
}

const login=async (userData)=>{
    const res=await axios.post('https://moviedbackend.herokuapp.com/api/login', userData);
    if (res.data) {
        localStorage.setItem('user', JSON.stringify(res.data))
      }
    return res;
}
const logOut=()=>{
    localStorage.removeItem('user')
}

const authService = {
    login,
    logOut,
    register,
  }
  
  export default authService