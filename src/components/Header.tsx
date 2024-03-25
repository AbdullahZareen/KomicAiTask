import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ColorConst, ImageConst } from '../constants'
import { SizeClass } from '../utils/AppTheme'
import { CustomFontFamily } from '../enums/fonts-family'
import FastImage from 'react-native-fast-image'
import { SharedSVG } from '../utils/svg/SharedSVG'

const Header = () => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: SizeClass.DEFAULT_MARGIN, marginTop: SizeClass.HEADER_MARGIN }}>
            <View style={{}}>
                <SharedSVG svgType={"chevron-circle"} />
            </View>
            <View>
                <Text style={styles.title}>Media management</Text>
                <Text style={styles.subTitle}>Draft campaign</Text>
            </View>
            <View>
                <FastImage source={ImageConst.profile} style={{ height: SizeClass.getScreenHeightFromPercentage(6), width: SizeClass.getScreenHeightFromPercentage(6) }} resizeMode='contain' />
            </View>
        </View>
    )
}

export default React.memo(Header)

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        color: ColorConst.white,
        fontSize: SizeClass.scaleFont(16),
        fontFamily: CustomFontFamily.POPPINS_MEDIUM
    },
    subTitle: {
        textAlign: 'center',
        color: ColorConst.textColor2,
        fontSize: SizeClass.scaleFont(14),
        fontFamily: CustomFontFamily.POPPINS_REGULAR

    },
})