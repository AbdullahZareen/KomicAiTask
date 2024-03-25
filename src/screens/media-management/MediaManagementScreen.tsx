import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, ScrollView, Platform, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { mediaArray } from '../../constants/DataConst'
import { ColorConst, ImageConst } from '../../constants';
import { SizeClass } from '../../utils/AppTheme';
import { CustomFontFamily } from '../../enums/fonts-family';
import { DropDown, Header, MediaItem } from '../../components';
import { SharedSVG } from '../../utils/svg/SharedSVG';
import TextGradient from '@furkankaya/react-native-linear-text-gradient';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import FastImage from 'react-native-fast-image';

interface IMediaManagementScreen {
    onPressContentItem: (item: any, index: number) => void;
    selectedIndex: number;
    contentType: boolean,
    setContentType: (value: any) => void
    contentTypeList: any[];
    setContentTypeList: (value: any) => void;
    contentTypeValue: string,
    onSetCategoryValue: (value: any) => void;
    values: any[];
    sliderValuesChange: (value: any) => void;
    isVisible: boolean;
    setIsVisible: (value: boolean) => void;
}

const MediaManagementScreen = ({ selectedIndex, onPressContentItem, contentType, setContentType, contentTypeList, setContentTypeList, contentTypeValue, onSetCategoryValue, values, isVisible, sliderValuesChange, setIsVisible }: IMediaManagementScreen) => {

    const renderItem = ({ item, index }: any) => (
        <MediaItem key={index} item={item} index={index} selectedIndex={selectedIndex} onPressContentItem={onPressContentItem} />
    );
    const CustomMarker = () => {
        return (<View>
            {isVisible && <View style={{ borderRadius: 20, padding: 4, backgroundColor: ColorConst.selectedItemBgColor, position: 'absolute', bottom: 30 }}>
                <Text style={{ color: ColorConst.white }}>{values[0]}</Text>
            </View>}
            <FastImage source={ImageConst.sliderThumbnail} style={{ width: 25, height: 25 }} />
        </View>)
    }
    return (
        <SafeAreaView style={styles.mainContainer}>
            <Header />
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={10}
                style={{ flex: 1 }}
            >
                <ScrollView bounces={false} style={{}}>
                    <SharedSVG svgType={"top-header"} style={{ margin: SizeClass.DEFAULT_MARGIN, marginEnd: 0 }} width={SizeClass.getScreenWidthFromPercentage(80)} />
                    <View style={{ marginStart: SizeClass.DEFAULT_MARGIN, marginEnd: SizeClass.DEFAULT_MARGIN, gap: SizeClass.DEFAULT_MARGIN, flex: 1, paddingBottom: 50 }} >
                        <View>
                            <Text style={styles.heading}>ContentType</Text>
                            <Text style={styles.subHeading}>Choose a content type that best fits your needs.</Text>
                        </View>
                        <View style={styles.divider} />
                        <Text style={styles.questionText}>What type of content are you creating?</Text>
                        <View style={styles.contentContainer}>{mediaArray.map((item, index) => renderItem({ item, index }))}
                        </View>
                        <Text style={styles.questionText}>Which type of "{mediaArray[selectedIndex]?.title}" content are you creating?</Text>
                        <DropDown isOpen={contentType} value={contentTypeValue} items={contentTypeList} setIsOpen={setContentType} setItems={setContentTypeList} zIndex={4000} zIndexInverse={1000} Style={{}} placeHolder={"Select"} onSelectItem={onSetCategoryValue} searchable={true} searchPlaceholder="Search" searchTextInputStyle={{ borderColor: ColorConst.borderGray, color: ColorConst.textColor1 }} />
                        <Text style={styles.questionText}>Set the number of words for output text</Text>
                        <View style={styles.sliderView}>
                            <Text style={styles.value}>100</Text>
                            <MultiSlider
                                values={values}
                                sliderLength={280}
                                min={100}
                                max={1000}
                                step={1}
                                onValuesChange={sliderValuesChange}
                                selectedStyle={{
                                    backgroundColor: ColorConst.gradientColor[0],
                                }}
                                unselectedStyle={{
                                    backgroundColor: ColorConst.dividerColor,
                                }}
                                onValuesChangeFinish={() => { setIsVisible(false) }}
                                onValuesChangeStart={() => { setIsVisible(true) }}
                                containerStyle={{
                                    height: 40,
                                }}
                                trackStyle={{
                                    height: 5,
                                }}
                                customMarker={CustomMarker}
                            />
                            <Text style={styles.value}>1000</Text>
                        </View>

                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
            <TouchableOpacity style={styles.button} >
                <TextGradient
                    style={styles.buttonText}
                    locations={[0, 1]}
                    colors={ColorConst.gradientColor}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    text="Next"
                />
                <SharedSVG svgType="double-chevron" />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default React.memo(MediaManagementScreen)

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: ColorConst.bgSurfaceColor
    },
    contentContainer: {
        flexDirection: "row",
        flexWrap: 'wrap',
        // borderWidth: 1
    },

    heading: {
        color: ColorConst.white,
        fontSize: SizeClass.scaleFont(24),
        fontFamily: CustomFontFamily.POPPINS_MEDIUM
    },
    subHeading: {
        color: ColorConst.textColor2,
        fontSize: SizeClass.scaleFont(14),
        fontFamily: CustomFontFamily.POPPINS_REGULAR
    },
    divider: {
        backgroundColor: ColorConst.dividerColor,
        height: 0.5
    },
    questionText: {
        color: ColorConst.textColor2,
        fontSize: SizeClass.scaleFont(16),
        fontFamily: CustomFontFamily.POPPINS_BOLD
    },
    listContents: {
        flexDirection: 'row',
        width: SizeClass.SCREEN_WIDTH - (SizeClass.SMALL_MARGIN * 2),
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    value: {
        color: ColorConst.textColor2,
        fontSize: SizeClass.scaleFont(12),
        fontFamily: CustomFontFamily.POPPINS_MEDIUM
    },
    button: {
        flexDirection: "row",
        justifyContent: 'space-between',
        backgroundColor: ColorConst.white,
        width: SizeClass.getScreenWidthFromPercentage(90),
        alignSelf: "center",
        alignItems: "center",
        padding: SizeClass.DEFAULT_MARGIN / 1.5,
        borderRadius: SizeClass.LARGE_MARGIN * 2,
    },
    buttonText: {
        fontSize: SizeClass.scaleFont(16),
        fontFamily: CustomFontFamily.POPPINS_REGULAR
    },
    sliderView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        backgroundColor: ColorConst.black,
        padding: 10,
        borderRadius: 10
    }
})