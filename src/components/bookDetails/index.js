import React from 'react';
import {
    Container,
    Title,
    Image,
    SImage,
    ImagesContainer,
    InnerLeft,
    InnerRight,
    Text,
    ImageController,
    MainImageWrapper
} from './style/bookDetails'

export default function BookDetails({ children, ...restProps }) {
    return (<Container {...restProps}>{children}</Container>)
}

BookDetails.InnerLeft = function BooksDetailsLeft({ children, restProps }) {
    return (<InnerLeft {...restProps}>{children}</InnerLeft>)
}

BookDetails.Image = function BookDetailsImage({ ...restProps }) {
    return (<MainImageWrapper>
        <Image {...restProps} />
    </MainImageWrapper>
    )
}

BookDetails.ImageController = function ImgController({ children, ...restProps }) {
    return (<ImageController {...restProps}>{children}</ImageController>)
}

BookDetails.SImage = function SmallImage({ ...restProps }) {
    return (<SImage {...restProps} />)
}

BookDetails.ImageContainer = function ImageContainer({ children, ...restProps }) {
    return (<ImagesContainer {...restProps}>{children}</ImagesContainer>)
}

BookDetails.InnerRight = function BooksDetailsRight({ children,...restProps }) {
    return (<InnerRight {...restProps}>{children}</InnerRight>)
}

BookDetails.Text = function text({children, ...restProps})
{
    return (<Text {...restProps}>{children}</Text>)
}



