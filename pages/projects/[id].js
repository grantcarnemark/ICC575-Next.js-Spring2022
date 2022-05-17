// The waterfall
import Container from '../../components/Container';
import Heading from '../../components/Heading'
import Image from 'next/image';
import Layout from '../../components/Layout'
import Link from 'next/link'
import Paragraph from '../../components/Paragraph';

import {getAllProjectSlugs, getSingleProjectData} from '../../lib/api'

export async function getStaticPaths() {
    const paths = await getAllProjectSlugs();
    return {
        paths, 
        fallback: false
    }
}



export async function getStaticProps({ params }) {
    const projectData = await getSingleProjectData(params.id); 
    return {
        props : {
            projectData
        }
    }
}


const SingleProjectPage = ({ projectData }) =>  {
    //console.log({projectData});
    const {title, featuredImage, content} = projectData;
    
    return  <Layout>
        <Container> 

            {featuredImage &&

<Image 
src={featuredImage.node.sourceUrl}
alt={featuredImage.node.altText}
width={featuredImage.node.mediaDetails.width}
height={featuredImage.node.mediaDetails.height}


/>



}




          
        <Heading level="1"> {title} </Heading>
        <div dangerouslySetInnerHTML={{__html: content}} />



        <Paragraph>
            <Link href="/projects">

            <a> 
            
            Back to all projects

            </a>

            </Link>
            
                </Paragraph>
        </Container>
    </Layout>


}

export default SingleProjectPage;