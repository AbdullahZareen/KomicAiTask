import { Animated, Easing, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SizeClass } from '../utils/AppTheme'
import { ColorConst } from '../constants'
import { CustomFontFamily } from '../enums/fonts-family'

interface IMediaItem {
    item: MediaItem;
    index: number;
    selectedIndex: number;
    onPressContentItem: (value: MediaItem, index: number) => void
}
const MediaItem = ({ item, index, selectedIndex, onPressContentItem }: IMediaItem) => {
    const [animation] = useState(new Animated.Value(1)); // Initial scale value

    const handlePressIn = () => {
        // Scale down the item on press
        Animated.timing(animation, {
            toValue: 0.8, // Scale down to 90% of the original size
            duration: 200, // Animation duration in milliseconds
            easing: Easing.ease,
            useNativeDriver: true,
        }).start();
    };

    const handlePressOut = () => {
        // Scale back to the original size after releasing press
        Animated.timing(animation, {
            toValue: 1, // Scale back to the original size
            duration: 200, // Animation duration in milliseconds
            easing: Easing.ease,
            useNativeDriver: true,
        }).start();
    };
    return (
        <Animated.View
            style={[
                {
                    transform: [{ scale: animation }],
                }
            ]}
        >
            <TouchableOpacity key={index} style={[styles.item, { backgroundColor: selectedIndex === index ? ColorConst.selectedItemBgColor : "transparent", }]} onPress={() => onPressContentItem(item, index)}
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                activeOpacity={1}>
                <Text style={styles.itemText}>{item?.title}</Text>
            </TouchableOpacity>
        </Animated.View>
    )
}

export default React.memo(MediaItem)

const styles = StyleSheet.create({
    item: {
        borderWidth: 1,
        borderRadius: SizeClass.LARGE_MARGIN * 2,
        padding: SizeClass.DEFAULT_MARGIN / 1.2,
        paddingLeft: SizeClass.DEFAULT_MARGIN,
        paddingRight: SizeClass.DEFAULT_MARGIN,
        borderColor: ColorConst.borderGray,
        marginRight: SizeClass.SMALL_MARGIN,
        marginBottom: SizeClass.SMALL_MARGIN,

    },
    itemText: {
        color: ColorConst.textColor1,
        fontSize: SizeClass.scaleFont(14),
        fontFamily: CustomFontFamily.POPPINS_BOLD,
        marginHorizontal: SizeClass.SMALL_MARGIN
    },
})