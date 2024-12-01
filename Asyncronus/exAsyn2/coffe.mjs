export function makeCoffe() {
    const estimationTime = 5000;

    const inSecond = Math.ceil(estimationTime / 1000);
    console.log(`mohon untuk menunggu. kopia anda akan segera datang dalam ${inSecond} detik`);

    setTimeout(() => {
        console.log('kopi anda telah siap');
    }, estimationTime);
}