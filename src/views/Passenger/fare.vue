<template>
    <NavComponent />
    <div class="container mx-auto px-4 py-2">
        <div class="w-full h-[70vh] sm:h-[60vh] md:h-[80vh] lg:h-[90vh] xl:h-[75vh] mx-auto bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
        
        </div>
    </div>
    </template>
    
    <script>
    import NavComponent from '../Include/nav.vue';
    import {
        auth,
        signOut,
        onAuthStateChanged
    } from "@/firebaseConfig";
    import {
        getFirestore,
        doc,
        getDoc,
        setDoc
    } from "firebase/firestore";
    
    export default {
        components: {
            NavComponent,
        },
        data() {
            return {
                username: null,
            };
        },
        created() {
            this.listenForAuthChanges();
        },
        methods: {
            async listenForAuthChanges() {
                onAuthStateChanged(auth, async (user) => {
                    if (user) {
                        const db = getFirestore();
                        const userDocRef = doc(db, 'users', user.uid);
                        const userDoc = await getDoc(userDocRef);
                        if (userDoc.exists()) {
                            this.username = userDoc.data().username;
                        } else {
                            if (user.providerData[0].providerId === 'google.com') {
                                console.log("Logged in with Google account!");
                                const googleUsername = user.displayName || "Guest"; 
                                await setDoc(userDocRef, {
                                    username: googleUsername,
                                    email: user.email, 
                                });
                                
                                this.username = googleUsername; 
                            } else {
                                console.log("No such user document!");
                                this.username = null; 
                            }
                        }
                    } else {
                        this.username = null;
                    }
                });
            },
        }
    };
    </script>
    