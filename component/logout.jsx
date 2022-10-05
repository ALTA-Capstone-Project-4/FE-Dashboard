import { deleteCookie, getCookie } from "cookies-next";

const Logout = () => {
    deleteCookie("Token");
    deleteCookie("Name");
    alert("berhasil logout")
}

export default Logout