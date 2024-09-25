import { useState } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, TextInput, Image, ScrollView, Alert } from 'react-native';

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleOpenModal = () => {
    setIsModalVisible(true);
  };
  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const showAlert = () => {
    Alert.alert(
      "Alert Title",
      "Alert Message",
      [
        { text: "OK", onPress: () => console.log("Close Alert") }
      ]
    );
  };

  const [counter, setCounter] = useState(0);
  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handleReset = () => {
    setCounter(0);
  };

  const [inputText, setInputText] = useState('');
  const [displayedText, setDisplayedText] = useState('...');
  const handleInputChange = (text) => {
    setInputText(text);
  };
  const handleDisplayText = () => {
    setDisplayedText(inputText);
  };
  const handleClearText = () => {
    setDisplayedText('...');
    setInputText('');
  };

  return (
    <View style={styles.appContainer}>

      <View id='appHeader' style={styles.appHeader}>
        <View><Image source={require('./assets/parrot.png')} style={styles.imgIcon} testID='icon'/></View>
        <View><Text style={styles.appHeaderText} testID='header'>PoC Detox App</Text></View>
      </View>

      <View id='contentContainer' style={styles.contentContainer}>
        <Text style={styles.contentTitle}>Actions</Text>
        <View id='actions' style={styles.actionButtons}>
          <View style={styles.actionButtonsPositions}>
            <TouchableOpacity onPress={handleOpenModal} style={styles.button} testID='openModalButton'>
              <Text style={styles.buttonText}>Open Modal</Text>
            </TouchableOpacity>

            <Modal visible={isModalVisible} animationType="slide">
              <View style={styles.modalBackground}>
                <View style={styles.modalContainer}>
                  <Text testID='modalContent'>Modal content</Text>
                  <TouchableOpacity onPress={handleCloseModal} style={styles.button} testID='closeModalButton'>
                    <Text style={styles.buttonText}>Close</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>

            <TouchableOpacity onPress={showAlert} style={styles.button} testID='openAlertButton'>
              <Text style={styles.buttonText}>Trigger Alert</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.contentTitle}>Counter</Text>
        <View id='counter' style={styles.actionButtons}>
          <View style={styles.actionButtonsPositions}>
            <TouchableOpacity onPress={handleIncrement} style={styles.button} testID='plusOneButton'>
              <Text style={styles.buttonText}>+1 Button</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleReset} style={styles.button} testID='resetCounterButton'>
              <Text style={styles.buttonText}>Reset counter</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.counter} testID='counter'>Counter: {counter}</Text>
        </View>

        <Text style={styles.contentTitle}>Text introducer</Text>
        <View id='input'>
          <TextInput
            style={styles.input}
            placeholder="Provide your text..."
            onChangeText={handleInputChange}
            value={inputText}
            testID='textInput'
          />
          <View style={styles.actionButtons}>
            <View style={styles.actionButtonsPositions}>
              <TouchableOpacity onPress={handleDisplayText} style={styles.button} testID='enterTextButton'>
                <Text style={styles.buttonText}>Enter Text</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleClearText} style={styles.button} testID='ClearTextButton'>
                <Text style={styles.buttonText}>Clear Text</Text>
              </TouchableOpacity>

            </View>
          </View>
          <View style={styles.providedTextContainer}>
            <Text style={styles.content}>The text provided is: </Text>
            <Text style={styles.providedText} testID='providedText'>{displayedText}</Text>
          </View>
        </View>

        <ScrollView id='article' testID='articleContainer'>
          <Text style={styles.contentTitle}>Some Article</Text>
          <Text style={styles.content}>{detoxText}</Text>
        </ScrollView>
      </View>

      <View id='appFooter' style={styles.appFooter}>
        <Text style={styles.appFooterText} testID='footerText'>PoC Detox App, v1.0.0</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 15,
    backgroundColor: '#ffffff',
  },
  appHeader: {
    flex: 1,
    backgroundColor: '#4682b4',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff'
  },
  appHeaderText: {
    color: '#ffffff',
    fontWeight: 'bold',
    paddingVertical: 10,
    paddingLeft: 8,
    letterSpacing: 2,
  },
  imgIcon: {
    width: 95,
    height: 57
  },
  actionButtons: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    alignItems: 'center'
  },
  actionButtonsPositions: {
    flexDirection: 'row',
  },
  counter: {
    fontWeight: 'bold',
    paddingVertical: 10,
    color: '#ff4500'
  },
  input: {
    borderWidth: 2,
    borderColor: '#b0e0e6',
    padding: 10,
    marginBottom: 10
  },
  providedTextContainer: {
    flexDirection: "row",
    paddingTop: 5,
    paddingBottom: 10
  },
  providedText: {
    fontWeight: 'bold',
    color: '#ff4500'
  },
  contentContainer: {
    flex: 8,
    padding: 2,
  },
  contentTitle: {
    color: "#4682b4",
    paddingVertical: 8,
    letterSpacing: 3,
    textDecorationLine: "underline",
    fontWeight: 'bold'
  },
  content: {
    color: "#4682b4"
  },
  appFooterText: {
    paddingVertical: 15,
    color: '#4682b4',
    textAlign: 'center'
  },
  modalBackground: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  modalContainer: {
    flex: 2,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 100,
    left: 50,
    width: 300,
    height: 200,
    visible: true,
  },
  button: {
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#4682b4',
    borderRadius: 9,
    padding: 3,
    margin: 6,
    alignItems: "center",
    width: 150,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#4682b4',
    padding: 4,
  }
});

const longText = [
  "Detox is revolutionizing the way QA Engineers test React Native applications. It's not just another testing framework; it's a specialized gray box end-to-end solution crafted specifically to tackle the unique challenges posed by the React Native environment. Unlike traditional methods that often fall short in replicating real user experiences, Detox goes beyond superficial UI interactions. This deep integration allows Detox to synchronize seamlessly with the asynchronous operations at the heart of your app, resulting in tests that are significantly faster, more reliable, and truer to how users will actually interact with your final product.",
  "One of Detox's key strengths lies in its native approach to testing. Instead of relying on slow and often brittle webview-based solutions, Detox communicates with your app using the actual rendering engine for both iOS and Android. This direct interaction translates to several critical advantages. Firstly, it eliminates the performance bottlenecks that plague many testing frameworks, allowing your tests to run with remarkable speed and efficiency. Secondly, it sidesteps the inconsistencies inherent in webview-based solutions, ensuring your tests accurately reflect how your app behaves on real devices.",
  "Detox's dedication to real-world accuracy extends to its testing environments. You can choose to run your tests on actual physical devices or opt for highly realistic emulators. This flexibility is crucial in uncovering and addressing issues that might otherwise slip through the cracks. For example, problems specific to certain device capabilities, varying network conditions, or different operating system versions can be identified and addressed early on, leading to a more polished and robust final product.",
  "Beyond its powerful capabilities, Detox is designed with developer experience in mind. The framework offers a clear and intuitive API, making test creation and maintenance surprisingly straightforward. You can effortlessly define user flows, simulate intricate gestures, and validate expected outcomes using concise code that is easy to understand and maintain. This emphasis on simplicity ensures that developers can focus on crafting effective tests without being bogged down by complex syntax or cumbersome workflows.",
  "In conclusion, Detox is more than a testing tool; it's a strategic asset for any team serious about delivering high-quality React Native applications. By embracing Detox, you're not only investing in faster and more reliable testing, but you're also embracing a development philosophy that prioritizes real-world accuracy and user-centricity. The result is greater confidence in your product, a streamlined development process, and ultimately, a better experience for your users."
]

const detoxText = longText.join('\n\n');
