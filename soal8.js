class Kegiatan {
    constructor(pagi,siang,malam){
        this.Pagi = pagi;
        this.Siang = siang;
        this.Malam = malam;
    }
}
var kegiatan1 = new Kegiatan("mandi", "makan", "tidur");
console.log(kegiatan1);