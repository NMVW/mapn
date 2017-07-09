import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';

export default class List extends React.Component {
  render() {
    return (
      <SectionList
        sections={this.props.sections} // [{title: '', data: ['', ...]}, ...]
        renderItem={
          ({item}) => <Text key={item.title} style={styles.item}>{item}</Text>
        }
        renderSectionHeader={
          ({section}) => <Text key={section.title} style={styles.sectionHeader}>{section.title}</Text>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
