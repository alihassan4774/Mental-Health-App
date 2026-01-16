import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function JournalScreen() {
   return (
      <View style={styles.container}>

         {/* Header */}
         <View style={styles.header}>
            <Text style={styles.title}>My Journal</Text>

            <TouchableOpacity style={styles.newEntryBtn}>
               <Ionicons name="add" size={18} color="#fff" />
               <Text style={styles.newEntryText}>New Entry</Text>
            </TouchableOpacity>
         </View>

         {/* Empty State */}
         <View style={styles.emptyState}>
            <View style={styles.iconCircle}>
               <Ionicons name="pencil" size={26} color="#7A7A7A" />
            </View>

            <Text style={styles.emptyText}>
               No journals yet. Start writing!
            </Text>
         </View>

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

   header: {
      marginTop: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
   },

   title: {
      fontSize: 20,
      fontWeight: '600',
   },

   newEntryBtn: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#4CAF50',
      paddingHorizontal: 14,
      paddingVertical: 8,
      borderRadius: 20,
      gap: 6,
   },

   newEntryText: {
      color: '#fff',
      fontSize: 14,
      fontWeight: '500',
   },

   emptyState: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
   },

   iconCircle: {
      width: 70,
      height: 70,
      borderRadius: 35,
      backgroundColor: '#EFECE6',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 12,
   },

   emptyText: {
      color: '#777',
      fontSize: 14,
   },
});
