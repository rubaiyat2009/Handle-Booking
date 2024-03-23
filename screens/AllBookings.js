import React from 'react';
import { withExpoSnack } from 'nativewind';
import { ScrollView, StatusBar, Text, View } from 'react-native';
import { styled } from 'nativewind';
import allBookings from "./../mock/allBookings.json";
const StyledScrollView = styled(ScrollView)
const StyledView = styled(View)
const StyledText = styled(Text)

const AllBookings = () => {
    return (
        <StyledScrollView>
            {
                allBookings.map(({ bookingdates, depositpaid, firstname, lastname, totalprice }, i) => (
                    <StyledView key={i} className='shadow m-2 w-full bg-gray-300 p-3'>
                        <StyledText>First Name: {firstname}</StyledText>
                        <StyledText>Last Name: {lastname}</StyledText>
                        <StyledText>Total Price: {totalprice}</StyledText>
                        <StyledText>Deposit: {depositpaid ? "Yes" : "No"}</StyledText>
                        <StyledText>Check In: {bookingdates.checkin}</StyledText>
                        <StyledText>Check Out: {bookingdates.checkout}</StyledText>
                    </StyledView>
                ))
            }
            <StatusBar />
        </StyledScrollView>
    );
}

export default withExpoSnack(AllBookings);