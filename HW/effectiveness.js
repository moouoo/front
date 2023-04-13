const id =  /^[a-z0-9_]{4,20}$/;
const pwd = /^[a-zA-Z\\d`~!@#$%^&*()-_=+]{4,20}$/;
const nicName = /[^가-힣]/;
const name = /[^a-z A-Z 가-힣]/;
const email = /[a-z A-Z 0-9]@[a-z A-Z 0-9]/;
const homepage = /[https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)]/;
const telNum = /[^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$]/;
const seNum = /[\d{2}([0]\d|[1][0-2])([0][1-9]|[1-2]\d|[3][0-1])[-]*[1-4]\d{6}]/;

function InputCheck(inputId, value)
{
    if(inputId == "id")
    {
        console.log("tlqkf");
        idRegex = id;
        if(!idRegex.test(value)){
            alert("fail id");
        }    
    }
    else if(inputId == "pwd")
    {
        idRegex = pwd;
        if(!idRegex.test(value)){
            alert("fail pwd");
        }
    } 
}