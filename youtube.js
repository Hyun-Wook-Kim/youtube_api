const apiKey = 'AIzaSyCk18mNoAXpYMPClwbNpmqCSlm4x9-d-y4'
// const videoId = 'lhSFI_vn3oc'
const channels = `https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&part=snippet,contentDetails&chart=mostPopular&maxResults=3&regionCode=kr`

const videoInfo = []

fetch(channels).then(result => result.json()).then(data => {
    data.items.forEach((el, index)=>{
        console.log(el)
        videoInfo[index] = {
            id: el.id,
            title : el.snippet.title,
            desc : el.snippet.description,
            channelTitle : el.snippet.channelTitle,
            date : el.snippet.publishedAt,
        }
        console.log(videoInfo)

        document.querySelector('.list').innerHTML +=         `<div class="thumbnail">
        <div class="video-wrap">
            <iframe src="https://www.youtube.com/embed/${videoInfo[index].id}" frameborder="0"></iframe> 
        </div>
        <h4>${videoInfo[index].title}</h4>
        <p>${videoInfo[index].channelTitle}</p>
        <p>${videoInfo[index].date}</p>
        </div>`
    })


    })
    .catch(err => console.log(err))





