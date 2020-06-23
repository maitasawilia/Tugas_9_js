function panggilObjects() {
  var sekolah = {
    nama : "SMA N 1 Gunung Talang",
    prestasi : "Sekolah Adiwiyata",
    jurusan : "Ipa dan Ips",
    siswa : 1080,
    akreditasi : "A",

  }
  for (var x in sekolah){
    console.log(sekolah[x])
  }
}

panggilObjects();
