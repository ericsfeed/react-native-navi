import { View, Text } from 'react-native';

const Footer = () => {
    return (
        <View style={{
            height: 20,
            backgroundColor: 'thistle',
            flexDirection: "row",
            justifyContent: "flex-end"
        }}>
            <Text style={{ fontSize: 14 }}>Terms of Service  </Text>
            <Text style={{ fontSize: 14 }}>Privacy Policy </Text>
        </View>
    )
}

export default Footer;



