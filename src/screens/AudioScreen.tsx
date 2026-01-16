import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Category =
   | 'All'
   | 'Relaxation'
   | 'Sleep'
   | 'Focus'
   | 'Anxiety'
   | 'Meditation';

type AudioItem = {
   id: number;
   title: string;
   category: Category;
   duration: string;
   gradient: string;
};

const audioSessions: AudioItem[] = [
   {
      id: 1,
      title: 'Morning Calm',
      category: 'Relaxation',
      duration: '5 minutes',
      gradient: '#8FBFA0',
   },
   {
      id: 2,
      title: 'Peaceful Sleep',
      category: 'Sleep',
      duration: '10 minutes',
      gradient: '#1F2A3A',
   },
   {
      id: 3,
      title: 'Deep Focus',
      category: 'Focus',
      duration: '7 minutes',
      gradient: '#D58A6A',
   },
   {
      id: 4,
      title: 'Release Anxiety',
      category: 'Anxiety',
      duration: '6 minutes',
      gradient: '#B7C7D9',
   },
   {
      id: 5,
      title: 'Evening Meditation',
      category: 'Meditation',
      duration: '8 minutes',
      gradient: '#9C8CB9',
   },
   {
      id: 6,
      title: 'Stress Reset',
      category: 'Relaxation',
      duration: '6 minutes',
      gradient: '#7DAEA3',
   },
   {
      id: 7,
      title: 'Night Wind Down',
      category: 'Sleep',
      duration: '9 minutes',
      gradient: '#2E3440',
   },
];

export default function AudioScreen() {
   return (
      <ScrollView style={styles.container}>

         {/* Header */}
         <Text style={styles.title}>Guided Sessions</Text>
         <Text style={styles.subtitle}>
            Calming audio sessions for your wellbeing
         </Text>

         {/* Categories */}
         <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.chipsRow}>
            {['All', 'Relaxation', 'Sleep', 'Focus', 'Anxiety', 'Meditation'].map(
               (item, index) => (
                  <View
                     key={index}
                     style={[
                        styles.chip,
                        item === 'All' && styles.activeChip,
                     ]}
                  >
                     <Text
                        style={[
                           styles.chipText,
                           item === 'All' && styles.activeChipText,
                        ]}
                     >
                        {item}
                     </Text>
                  </View>
               )
            )}
         </ScrollView>

         {/* Audio Cards (7 items) */}
         {audioSessions.map((session) => (
            <View key={session.id} style={styles.cardWrapper}>
               <View
                  style={[
                     styles.audioCard,
                     { backgroundColor: session.gradient },
                  ]}
               >
                  <TouchableOpacity style={styles.playBtn}>
                     <Ionicons name="play" size={20} color="#fff" />
                  </TouchableOpacity>
               </View>

               <View style={styles.cardFooter}>
                  <View>
                     <Text style={styles.cardTitle}>{session.title}</Text>
                     <Text style={styles.cardCategory}>{session.category}</Text>
                  </View>

                  <View style={styles.duration}>
                     <Ionicons name="time-outline" size={14} color="#777" />
                     <Text style={styles.durationText}>
                        {session.duration}
                     </Text>
                  </View>
               </View>
            </View>
         ))}

      </ScrollView>
   );
}


const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#F9FAF7',
      paddingHorizontal: 20,
      paddingTop: 40,
   },

   title: {
      fontSize: 20,
      fontWeight: '600',
      marginTop: 10,
   },

   subtitle: {
      color: '#777',
      marginBottom: 12,
   },

   chipsRow: {
      marginBottom: 20,
   },

   chip: {
      backgroundColor: '#EFECE6',
      paddingHorizontal: 14,
      paddingVertical: 6,
      borderRadius: 18,
      marginRight: 8,
   },

   activeChip: {
      backgroundColor: '#4CAF50',
   },

   chipText: {
      fontSize: 12,
      color: '#555',
   },

   activeChipText: {
      color: '#fff',
   },

   cardWrapper: {
      marginBottom: 22,
   },

   audioCard: {
      height: 120,
      borderRadius: 16,
      justifyContent: 'center',
      alignItems: 'center',
   },

   playBtn: {
      width: 44,
      height: 44,
      borderRadius: 22,
      backgroundColor: 'rgba(255,255,255,0.25)',
      justifyContent: 'center',
      alignItems: 'center',
   },

   cardFooter: {
      marginTop: 8,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
   },

   cardTitle: {
      fontWeight: '600',
   },

   cardCategory: {
      fontSize: 12,
      color: '#777',
   },

   duration: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
   },

   durationText: {
      fontSize: 12,
      color: '#777',
   },
});
