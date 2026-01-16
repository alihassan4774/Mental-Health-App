import { StatusBar } from "expo-status-bar";
import {
   SafeAreaView,
   ScrollView,
   StyleSheet,
   Text,
   View,
} from "react-native";

export default function App() {
   return (
      <SafeAreaView style={styles.container}>
         <ScrollView showsVerticalScrollIndicator={false}>
            {/* Header */}
            <View style={styles.header}>
               <Text style={styles.greeting}>☀️ Good Afternoon</Text>
               <Text style={styles.subtitle}>
                  Take a moment for yourself today
               </Text>
            </View>

            {/* Mood Card */}
            <View style={styles.moodCard}>
               <Text style={styles.moodQuestion}>
                  How are you feeling today?
               </Text>

               <View style={styles.moodRow}>
                  <Text style={styles.emoji}>😄</Text>
                  <View>
                     <Text style={styles.score}>Score: 10/10</Text>
                     <Text style={styles.tags}>Anxious, Tired</Text>
                  </View>

                  <Text style={styles.avgScore}>10{"\n"}7-day avg</Text>
               </View>
            </View>

            {/* Quick Actions */}
            <Text style={styles.sectionTitle}>Quick Actions</Text>

            <View style={styles.actions}>
               <ActionCard emoji="😊" title="Track Mood" />
               <ActionCard emoji="📖" title="Write Journal" />
               <ActionCard emoji="🎧" title="Guided Session" />
               <ActionCard emoji="📈" title="View Trends" />
            </View>

            {/* Recent Moods */}
            <Text style={styles.sectionTitle}>Recent Moods</Text>
            <View style={styles.recentBox}>
               <Text style={styles.recentEmoji}>😊</Text>
               <View style={styles.recentBar} />
            </View>

            {/* Quote */}
            <View style={styles.quoteBox}>
               <Text style={styles.quote}>
                  “Every day is a new beginning.”
               </Text>
               <Text style={styles.urdu}>
                  ہر دن ایک نئی شروعات ہے
               </Text>
            </View>
         </ScrollView>

         <StatusBar style="dark" />
      </SafeAreaView>
   );
}

function ActionCard({
   emoji,
   title,
}: {
   emoji: string;
   title: string;
}) {
   return (
      <View style={styles.actionCard}>
         <Text style={styles.actionEmoji}>{emoji}</Text>
         <Text style={styles.actionText}>{title}</Text>
      </View>
   );
}


const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#FAFAF7",
      marginTop: 40,
   },

   header: {
      padding: 20,
   },
   greeting: {
      fontSize: 24,
      fontWeight: "700",
   },
   subtitle: {
      marginTop: 4,
      color: "#777",
   },

   moodCard: {
      backgroundColor: "#FFF",
      marginHorizontal: 20,
      padding: 16,
      borderRadius: 16,
   },
   moodQuestion: {
      color: "#666",
   },
   moodRow: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 12,
   },
   emoji: {
      fontSize: 32,
      marginRight: 12,
   },
   score: {
      fontSize: 16,
      fontWeight: "600",
   },
   tags: {
      color: "#888",
   },
   avgScore: {
      marginLeft: "auto",
      textAlign: "right",
      color: "green",
      fontWeight: "600",
   },

   sectionTitle: {
      marginTop: 24,
      marginLeft: 20,
      fontSize: 16,
      fontWeight: "600",
   },

   actions: {
      flexDirection: "row",
      flexWrap: "wrap",
      padding: 20,
      justifyContent: "space-between",
   },
   actionCard: {
      width: "48%",
      height: 90,
      backgroundColor: "#FFF",
      borderRadius: 16,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 16,
   },
   actionEmoji: {
      fontSize: 24,
   },
   actionText: {
      marginTop: 6,
      fontWeight: "500",
   },

   recentBox: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#FFF",
      margin: 20,
      padding: 12,
      borderRadius: 12,
   },
   recentEmoji: {
      fontSize: 20,
      marginRight: 10,
   },
   recentBar: {
      flex: 1,
      height: 6,
      backgroundColor: "#E0E0E0",
      borderRadius: 6,
   },

   quoteBox: {
      backgroundColor: "#EAF5EF",
      margin: 20,
      padding: 20,
      borderRadius: 16,
      alignItems: "center",
   },
   quote: {
      fontStyle: "italic",
      textAlign: "center",
   },
   urdu: {
      marginTop: 6,
      color: "#555",
   },
});
