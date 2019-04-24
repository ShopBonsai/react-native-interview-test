/* eslint-disable no-use-before-define */
import React from "react"
import { View, Text, Image } from "react-native"
import { Icon } from "react-native-elements"
import moment from "moment"
import PropTypes from 'prop-types'

import { Card, CardSection } from "./index"

class FeedCard extends React.Component {
  state = {
    iconSelected: false,
  }

  render() {
    const { date, genre, imageUrl, title } = this.props
    return (
      <Card>
        <View style={styles.containerStyle}>
          <Text style={styles.cardHeader}>{title}</Text>
          <View style={{ width: 400, height: 400 }}>
            <Image style={styles.imageStyle} source={{ uri: `${imageUrl}` }} />
          </View>
        </View>
        <CardSection>
          <Icon
            color={this.state.iconSelected ? "#FFD662" : "#000"}
            raised
            name="thumb-up"
            type="material"
            // eslint-disable-next-line react/jsx-no-bind
            onPress={() => {
              this.setState({ iconSelected: !this.state.iconSelected })
            }}
          />
          <Text style={{ alignSelf: "center" }}>Like</Text>
          <View style={{ flexDirection: "column", marginLeft: 10 }}>
            <Text style={styles.footerText}>{moment(date).format("MMMM Do YYYY, h:mm:ss a")}</Text>
            <Text style={styles.footerText}>{`Genre: ${genre}`}</Text>
          </View>
        </CardSection>
      </Card>
    )
  }
}

FeedCard.propTypes = {
  date: PropTypes.string,
  genre: PropTypes.string,
  imageUrl: PropTypes.string,
  title: PropTypes.string,
}

FeedCard.defaultProps = {
  date: moment().format("MMMM Do YYYY"),
  genre: "unkown",
  title: "unkown title",
}

export { FeedCard }

const styles = {
  containerStyle: {
    flex: 1,
    alignSelf: "center",
  },
  imageStyle: {
    flex: 1,
    alignSelf: "center",
    aspectRatio: 0.9,
  },
  cardHeader: {
    fontFamily: "OpenSans-Bold",
    fontSize: 18,
    textAlign: "center",
    marginTop: 10,
    paddingBottom: 10,
  },
  footerText: {
    fontFamily: "OpenSans-Bold",
    fontSize: 14,
  },
}