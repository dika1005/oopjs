import { makeCoffe, sendCoffe } from './coffe.mjs';

console.log('saya memesan kopi di warkop');

makeCoffe(() => {
    sendCoffe(()=> {
        console.log('abang warkop memeberikan kopi pesanan saya');
        console.log('saya mendapat kopi dan menghanisakannya');
    });
});

