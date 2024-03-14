export default function Singer({singer}) {
    // console.log(singer);
    return(
        <div>
            <h3>Singer: {singer.name}</h3>
            <p>Hit Song: {singer.hitSong}</p>
        </div>
    );
}