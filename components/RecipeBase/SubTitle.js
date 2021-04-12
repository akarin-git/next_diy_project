import {
  Stack,
  Divider,
  Text
} from "@chakra-ui/react";


export default function SubTitle() {
    return (
        <div>
             <Stack direction="row" h="120" p={6} >
                <Divider orientation="vertical" />
                <Text fontSize={["xs","sm","md"]}>３ステップで簡単にシルクスクリーンのTshotsを作れます。３ステップで簡単にシルクスクリーンのTshotsを作れます</Text>
            </Stack>
        </div>
    )
}
