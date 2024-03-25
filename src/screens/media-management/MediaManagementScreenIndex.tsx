import { StyleSheet } from 'react-native'
import React, { useState } from 'react'
import MediaManagementScreen from './MediaManagementScreen'
import { mediaArray } from '../../constants/DataConst'

const MediaManagementScreenIndex = () => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [contentType, setContentType] = useState(false);
    const [contentTypeList, setContentTypeList] = useState(mediaArray[0]?.content.map((item: any) => ({ value: item, label: item })));
    const [contentTypeValue, setContentTypeValue] = useState('');
    const [values, setValues] = useState([80]); // Initial values for the sliders
    const [isVisible, setIsVisible] = useState(false)
    const sliderValuesChange = (values: any) => {
        setValues(values);
    };
    const onSetCategoryValue = (item: any) => {
        setContentTypeValue(item?.value)
    }
    const onPressContentItem = (item: MediaItem, index: number) => {
        setSelectedIndex(index);
        setContentTypeList(item?.content.map((item: any) => ({
            value: item,
            label: item
        })))
    }
    return (
        <MediaManagementScreen selectedIndex={selectedIndex} onPressContentItem={onPressContentItem} contentType={contentType} setContentType={setContentType} contentTypeList={contentTypeList} setContentTypeList={setContentTypeList} contentTypeValue={contentTypeValue} onSetCategoryValue={onSetCategoryValue} values={values} isVisible={isVisible} setIsVisible={setIsVisible} sliderValuesChange={sliderValuesChange} />
    )
}
export default React.memo(MediaManagementScreenIndex)
