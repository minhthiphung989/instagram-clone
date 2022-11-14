import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Avatar } from "./Avatar";
import { Photos } from "./Photos";
export const Noti = ()=>{
    return(
        <View style={styles.container}>
            <Avatar image={{uri:'https://s3-alpha-sig.figma.com/img/d4c1/7ff9/18583bf15a6bdc083bcee64acc58ed55?Expires=1668384000&Signature=cQDUvhI-9d20fRkYEHHAW9drOyHXPEJvrRJH0ILe6BQNQ5v5mE~nlt8p8KJW5iCvNXcruRixL~ZB~r7J~3k~7uRkToMs4CK8QOEksC-MDWR4vYuFPC~1DoaWkcdhj30labfxLim1ICiDJwF08lAldFThfmkLWLiKFVautEtdMqLIvSp3mR2qvJuKeiS-lB9tMVeQQsWkcipNmZACogThC5HV3NPGysiFshPqwmhZIKiaXGqmGhsnmVw9au4robPt8untjBCPhFghmksOBMdCQ97kM57iX4Xe6gT0UbS-lvOgBhRwoJ2gxAAuedN3~~0uML3lucgymqCWqI~BmG-25g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'}} width={44} height={44}/>
            <Text style={{flex:1, marginLeft:20}}>liked your photo</Text>
            <Photos width={44} height={44} />
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
    },
})