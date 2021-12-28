function loginnn() {
  let nama_awal = "syifa";
  let kunci_awal = "integrity";
  let nama = document.getElementById("username").value;
  let kunci = document.getElementById("password").value;
  if (nama == nama_awal && kunci == kunci_awal) {
    // alert("login berhasil");
    var x = window.open("berhasil.html", "_blank");
    x.focus;
  }
}
