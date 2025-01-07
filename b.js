function kirimPesan() {
const hari = document.getElementById('hari').value;
const tgl = document.getElementById('tgl').value;
const a = document.getElementById('a').value;
const b = document.getElementById('b').value;

const aa = document.getElementById('aa').value;
const bb = document.getElementById('bb').value;

const pesan = `
𝐇𝐀𝐑𝐈  :  ${hari}
𝐓𝐀𝐍𝐆𝐆𝐀𝐋  :  ${tgl}
────────────────────
♻️ 𝐀𝐊𝐔𝐍 𝐏𝐂 1
✨️𝐊𝐎𝐈𝐍 : ${a}
✨️𝐆𝐈𝐈𝐅𝐓 𝐅𝐀𝐌𝐈𝐋𝐘  ${aa}
 ────────────────────   
♻️ 𝐀𝐊𝐔𝐍 𝐏𝐂 2
✨️𝐊𝐎𝐈𝐍 : ${b}
✨️𝐆𝐈𝐈𝐅𝐓 𝐅𝐀𝐌𝐈𝐋𝐘  ${bb}   

`;
    const whatsappUrl = `https://wa.me/6285711374861?text=${encodeURIComponent(pesan)}`;
    window.open(whatsappUrl, '_blank');
}
