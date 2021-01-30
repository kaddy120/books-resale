import {Book, BookDetails} from '../components';
import {useState} from 'react';
import { Title } from '../components/bookDetails/style/bookDetails';
import {PlaceBid, ContactSeller} from '../components'
import { FaRProject } from 'react-icons/fa';
import styled from 'styled-components';

const Grid = styled.div`
    display: grid;
    max-width: 410px;
    grid-gap: 20px;
    grid-template-columns: 1fr 3fr;
    margin-top: 8px;
  
    > * {
        font-size: 14px;
      &:first-child {
         justify-self: end; 
      }
    }
`;

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
           <Grid>
               <BookDetails.Text>Condintion:</BookDetails.Text>
                <BookDetails.Text><strong>{book.Condition}</strong></BookDetails.Text>
           </Grid>
           <Grid>
               <BookDetails.Text>Posted</BookDetails.Text>
                <BookDetails.Text>2hrs ago</BookDetails.Text>
           </Grid>
           <Grid>
               <BookDetails.Text>Discription</BookDetails.Text>
                <BookDetails.Text>{book.Description}</BookDetails.Text>
           </Grid>
           
           <PlaceBid book={book} /> 
            <ContactSeller />
           </BookDetails.InnerRight>
       </BookDetails>
   )
}