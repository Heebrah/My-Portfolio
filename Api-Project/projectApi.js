



async function movie(){
    const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=e9a9f706'
  

    try {
        const res = await fetch(url);
        const data = await res.json();

        if (res.ok) {
        
            console.log(data)
            console.log(data.Title)
            
            let title = document.querySelector('.card-title')
            title.innerHTML = data.Title

            let Plot = document.querySelector('.card-text')
            Plot.innerHTML = data.Plot

            let writer = document.querySelector('.text-muted')
            writer.innerHTML = data.Writer
            
           let myPic = document.querySelector('#card-img-top')
           myPic.src = data.Poster
           
          
           
            
} else {
    alert('City not found. Please try again.');
}
} catch (error) {
console.error('Error fetching exchange rate:', error);
}
}

movie()