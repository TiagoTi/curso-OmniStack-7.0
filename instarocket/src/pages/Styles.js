import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
  },


  feedItem: {
    marginTop: 20
  },


  feedItemHeader : {
    paddingHorizontal: 15,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },


  name: {
    fontSize: 14,
    color: '#000'
  },


  place: {
    fontSize: 12,
    color: '#666',
    marginTop: 2
  },


  feedImage: {
    width: '100%',
    height: 400,
    marginVertical: 15
  },


  feedItemFooter: {
    paddingHorizontal: 15,
  },


  actions: {
    flexDirection: 'row'
  },


  action: {
    marginRight: 8
  },


  likes: {
    marginTop: 15,
    fontWeight: 'bold',
    color: '#000'
  },


  description: {
    lineHeight: 18,
    color: '#000'
  },


  hashtags: {
    color: '#7159c1'
  },


  selectButton: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#CCC',
    borderStyle: 'dashed',
    height: 42,

    justifyContent: 'center',
    alignItems: 'center',
  },

  selectButtonText: {
    fontSize: 16,
    color: '#666',
  },

  preview: {
    width: 100,
    height: 100,
    marginTop: 10,
    alignSelf: 'center',
    borderRadius: 4,
  },

  input: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    marginTop: 10,
    fontSize: 16,
  },

  shareButton: {
    backgroundColor: '#7159c1',
    borderRadius: 4,
    height: 42,
    marginTop: 15,

    justifyContent: 'center',
    alignItems: 'center',
  },

  shareButtonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#FFF',
  },
});

export default styles