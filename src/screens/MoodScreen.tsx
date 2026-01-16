import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MoodScreen() {
   return (
      <ScrollView style={styles.container}>

         {/* Top Result */}
         <View style={styles.centerSection}>
            <View style={styles.emojiCircle}>
               <Text style={styles.emoji}>😊</Text>
            </View>

            <Text style={styles.title}>Today's Mood Recorded!</Text>
            <Text style={styles.score}>Score: 10/10</Text>

            <View style={styles.tagContainer}>
               <MoodTag label="Anxious" />
               <MoodTag label="Tired" />
               <MoodTag label="Motivated" />
            </View>

            <Text style={styles.note}>"hey i am good."</Text>
         </View>

         {/* Mood History */}
         <View style={styles.historySection}>
            <Text style={styles.historyTitle}>Mood History</Text>

            <View style={styles.historyCard}>
               <View style={styles.historyLeft}>
                  <Text style={styles.historyEmoji}>😊</Text>
                  <View>
                     <Text style={styles.historyDate}>2026-01-15</Text>
                     <Text style={styles.historyTags}>
                        Anxious, Tired, Motivated
                     </Text>
                  </View>
               </View>

               <Text style={styles.historyScore}>10/10</Text>
            </View>
         </View>

      </ScrollView>
   );
}

/* 🔹 Reusable Tag */
function MoodTag({ label }: { label: string }) {
   return (
      <View style={styles.tag}>
         <Text style={styles.tagText}>{label}</Text>
      </View>
   );
}


const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#F9FAF7',
      paddingHorizontal: 20,
      paddingTop: 40,
   },

   centerSection: {
      alignItems: 'center',
      paddingVertical: 40,
   },

   emojiCircle: {
      width: 80,
      height: 80,
      borderRadius: 40,
      backgroundColor: '#EAF3EA',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16,
   },

   emoji: {
      fontSize: 36,
   },

   title: {
      fontSize: 18,
      fontWeight: '600',
      marginBottom: 4,
   },

   score: {
      color: '#666',
      marginBottom: 12,
   },

   tagContainer: {
      flexDirection: 'row',
      gap: 8,
      marginBottom: 12,
   },

   tag: {
      backgroundColor: '#EFECE6',
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 16,
   },

   tagText: {
      fontSize: 12,
      color: '#444',
   },

   note: {
      fontStyle: 'italic',
      color: '#777',
   },

   historySection: {
      paddingHorizontal: 20,
      marginTop: 10,
   },

   historyTitle: {
      fontSize: 16,
      fontWeight: '600',
      marginBottom: 10,
   },

   historyCard: {
      backgroundColor: '#FFF',
      borderRadius: 14,
      padding: 14,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOpacity: 0.05,
      shadowRadius: 6,
      elevation: 2,
   },

   historyLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
   },

   historyEmoji: {
      fontSize: 24,
   },

   historyDate: {
      fontWeight: '500',
   },

   historyTags: {
      fontSize: 12,
      color: '#666',
   },

   historyScore: {
      color: '#4CAF50',
      fontWeight: '600',
   },
});
