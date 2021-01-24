# Citymall-repo
MERN stack movies list


Installing packages for Nodejs and mongodb Server(Citymall-server):
0 Go to citymall-server folder
1 npm install express mongoose jsonwebtoken nodemon

Installing packages for React Native (Citymall-UI):
1 npx expo-cli init citymall-ui
2 cd citymall-ui
3 Copy all files that are present in my git repo under citymall-ui to this folder
3 npm install react-navigation react-navigation-stack axios ngrok react-native-elements
4 expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

To start Nodejs server type : “npm start”
To start react native expo type: “npm start”
Final step:-
1 To make our server online or available you should start a ngrok server while going to citymall-ui folder as it is install in that folder only, type: “ngrok http 5000”
2 Copy that link given in the screen
3 Paste it in citymall-ui>src>api>nodeapi.js>baseURL: “Copied server linked” (Please check there should be no spaces in the url)

Now you can Run the application on mobile using expo cli
NOTE: This all command should be run in terminal window only


If you want my mongoURI please visit my website https://priyanshubaluni.me/ and message me over their.

Regards,
Priyanshu Baluni
