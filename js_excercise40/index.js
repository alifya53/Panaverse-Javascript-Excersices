function make_album(name, title, tracks) {
    const album = {
        artistName: name,
        albumTitle: title,
    }

    if (tracks) {
        album["tracks"] = tracks;
    }

    return album;
}
console.log(make_album("Whitney Houston", "The Bodyguard", 12))
console.log(make_album("Alanis Morissette", "Jagged Little Pill"))
console.log(make_album("Pink Floyd", "The Dark Side of the Moon"))
