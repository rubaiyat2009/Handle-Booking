import { styled } from 'nativewind';
import { Text, View } from 'react-native';
import userInfo from "./../mock/userInfo.json";
const StyledView = styled(View)
const StyledText = styled(Text)

export default function UserProfile() {

    return (
        <StyledView className='shadow  w-full bg-gray-300 p-3 my-auto h-fit'>
            <StyledText>First Name: {userInfo.firstname}</StyledText>
            <StyledText>Last Name: {userInfo.lastname}</StyledText>
            <StyledText>Email Address: {userInfo.email}</StyledText>
            <StyledText>Phone Number: {userInfo.phone}</StyledText>
        </StyledView>
    );
}

