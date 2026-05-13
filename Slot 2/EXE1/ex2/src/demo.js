let tong = (a,b) => a+b;    
console.log(tong(5,3));

//1.Viet ham chao nhan 1 tham so ten va in ra loi chao voi ten do 
let chao = () => console.log("Hello World");
chao();

//2.Viet ham chao2 nhan 1 tham so ten va in ra loi chao voi ten do
let chao2 = (name) => console.log(`Hello ${name}`);
chao2("Duc");

//3.Viet ham chao3 nhan tham so la 1 doi tuong person(name,id,age,address)
//sau do in ra loi chao voi cac thuoc tinh cua doi tuong do
//goi ham chao3 voi doi tuong person mau

let chao3 = (person) => {
    console.log(`Xin chào ${person.name}! ID của bạn là ${person.id}, năm nay bạn ${person.age} tuổi và đang sống tại ${person.address}.`);
};


let personMau = {
    name: "Đức",
    id: "DE200244",
    age: 20,
    address: "Đà Nẵng"
};

chao3(personMau);
