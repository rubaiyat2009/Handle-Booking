import { styled } from 'nativewind';
import { useState } from 'react';
import { Text, View } from 'react-native';
import { TextInput, Button, Checkbox } from 'react-native-paper';
const StyledView = styled(View)

export default function CreateBooking() {
    return (
        <StyledView className='shadow  w-full bg-gray-300 p-3 my-auto h-fit'>
            <TextInput
                label="First Name"
            />
            <TextInput
                label="Last Name"
            />
            <TextInput
                label="Total Price"
            />
            <TextInput
                label="Check In"
            />
            <TextInput
                label="Check Out"
            />

            <Text>Deposit</Text>
            <Checkbox
            />
            <Button mode="contained" onPress={() => console.log('Pressed')}>
                Create Booking
            </Button>
        </StyledView>
    );
}

