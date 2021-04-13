import { Tabs, TabList, TabPanels, Tab, TabPanel,Box,Grid } from "@chakra-ui/react"
import MypageCard from './MypageCard';


export default function UserTabs() {
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
                            <MypageCard />
                            <MypageCard />
                            <MypageCard />
                           </Grid>
                    </TabPanel>
                    <TabPanel bg="pink">
                            <p>two!</p>
                            <Grid templateColumns="repeat(3, 1fr)" gap={3}>
                            <MypageCard />
                            <MypageCard />
                            <MypageCard />
                           </Grid>
                    </TabPanel>
            </TabPanels>
        </Tabs>
        </>
    )
}
