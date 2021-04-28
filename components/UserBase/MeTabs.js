import { Tabs, TabList, TabPanels, Tab, TabPanel,Box,Grid } from "@chakra-ui/react"
import MypageFavCard from './MypageFavCard';
import MypagePostCard from './MypagePostCard';

export default function MeTabs({me}) {
//      console.log(me[0]);
     const favorites = me[0].favorite;
     const myposts = me[0].post_image;
    return (
        <>
           <Tabs variant="soft-rounded" colorScheme="pink" align="left" w="full" py="10" >
            <TabList >
                    <Tab>my post</Tab>
                    <Tab>my favorite</Tab>
            </TabList>
            <TabPanels my="10">
                    <TabPanel>
                           <Grid 
                            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(3, 1fr)",xl:"repeat(4, 1fr)" }} 
            gap={4}
                            w={"full"}
                            >
                            {myposts.map((myPost) => <MypagePostCard key={myPost.id} myPost={myPost}/>)}
                           </Grid>
                    </TabPanel>
                    <TabPanel >
                            <Grid 
                            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(3, 1fr)",xl:"repeat(4, 1fr)" }} 
            gap={4}
                            w={"full"}
                            >
                            {favorites.map((favoritePost) => <MypageFavCard key={favoritePost.id} favoritePost={favoritePost}/>)}
                            
                           </Grid>
                    </TabPanel>
            </TabPanels>
        </Tabs>  
        </>
    )
}
