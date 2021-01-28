import {Book, BookDetails} from '../components';
import {useState} from 'react';
import { Title } from '../components/bookDetails/style/bookDetails';
import {PlaceBid} from '../components'
import { FaRProject } from 'react-icons/fa';

export default function DetailsContainer({book, user})
{
    const [mainImage, setMainImage] = useState(book.Image[0]);

    const IsImageSelected = (url) => mainImage === url;

   return(
       <BookDetails>
           <BookDetails.InnerLeft>
               <BookDetails.Image src={mainImage} alt="book main picture"/>
               <BookDetails.ImageContainer>
                   {book.Image.map((url, index)=>{
                       return (<BookDetails.ImageController clicked={IsImageSelected(url)} key={index}>
                            <BookDetails.SImage onClick={()=>setMainImage(url)} src={url}/>
                       </BookDetails.ImageController>)
                   })}
               </BookDetails.ImageContainer>
           </BookDetails.InnerLeft>
           <BookDetails.InnerRight>
           <Title>{book.Title}</Title>
           <hr/>
           <PlaceBid book={book} />     
           </BookDetails.InnerRight>
       </BookDetails>
   )
}