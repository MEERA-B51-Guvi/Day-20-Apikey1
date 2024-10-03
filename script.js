  
 fetch("https://xeno-canto.org/api/2/recordings?query=cnt:brazil&page=5")
.then((response)=>response.json())
.then((data)=>{
    displayRecording(data.recordings);
      })
      .catch((err)=>console.log("My code error:", err));


function displayRecording(recordings){
console.log(recordings);

recordings.forEach((record)=>{
    
    console.log(record);
    document .body.innerHTML+=`
    
    <div class="card-body">
      <h4>Species: ${record.en}</h4>
      <p>Location: ${record.loc}</p>      
      <a target="-blank" href=${record.file}><span>Click here      </span>🔽Download the birds Sounds to your Library</a>
      <p>Gen: ${record.gen}</p>
  </div>`;
    
 
})
}





