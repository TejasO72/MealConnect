// /* eslint-disable react/no-unescaped-entities */
// /* eslint-disable no-unused-vars */
// import React from "react";
// import { Flex, Box, Text, Image, Button } from "@chakra-ui/react";
// import landingImage from '../assets/landingpagebg.png'; // Import your landing page background image
// import semiCircleImage from '../assets/bgdesign.png'; // Import your semi-circle background image
// import logo from '../assets/logo.png'; // Import your logo
// import axios from 'axios';

// const Landing = () => {
//     return (
//         <div style={{ backgroundColor: "#FFFBDA", height: '100vh' }}>
//             {/* Navbar */}
//             <Flex
//                 as="nav"
//                 alignItems="center"
//                 justifyContent="space-around"
//                 padding="1rem"
//                 backgroundColor="green.400"
//                 color="white"
//                 width="100%"
//             >
//                 <Flex>
//                     <Text marginRight="1rem" fontSize="21px" fontWeight="bold">Home</Text>
//                     <Text marginRight="1rem" fontSize="21px" fontWeight="bold">About</Text>
//                     <Text marginRight="1rem" fontSize="21px" fontWeight="bold">Services</Text>
//                     <Text marginRight="1rem" fontSize="21px" fontWeight="bold">Contact</Text>
//                 </Flex>

//             </Flex>

//             <Flex justifyContent="space-between" padding="2rem">

//                 <Box flex="2" marginLeft="2rem">
//                     <Image src={logo} borderRadius="50%" height="500px" width="500px" margin="0 auto" />

//                     <Text marginTop="-12rem" color="blueviolet" fontFamily="cursive" fontSize="20px">
//                         <Text color="green" fontSize="23px">Together, let us ensure no one goes hungry; <br />donate now and be a part of the solution.....</Text>

//                         In today's world, where food insecurity remains a pressing issue,
//                         every act of kindness matters. By donating surplus food to our platform, you become an integral part of the solution,
//                         providing nourishment to those in need.
//                     </Text>
//                     <br />
//                     <Button colorScheme='teal' variant='outline' _hover={{ color: 'white', backgroundColor: 'teal.500' }}>
//                         Donate Food
//                     </Button>
//                     <Button colorScheme='teal' variant='outline' _hover={{ color: 'white', backgroundColor: 'teal.500' }} marginLeft="10px">
//                         Donate Money
//                     </Button>

//                 </Box>

//                 <Box>
//                     <Image src={landingImage} borderRadius="50%" />
//                 </Box>
//             </Flex>

//         </div>
//     );
// }

// export default Landing;




































/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import Home from "./Home.jsx";
import Work from './Work.jsx';
import Testimonial from "./Testimonial.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
import '../css/App.css'

const Landing = () => {
    
        return (
            <div className="App">
              <Home />
              
              <Work />
              <Testimonial />
              <Contact />
              <Footer />
            </div>
          );
    
}

export default Landing;
