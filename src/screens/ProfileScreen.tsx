import { View, Text, StyleSheet, TouchableOpacity, Switch, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

export default function ProfileScreen() {
   const [notifications, setNotifications] = useState(true);
   const [language, setLanguage] = useState<'en' | 'ur'>('en');

   return (
      <ScrollView style={styles.container}>

         {/* Title */}
         <Text style={styles.pageTitle}>Profile</Text>

         {/* User Card */}
         <View style={styles.card}>
            <View style={styles.userRow}>
               <View style={styles.avatar}>
                  <Ionicons name="person" size={22} color="#4CAF50" />
               </View>

               <View style={{ flex: 1 }}>
                  <Text style={styles.userName}>User</Text>
                  <Text style={styles.userSub}>Set up your profile</Text>
               </View>

               <TouchableOpacity style={styles.editBtn}>
                  <Text style={styles.editText}>Edit</Text>
               </TouchableOpacity>
            </View>
         </View>

         {/* Settings */}
         <Text style={styles.sectionTitle}>Settings</Text>

         {/* Notifications */}
         <View style={styles.card}>
            <View style={styles.row}>
               <View style={styles.rowLeft}>
                  <Ionicons name="notifications-outline" size={18} color="#4CAF50" />
                  <Text style={styles.rowText}>Notifications</Text>
               </View>
               <Switch
                  value={notifications}
                  onValueChange={setNotifications}
                  trackColor={{ true: '#4CAF50' }}
               />
            </View>
         </View>

         {/* Language */}
         <View style={styles.card}>
            <View style={styles.rowLeft}>
               <Ionicons name="globe-outline" size={18} color="#E07A5F" />
               <Text style={styles.rowText}>Language</Text>
            </View>

            <View style={styles.languageRow}>
               <TouchableOpacity
                  style={[
                     styles.langBtn,
                     language === 'en' && styles.activeLang,
                  ]}
                  onPress={() => setLanguage('en')}
               >
                  <Text
                     style={[
                        styles.langText,
                        language === 'en' && styles.activeLangText,
                     ]}
                  >
                     English
                  </Text>
               </TouchableOpacity>

               <TouchableOpacity
                  style={[
                     styles.langBtn,
                     language === 'ur' && styles.activeLang,
                  ]}
                  onPress={() => setLanguage('ur')}
               >
                  <Text
                     style={[
                        styles.langText,
                        language === 'ur' && styles.activeLangText,
                     ]}
                  >
                     اردو
                  </Text>
               </TouchableOpacity>
            </View>
         </View>

         {/* Daily Reminder */}
         <TouchableOpacity style={styles.card}>
            <View style={styles.row}>
               <View style={styles.rowLeft}>
                  <Ionicons name="sunny-outline" size={18} color="#F4A261" />
                  <View>
                     <Text style={styles.rowText}>Daily Reminders</Text>
                     <Text style={styles.subText}>09:00</Text>
                  </View>
               </View>

               <Ionicons name="chevron-forward" size={18} color="#999" />
            </View>
         </TouchableOpacity>

         {/* Logout */}
         <TouchableOpacity style={styles.card}>
            <View style={styles.rowLeft}>
               <Ionicons name="log-out-outline" size={18} color="#555" />
               <Text style={styles.rowText}>Log Out</Text>
            </View>
         </TouchableOpacity>

         {/* Delete */}
         <TouchableOpacity>
            <Text style={styles.deleteText}>Delete Account</Text>
         </TouchableOpacity>

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

   pageTitle: {
      fontSize: 20,
      fontWeight: '600',
      marginVertical: 10,
   },

   sectionTitle: {
      marginTop: 16,
      marginBottom: 8,
      fontWeight: '600',
   },

   card: {
      backgroundColor: '#FFF',
      borderRadius: 14,
      padding: 14,
      marginBottom: 12,
      shadowColor: '#000',
      shadowOpacity: 0.04,
      shadowRadius: 6,
      elevation: 2,
   },

   userRow: {
      flexDirection: 'row',
      alignItems: 'center',
   },

   avatar: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: '#EAF3EA',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 12,
   },

   userName: {
      fontWeight: '600',
   },

   userSub: {
      fontSize: 12,
      color: '#777',
   },

   editBtn: {
      paddingHorizontal: 14,
      paddingVertical: 6,
      borderRadius: 16,
      backgroundColor: '#EFECE6',
   },

   editText: {
      fontSize: 12,
      fontWeight: '500',
   },

   row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
   },

   rowLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
   },

   rowText: {
      fontWeight: '500',
   },

   subText: {
      fontSize: 12,
      color: '#777',
   },

   languageRow: {
      flexDirection: 'row',
      marginTop: 12,
      backgroundColor: '#EFECE6',
      borderRadius: 22,
      padding: 4,
   },

   langBtn: {
      flex: 1,
      paddingVertical: 8,
      borderRadius: 18,
      alignItems: 'center',
   },

   activeLang: {
      backgroundColor: '#4CAF50',
   },

   langText: {
      fontSize: 12,
      color: '#555',
   },

   activeLangText: {
      color: '#fff',
   },

   deleteText: {
      color: '#E63946',
      textAlign: 'center',
      marginVertical: 16,
   },
});