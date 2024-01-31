
document.getElementById("detik").innerText = new Date().getSeconds();
function jamdigital() {
    let waktu = new Date();
    let detik = waktu.getSeconds();
    let jam = waktu.getHours();
    let menit = waktu.getMinutes();

    if (detik < 10) {
        detik = "0" + detik;
    }

    if (menit < 10) {
        menit = "0" + menit;
    }

    if (jam < 10) {
        jam = "0" + jam;
    }

    document.getElementById("detik").innerText = detik;
    document.getElementById("jam").innerText = jam;
    document.getElementById("menit").innerText = menit;

    setTimeout(jamdigital, 1000);

    if (detik % 2 == 0) {
        document.getElementById("border").style.borderColor = "gray";
    } else {
        document.getElementById("border").style.borderColor = "black";
    }

    if (detik % 2 == 0) {
        document.getElementById("detik").style.color = "firebrick";
    } else {
        document.getElementById("detik").style.color = "#021691";
    }
}

if (detik < 10) {
    detik = "0" + detik;
}

jamdigital();
