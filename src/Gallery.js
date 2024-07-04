import datamain from './Data';
import'./Gallery.css';

function Gallery({heading,data}){
    console.log(data)

    return(
<div id='gallery'>
       <h1>{heading}</h1>
       
       {
           datamain.Data.map((result) => {
               return(
                <>
                  <img src={result.image}/>
                  <p>{result.desc}</p>
                </>
               )
           }
       )
       }  
 </div>
    )
    
}
export default Gallery;