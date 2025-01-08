const { parser } = require('./moji.id.config.js')
const dayjs = require('dayjs')
const utc = require('dayjs/plugin/utc')
dayjs.extend(utc)

const date = dayjs.utc('2023-08-18', 'YYYY-MM-DD').startOf('d')

const content =
  '<div class="box-sch"><div class="tittle-sch"><h1>schedule</h1></div><div class="date-slider slick-initialized slick-slider"><div class="slick-list draggable"><div class="slick-track" style="opacity: 1; width: 429px; transform: translate3d(0px, 0px, 0px);"><div class="list-slider  slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style="width: 143px;" tabindex="0"><div class="slide"><span class="day">Fri</span><span class="month">Aug 18</span></div></div><div class="list-slider active slick-slide slick-active" data-slick-index="1" aria-hidden="false" style="width: 143px;" tabindex="0"><div class="slide"><span class="day">Sat</span><span class="month">Aug 19</span></div></div><div class="list-slider  slick-slide slick-active" data-slick-index="2" aria-hidden="false" style="width: 143px;" tabindex="0"><div class="slide"><span class="day">Sun</span><span class="month">Aug 20</span></div></div></div></div></div><div class="desc" style="background: #5000e3 !important"><span>Jam Tayang</span><span>Program</span></div><div class="desc-slider slick-initialized slick-slider"><div class="slick-list draggable"><div class="slick-track" style="opacity: 1; width: 3510px; transform: translate3d(0px, 0px, 0px);"><div class="list-slider slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style="width: 1170px;" tabindex="0"><div class="accordion"><div class="grid-acc"><span class="pkl">00:00</span><span class="name-prog">TRUST</span></div><div class="content-acc"><span>Informasi seputar menjaga vitalitas pria</span></div></div><div class="accordion"><div class="grid-acc"><span class="pkl">00:30</span><span class="name-prog">2023 AVC CHALLENGE CUP FOR WOMEN (RECORDED)</span></div><div class="content-acc"><span>India Vs. Vietnam</span></div></div><div class="accordion"><div class="grid-acc"><span class="pkl">02:30</span><span class="name-prog">ONE CHAMPIONSHIP 2021</span></div><div class="content-acc"><span>Siaran laga-laga pertandingan tinju gaya bebas internasional. Meyuguhkan pertarungan sengit dari para petarung profeisional kelas dunia.</span></div></div><div class="accordion"><div class="grid-acc"><span class="pkl">03:30</span><span class="name-prog">VOLLEYBALL NATION\'S LEAGUE 2023 (RECORDED)</span></div><div class="content-acc"><span>TURKI vs BRAZIL</span></div></div><div class="accordion"><div class="grid-acc"><span class="pkl">05:00</span><span class="name-prog">MOJI SPORT</span></div><div class="content-acc"><span>MOJI SPORT</span></div></div><div class="accordion"><div class="grid-acc"><span class="pkl">06:15</span><span class="name-prog">LIPUTAN 6 PAGI MOJI</span></div><div class="content-acc"><span>Kompilasi ragam berita hard news dan soft news baik dari dalam negeri maupun internasional juga info prediksi cuaca di wilayah Indonesia</span></div></div><div class="accordion"><div class="grid-acc"><span class="pkl">07:00</span><span class="name-prog">UNGKAP</span></div><div class="content-acc"><span>Liputan investigasi seputar berbagai topik dan peristiwa hangat serta kontroversial yang terjadi di Indonesia</span></div></div><div class="accordion"><div class="grid-acc"><span class="pkl">08:00</span><span class="name-prog">PIALA KAPOLRI 2023 PUTRI (LIVE)</span></div><div class="content-acc"><span>PIALA KAPOLRI 2023 PUTRI (LIVE)</span></div></div><div class="accordion"><div class="grid-acc"><span class="pkl">10:30</span><span class="name-prog">SERIES PAGI</span></div><div class="content-acc"><span>GANTENG GANTENG SERIGALA</span></div></div><div class="accordion"><div class="grid-acc"><span class="pkl">12:30</span><span class="name-prog">DIAM-DIAM SUKA</span></div><div class="content-acc"><span>DIAM-DIAM SUKA</span></div></div><div class="accordion"><div class="grid-acc"><span class="pkl">13:30</span><span class="name-prog">PIALA KAPOLRI 2023 PUTRA (LIVE)</span></div><div class="content-acc"><span>PIALA KAPOLRI 2023 PUTRA (LIVE)</span></div></div><div class="accordion"><div class="grid-acc"><span class="pkl">16:00</span><span class="name-prog">PIALA KAPOLRI 2023 PUTRI (LIVE)</span></div><div class="content-acc"><span>PIALA KAPOLRI 2023 PUTRI (LIVE)</span></div></div><div class="accordion"><div class="grid-acc"><span class="pkl">18:00</span><span class="name-prog">PIALA KAPOLRI 2023 PUTRA (LIVE)</span></div><div class="content-acc"><span>PIALA KAPOLRI 2023 PUTRA (LIVE)</span></div></div><div class="accordion"><div class="grid-acc"><span class="pkl">20:00</span><span class="name-prog">MOJI DRAMA (CHHOTI SARDARNI)</span></div><div class="content-acc"><span>CHHOTI SARDARNI</span></div></div><div class="accordion"><div class="grid-acc"><span class="pkl">21:30</span><span class="name-prog">SINEMA MALAM (BIDADARI CANTIK DI RUMAH KOST)</span></div><div class="content-acc"><span>(BIDADARI CANTIK DI RUMAH KOST</span></div></div><div class="accordion"><div class="grid-acc"><span class="pkl">23:00</span><span class="name-prog">TRUST</span></div><div class="content-acc"><span>Informasi seputar menjaga vitalitas pria</span></div></div><div class="accordion"><div class="grid-acc"><span class="pkl">23:30</span><span class="name-prog">TRUST</span></div><div class="content-acc"><span>Informasi seputar menjaga vitalitas pria</span></div></div></div><div class="list-slider slick-slide" data-slick-index="1" aria-hidden="true" style="width: 1170px;" tabindex="-1"><div class="accordion"><div class="grid-acc"><span class="pkl">00:00</span><span class="name-prog">TRUST</span></div><div class="content-acc"><span>Informasi seputar menjaga vitalitas pria</span></div></div><div class="accordion"><div class="grid-acc"><span class="pkl">00:30</span><span class="name-prog">UNGKAP</span></div><div class="content-acc"><span>Liputan investigasi seputar berbagai topik dan peristiwa hangat serta kontroversial yang terjadi di Indonesia</span></div></div><div class="accordion"><div class="grid-acc"><span class="pkl">01:00</span><span class="name-prog">EXCLUSIVE INTERVIEW</span></div><div class="content-acc"><span>PETER SCHMEICHEL</span></div></div><div class="accordion"><div class="grid-acc"><span class="pkl">01:30</span><span class="name-prog">PREMIER LEAGUE (LIVE)</span></div><div class="content-acc"><span>NOTT\'M FOREST VS SHEFFIELD UTD</span></div></div><div class="accordion"><div class="grid-acc"><span class="pkl">03:30</span><span class="name-prog">VOLLEYBALL NATION\'S LEAGUE 2023 FOR WOMEN (RECORDED)</span></div><div class="content-acc"><span>GERMANY vs USA</span></div></div><div class="accordion"><div class="grid-acc"><span class="pkl">05:00</span><span class="name-prog">MOJI SPORT</span></div><div class="content-acc"><span>MOJI SPORT</span></div></div><div class="accordion"><div class="grid-acc"><span class="pkl">06:15</span><span class="name-prog">LIPUTAN 6 PAGI MOJI</span></div><div class="content-acc"><span>Kompilasi ragam berita hard news dan soft news baik dari dalam negeri maupun internasional juga info prediksi cuaca di wilayah Indonesia</span></div></div><div class="accordion"><div class="grid-acc"><span class="pkl">07:00</span><span class="name-prog">UNGKAP</span></div><div class="content-acc"><span>Liputan investigasi seputar berbagai topik dan peristiwa hangat serta kontroversial yang terjadi di Indonesia</span></div></div><div class="accordion"><div class="grid-acc"><span class="pkl">08:00</span><span class="name-prog">TRUST</span></div><div class="content-acc"><span>Informasi Kesehatan</span></div></div><div class="accordion"><div class="grid-acc"><span class="pkl">08:30</span><span class="name-prog">TRUST</span></div><div class="content-acc"><span>Informasi Kesehatan</span></div></div><div class="accordion"><div class="grid-acc"><span class="pkl">09:00</span><span class="name-prog">MASAK APA CEU?</span></div><div class="content-acc"><span>Jenny Hendrawati, seorang koki selebritis, menyajikan beraneka hidangan internasional serta membagikan tips-tips seputar dunia memasak yang mudah diikuti oleh para pemirsa di rumah.</span></div></div><div class="accordion"><div class="grid-acc"><span class="pkl">09:30</span><span class="name-prog">BISIK PAGI</span></div><div class="content-acc"><span>berbagai berita dan perkembangan terbaru dari sederet kasus yang menimpa sejumlah sosok ternama di Indonesia.</span></div></div><div class="accordion"><div class="grid-acc"><span class="pkl">10:30</span><span class="name-prog">GANTENG GANTENG SERIGALA</span></div><div class="content-acc"><span>GANTENG GANTENG SERIGALA</span></div></div><div class="accordion"><div class="grid-acc"><span class="pkl">11:30</span><span class="name-prog">PIALA KAPOLRI 2023 PUTRI (LIVE)</span></div><div class="content-acc"><span>PIALA KAPOLRI 2023 PUTRI (LIVE)</span></div></div><div class="accordion"><div class="grid-acc"><span class="pkl">14:00</span><span class="name-prog">PIALA KAPOLRI 2023 PUTRA (LIVE)</span></div><div class="content-acc"><span>PIALA KAPOLRI 2023 PUTRA (LIVE)</span></div></div><div class="accordion"><div class="grid-acc"><span class="pkl">16:00</span><span class="name-prog">PIALA KAPOLRI 2023 PUTRI (LIVE)</span></div><div class="content-acc"><span>PIALA KAPOLRI 2023 PUTRI (LIVE)</span></div></div><div class="accordion"><div class="grid-acc"><span class="pkl">18:00</span><span class="name-prog">PIALA KAPOLRI 2023 PUTRA (LIVE)</span></div><div class="content-acc"><span>PIALA KAPOLRI 2023 PUTRA (LIVE)</span></div></div><div class="accordion"><div class="grid-acc"><span class="pkl">20:00</span><span class="name-prog">MOJI DRAMA (CHHOTI SARDARNI)</span></div><div class="content-acc"><span>CHHOTI SARDARNI</span></div></div><div class="accordion"><div class="grid-acc"><span class="pkl">20:45</span><span class="name-prog">PREMIER LEAGUE (LIVE)</span></div><div class="content-acc"><span>WOLVES VS BRIGHTON</span></div></div></div><div class="list-slider slick-slide" data-slick-index="2" aria-hidden="true" style="width: 1170px;" tabindex="-1"><div class="accordion"><div class="grid-acc"><span class="pkl">00:00</span><span class="name-prog">TRUST</span></div><div class="content-acc"><span>Informasi seputar menjaga vitalitas pria</span></div></div><div class="accordion"><div class="grid-acc"><span class="pkl">00:30</span><span class="name-prog">2023 AVC CHALLENGE CUP FOR WOMEN (RECORDED)</span></div><div class="content-acc"><span>Chinese Taipei Vs. India</span></div></div><div class="accordion"><div class="grid-acc"><span class="pkl">02:30</span><span class="name-prog">ONE CHAMPIONSHIP 2021</span></div><div class="content-acc"><span>Siaran laga-laga pertandingan tinju gaya bebas internasional. Meyuguhkan pertarungan sengit dari para petarung profeisional kelas dunia.</span></div></div><div class="accordion"><div class="grid-acc"><span class="pkl">03:30</span><span class="name-prog">VOLLEYBALL NATION\'S LEAGUE 2023 FOR WOMEN (RECORDED)</span></div><div class="content-acc"><span>THAILAND vs JAPAN</span></div></div><div class="accordion"><div class="grid-acc"><span class="pkl">05:00</span><span class="name-prog">MOJI SPORT</span></div><div class="content-acc"><span>MOJI SPORT</span></div></div><div class="accordion"><div class="grid-acc"><span class="pkl">06:15</span><span class="name-prog">LIPUTAN 6 PAGI MOJI</span></div><div class="content-acc"><span>Kompilasi ragam berita hard news dan soft news baik dari dalam negeri maupun internasional juga info prediksi cuaca di wilayah Indonesia</span></div></div><div class="accordion"><div class="grid-acc"><span class="pkl">07:00</span><span class="name-prog">UNGKAP</span></div><div class="content-acc"><span>Liputan investigasi seputar berbagai topik dan peristiwa hangat serta kontroversial yang terjadi di Indonesia</span></div></div><div class="accordion"><div class="grid-acc"><span class="pkl">08:00</span><span class="name-prog">TRUST</span></div><div class="content-acc"><span>Informasi Kesehatan</span></div></div><div class="accordion"><div class="grid-acc"><span class="pkl">08:30</span><span class="name-prog">TRUST</span></div><div class="content-acc"><span>Informasi Kesehatan</span></div></div><div class="accordion"><div class="grid-acc"><span class="pkl">09:00</span><span class="name-prog">MASAK APA CEU?</span></div><div class="content-acc"><span>Jenny Hendrawati, seorang koki selebritis, menyajikan beraneka hidangan internasional serta membagikan tips-tips seputar dunia memasak yang mudah diikuti oleh para pemirsa di rumah.</span></div></div><div class="accordion"><div class="grid-acc"><span class="pkl">09:30</span><span class="name-prog">BISIK PAGI</span></div><div class="content-acc"><span>berbagai berita dan perkembangan terbaru dari sederet kasus yang menimpa sejumlah sosok ternama di Indonesia.</span></div></div><div class="accordion"><div class="grid-acc"><span class="pkl">10:30</span><span class="name-prog">GANTENG GANTENG SERIGALA</span></div><div class="content-acc"><span>GANTENG GANTENG SERIGALA</span></div></div><div class="accordion"><div class="grid-acc"><span class="pkl">12:30</span><span class="name-prog">DIAM-DIAM SUKA</span></div><div class="content-acc"><span>DIAM-DIAM SUKA</span></div></div><div class="accordion"><div class="grid-acc"><span class="pkl">14:30</span><span class="name-prog">SINEMA SIANG</span></div><div class="content-acc"><span>FTV</span></div></div><div class="accordion"><div class="grid-acc"><span class="pkl">16:00</span><span class="name-prog">SEA VLEAGUE (RECORDED)</span></div><div class="content-acc"><span>PHILIPPINES VS INDONESIA</span></div></div><div class="accordion"><div class="grid-acc"><span class="pkl">18:00</span><span class="name-prog">NETIZEN UPDATE</span></div><div class="content-acc"><span>berbagai berita dan perkembangan terbaru dari sederet kasus yang menimpa sejumlah sosok ternama di Indonesia.</span></div></div><div class="accordion"><div class="grid-acc"><span class="pkl">19:00</span><span class="name-prog">MOJI DRAMA (CHHOTI SARDARNI)</span></div><div class="content-acc"><span>CHHOTI SARDARNI</span></div></div><div class="accordion"><div class="grid-acc"><span class="pkl">21:00</span><span class="name-prog">MOJI MOVIE (LONDON LOVE STORY)</span></div><div class="content-acc"><span>LONDON LOVE STORY</span></div></div><div class="accordion"><div class="grid-acc"><span class="pkl">23:00</span><span class="name-prog">TRUST</span></div><div class="content-acc"><span>Informasi seputar menjaga vitalitas pria</span></div></div><div class="accordion"><div class="grid-acc"><span class="pkl">23:30</span><span class="name-prog">TRUST</span></div><div class="content-acc"><span>Informasi seputar menjaga vitalitas pria</span></div></div></div></div></div></div></div>'

it('can handle empty guide', () => {
  const results = parser({ content: '' })
  expect(results).toMatchObject([])
})

it('can parse response', () => {
  const results = parser({ content, date }).map(p => {
    p.start = p.start.year(2023).toJSON()
    p.stop = p.stop.year(2023).toJSON()
    return p
  })

  expect(results[0]).toMatchObject({
    title: 'TRUST',
    start: '2023-08-17T17:00:00.000Z',
    stop: '2023-08-17T17:30:00.000Z',
    description: 'Informasi seputar menjaga vitalitas pria'
  })
})
