import imagePicker from 'react-native-imagepicker'

export function take() {
    imagePicker.open({
        takePhoto: true,
        useLastPhoto: true,
        chooseFromLibrary: true
    }).then(({ uri, width, height }) => {
        console.warn('image asset', uri, width, height);
    }, (error) => {
        console.warn('error', error);
    });
     
}