 ABOUT CONTACT PRIVACY SITEMAP
 +62821-3576-3260
 JOIN OUR SITE
Kene Ono
 Menu
 Home
Aplikasi 
Bisnis Online
Blogging
Source
Trik Internet
Free Account SSH
Home  Blogging  Tutorial  Cara Membuat Blog Safelink Converter Work 100%
Cara Membuat Blog Safelink Converter Work 100%
 Dedi Islafuddin Penulis Dedi Islafuddin Diterbitkan 10:41:00


 
Assalamualaikum...
KENEONO - Dikesempatan kali ini saya akan share Cara Membuat Blog Safelink Converter Work 100%. Apa blog safelink converter itu ?? Yaitu blog untuk mengkonversi atau membuat encypted link untuk semua link dari sebuah blog agar link-link tersebut menjadi aman dengan dikonversi menjadi base64. Dan jika ada pengunjung yang meng-klik link tersebut maka pengunjung akan dibawa ke halaman redirect safelink converter untuk mendapatkan link aslinya. Bagi sobat yang mempunyai blog download sobat bisa membuat blog safelink ini untuk mendapatkan penghasilan tambahan dari iklan yang sobat pasang, seperti yang ada diblog ini.



DEMO 

Berikut Cara Membuat Blog Safelink Converter Work 100%, simak baik" dengan teliti dibawah ini :

- Pertama silakan buat blog baru dan ganti template Kompiajaib Safelink Converter download Disini. (Jika sobat menggunakan domain TLD silakan hapus script dibawah ini yang ada di template)

var blog = document.location.hostname;
var slug = document.location.pathname;
var ctld = blog.substr(blog.lastIndexOf("."));
if (ctld != ".com") {
var ncr = "https://" + blog.substr(0, blog.indexOf("."));
ncr += ".blogspot.com/ncr" + slug;
window.location.replace(ncr); };

- Jika sobat menggunkan domain blogspot.com maka link url blog yang sobat tulis di htmledit dan di script lainnya gunakan https:// jangan http:// begitu juga dibagian Setelan > Dasar > Pengahilan HTTPS hidupkan.



- Selanjutnya buatlah Laman statis dengan judul Generate dan masukkan script dibawah ini degan mode HTML. setelah itu Publikasikan.

  <div class="text-center margin-bottom-20">
<h3>Advertise</h3>
KODE IKLAN DISINI
  </div>

<div class="row margin-bottom-20">
  <div class="col-md-6">
<div class="panel panel-primary">
    <div class="panel-heading text-center"><h2><i class="fa fa-shield"></i> Safe Link Converter <i class="fa fa-shield"></i></h2></div>
        <div class="panel-body text-center">
          <p class="text-primary margin-bottom-20">Encrypting your link and protect the link from viruses, malware, thief, etc!<br/>Made your link safe to visit.</p>

<div class="progress" id="daplong">
    <div class="progress-bar progress-bar-striped active six-sec-ease-in-out" role="progressbar" data-transitiongoal="100"></div>
</div>
<button id="download2" class="alert alert-dismissible alert-success btn-lg" style='display:none'><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> <strong>Well done!</strong> you have successfully gained access to Decrypted Link. <i class="fa fa-hand-o-down slideInDownThumb" aria-hidden="true"></i></button>

        </div>
      </div>
</div>
  <div class="col-md-6 text-left">
<div class="panel panel-info">
  <!-- Default panel contents -->
  <div class="panel-heading"><h2><i class="fa fa-question-circle-o" aria-hidden="true"></i> How to use our tool:</h2></div>
  <div class="panel-body">
<ol>
<li>Click on <strong>How To Use</strong> menu above.</li>
<li>Click on the code and <kbd><kbd>CTRL</kbd> + <kbd>C</kbd></kbd> on your keyboard.</li>
<li>Paste the code in your HTML blog theme before the <mark>&lt;/body&gt;</mark>.</li>
<li>Save your HTML blog theme. you are done!</li>
<li>Now, your blog's outbound links was encrypted!</li>
</ol>
  </div>
</div>
</div><div class="clear"></div>
</div>

<div class="row margin-bottom-20">
  <div class="col-md-4 text-center">
<h3>Advertise</h3>
KODE IKLAN DISINI
</div>
  <div class="col-md-4 margin-top-25">
<div class="panel panel-success text-center">
<div class="panel-heading">
<h3 class="panel-title">
<b>Your link show here</b> <i aria-hidden="true" class="fa fa-hand-o-down"></i></h3>
</div>
<div class="panel-body">
<script src="https://cdn.rawgit.com/dedi96/safelink/813ce72f/safelinkga.js" type="text/javascript"></script>
<script type="text/javascript">
var currentURL=location.href;
var str = currentURL;
var res = str.replace("http://www.safelink.ga/p/generate.html?url=", "");
document.write('<button type="button" id="download" class="Visit_Link btn btn-success" onclick="changeLink();" style="display: none;"><strong>Visit Link</strong> <i class="fa fa-external-link" aria-hidden="true"></i></button>')
</script>
  </div>
</div>
</div>
 <div class="col-md-4 text-center">
<h3>Advertise</h3>
KODE IKLAN DISINI
</div>
<div class="clear"></div>
</div>

<div class="container">
  <div class="text-left">

  </div>
</div>

- Kemudian buatlah file js silakan copy script dibawah ini ke notepad dan simpan dengan tipe safelink.js (dan jangan lupa ganti url http://www.safelink.ga/p/generate.html dengan url Laman statis yang sudah kita buat tadi ).

var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(input){var output="";var chr1,chr2,chr3,enc1,enc2,enc3,enc4;var i=0;input=Base64._utf8_encode(input);while(i<input.length){chr1=input.charCodeAt(i++);chr2=input.charCodeAt(i++);chr3=input.charCodeAt(i++);enc1=chr1>>2;enc2=((chr1&3)<<4)|(chr2>>4);enc3=((chr2&15)<<2)|(chr3>>6);enc4=chr3&63;if(isNaN(chr2)){enc3=enc4=64;}else if(isNaN(chr3)){enc4=64;}
output=output+ this._keyStr.charAt(enc1)+ this._keyStr.charAt(enc2)+ this._keyStr.charAt(enc3)+ this._keyStr.charAt(enc4);}
return output;},decode:function(input){var output="";var chr1,chr2,chr3;var enc1,enc2,enc3,enc4;var i=0;input=input.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(i<input.length){enc1=this._keyStr.indexOf(input.charAt(i++));enc2=this._keyStr.indexOf(input.charAt(i++));enc3=this._keyStr.indexOf(input.charAt(i++));enc4=this._keyStr.indexOf(input.charAt(i++));chr1=(enc1<<2)|(enc2>>4);chr2=((enc2&15)<<4)|(enc3>>2);chr3=((enc3&3)<<6)|enc4;output=output+ String.fromCharCode(chr1);if(enc3!=64){output=output+ String.fromCharCode(chr2);}
if(enc4!=64){output=output+ String.fromCharCode(chr3);}}
output=Base64._utf8_decode(output);return output;},_utf8_encode:function(string){string=string.replace(/\r\n/g,"\n");var utftext="";for(var n=0;n<string.length;n++){var c=string.charCodeAt(n);if(c<128){utftext+=String.fromCharCode(c);}
else if((c>127)&&(c<2048)){utftext+=String.fromCharCode((c>>6)|192);utftext+=String.fromCharCode((c&63)|128);}
else{utftext+=String.fromCharCode((c>>12)|224);utftext+=String.fromCharCode(((c>>6)&63)|128);utftext+=String.fromCharCode((c&63)|128);}}
return utftext;},_utf8_decode:function(utftext){var string="";var i=0;var c=c1=c2=0;while(i<utftext.length){c=utftext.charCodeAt(i);if(c<128){string+=String.fromCharCode(c);i++;}
else if((c>191)&&(c<224)){c2=utftext.charCodeAt(i+ 1);string+=String.fromCharCode(((c&31)<<6)|(c2&63));i+=2;}
else{c2=utftext.charCodeAt(i+ 1);c3=utftext.charCodeAt(i+ 2);string+=String.fromCharCode(((c&15)<<12)|((c2&63)<<6)|(c3&63));i+=3;}}
return string;}}
var encode=document.getElementById('encode'),decode=document.getElementById('decode'),output=document.getElementById('output'),input=document.getElementById('input');var User_ID="";var protected_links="";var a_to_va=0;var a_to_vb=0;var a_to_vc="";function auto_safelink(){auto_safeconvert();}
function auto_safeconvert(){var a_to_vd=window.location.hostname;if(protected_links!=""&&!protected_links.match(a_to_vd)){protected_links+=", "+ a_to_vd;}else if(protected_links=="")
{protected_links=a_to_vd;}
var a_to_ve="";var a_to_vf=new Array();var a_to_vg=0;a_to_ve=document.getElementsByTagName("a");a_to_va=a_to_ve.length;a_to_vf=a_to_fa();a_to_vg=a_to_vf.length;var a_to_vh=false;var j=0;var a_to_vi="";for(var i=0;i<a_to_va;i++)
{a_to_vh=false;j=0;while(a_to_vh==false&&j<a_to_vg)
{a_to_vi=a_to_ve[i].href;if(a_to_vi.match(a_to_vf[j])||!a_to_vi||!a_to_vi.match("http"))
{a_to_vh=true;}
j++;}
if(a_to_vh==false)
{var encryptedUrl=Base64.encode(a_to_vi);a_to_ve[i].href="http://www.safelink.ga/p/generate.html?url="+ encryptedUrl;a_to_ve[i].rel="nofollow";a_to_vb++;a_to_vc+=i+":::"+ a_to_ve[i].href+"\n";}}
var a_to_vj=document.getElementById("anonyminized");var a_to_vk=document.getElementById("found_links");if(a_to_vj)
{a_to_vj.innerHTML+=a_to_vb;}
if(a_to_vk)
{a_to_vk.innerHTML+=a_to_va;}}
function a_to_fa()
{var a_to_vf=new Array();protected_links=protected_links.replace(" ","");a_to_vf=protected_links.split(",");return a_to_vf;}

- Setelah itu upload file safelink.js nya tadi ke Github. Cara Upload File JavaScript di GitHub



 
- Setelah selesai di upload silakan copy url hasil upload nya tadi dan silakan kembali ke Laman blog yang sudah kita buat tadi silakan edit. Ganti url https://cdn.rawgit.com/dedi96/safelink/813ce72f/safelinkga.js dengan url hasil upload.an di ghitub tadi, dan begitu juga http://www.safelink.ga/p/generate.html ganti dengan url Laman statis yang sudah kita buat sebelumnya. Setelah itu Perbarui.

- Kemudian kita edit Template blog, masuk pada menu Tema / Template > Edit HTML. Cari url https://cdn.rawgit.com/dedi96/safelink/813ce72f/safelinkga.js dan http://www.safelink.ga/p/generate.html ganti dengan masing" url yang sudah kita buat tadi sebelumnya, masih sama seperti diatas. Dan begitu juga dengan url lainnya. Setelah itu Simpan Template.

- Disini blog Safelink Corverter nya sudah bisa kita gunakan, untuk supaya blog Utama kita bisa redirect link masukkan script dibawah ini tepat di atas code </body>. Terus simpan.

<script src='https://cdn.rawgit.com/dedi96/safelink/813ce72f/safelinkga.js' type='text/javascript'/>
<script type='text/javascript'>
protected_links = &quot;domain.com,blogspot.com,blogger.com,linkedin.com,facebook.com,twitter.com,google.com,feedburner.com&quot;;
auto_safelink();
</script>

- Selesai, blog Safelink Converter nya sudah jadi silakan sobat test klik link download yang ada diblog Utama. maka akan dibawa ke blog safelink converter pada Laman Generate yang sudah kita buat tadi.

Keterangan :
- Gunakan Ctl + F untuk mencari code lebih cepat
- Ganti nama-nama web / blog yang ada di bagian Protected_Link . (gunanya supanya nama web / blog yang kita tulis tidak akan ke redirect ke blog safelink).
- Tulisan KODE IKLAN DISINI silakan taruh iklan Adsense nya disitu
- Jika masih kurang paham bisa ditanyakan .

Jika sobat kurang tau dan mau instant langsung jadi bisa menghubungi saya, tapi ntar ada anunya buat beli rokok :D . wkwkwk...

Sekian artikel dari saya tentang Cara Membuat Blog Safelink Converter Work 100%, semoga bermanfaat untuk sobat-sobat semua.
Terimakasih...
Wassalamualaikum...

 
 Short URL  Google  Facebook  Twitter 
Blogging Tutorial

Cari artikel di blog ini...
Artikel Terkait


Cara Menghilangkan Kode m=1 Pada Url Blog Saat dibuka di HP

Cara Melihat Kecepatan Loading Blog

Cara Membuat Inject Delphi Seperti Payload HTTP Injector

Cara Membuat Multi Select Skin Delphi dengan Business Skin

Tips Agar Artikel Blog Cepat Terindex di Google

Mempelajari Dasar-dasar Kode Script HTML
 Dedi Islafuddin
Dedi Islafuddin 
Aku mung wong biasa seng ora iso opo-opo neng pengen iso, jen koyok kanca-kancane.

Cara Upgrade Kartu TRI 3G ke 4G Dengan Mudah dilakukan Sendiri
Cara Cepat Supaya di Terima Google Adsense
98 komentar
avatar
Balas
Aris Wahyu delete 22 March 2017 at 20:29
Makasih banyak gan, setelah sana sini kaga ada yg bener akhirnya disini bisa juga.
avatar
Balas
Dedi Islafuddin  delete 22 March 2017 at 21:27
iya sama-sama bosku.  mantav..
avatar
Balas
KNURD STORE delete 28 March 2017 at 19:37
udah ga work kamvret..
avatar
Balas
Dedi Islafuddin  delete 28 March 2017 at 21:38
ga work gimana maksdunya ?? ane masih work ini bos. coba diteliti dengan jelas artikel diatas.
avatar
Balas
Ersa Azis Mansyur delete 31 March 2017 at 13:54
Gan kalo safelink gratis yang di Adbli.com gimana yaa??
boleh minta tutorialnya ngga?
avatar
Balas
Dedi Islafuddin  delete 31 March 2017 at 16:49
Wah kurang tau ane om 
avatar
Balas
Mas Yogick delete 6 April 2017 at 10:29
kak punya gue udah jadi tapi linknya gk nyala
avatar
Balas
Mas Yogick delete 6 April 2017 at 10:33
http://lowurls.blogspot.com

itu punya gue om, tapi safelink nya gk bisa
avatar
Balas
Dedi Islafuddin  delete 6 April 2017 at 17:04
Gak bisanya gimana ?? Mungkin slah dlm penerapan nya bos.
avatar
Balas
Mas Yogick delete 6 April 2017 at 18:21
coba aja om punya gue
avatar
Balas
Dedi Islafuddin  delete 7 April 2017 at 13:58
Salah penerapan script js nya kayaknya
avatar
Balas
Dedi Islafuddin  delete 7 April 2017 at 13:58
Salah penerapan script js nya kayaknya
avatar
Balas
Chiky- Games delete 9 April 2017 at 00:04
ka saya sudah work 1000% tapi saya pengen seperti kaka, jadi sambil menunggu link datang disitu da bacaan "klik link di bawah" dan ada iklan nya juga, tolong kasih tahu caranya ka?
avatar
Balas
Dedi Islafuddin  delete 9 April 2017 at 00:31
tinggal taruh script iklannya dan tambahi tulisan di atas tulisan "Visit Link"
avatar
Balas
Semangat 27 delete 9 April 2017 at 07:09
gan kenapa pas visit link marah eror 404
avatar
Balas
Dedi Islafuddin  delete 9 April 2017 at 07:14
pasti salah dalam penerapan scriptnya, coba dibaca dengan teliti bos
avatar
Balas
Semangat 27 delete 9 April 2017 at 07:35
script yg mana? udah ane ulang berkali-kali 
avatar
Balas
Dedi Islafuddin  delete 9 April 2017 at 10:49
pake blogspot.com apa domain tld ?
script didalam template nya mungkin
avatar
Balas
Fikri Muzakky delete 10 April 2017 at 04:26
Punya ane udah jadi,,tapi pas ane pencet visit link kok ngak keurl tujuan ya?? Malah error,, gmana min?
avatar
Balas
Dedi Islafuddin  delete 10 April 2017 at 07:19
coba gunakan domain tld aja, soalnya kalau blogspot.com harus mengunjungi 2 kali baru bisa kayaknya.
avatar
Balas
Muhammad Nuriyanto delete 27 May 2017 at 03:00
Min, tolong jelasin secara detail dong cara gunakan domain blogspot.com untuk safelink.. ane udah coba tapi masalahnya sama kayak mas fikri, error min :/ mohon pencerahannya 
avatar
Balas
Dedi Islafuddin  delete 27 May 2017 at 05:43
errornya itu kayak gimana ??
avatar
Balas
Dedi Islafuddin  delete 27 May 2017 at 05:43
errornya itu kayak gimana ??
avatar
Balas
Muhammad Nuriyanto delete 27 May 2017 at 12:46
udah pasang link di blog utama dan safelink juga udah work. tapi tombol visit link di safelink tidak bisa ditekan min. harusnya kan bisa masuk ke zippyshare...
avatar
Balas
Dedi Islafuddin  delete 27 May 2017 at 12:56
salah dalam menerapkan scriptnya mungkin
avatar
Balas
Muhammad Nuriyanto delete 27 May 2017 at 13:08
sudah bener deh perasaan.. ane pakai domain .blogspot.com min, min bilang kalau domain blogspot.com harus ngunjungi 2x baru bisa.. gk bisa sama sekali visit link nya
avatar
Balas
Dedi Islafuddin  delete 27 May 2017 at 18:19
Coba minta link blognya
avatar
Balas
Muhammad Nuriyanto delete 27 May 2017 at 21:56
Ini min, masih blog percobaan sih bukan yang asli. Tolong cariin error nya dimana min...

http://muhammadnuriyanto.blogspot.co.id/2016/10/download-indopreter-pro-translator-30.html
avatar
Balas
Dedi Islafuddin  delete 28 May 2017 at 10:58
udah saya revisi postingan diatas boss..
Jadi gunakan url blog safelink https:// jangan http:// jika itu domain munggunakan blogspot.com
avatar
Balas
Muhammad Nuriyanto delete 28 May 2017 at 14:54
Wah mantab min sudah work... Thanks min atas bantuannya 
avatar
Balas
Dedi Islafuddin  delete 29 May 2017 at 00:10
iya sama" om 
avatar
Balas
Imam Darmawan delete 24 April 2017 at 21:48
Siip gan bookmark dulu??
avatar
Balas
Dedi Islafuddin  delete 24 April 2017 at 22:42
Siap ??
avatar
Balas
Admin delete 25 April 2017 at 06:52
bang apa ini sudah bisa di gunakan?

~~> http://www.euesafelink.ml/ <~~

Ask for you bro....
avatar
Balas
Admin delete 25 April 2017 at 06:57
owhh iya bang sekalian ane mau tanya... maksud yang di protected_Link itu gmn bang? ane gagal paham.. 
avatar
Balas
Dedi Islafuddin  delete 25 April 2017 at 08:47
link yang ada di dalam protected itu tidak akan di lewati safelink kita.
avatar
Balas
Dedi Islafuddin  delete 25 April 2017 at 08:45
blm bisa itu om, alamat link generate nya not found
avatar
Balas
Chiky- Games delete 29 April 2017 at 23:49
min gimana punya saya pernah berhasil tapi jadi OPSS 404 laman tidak ditemukan, tolong bantu, dan mohon diperjelas lagi tutorialnya kalau bisa bikin videonya
avatar
Balas
Dedi Islafuddin  delete 30 April 2017 at 03:11
Itu sudah jelas om. mungkin salah dalam penerapan scriptnya.
avatar
Balas
Silver Trident delete 13 May 2017 at 18:01
gan minta pencerahannya saya sudah bisa visit link tapi saat visit safelinknya malah menuju url yg seperti ini https://stsafelink.blogspot.com/p/%E6%9B%A9%E3%BF%AC%E6%86%9FzX%E7%91%B9h%E2%8A%A8%E5%8A%A6%EE%9F%A0zw%EB%AA%97%E1%B6%A9@

link asli safelink https://stsafelink.blogspot.com/

minta pencerahannya gan 
terimakasih
avatar
Balas
Dedi Islafuddin  delete 14 May 2017 at 01:42
Ikuti tutorial di atas dengan teliti om pasti bisa. Ane coba buka di android situs om itu masih ada kode M=1 dibelakang url link safelinknya
avatar
Balas
Silver Trident delete 14 May 2017 at 19:12
teatp saja mas saya sudah coba berulang ulang hasilnya masih sama

mohon bantuannya
avatar
Balas
Silver Trident delete 14 May 2017 at 19:18
semuanya termasuk html generate dan cdn sudah semua ganti sama yg hasil uplaodan saya tetapi ttp saja masih seperti semula Error 404
avatar
Balas
Dedi Islafuddin  delete 15 May 2017 at 11:20
url blog tidak ditemukan om, udah dihapus.
coba pakai domain tld aja jangan blogspot
avatar
Balas
inject ssh delete 13 May 2017 at 22:58
mantap dan work
kalo 404 coba di lihat lagi di posting pada blog safelink nya nya
https://cdn.rawgit.com/dedi96/safelink/813ce72f/safelinkga.js
http://www.safelink.ga/p/generate.html
ganti dengan url masing2
semoga membantu
avatar
Balas
Dedi Islafuddin  delete 14 May 2017 at 01:38
Yup harus teliti emang booss 
avatar
Balas
Fikri Muzakky delete 14 May 2017 at 17:37
This comment has been removed by the author.
avatar
Balas
Fikri Muzakky delete 14 May 2017 at 17:40
Alhamdullilah udah bisa mas,, tinggal pasang iklan aja hehe.. Makasih om tutornya.
avatar
Balas
Dedi Islafuddin  delete 15 May 2017 at 11:12
mantabs booss 
avatar
Balas
hacanimedream blogspot delete 15 May 2017 at 09:38
gan kok iklan yang ane pasang di blog ikut ke safelink?
avatar
Balas
Dedi Islafuddin  delete 15 May 2017 at 11:13
ikut gmna maksudnya ??
yang di blog safelink di kasih iklan gak ?
avatar
Balas
Muhamad Ghufron delete 19 May 2017 at 06:18
mas , cara ilangin auto redirect ke https gmna ya ? pake .blogspot url nya jadi gak bisa mas kalo redirect auto ke https , pdhal di setingan sudah tidak aktif , kali aja di template di setting auto https untuk blogspot , thanks
avatar
Balas
Dedi Islafuddin  delete 19 May 2017 at 09:33
Di template nya coba diganti http bagian generate kayaknya.
Mungkin pas di script .js salah nulis link blognya https
avatar
Balas
DC delete 20 May 2017 at 03:19
mas semua sudah works kecuali visit link download nya gak bisa ke klik. ( sudah pada page safe-link )
kira kira yang kurang / salah apanya ya mas
mohon pencerahannya mas
avatar
Balas
Dedi Islafuddin  delete 20 May 2017 at 15:13
script .js nya udah benar nggak ??
pake blogspot ?
avatar
Balas
Muhamad Ghufron delete 21 May 2017 at 00:16
gak mas , kynya di template nya auto mas coba ini punya ane baru di pasang template nya saja , http://safelinkings.blogspot.com
avatar
Balas
Dedi Islafuddin  delete 21 May 2017 at 10:49
mantabss..
avatar
Balas
DC delete 21 May 2017 at 15:53
iya mas saya pakai blogspot.
jika berkenan ini hasil dari sebuah link download blog utama

https://datacorel-download.blogspot.com/p/downloads.html?url=aHR0cDovL2FkZi5seS8xU2czSTM=

(dihapus saja koment ini stelah mas lihat contoh )
tapi klik visitnya gak bisa ke klik.

trus yang belum paham gini jg mas,,
jika udah work apa link safelink sudah otomatis semua link download diblog utama ?? atau harus di convert satusatu mas,,

mohon maaf mas jika berkenan mohon pencerahannya )

avatar
Balas
Dedi Islafuddin  delete 22 May 2017 at 09:05
secara otomatis diblog utama akan meredirect ke blog safelink tanpa harus mengconvert satu persatu om.
avatar
Balas
DC delete 22 May 2017 at 14:47
baik terima kasih banyak om,
sementara sudah work kesalahan saya karena upload js di yourjavascrift, ketika mencoba upload di github sudah works walau belum sempurna yakni protected_links otomatisnya belum berjalan dengan baik, tapi sudah sangat membantu.

Thanks banyak banyak 
avatar
Balas
Dedi Islafuddin  delete 22 May 2017 at 15:38
iya sama-sama bosku  
yang dibagian protected_link itu jika sobat nulis link web/blog maka dia tidak akan keredirect ke blog safelink.
avatar
Balas
DC delete 23 May 2017 at 20:11
saya ganti ke Domain TLD 100% Works mas..
terima kasih sangat 

satu lagi mas,, untuk protect link sub domain caranya gimana ya mas,, misal drive.google.com
avatar
Balas
DC delete 23 May 2017 at 20:29
eh salah mas... maksudnya biar gak ke protect
agar link ke drive.google nya singgah dulu ke page safelinknya
avatar
Balas
Dedi Islafuddin  delete 24 May 2017 at 01:04
google.com gk udah ditulis di protected link om
avatar
Balas
DC delete 24 May 2017 at 14:41
Works 100% !!!!
Terima Kasih banyak Mas 
avatar
Balas
Dedi Islafuddin  delete 25 May 2017 at 10:04
iya sama" om  
avatar
Balas
Aan Na-ank delete 25 May 2017 at 17:31
This comment has been removed by the author.
avatar
Balas
Android Gunner delete 25 May 2017 at 18:16
Tambahan dari saya.
Bagi yang upload File nya ke Google Drive, biar bisa direck ke safelink nya.
pada bagian "protected_links" hapus yang "google.com"
avatar
Balas
Dedi Islafuddin  delete 25 May 2017 at 23:31
iya benar sekali booss.. 
avatar
Balas
Dzulfi Bloggers delete 27 May 2017 at 01:29
Thanks ya gan 100% work, udah kemana mana dicari pada gak bisa disini rupanya bisanya hehe
avatar
Balas
Dedi Islafuddin  delete 27 May 2017 at 05:44
Mantab boos 
avatar
Balas
Sumber Rizky delete 27 May 2017 at 05:11
not work
avatar
Balas
Dedi Islafuddin  delete 27 May 2017 at 05:45
Semua butuh proses boss dan juga harus teliti
avatar
Balas
Rsi Lucky delete 27 May 2017 at 17:08
pas enkripsi nya gagal jadi kosong
avatar
Balas
Dedi Islafuddin  delete 28 May 2017 at 11:02
jika menggunakan domain blogspot.com maka url blog safelink ganti ke https:// semua jangan pakai http://
avatar
Balas
Sumber Rizky delete 28 May 2017 at 03:08
ngaco...
avatar
Balas
Rsi Lucky delete 30 May 2017 at 22:45
udah berhasil gan,saran situs iklan gan yang gede bukan popunder
avatar
Balas
Dedi Islafuddin  delete 31 May 2017 at 01:35
Siip...  
Kurang tau ane om 
avatar
Balas
Silver Trident delete 1 June 2017 at 00:10
akhirnya berhasil gan...
ternayta pake domain TLD work 
dulu pake blogspot gagal 
http://www.st-safelink.tk/

Terima kasih gan !
avatar
Balas
Dedi Islafuddin  delete 1 June 2017 at 00:39
Iya sama" om 
Untuk yg pake blogspot udah ane revisi lagi 
avatar
Balas
Roby Hermawan delete 4 June 2017 at 18:12
Mkasih banget gan tutor nya, sangat bermanfaat 
avatar
Balas
Dedi Islafuddin  delete 5 June 2017 at 00:19
Iya sama" om 
avatar
Balas
Uchiha Yahia delete 5 June 2017 at 07:33
Gan, kenapa pas klik visit link gk mau pindah url. Ane udah baca komen2 diatas sama artikelnya bolak-balik masih belum paham.
avatar
Balas
Dedi Islafuddin  delete 5 June 2017 at 23:30
coba baca dengan teliti lagi postingan diatas om
avatar
Balas
admin delete 7 June 2017 at 00:22
terimakasih mas akhirnya bisa juga 
hmm ngomongngomong cara pasang iklan di bawah visit link gimana yah mas ???

http://www.nime.cf/p/blog-page_6.html
avatar
Balas
Dedi Islafuddin  delete 7 June 2017 at 00:52
Oh mantabs..   
Iklannya taruh di situ. Coba utek" sendiri 
avatar
Balas
Roby Hermawan delete 7 June 2017 at 04:05
Mas, kenapa ya gak semua link bisa kedirect.. Itu kenapa ya? 
Dan juga satunya blog saya gk terhubung ke safelino itu kenapa juga ya, padahal sudah benar.. Blog nya sudah jadi, tapi tinggal masalah terhubung ke blog utamanya enggk mas.. 
Plis jawab
avatar
Balas
Dedi Islafuddin  delete 7 June 2017 at 23:20
pada protected_link hapus link yang tidak ingin keredirect
dan sriptnya taruh diatas kode /body di edit template pada blog utama
avatar
Balas
Dimas Nafik delete 9 June 2017 at 06:28
mas kok ditempat saya visit link enggak mau ya ? padahal saya udah ikutin step by step dengan baik dan bener . Http sudah saya ganti ke https juga , ini masih pakek blogspot.com . Mohon bantuannya secepatnya mas
avatar
Balas
Dimas Nafik delete 9 June 2017 at 06:44
Oh sudah saya atasi sendiri mas , sedikit info buat temen temen yg pakek blogspot.com , dan mengalami problem bagian visit link tidak mau . Cara mengatasinya adalah cek pada edit html template kemudian ctrl+f cari http: kalo ketemunya yg link generate safelink maka tambahin menjadi https: , tapi kalo tidak ketemu dan hanya link kompi maka biarkan saja . Step selanjutnya adalah pergi ke laman generate yang sudah dibuat tadi , cek apakah ada http: jika ada silahkan tambahkan menjadi https: . Ini terjadi pada saya , Terima kasih kene ono salam . Semoga membantu teman teman
avatar
Balas
Dedi Islafuddin  delete 9 June 2017 at 10:22
iya selumnya udah saya jelasin om, jika pake blogspot.com semua link ganti https.

iya sama", sukses selalu 
avatar
Balas
Dimas Nafik delete 10 June 2017 at 15:22
This comment has been removed by the author.
avatar
Balas
Gudang Firmware delete 10 June 2017 at 01:57
Apa Yang Salah Dengan Ini..? https://safelinkblogg.blogspot.com/
avatar
Balas
Dedi Islafuddin  delete 10 June 2017 at 05:09
Udah ngikutin tutor diatas. Coba diteliti lagi om.
avatar
Balas
DzulfiSafelink delete 11 June 2017 at 09:39
bang auto safelink ke blog utamanya kok gak bisa gan
avatar
Balas
Dedi Islafuddin  delete 11 June 2017 at 17:30
scriptnya udah ditaruh diatas kode /head
dan link script .js nya sesuai yang udah dibuat sebelumnya
avatar
Balas
DzulfiSafelink delete 11 June 2017 at 20:24
ditaruh diatas kode /head bukan kode /body
avatar
Balas
Dedi Islafuddin  delete 12 June 2017 at 00:12
Eh iya diatas kode /body
Gunakan kata-kata yang bijak saat berkomentar ya sob.
Emoticon

 
PopularLabel
 Daftar Bug Operator AXIS dan XL Terbaru Work 0p0k
Daftar Bug Operator AXIS dan XL Terbaru Work 0p0k
 Tutorial Cara Memasang Iklan Google Adsense di Blog Sendiri Dengan Mudah
Tutorial Cara Memasang Iklan Google Adsense di Blog Sendiri Dengan Mudah
 Inject [K.O] ~ AXIS HITZ ALL TKP JN-5
Inject [K.O] ~ AXIS HITZ ALL TKP JN-5
 Payload HTTP Injector AXIS - XL Terbaru
Payload HTTP Injector AXIS - XL Terbaru
 Cara Mendapatkan Bonus Kuota Kartu Tri Secara Gratis Terbaru
Cara Mendapatkan Bonus Kuota Kartu Tri Secara Gratis Terbaru
Request Post Artikel ?
Request Artikel

 
Fanspage

Komentar Terbaru
Dedi IslafuddinDedi Islafuddin
Eh iya diatas kode /body
DzulfiSafelinkDzulfiSafelink
ditaruh diatas kode /head bukan kode /body
Dedi IslafuddinDedi Islafuddin
scriptnya udah ditaruh diatas kode /headdan link script .js �
DzulfiSafelinkDzulfiSafelink
bang auto safelink ke blog utamanya kok gak bisa gan
Dedi IslafuddinDedi Islafuddin
blm update om :D
Artikel Terbaru
Cara Membuat Menu DropDown di Blog Dengan Mudah

Jun-09 - 2017 | No Comments
Inject [K.O] ~ AXIS HITZ ALL TKP JN-5

Jun-06 - 2017 | 13 Comments
Cara Membuat Multi Select Skin Delphi dengan Business Skin

Jun-05 - 2017 | 2 Comments
Manfaat serta Hikmah Puasa Ramadhan

Jun-02 - 2017 | No Comments
Keutamaan di Bulan Suci Ramadhan

Jun-02 - 2017 | No Comments
 
About Contact TOS Privacy Policy Sitemap
Copyright � 2017 Kene Ono  Blogger
 
 
 
