
fetch("../profile.json").
  then((x) => x.json().then((res) => {
    console.log(res)
    document.getElementById("Username").innerText = res.name
    document.getElementById("User-Image").src = res.image

    
    fetch("../source.json").
      then((x) => x.json().then((y) => {
        y.forEach((buku) => {

          if (res.wishlist.includes(buku.id)) {
            document.getElementById("Wishlist").innerHTML += `<li onclick="redirectDetailID(${buku.id})">
                    <div class="book">
                      <img src="${buku.image_url}" alt="">
                      <p class="bold-text">${buku.title}</p>
                      <p class="author">${buku.author}</p>
                    </div>
                  </li>`
          }

        })
      }))


  }))


function redirectDetailID(id) {
    window.location.href = `/detail/index.html\?id=${id}`
}