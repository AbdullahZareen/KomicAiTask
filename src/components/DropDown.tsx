import { StyleSheet } from 'react-native'
import React from 'react'
import { SizeClass } from '../utils/AppTheme'
import { ColorConst } from '../constants'
import DropDownPicker from 'react-native-dropdown-picker'
import { CustomFontFamily } from '../enums/fonts-family'
interface IDropDown {
    items: any[],
    value: any,
    setValue: (value: any) => void,
    isOpen: boolean,
    onSelectItem: any,
    setItem: (item: any) => void,
    setIsOpen: (item: any) => void,
    placeHolder: string,
    renderListItem?: any,
    Style: any,
    zIndexInverse?: any,
    setItems: (item: any) => void,
    zIndex: any,

}

const DropDown = (props: any) => {
    const { items, value, setValue, isOpen, onSelectItem, setItems, setIsOpen, zIndex = 1, zIndexInverse = 2, placeHolder, Style, renderListItem } = props
    return (
        <DropDownPicker
            items={items}
            value={value}
            setValue={setValue}
            open={isOpen}
            setOpen={setIsOpen}
            zIndex={zIndex}
            zIndexInverse={zIndexInverse}
            setItems={setItems}
            placeholder={placeHolder}
            onSelectItem={onSelectItem}
            labelProps={{
                numberOfLines: 1
            }}
            renderListItem={renderListItem}
            textStyle={styles.label}
            placeholderStyle={styles.placeholder}
            style={[{
                borderWidth: 0,
                backgroundColor: "#1E1D25",
            }, Style]}

            dropDownContainerStyle={{
                borderWidth: 0,
                borderRadius: 10,
                borderTopRightRadius: 10,
                marginTop: 10,
                backgroundColor: '#1E1D25',

            }}
            arrowIconStyle={styles.iconStyle}
            tickIconStyle={styles.iconStyle}
            {...props}
            addCustomItem={false}
        />
    );
};

export default React.memo(DropDown);


const styles = StyleSheet.create({
    placeholder: {
        color: ColorConst.textColor2,
        fontSize: SizeClass.scaleFont(16),
        fontFamily: CustomFontFamily.POPPINS_REGULAR
    },
    label: {
        color: ColorConst.textColor1,
        fontSize: SizeClass.scaleFont(16),
        fontFamily: CustomFontFamily.POPPINS_REGULAR
    },
    iconStyle: {
        tintColor: ColorConst.textColor1,
    },
    gradientBorder: {
        borderWidth: 2, // Adjust border width as needed
        borderRadius: 10,
    },
    container: {
        borderRadius: 10,
        overflow: 'hidden', // Ensure gradient border is contained within the view
    },
})