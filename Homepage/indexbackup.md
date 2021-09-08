<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home Page</title>

    <link href="../navbar.css" rel="stylesheet" type="text/css">
    <link href="style.css" rel="stylesheet" type="text/css">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap" rel="stylesheet">
    <!-- <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet"> -->
    <!-- UIkit CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.7.1/dist/css/uikit.min.css" />

    <!-- UIkit JS -->
    <script src="https://cdn.jsdelivr.net/npm/uikit@3.7.1/dist/js/uikit.min.js">

    </script>
    <script src="https://cdn.jsdelivr.net/npm/uikit@3.7.1/dist/js/uikit-icons.min.js">

    </script>
    <script src="https://kit.fontawesome.com/0dda6707d2.js" crossorigin="anonymous">
    </script>
</head>

<body onload="ambilBuku()" class="margin-bawah">
    <!-- Bar with Searchbar -->
    <div class="bar uk-position-top uk-position-fixed uk-flex" id="search1">
        <div class="uk-margin-small uk-width-1-6"></div>

        <input type="text" placeholder="Buku apa yang anda cari?"
            class="uk-width-2-3 uk-border-rounded uk-text-italic uk-hidden" id="search-input"
            onfocusout="switcherBalik()">

        <span class="uk-width-2-3" id="nav-title">LITERASI</span>

        <button class="uk-margin-small uk-width-1-6" id="nav-button" onclick="switcher()" uk-icon="search"></button>
    </div>

    <!-- Reminder -->
    <div class="margin-atas">
        <div class="remind-notif uk-flex uk-flex-between padding ">
            <span></span>
            <span>Baca Harian</span>
            <span></span>
        </div>
        <div class="remind-book">
            <div class="marg-remind">
                <h6>Reminder Baca</h6>
                <div class="book-remind">
                    <span class="fas fa-book fa-2x biru" onclick="reminder(this)">
                        <p class="text-remind">Senin</p>
                    </span>
                    <span class="fas fa-book fa-2x biru" onclick="reminder(this)">
                        <p class="text-remind">Selasa</p>
                    </span>
                    <span class="fas fa-book fa-2x biru" onclick="reminder(this)">
                        <p class="text-remind">Rabu</p>
                    </span>
                    <span class="fas fa-book fa-2x abu" onclick="reminder(this)">
                        <p class="text-remind">Kamis</p>
                    </span>
                    <span class="fas fa-book fa-2x abu" onclick="reminder(this)">
                        <p class="text-remind">Jumat</p>
                    </span>
                    <span class="fas fa-book fa-2x abu" onclick="reminder(this)">
                        <p class="text-remind">Sabtu</p>
                    </span>
                    <span class="fas fa-book fa-2x abu" onclick="reminder(this)">
                        <p class="text-remind">Minggu</p>
                    </span>
                </div>
            </div>
        </div>
    </div>

    <!-- Persuasive Text -->
    <div class="uk-text-center margin-pt">
        <p class="pt1">Sudahkah Kamu membaca hari ini?</p>
        <p class="pt2">Kalau belum, ayo segera <span style="font-weight: bold;">Baca Sekarang!</span></p>
    </div>

    <!-- Carousel Book -->

    <!-- Lanjutkan baca -->
    <div class="carousel-book">
        <div class="bold-text header-book">
            <h4 class="bold-text uk-margin-remove">Lanjutkan Baca</h4>
        </div>
        <div class="card-rousel" uk-slider>
            <ul class="uk-slider-items uk-child-width-1-3 uk-child-width-1-6@m">
                <li>
                    <div class="book">
                        <img src="https://i.ibb.co/VQxsm5C/desgin.jpg" alt="">
                        <p class="bold-text">BC Design Formula</p>
                        <p class="author">Anita Nipane</p>
                    </div>
                </li>
                <li>
                    <div class="book">
                        <img src="https://i.ibb.co/G9YwjMX/ubur2.jpg" alt="">
                        <p class="bold-text">Ubur-ubur lembur</p>
                        <p class="author">Raditya Dika</p>
                    </div>
                </li>
                <li>
                    <div class="book">
                        <img src="https://i.ibb.co/qdbpsyj/sherlock.jpg" alt="">
                        <p class="bold-text">Sherlock Holmes</p>
                        <p class="author">Sir Arthur C.D</p>
                    </div>
                </li>
                <li>
                    <div class="book">
                        <img src="https://i.ibb.co/ThgVBJ2/star.jpg" alt="">
                        <p class="bold-text">The Star and I</p>
                        <p class="author">Ilana Tan</p>
                    </div>
                </li>
                <li>
                    <div class="book">
                        <img src="https://i.ibb.co/ThgVBJ2/star.jpg" alt="">
                        <p class="bold-text">The Star and I</p>
                        <p class="author">Ilana Tan</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>

    <!-- Rekomendasi untuk Hari ini -->
    <div class="carousel-book">
        <div class="bold-text header-book">
            <h4 class="bold-text uk-margin-remove">Rekomendasi untuk hari ini</h4>
        </div>
        <div class="card-rousel" uk-slider>
            <ul class="uk-slider-items uk-child-width-1-3 uk-child-width-1-6@m">
                <li>
                    <div class="book">
                        <img src="https://i.ibb.co/S387zkz/septictank.jpg" alt="">
                        <p class="bold-text">Septic Tank</p>
                        <p class="author">Pandji Pragiwaksono</p>
                    </div>
                </li>
                <li>
                    <div class="book">
                        <img src="https://i.ibb.co/G9YwjMX/ubur2.jpg" alt="">
                        <p class="bold-text">Rossie Wilkins</p>
                        <p class="author">Hannah Morales</p>
                    </div>
                </li>
                <li>
                    <div class="book">
                        <img src="https://i.ibb.co/tMyxFVP/stamped.jpg" alt="">
                        <p class="bold-text">Rosie Wilkins</p>
                        <p class="author">Hannah Morales</p>
                    </div>
                </li>
                <li>
                    <div class="book">
                        <img src="https://i.ibb.co/MPwBd2f/rosie.jpg" alt="">
                        <p class="bold-text">Stamped</p>
                        <p class="author">Jason Reynolds</p>
                    </div>
                </li>

            </ul>
        </div>
    </div>

    <!-- Populer minggu ini -->
    <div class="carousel-book">
        <div class="bold-text header-book">
            <h4 class="bold-text uk-margin-remove">Populer minggu ini</h4>
        </div>
        <div class="card-rousel" uk-slider>
            <ul class="uk-slider-items uk-child-width-1-3 uk-child-width-1-6@m">
                <li>
                    <div class="book">
                        <img src="https://i.ibb.co/zHm4YDC/webdev.jpg" alt="">
                        <p class="bold-text">Web Development</p>
                        <p class="author">White Belt</p>
                    </div>
                </li>
                <li>
                    <div class="book">
                        <img src="https://i.ibb.co/p1qbCBR/memory.jpg" alt="">
                        <p class="bold-text">Memory</p>
                        <p class="author">Angelino Linto</p>
                    </div>
                </li>
                <li>
                    <div class="book">
                        <img src="https://i.ibb.co/VVvvL51/shreda.jpg" alt="">
                        <p class="bold-text">Setelah Hujan Reda</p>
                        <p class="author">Boy Candra</p>
                    </div>
                </li>
                <li>
                    <div class="book">
                        <img src="https://i.ibb.co/BBDR8c7/longwd.jpg" alt="">
                        <p class="bold-text">Long Way Down</p>
                        <p class="author">Jason Reynolds</p>
                    </div>
                </li>
                <li>
                    <div class="book">
                        <img src="https://i.ibb.co/BBDR8c7/longwd.jpg" alt="">
                        <p class="bold-text">Long Way Down</p>
                        <p class="author">Jason Reynolds</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>

    <!-- Baru rilis -->
    <div class="carousel-book">
        <div class="bold-text header-book">
            <h4 class="bold-text uk-margin-remove">Baru rilis</h4>
        </div>
        <div class="card-rousel" uk-slider>
            <ul class="uk-slider-items uk-child-width-1-3 uk-child-width-1-6@m">
                <li>
                    <div class="book">
                        <img src="https://i.ibb.co/p2JhvnW/rapijali.jpg" alt="">
                        <p class="bold-text">Rapijali</p>
                        <p class="author">Dee Lestari</p>
                    </div>
                </li>
                <li>
                    <div class="book">
                        <img src="https://i.ibb.co/gSbfddZ/pp.jpg" alt="">
                        <p class="bold-text">Pulang-Pergi</p>
                        <p class="author">Tere Liye</p>
                    </div>
                </li>
                <li>
                    <div class="book">
                        <img src="https://i.ibb.co/SBXVcN9/selamattinggal.jpg" alt="">
                        <p class="bold-text">Selamat Tinggal</p>
                        <p class="author">Tere Liye</p>
                    </div>
                </li>
                <li>
                    <div class="book">
                        <img src="https://i.ibb.co/0cSwkL0/wingit.jpg" alt="">
                        <p class="bold-text">Wingit</p>
                        <p class="author">Sara Wijiyanto</p>
                    </div>
                </li>
                <li>
                    <div class="book">
                        <img src="https://i.ibb.co/0cSwkL0/wingit.jpg" alt="">
                        <p class="bold-text">Wingit</p>
                        <p class="author">Sara Wijiyanto</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>


    <!-- Terbaik abad ini -->
    <div class="carousel-book">
        <div class="bold-text header-book">
            <h4 class="bold-text uk-margin-remove">Terbaik abad ini</h4>
        </div>
        <div class="card-rousel" uk-slider>
            <ul class="uk-slider-items uk-child-width-1-3 uk-child-width-1-6@m">
                <li>
                    <div class="book">
                        <img src="https://i.ibb.co/tzh740T/sejarah-teh.jpg" alt="">
                        <p class="bold-text">Sejarah Teh</p>
                        <p class="author">Laura C. Martin</p>
                    </div>
                </li>
                <li>
                    <div class="book">
                        <img src="https://i.ibb.co/qYGM2kS/sejarah-umat.jpg" alt="">
                        <p class="bold-text">Sejarah Umat Manusia</p>
                        <p class="author">Hendrik W</p>
                    </div>
                </li>
                <li>
                    <div class="book">
                        <img src="https://i.ibb.co/z56KWty/timeline.jpg" alt="">
                        <p class="bold-text">Timelines of Everything</p>
                        <p class="author">Smithsonian</p>
                    </div>
                </li>
                <li>
                    <div class="book">
                        <img src="https://i.ibb.co/vwLWmTg/homo-deus.jpg" alt="">
                        <p class="bold-text">Homo Deus</p>
                        <p class="author">Yuval Noah</p>
                    </div>
                </li>
                <li>
                    <div class="book">
                        <img src="https://i.ibb.co/vwLWmTg/homo-deus.jpg" alt="">
                        <p class="bold-text">Homo Deus</p>
                        <p class="author">Yuval Noah</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>

    <footer class="uk-position-fixed uk-position-bottom">
        <a href="../Homepage/index.html"><i class="icon-pad fas fa-home"></i></a>
        <a href="../explore/index.html"><i class="icon-pad fas fa-book-open"></i></a>
        <a href="../profile/index.html"><i class="icon-pad fas fa-user"></i></a>
    </footer>

    <script>
        function showMore(search1, search2) {
            if (search1.style.display === "none") {
                search1.style.display = "inline";
                search2.style.display = "none";
            } else {
                search1.style.display = "none";
                search2.style.display = "inline";
            }
        }

        function switcher() {
            let searchInput = document.getElementById("search-input")
            let navTitle = document.getElementById("nav-title")

            searchInput.classList.remove('uk-hidden')
            navTitle.classList.add('uk-hidden')

            searchInput.focus()
        }

        function switcherBalik() {
            let searchInput = document.getElementById("search-input")
            let navTitle = document.getElementById("nav-title")

            searchInput.classList.add('uk-hidden')
            navTitle.classList.remove('uk-hidden')
        }


function ambilBuku() {
            let container = document.getElementById("carousel-container")
            fetch("../source.json").
                then((x) => x.json().then((res) => {

                    let isian = {}
                    let final = ""

                    res.map((book) => {
                        let content = `<li onclick="redirectDetailID(${book.id})"><div class="book"><img src="${book.image_url}" alt=""><p class="bold-text">${book.title}</p><p class="author">${book.author}</p></div></li>`
                        book.genres.map((genre) => {
                            if (!isian[genre]) { isian[genre] = "" }
                            isian[genre] += content
                        })
                    })

                    for (const genre in isian) {
                        const contents = isian[genre]
                        final += `<div class="carousel-book"><div class="bold-text header-book"><h4 class="bold-text uk-margin-remove">${genre}</h4></div><div class="card-rousel" uk-slider><ul class="uk-slider-items uk-child-width-1-3 uk-child-width-1-6@m">${contents}</ul></div></div>`
                    }

                    container.innerHTML = final
                }))
        }

        function redirectDetailID(id) {
            window.location.href = `/detail/index.html\?id=${id}`
        }

        function reminder(element) {

            if (element.classList.contains('abu')) {
                element.classList.remove('abu')
                element.classList.add('biru')
                return
            }

            if (element.classList.contains('biru')) {
                element.classList.remove('biru')
                element.classList.add('merah')
                return
            }

            if (element.classList.contains('merah')) {
                element.classList.remove('merah')
                element.classList.add('abu')
                return
            }

        }
    </script>
</body>

</html>