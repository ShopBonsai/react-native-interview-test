import React from "react"
import { View, Platform } from "react-native"
import { Header } from "react-native-elements"
import styled from "styled-components/native"

const StyledText = styled.Text`
  color: white;
`

const AppHeader = () => (
  <Header
    centerComponent={
      <View>
        <StyledText>Bonsai</StyledText>
      </View>
    }
    statusBarProps={{
      barStyle: "light-content",
      backgroundColor: "rgba(0, 0, 0, 0.25)",
      animated: true,
      translucent: true,
    }}
    outerContainerStyles={{
      zIndex: 1,
      backgroundColor: "#2678fb",
      paddingTop: Platform.OS === "ios" ? 35 : 42,
      justifyContent: "space-around",
      ...Platform.select({
        android: {
          height: 87,
        },
        ios: {
          height: 75,
        },
      }),
    }}
    innerContainerStyles={{ alignItems: "center" }}
  />
)

export default AppHeader
