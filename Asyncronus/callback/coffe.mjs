export function makeCoffe(callback) {
    const estimationTime = 5000;

    const inSecond = Math.ceil(estimationTime / 1000);
    console.log(`mohon untuk menunggu. kopia anda akan segera datang dalam ${inSecond} detik`);

    setTimeout(() => {
        console.log('kopi anda telah siap');
        callback();
    }, estimationTime);
}

export function sendCoffe(callback) {
    const estimationTime = 2000;

    console.log('abang warkop sedang mengantarkan kopi pesanan anda');

    setTimeout(() => {
        console.log('abang warkop sudah sampai di meja anda');
        callback();
    }, estimationTime);
}