//const backgroundimagUrl="https://s.imgur.com/desktop-assets/desktop-assets/homebg.e52b5cdf24f83bcd55f9f1318855f2ef.png"


let imageContainer=document.getElementById("image-containr")
let input=document.getElementById("search")
async function searchImages(){
    let res=await fetch(`https://api.unsplash.com/search/collections?count=5&query=${input}>`,{
        headers:{
            Authorization:"Client-ID QY3Pti9CdJ64DVpr_YJ3gNHCUMjyA_V3byIYrcfvCuo"
        }
    })

    let searchData=await res.json()
    console.log(searchData)
}
//searchImages()
 async function getImages2(){
    
   // let res= await fetch("https://api.imgur.com/3/gallery/hot/viral/0.json",{
        let res= await fetch("https://api.unsplash.com/photos/?client_id=QY3Pti9CdJ64DVpr_YJ3gNHCUMjyA_V3byIYrcfvCuo")

        //method: "GET",
        // headers: {
        //     Authorization: "563492ad6f917000010000017e178c3635a5472792233c3c6f229f92"
        // },
    // body: formdata
    //})
     let imageData= await res.json()
     console.log(imageData)
     //showImage(imageData)
}
getImages2()

async function getVideos(){
    
    // let res= await fetch("https://api.imgur.com/3/gallery/hot/viral/0.json",{
         let res= await fetch("https://api.pexels.com/videos/popular/",{
 
         method: "GET",
          headers: {
              Authorization: "563492ad6f917000010000017e178c3635a5472792233c3c6f229f92",
            
         },
         
     // body: formdata
     })
      let imageData= await res.json()
     console.log(imageData.videos)
      showImage(imageData.videos)
 }
 getVideos()
let ImageContainer=document.getElementById("image-container")
let ImageContainer1=document.getElementById("image-container1")
let ImageContainer2=document.getElementById("image-container2")
let ImageContainer3=document.getElementById("image-container3")
let ImageContainer4=document.getElementById("image-container4")


let midContainer=document.getElementById("mid-container")

function showImage(items){
    
    //console.log(items[1].images)
    items.forEach((item)=>{
        console.log(item)
        // const video=item.video_files
        // video.forEach(vid=>{console.log(vid.link)})
        
        let img=document.createElement("img")
        let img2=document.createElement("img")
        let img3=document.createElement("img")
        let img4=document.createElement("img")
        let img5=document.createElement("img")
        let img6=document.createElement("img")


        let title=document.createElement("p")
        title.innerText=item.title
        img.src=item.image
        img2.src=item.image
        img3.src=item.image
        img4.src=item.image
        img5.src=item.image
        img6.src=item.image


        img.style.width="110px"
        img.style.margin="5px"
        img.style.height="100px"
        img2.style.width="100%"
        img3.style.width="100%"
        img4.style.width="100%"
        img5.style.width="100%"
        img6.style.width="100%"


        let description=document.createElement("p")
        description.innerText=item.description
        midContainer.append(img)
        midContainer.style.display="flex"
        midContainer.style.justifyContent="space-between"
        midContainer.style.marginTop="100px"


        ImageContainer.append(img2)
        ImageContainer1.append(img3)
        ImageContainer2.append(img4)
        ImageContainer3.append(img5)
        ImageContainer4.append(img6)

       

        
    })

}
//debounce
var timerid;

function debounce(func,delay) {
    if(timerid){
        clearTimeout(timerid)
    }
    timerid=setTimeout(function () {
    func()
        
    },delay)
}