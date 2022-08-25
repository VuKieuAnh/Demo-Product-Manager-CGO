// Khai bao lop
class Product{
    name;
    number;
    price;
    img;

//phuong thuc khoi tao
    constructor(name, number, price, img){
        this.name = name;
        this.number = number;
        this.price = price;
        this.img = img;
    }
//phuong thuc tinh tien
    getAmount(){
        let amount = this.number* this.price;
        return amount;
    }
}
