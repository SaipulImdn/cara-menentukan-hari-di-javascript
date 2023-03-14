let hari = new Date().getDay()
hari = hari

switch (hari) {
    case 1:
        hari = 'senin'
    break
    case 2:
        hari = 'selasa'
    break
    case 3:
        hari = 'rabu'
    break
    case 4:
        hari = 'kamis'
    break
    case 5:
        hari = 'jumat'
    break
    case 6:
        hari = 'sabtu'
    break
    case 7:
        hari = 'minggu'
    break
    default:
        hari ='gak tau'
    break
}

alert(`hari ini adalah hari ${hari}`)