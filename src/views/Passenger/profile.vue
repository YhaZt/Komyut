<template>
<NavComponent />
<div class="container mx-auto px-4 py-2">
    <div class="w-full h-[70vh] sm:h-[60vh] md:h-[80vh] lg:h-[90vh] xl:h-[75vh] mx-auto bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
        <div class="w-full max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div class="flex flex-col items-center pb-10">
                <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="../../../public/komyut-logo.png" alt="User image" />
                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{{ username }}</h5>
                <span class="text-sm text-gray-500 dark:text-gray-400">Passenger</span>
                <div class="flex flex-col sm:flex-row sm:space-x-4 mt-4 md:mt-6">
                    <form @submit.prevent="updateProfile">
                        <div class="mb-4">
                            <label for="username" class="block text-sm font-medium text-gray-700 dark:text-white">Username</label>
                            <input v-model="updatedUsername" type="text" id="username" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" required />
                        </div>
                        <div class="mb-4">
                            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-white">Email</label>
                            <input v-model="updatedEmail" type="email" id="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" required />
                        </div>
                        <div class="mb-4">
                            <label for="password" class="block text-sm font-medium text-gray-700 dark:text-white">New Password</label>
                            <input v-model="updatedPassword" type="password" id="password" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="Leave blank to keep current password" />
                        </div>
                        <div class="flex justify-between">
                            <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 focus:ring-4 focus:ring-blue-300">
                                Update Profile
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    onMounted
} from 'vue';
import NavComponent from '../Include/nav.vue';
import {
    auth,
    onAuthStateChanged
} from "@/firebaseConfig";
import {
    updateProfile,
    updateEmail,
    updatePassword
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    updateDoc
} from "firebase/firestore";
import toastr from 'toastr';

export default {
    components: {
        NavComponent
    },
    data() {
        return {
            username: null,
            updatedUsername: '',
            updatedEmail: '',
            updatedPassword: '',
        };
    },
    created() {
        this.listenForAuthChanges();
    },
    methods: {
        async listenForAuthChanges() {
            auth.onAuthStateChanged(async (user) => {
                if (user) {
                    const db = getFirestore();
                    const userDocRef = doc(db, 'users', user.uid);
                    const userDoc = await getDoc(userDocRef);
                    if (userDoc.exists()) {
                        this.username = userDoc.data().username;
                        this.updatedUsername = userDoc.data().username;
                        this.updatedEmail = user.email;
                    }
                }
            });
        },
        async updateProfile() {
            const user = auth.currentUser;
            if (!user) {
                toastr.error('No user is logged in.');
                return;
            }
            try {
                const db = getFirestore();
                const userDocRef = doc(db, 'users', user.uid);
                if (this.updatedUsername) {
                    await updateDoc(userDocRef, {
                        username: this.updatedUsername
                    });
                    await updateProfile(user, {
                        displayName: this.updatedUsername
                    });
                    this.username = this.updatedUsername;
                }
                if (this.updatedEmail && this.updatedEmail !== user.email) {
                    await updateEmail(user, this.updatedEmail);
                    await updateDoc(userDocRef, {
                        email: this.updatedEmail
                    });
                }
                if (this.updatedPassword) {
                    await updatePassword(user, this.updatedPassword);
                }
                toastr.success('Profile updated successfully!');
            } catch (error) {
                console.error('Error updating profile:', error);
                toastr.error('Error updating profile: ' + error.message);
            }
        },
    }
};
</script>
