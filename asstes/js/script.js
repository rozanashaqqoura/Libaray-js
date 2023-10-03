'use strict';
let bookList = document.querySelector('#bookList')
let listBook = [
    {
        title :'الأنوار لا تتزاحم',
        author: "محمد أنوار",
        imag : '/asstes/imag/Books_IT688.webp'
    },
    {
        title :'محمد سعيد',
        author: "محمد سعيد",
        imag : '/asstes/imag/سحر-الرياضيات-آرثر-بنيامين_optimize-1.webp'
    },  {
        title :'سحر الرياضيات',
        author: "محمد أنوار",
        imag : '/asstes/imag/4416_محمد_التهامي_حراق.jpg'
    },  {
        title :'زمن علم',
        author: "مشيل هنري",
        imag : '/asstes/imag/الهمجية-؛-زمن-علم-بلا-ثقافة-ميشيل-هنري-موقع-المكتبة-نت-www.maktbah.net-4.webp'
    },  {
        title :'مكتبه  نوبل',
        author: "علي نوبل",
        imag :'/asstes/imag/20191217232342396100.jpg'

    }
]

let html = ''
        
for (let index = 0; index < listBook.length; index++) {

   html +=`<div class="book">
    <img src="${listBook[index].imag}" alt="">
    <div class="detailse">
        <p>
            Title : ${listBook[index].title}

        </p>
        <p>
            Auther : ${listBook[index].author}
        </p>
    </div>
</div>
`
}


bookList.innerHTML = html   

