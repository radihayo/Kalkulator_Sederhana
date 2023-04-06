function hitung_luas_segitiga(){
    var validasi_angka = /^[0-9]+$/;
    var alas = document.getElementById("alas").value;
    var tinggi = document.getElementById("tinggi").value;
    if (alas == "" || tinggi=="" ) {
        alert('Inputan Alas Atau Tinggi Ada Yang Kosong');
    }else if(!alas.match(validasi_angka) || !tinggi.match(validasi_angka)){
        alert('Inputan Alas Atau Tinggi Harus Angka');
    }else{
        var luas = "L = "+(alas*tinggi)*0.5;
        var rumus_luas_saja = "L = 1/2 x a x t";
        var rumus_luas_angka = "L = 1/2 x "+alas+" x "+tinggi;
        document.getElementById("luas").innerHTML=luas;
        document.getElementById("rumus_luas_saja").innerHTML=rumus_luas_saja;
        document.getElementById("rumus_luas_angka").innerHTML=rumus_luas_angka;
    }
}

function hitung_keliling_segitiga(){
    var validasi_angka = /^[0-9]+$/;
    var sisi_a = document.getElementById("sisi_a").value;
    var sisi_b = document.getElementById("sisi_b").value;
    var sisi_c = document.getElementById("sisi_c").value;
    if (sisi_a == "" || sisi_b=="" ||sisi_c=="") {
        alert('Inputan Sisi Ada Yang Kosong');
    }else if(!sisi_a.match(validasi_angka) || !sisi_b.match(validasi_angka) || !sisi_c.match(validasi_angka)){
        alert('Inputan Sisi Harus Angka');
    }else{
        var keliling = "K = "+(parseInt(sisi_a)+parseInt(sisi_b)+parseInt(sisi_c));
        var rumus_keliling_saja = "K = S1 + S2 + S3";
        var rumus_keliling_angka = "K = "+sisi_a+" + "+sisi_b+" + "+ sisi_c;
        document.getElementById("keliling").innerHTML=keliling;
        document.getElementById("rumus_keliling_saja").innerHTML=rumus_keliling_saja;
        document.getElementById("rumus_keliling_angka").innerHTML=rumus_keliling_angka;
    }
}

function hitung_luas_jajar_genjang(){
    var validasi_angka = /^[0-9]+$/;
    var alas_luas = document.getElementById("alas_luas").value;
    var tinggi_luas = document.getElementById("tinggi_luas").value;
    if (alas_luas == "" || tinggi_luas=="" ) {
        alert('Inputan Alas Atau Tinggi Bagian Hitung Luas Ada Yang Kosong');
    }else if(!alas_luas.match(validasi_angka) || !tinggi_luas.match(validasi_angka)){
        alert('Inputan Alas Atau Tinggi Bagian Hitung Luas Harus Angka');
    }else{
        var luas = "L = "+alas_luas*tinggi_luas;
        var rumus_luas_saja = "L =  a x t";
        var rumus_luas_angka = "L = "+alas_luas+" x "+tinggi_luas;
        document.getElementById("luas").innerHTML=luas;
        document.getElementById("rumus_luas_saja").innerHTML=rumus_luas_saja;
        document.getElementById("rumus_luas_angka").innerHTML=rumus_luas_angka;
    }
}

function hitung_keliling_jajar_genjang(){
    var validasi_angka = /^[0-9]+$/;
    var alas_keliling = document.getElementById("alas_keliling").value;
    var tinggi_keliling = document.getElementById("tinggi_keliling").value;
    if (alas_keliling == "" || tinggi_keliling=="" ) {
        alert('Inputan Alas Atau Tinggi Bagian Hitung Keliling Ada Yang Kosong');
    }else if(!alas_keliling.match(validasi_angka) || !tinggi_keliling.match(validasi_angka)){
        alert('Inputan Alas Atau Tinggi Bagian Hitung Keliling Harus Angka');
    }else{
        var keliling = "K = "+(2*(parseInt(alas_keliling)+parseInt(tinggi_keliling)));
        var rumus_keliling_saja = "K = 2 x (a + t)";
        var rumus_keliling_angka = "K = 2 x ( "+alas_keliling+" + "+tinggi_keliling+" )";
        document.getElementById("keliling").innerHTML=keliling;
        document.getElementById("rumus_keliling_saja").innerHTML=rumus_keliling_saja;
        document.getElementById("rumus_keliling_angka").innerHTML=rumus_keliling_angka;
    }
}

function reset_luas_segitiga(){
    document.getElementById("rumus_luas_saja").style.display="none";
    document.getElementById("rumus_luas_angka").style.display="none";
    document.getElementById("luas").style.display="none";
}

function reset_keliling_segitiga(){
    document.getElementById("rumus_keliling_saja").style.display="none";
    document.getElementById("rumus_keliling_angka").style.display="none";
    document.getElementById("keliling").style.display="none";
}

function reset_luas_jajar_genjang(){
    document.getElementById("rumus_luas_saja").style.display="none";
    document.getElementById("rumus_luas_angka").style.display="none";
    document.getElementById("luas").style.display="none";
}

function reset_keliling_jajar_genjang(){
    document.getElementById("rumus_keliling_saja").style.display="none";
    document.getElementById("rumus_keliling_angka").style.display="none";
    document.getElementById("keliling").style.display="none";
}


