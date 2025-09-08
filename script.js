p = document.getElementsByTagName("p")[0];
p.style.color = "green";
p.style.fontWeight = "bold";
console.log(p);

console.log("Hello, World!");

email = document.getElementById("email");
daftar = document.getElementById("daftar");

daftar.addEventListener("click", function() {
    if (email.value === "") {
        alert("Email Harus Diisi!");
        email.focus();
    } else {
        alert("Pendaftaran Berhasil!");
        window.location.href = "index.html";
    }
});

// let i = 1;
//     do {
//         console.log(i + ". Hello, World!");
//         i++;
//     } while (i <= 1000);