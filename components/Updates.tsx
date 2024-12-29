import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

const HubUpdateCard = ({ hubName, author, caption, timestamp, imageSource }) => {
  return (
    <View style={styles.cardContainer}>
      {/* Image (View with background) */}
      {/* Hub Name */}
      <Text style={styles.hubName}>{hubName}</Text>
      <View style={[styles.imageContainer, { backgroundColor: imageSource }]}>
        {/* You can replace this with an actual Image component if needed */}
      </View>

      {/* Author */}
      <Text style={styles.author}>By {author}</Text>

      {/* Caption (optional) */}
      {caption && <Text style={styles.caption}>{caption}</Text>}

      {/* Timestamp */}
      <Text style={styles.timestamp}>{timestamp}</Text>

      {/* "View" Button */}
      <Pressable style={styles.viewButton}>
       <Text style={styles.viewButtonText}>View</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,

    width: 365,
    marginTop: 10,
    padding: 16
  },
  imageContainer: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 12,
  },
  hubName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  author: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  caption: {
    fontSize: 14,
    marginBottom: 8,
  },
  timestamp: {
    fontSize: 12,
    color: '#999',
    marginBottom: 12,
  },
  viewButton: {
    backgroundColor: '#007bff',
    borderRadius: 4,
    padding: 8,
  },
  viewButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default HubUpdateCard;