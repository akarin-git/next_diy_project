import { Tabs, TabList, TabPanels, Tab, TabPanel,Box,Grid } from "@chakra-ui/react"
import MypageCard from './MypageCard';


export default function UserTabs({user}) {
        // console.log(user[0][0]);
        // console.log(user[0][0].favorite);
        const favorites = user[0][0].favorite;
        // console.log(favorites.map((favorite) => favorite.id))
        // console.log(favorites.map((favorite) => favorite))
    return (
        <>
          <Tabs variant="soft-rounded" colorScheme="purple" align="left" w="full" py="10" >
            <TabList >
                    <Tab>my post</Tab>
                    <Tab>favorite</Tab>
            </TabList>
            <TabPanels my="10">
                    <TabPanel>
                            <p>one!</p>
                           <Grid templateColumns="repeat(3, 1fr)" gap={3}>
                            
                           </Grid>
                    </TabPanel>
                    <TabPanel >
                            <Grid 
                            templateColumns={["repeat(2, 1fr)","repeat(2, 1fr)","repeat(4, 1fr)"]} 
                            gap={3}
                            w={"full"}
                            >
                            {favorites.map((favoritePost) => <MypageCard key={favoritePost.id} favoritePost={favoritePost}/>)}
                            
                           </Grid>
                    </TabPanel>
            </TabPanels>
        </Tabs>
        </>
    )
}
