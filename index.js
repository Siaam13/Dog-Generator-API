
document.querySelector("#fetch-dog").addEventListener('click', async ()=>{
    refreshDog();
})

async function refreshDog() {
    let fetchResult = await fetch('https://random.dog/woof.json')
    let data = await fetchResult.json();

    if (data.url.includes('.mp4')) {
        refreshDog()
        return
    }
    
    document.querySelector('#img-dog').src = data.url
}