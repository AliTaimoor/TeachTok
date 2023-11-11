import {StyleSheet} from 'react-native';
import {Image} from 'react-native';
import {Text, View} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AntDesignLogo from 'react-native-vector-icons/AntDesign';

type ActionBarProps = {
  avatar: string
}

export default function ActionBar({ avatar }: ActionBarProps): JSX.Element {
  return (
    <>
      <View style={styles.avatar}>
        <Image
          style={styles.avatarImage}
          source={{
            uri: avatar,
          }}
        />
        <AntDesignLogo
          style={styles.avatarPlusIcon}
          name="pluscircle"
          color="#28B18F"
          size={22}
        />
      </View>
      <View>
        <AntDesignLogo name="heart" color="white" size={28} />
        <Text style={styles.val}>87</Text>
      </View>
      <View>
        <AntDesignLogo name="message1" color="white" size={28} />
        <Text style={styles.val}>2</Text>
      </View>
      <View>
        <FontAwesomeIcon name="bookmark" color="white" size={28} />
        <Text style={styles.val}>203</Text>
      </View>
      <View>
        <FontAwesomeIcon name="share" color="white" size={28} />
        <Text style={styles.val}>17</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  avatar: {
    height: 53,
    width: 'auto',
  },
  avatarImage: {
    height: 45,
    width: 45,
    borderRadius: 22,
  },
  avatarPlusIcon: {
    alignSelf: 'center',
    marginTop: -15,
  },
  val: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '500',
    color: 'white',
  },
});
