import React from 'react';
import Slider from '../../components/slider/Slider';
import { Flex, Heading } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { Suspense } from 'react';
import Spinner from '../../components/spinner/Spinner';


const ImageGallery = () => {    
    const language = useSelector(state=>state.language.language)
    return (
        <>
        {/* <Flex h={'15dvh'} w={'full'} justify={'start'} align={'center'} p={10}>
        <Heading fontWeight={'lighter'} color={'primary'} _dark={{color:'secondary'}}>
          {language === 'en' ? ('Gallery') : language === 'fr' ? ('Gallerie') : 'مكتبة الوسائط'}
        </Heading>
        </Flex> */}
        <Suspense fallback={<Spinner />}>

        <Slider language={language}/>
        </Suspense>
        </>
    );
}

export default ImageGallery;
