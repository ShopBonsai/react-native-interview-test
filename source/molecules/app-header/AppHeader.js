import React from "react"
import { View, Text } from "react-native"
import { Header } from "react-native-elements"

import styles from "./AppHeader.styles"

// const StyledText = styled.Text` Doesn't work as expected
//   color: white;
//   fontsize: ${130}px;
// `

const AppHeader = () => (
  <Header
    centerComponent={
      <View>
        <Text style={styles.headerLogoText}>BONSAI</Text>
      </View>
    }
    statusBarProps={{
      animated: true,
      translucent: true,
      barStyle: "light-content",
      backgroundColor: "rgba(0, 0, 0, 0.25)",
    }}
    outerContainerStyles={styles.headerOuterContainer}
    innerContainerStyles={styles.headerInnerContainer}
  />
)

export default AppHeader
