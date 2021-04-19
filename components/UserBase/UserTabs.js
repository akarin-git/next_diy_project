import { Tabs, TabList, TabPanels, Tab, TabPanel,Box,Grid } from "@chakra-ui/react"
import MypageFavCard from './MypageFavCard';
import MypagePostCard from './MypagePostCard';


export default function UserTabs({user}) {
        // console.log(user[0][0].post_image);
        // console.log(user[0][0]);
        // console.log(favorites.map((favorite) => favorite))
        const favorites = user[0].favorite;
        const myposts = user[0].post_image;
    return (
        <>
          <Tabs variant="soft-rounded" colorScheme="purple" align="left" w="full" py="10" >
            <TabList >
                    <Tab>my post</Tab>
                    <Tab>favorite</Tab>
            </TabList>
            <TabPanels my="10">
                    <TabPanel>
                           <Grid 
                            templateColumns={["repeat(1, 1fr)","repeat(2, 1fr)","repeat(4, 1fr)"]} 
                            gap={3}
                            w={"full"}
                            >
                            {myposts.map((myPost) => <MypagePostCard key={myPost.id} myPost={myPost}/>)}
                           </Grid>
                    </TabPanel>
                    <TabPanel >
                            <Grid 
                            templateColumns={["repeat(1, 1fr)","repeat(2, 1fr)","repeat(4, 1fr)"]} 
                            gap={3}
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
