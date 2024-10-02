<template>
<div class="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-yellow-300 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600">
    <div class="grid h-full max-w-lg grid-cols-6 mx-auto">
        <router-link to="/" class="inline-flex flex-col items-center justify-center px-5 rounded-s-full dark:hover:bg-gray-800 group">
            <button data-tooltip-target="tooltip-home" type="button" class="inline-flex flex-col items-center justify-center px-5 rounded-s-full dark:hover:bg-gray-800 group">
                <svg class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                </svg>
                <span class="sr-only">Home</span>
            </button>
        </router-link>
        <div id="tooltip-home" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Home
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <router-link to="/plan" class="inline-flex flex-col items-center justify-center px-5 rounded-s-full dark:hover:bg-gray-800 group">
            <button data-tooltip-target="tooltip-plan" type="button" class="inline-flex flex-col items-center justify-center px-5 dark:hover:bg-gray-800 group">
                <svg class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11.074 4 8.442.408A.95.95 0 0 0 7.014.254L2.926 4h8.148ZM9 13v-1a4 4 0 0 1 4-4h6V6a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-2h-6a4 4 0 0 1-4-4Z" />
                    <path d="M19 10h-6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Zm-4.5 3.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM12.62 4h2.78L12.539.41a1.086 1.086 0 1 0-1.7 1.352L12.62 4Z" />
                </svg>
                <span class="sr-only">Plan</span>
            </button>
        </router-link>
        <div id="tooltip-plan" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Plan
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <router-link to="/map" class="inline-flex flex-col items-center justify-center px-5 rounded-s-full dark:hover:bg-gray-800 group">
            <button data-tooltip-target="tooltip-map" type="button" class="inline-flex flex-col items-center justify-center px-5 dark:hover:bg-gray-800 group">
                <svg width="25" height="32" class=" mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path fill="currentColor" d="M12 12q.825 0 1.413-.587T14 10t-.587-1.412T12 8t-1.412.588T10 10t.588 1.413T12 12m0 10q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2q.5 0 1 .063t1 .187V6h3v3h2.925q.05.275.063.588T20 10.2q0 2.5-1.987 5.438T12 22m6-14V5h-3V3h3V0h2v3h3v2h-3v3z" /></svg>
                <span class="sr-only">Map</span>
            </button>
        </router-link>
        <div id="tooltip-map" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Map
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <router-link to="/fare" class="inline-flex flex-col items-center justify-center px-5 rounded-s-full dark:hover:bg-gray-800 group">
            <button data-tooltip-target="tooltip-fare" type="button" class="inline-flex flex-col items-center justify-center px-5 dark:hover:bg-gray-800 group">
                <svg class="mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" width="32" height="32" viewBox="0 0 48 48">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.478 8.595L34.25 6.51a2.536 2.536 0 0 1 3.124 1.831l5.046 19.905a2.623 2.623 0 0 1-1.857 3.169L32.792 33.5a2.536 2.536 0 0 1-3.124-1.832l-5.046-19.905a2.62 2.62 0 0 1 1.856-3.168M37.32 29.317l-2.423.65" />
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.127 39.157v-20.44c0-5 8.155-4.22 11.428-4.22h5.76" />
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.968 17.077H12.991c-2.493 0-2.822.325-2.822 2.822v10.548s-.371 1.63 9.976 1.63c5.694 0 8.11-.466 9.13-.884m-19.014-10.72H26.69" />
                        <rect width="3.741" height="2.423" x="9.74" y="39.157" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx=".429" ry=".429" />
                        <rect width="3.741" height="2.423" x="9.74" y="39.157" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx=".429" ry=".429" />
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.246 35.181h-3.709v-1.534c0-.66 3.566-.262 3.71 1.534m11.743 0h3.709v-1.534c0-.66-3.566-.262-3.71 1.534" />
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.127 39.157h23.016v-5.765M7.768 25.435H5.5v3.451c0 2.198 2.58 1.948 2.58 1.948" />
                        <rect width="3.741" height="2.423" x="26.282" y="39.157" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx=".429" ry=".429" />
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.111 22.239c.705.496 1.43.645 2.39.388l1.28-.343a2.215 2.215 0 0 0 1.56-2.704h0a2.214 2.214 0 0 0-2.703-1.562l-1.387.372a2.214 2.214 0 0 1-2.703-1.561h0a2.214 2.214 0 0 1 1.56-2.705l1.28-.342c.96-.258 1.657-.216 2.39.388m-3.612-2.222l.512 2.023m3.045 10.489l-.513-2.023" /></svg>
                    <span class="sr-only">Fare</span>
            </button>
        </router-link>
        <div id="tooltip-fare" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Fare
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <router-link to="/profile" class="inline-flex flex-col items-center justify-center px-5 rounded-s-full dark:hover:bg-gray-800 group">
            <button data-tooltip-target="tooltip-profile" type="button" class="inline-flex flex-col items-center justify-center px-5 rounded-e-full dark:hover:bg-gray-800 group">
                <svg class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
                <span class="sr-only">Profile</span>
            </button>
        </router-link>
        <div id="tooltip-profile" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Profile
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button @click="showLogoutModal = true" class="inline-flex flex-col items-center justify-center px-5 rounded-s-full dark:hover:bg-gray-800 group">
            <button data-tooltip-target="tooltip-logout" type="button" class="inline-flex flex-col items-center justify-center px-5 rounded-e-full dark:hover:bg-gray-800 group">
                <svg class="mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 24" width="25" height="32">
                    <path fill="currentColor" d="M14.08 15.59L16.67 13H7v-2h9.67l-2.59-2.59L15.5 7l5 5l-5 5zM19 3a2 2 0 0 1 2 2v4.67l-2-2V5H5v14h14v-2.67l2-2V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.11.89-2 2-2z" /></svg>
                <span class="sr-only">Logout</span>
            </button>
        </button>
        <div id="tooltip-logout" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Logout
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
    </div>
</div>
<div v-if="showLogoutModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white p-5 rounded-md shadow-md dark:bg-gray-700">
        <h3 class="text-xl font-semibold dark:text-white">Are you sure you want to logout?</h3>
        <div class="mt-4 flex justify-end space-x-3">
            <button @click="confirmLogout" class="px-4 py-2 bg-red-500 text-white rounded-md">Yes</button>
            <button @click="cancelLogout" class="px-4 py-2 bg-gray-300 dark:bg-gray-500 text-black dark:text-white rounded-md">No</button>
        </div>
    </div>
</div>
</template>

<script>
import {
    onMounted
} from 'vue'
import {
    initFlowbite
} from 'flowbite'
import {
    auth,
    signOut,
    onAuthStateChanged
} from "@/firebaseConfig";
import {
    getFirestore,
    doc,
    getDoc
} from "firebase/firestore";

export default {
    components: {},
    data() {
        return {
            showLogoutModal: false,
        };
    },
    created() {},
    mounted() {
        initFlowbite();
    },
    methods: {
        async logout() {
            try {
                await signOut(auth);
                console.log("User signed out successfully");
                this.$router.push('/login');
            } catch (error) {
                console.error("Error signing out: ", error.message);
                alert("Failed to log out. Please try again.");
            }
        },
        showLogoutConfirmation() {
            this.showLogoutModal = true;
        },
        async confirmLogout() {
            await this.logout();
            this.showLogoutModal = false;
        },
        cancelLogout() {
            this.showLogoutModal = false;
        },
    }
};
</script>
